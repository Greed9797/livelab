import { NextResponse } from "next/server";
import { getServiceSupabase } from "@/lib/bio/supabase/server";
import type { Persona } from "@/lib/bio/whatsapp";

const VALID: Persona[] = ["cliente", "franqueado", "apresentador"];

export async function POST(req: Request, { params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  if (!VALID.includes(type as Persona)) {
    return NextResponse.json({ error: "Tipo inválido" }, { status: 400 });
  }
  const persona = type as Persona;

  let body: { values?: Record<string, string | string[]> };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const values = body.values ?? {};

  const sb = getServiceSupabase();
  if (sb) {
    const { error } = await sb.from("submissions").insert({
      persona,
      lead_name: typeof values.nome === "string" ? values.nome : null,
      payload: values,
      user_agent: req.headers.get("user-agent") ?? null,
    });
    if (error) {
      console.error("[submit] supabase error:", error.message);
      return NextResponse.json({ error: "Erro ao gravar" }, { status: 500 });
    }
  } else {
    console.log(`[submit:${persona}]`, JSON.stringify(values));
  }

  return NextResponse.json({ ok: true });
}
