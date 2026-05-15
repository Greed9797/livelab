import { NextResponse } from "next/server";
import { createHmac, randomUUID } from "node:crypto";
import { getServiceSupabase } from "@/lib/bio/supabase/server";
import type { Persona } from "@/lib/bio/whatsapp";

const VALID: Persona[] = ["cliente", "franqueado", "apresentador"];
const CRM_WEBHOOK_TIMEOUT_MS = 5000;
const N8N_WEBHOOK_TIMEOUT_MS = 2500;

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

type WebhookResult = {
  ok: boolean;
  skipped?: boolean;
  error?: string;
  status?: number;
  webhookUrl?: string;
};

async function fireBioCrmWebhook(payload: Record<string, unknown>): Promise<WebhookResult> {
  const webhookUrl = process.env.BIO_CRM_WEBHOOK_URL;
  if (!webhookUrl) {
    return { ok: false, skipped: true, error: "BIO_CRM_WEBHOOK_URL ausente" };
  }

  const body = JSON.stringify(payload);
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  const secret = process.env.BIO_CRM_WEBHOOK_SECRET;
  if (secret) {
    const signature = createHmac("sha256", secret).update(body).digest("hex");
    headers["X-Livelab-Signature"] = `sha256=${signature}`;
    headers["X-Livelab-Timestamp"] = Math.floor(Date.now() / 1000).toString();
    headers["X-Livelab-Nonce"] = randomUUID();
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers,
      body,
      signal: AbortSignal.timeout(CRM_WEBHOOK_TIMEOUT_MS),
    });

    if (!res.ok) {
      return {
        ok: false,
        status: res.status,
        error: `Webhook retornou HTTP ${res.status}`,
        webhookUrl: maskWebhookUrl(webhookUrl),
      };
    }

    console.info("[bio-crm webhook] sent", { webhookUrl: maskWebhookUrl(webhookUrl) });
    return { ok: true, webhookUrl: maskWebhookUrl(webhookUrl) };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : String(err),
      webhookUrl: maskWebhookUrl(webhookUrl),
    };
  }
}

async function fireN8nLeadWebhook(payload: Record<string, unknown>): Promise<WebhookResult> {
  const webhookUrl = process.env.N8N_LEAD_WEBHOOK_URL;
  if (!webhookUrl) {
    return { ok: false, skipped: true, error: "N8N_LEAD_WEBHOOK_URL ausente" };
  }

  const secret = process.env.N8N_LEAD_WEBHOOK_SECRET;
  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(secret ? { "X-Livelab-N8n-Secret": secret } : {}),
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(N8N_WEBHOOK_TIMEOUT_MS),
    });

    if (!res.ok) {
      return {
        ok: false,
        status: res.status,
        error: `Webhook retornou HTTP ${res.status}`,
        webhookUrl: maskWebhookUrl(webhookUrl),
      };
    }

    console.info("[bio-n8n webhook] sent", { webhookUrl: maskWebhookUrl(webhookUrl) });
    return { ok: true, webhookUrl: maskWebhookUrl(webhookUrl) };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : String(err),
      webhookUrl: maskWebhookUrl(webhookUrl),
    };
  }
}

async function fireSecondaryNotifications({
  crmPayload,
  n8nPayload,
}: {
  crmPayload: Record<string, unknown>;
  n8nPayload: Record<string, unknown>;
}) {
  const [crmResult, n8nResult] = await Promise.all([
    fireBioCrmWebhook(crmPayload),
    fireN8nLeadWebhook(n8nPayload),
  ]);

  if (!crmResult.ok && !crmResult.skipped) {
    console.warn("[bio-crm webhook] falhou sem bloquear formulario", crmResult);
  }
  if (!n8nResult.ok && !n8nResult.skipped) {
    console.warn("[bio-n8n webhook] falhou sem bloquear formulario", n8nResult);
  }
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
  const n8nPayload = {
    event: "link_bio.lead.submitted",
    source: "livelab-bio",
    persona,
    lead_name: leadName,
    whatsapp,
    payload: values,
    submitted_at: submittedAt,
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

    void fireSecondaryNotifications({ crmPayload: webhookPayload, n8nPayload });
    return NextResponse.json({ ok: true });
  } else {
    console.warn("[submit] Supabase ausente; usando webhook como persistencia principal", { persona });
  }

  const crmResult = await fireBioCrmWebhook(webhookPayload);
  if (!crmResult.ok) {
    console.warn("[bio-crm webhook] falhou como persistencia fallback", crmResult);
    return NextResponse.json({ error: "Erro ao enviar para o CRM" }, { status: 502 });
  }
  void fireN8nLeadWebhook(n8nPayload).then((result) => {
    if (!result.ok && !result.skipped) {
      console.warn("[bio-n8n webhook] falhou sem bloquear formulario", result);
    }
  });

  return NextResponse.json({ ok: true });
}
