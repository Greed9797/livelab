import { NextResponse } from "next/server";
import { getServiceSupabase } from "@/lib/bio/supabase/server";
import type { Persona } from "@/lib/bio/whatsapp";

const VALID: Persona[] = ["cliente", "franqueado", "apresentador"];

function firstHeader(req: Request, name: string): string | null {
  const value = req.headers.get(name);
  return value?.split(",")[0]?.trim() || null;
}

function stringValue(value: unknown): string | null {
  return typeof value === "string" && value.trim() ? value.trim() : null;
}

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
  const leadName = stringValue(values.nome);
  const contactEmail = stringValue(values.email);
  const whatsapp = stringValue(values.whatsapp);
  const city = stringValue(values.cidade) ?? stringValue(values.cidade_estado);
  const sourcePath = `/bio/${persona}`;
  const metadata = {
    referer: req.headers.get("referer"),
    origin: req.headers.get("origin"),
    acceptLanguage: req.headers.get("accept-language"),
  };

  const sb = getServiceSupabase();
  if (sb) {
    const { error } = await sb.from("submissions").insert({
      persona,
      lead_name: leadName,
      contact_email: contactEmail,
      whatsapp,
      city,
      source_path: sourcePath,
      payload: values,
      metadata,
      ip_address: firstHeader(req, "x-forwarded-for") ?? firstHeader(req, "x-real-ip"),
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
