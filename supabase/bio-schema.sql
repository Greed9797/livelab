-- LiveLab link-na-bio: schema para submissões dos formulários /bio.
-- O payload JSONB guarda todas as respostas dinâmicas dos formulários.

create extension if not exists pgcrypto;

create table if not exists public.submissions (
  id uuid primary key default gen_random_uuid(),
  persona text not null check (persona in ('cliente', 'franqueado', 'apresentador')),
  lead_name text,
  contact_email text,
  whatsapp text,
  city text,
  status text not null default 'novo' check (status in ('novo', 'contatado', 'qualificado', 'descartado')),
  source_path text not null default '/bio',
  payload jsonb not null default '{}'::jsonb,
  metadata jsonb not null default '{}'::jsonb,
  ip_address text,
  user_agent text,
  created_at timestamptz not null default now()
);

alter table public.submissions
  add column if not exists contact_email text,
  add column if not exists whatsapp text,
  add column if not exists city text,
  add column if not exists status text not null default 'novo',
  add column if not exists source_path text not null default '/bio',
  add column if not exists metadata jsonb not null default '{}'::jsonb,
  add column if not exists ip_address text;

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'submissions_status_check'
      and conrelid = 'public.submissions'::regclass
  ) then
    alter table public.submissions
      add constraint submissions_status_check
      check (status in ('novo', 'contatado', 'qualificado', 'descartado'));
  end if;
end $$;

create index if not exists submissions_persona_idx on public.submissions (persona);
create index if not exists submissions_created_at_idx on public.submissions (created_at desc);
create index if not exists submissions_status_idx on public.submissions (status);
create index if not exists submissions_contact_email_idx on public.submissions (contact_email);
create index if not exists submissions_whatsapp_idx on public.submissions (whatsapp);
create index if not exists submissions_payload_gin_idx on public.submissions using gin (payload);

-- RLS: bloqueia acesso público. API server usa service_role key (bypass RLS).
alter table public.submissions enable row level security;
revoke all on table public.submissions from anon, authenticated;

do $$
begin
  if not exists (
    select 1
    from pg_policies
    where schemaname = 'public'
      and tablename = 'submissions'
      and policyname = 'submissions_no_public_access'
  ) then
    create policy submissions_no_public_access
      on public.submissions
      for all
      to anon, authenticated
      using (false)
      with check (false);
  end if;
end $$;

do $$
begin
  if exists (
    select 1
    from pg_proc p
    join pg_namespace n on n.oid = p.pronamespace
    where n.nspname = 'public'
      and p.proname = 'rls_auto_enable'
      and p.pronargs = 0
  ) then
    revoke execute on function public.rls_auto_enable() from public;
    revoke execute on function public.rls_auto_enable() from anon, authenticated;
  end if;
end $$;
