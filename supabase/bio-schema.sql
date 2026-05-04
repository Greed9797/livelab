-- LiveLab link-na-bio: schema mínimo para submissões dos formulários

create table if not exists public.submissions (
  id uuid primary key default gen_random_uuid(),
  persona text not null check (persona in ('cliente', 'franqueado', 'apresentador')),
  lead_name text,
  payload jsonb not null default '{}'::jsonb,
  user_agent text,
  created_at timestamptz not null default now()
);

create index if not exists submissions_persona_idx on public.submissions (persona);
create index if not exists submissions_created_at_idx on public.submissions (created_at desc);

-- RLS: bloqueia acesso público. API server usa service_role key (bypass RLS).
alter table public.submissions enable row level security;
