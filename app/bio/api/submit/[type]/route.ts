import { NextResponse } from "next/server";
import { createHmac } from "node:crypto";
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

function maskWebhookUrl(url: string): string {
  try {
    const parsed = new URL(url);
    return `${parsed.origin}${parsed.pathname ? "/..." : ""}`;
  } catch {
    return "<invalid-url>";
  }
}

async function fireBioCrmWebhook(payload: Record<string, unknown>) {
  const webhookUrl = process.env.BIO_CRM_WEBHOOK_URL;
  if (!webhookUrl) return;

  const body = JSON.stringify(payload);
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  const secret = process.env.BIO_CRM_WEBHOOK_SECRET;
  if (secret) {
    const signature = createHmac("sha256", secret).update(body).digest("hex");
    headers["X-Livelab-Signature"] = `sha256=${signature}`;
  }

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers,
    body,
    signal: AbortSignal.timeout(5000),
  });

  if (!res.ok) {
    throw new Error(`Webhook retornou HTTP ${res.status}`);
  }

  console.info("[bio-crm webhook] sent", { webhookUrl: maskWebhookUrl(webhookUrl) });
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
  const submittedAt = new Date().toISOString();

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

  const webhookPayload = {
    event: "bio.form.submitted",
    persona,
    lead_name: leadName,
    contact_email: contactEmail,
    whatsapp,
    city,
    submitted_at: submittedAt,
    source_path: sourcePath,
    data: values,
    metadata,
  };

  void fireBioCrmWebhook(webhookPayload).catch((err) => {
    console.warn("[bio-crm webhook] falhou", {
      err: err instanceof Error ? err.message : String(err),
      webhookUrl: process.env.BIO_CRM_WEBHOOK_URL ? maskWebhookUrl(process.env.BIO_CRM_WEBHOOK_URL) : undefined,
    });
  });

  return NextResponse.json({ ok: true });
}
