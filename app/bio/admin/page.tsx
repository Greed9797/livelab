import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getServiceSupabase } from "@/lib/bio/supabase/server";
import AdminClient from "./AdminClient";

export const metadata = { title: "Painel — LiveLab" };
export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const expected = process.env.ADMIN_PASSWORD;
  const jar = await cookies();
  const session = jar.get("admin_session")?.value;
  if (!expected || session !== expected) {
    redirect("/bio/admin/login");
  }

  const sb = getServiceSupabase();
  let submissions: Array<Record<string, unknown>> = [];
  let dbError: string | null = null;

  if (!sb) {
    dbError = "Supabase ainda não configurado. Adicione SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY no Vercel.";
  } else {
    const { data, error } = await sb
      .from("submissions")
      .select("id, persona, lead_name, payload, created_at")
      .order("created_at", { ascending: false })
      .limit(500);
    if (error) {
      dbError = `Erro Supabase: ${error.message}`;
    } else {
      submissions = data ?? [];
    }
  }

  return <AdminClient submissions={submissions} dbError={dbError} />;
}
