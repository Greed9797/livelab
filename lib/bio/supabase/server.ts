import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let cached: SupabaseClient | null = null;

export function getServiceSupabase(): SupabaseClient | null {
  if (cached) return cached;
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;

  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    console.error("[bio supabase] SUPABASE_URL invalida; use a URL HTTPS do projeto Supabase");
    return null;
  }

  try {
    cached = createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
  } catch (err) {
    console.error("[bio supabase] falha ao criar client", {
      error: err instanceof Error ? err.message : String(err),
    });
    return null;
  }

  return cached;
}
