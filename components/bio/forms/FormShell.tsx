"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import Field from "./Field";
import type { FormDef, FormValues } from "@/lib/bio/forms/types";
import { buildWhatsappUrl, CONTACTS } from "@/lib/bio/whatsapp";

export default function FormShell({ form }: { form: FormDef }) {
  const [step, setStep] = useState(0); // 0 = intro
  const [values, setValues] = useState<FormValues>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState<{ leadName: string; whatsappUrl: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const totalSteps = form.steps.length;
  const isIntro = step === 0;
  const stepIndex = step - 1; // index into form.steps
  const currentStep = !isIntro ? form.steps[stepIndex] : null;
  const isLast = stepIndex === totalSteps - 1;

  function setValue(id: string, v: string | string[]) {
    setValues((prev) => ({ ...prev, [id]: v }));
  }

  function validateCurrent(): boolean {
    if (!currentStep || currentStep.kind !== "fields") return true;
    for (const f of currentStep.fields) {
      if (!f.required) continue;
      const v = values[f.id];
      if (f.type === "checkbox") {
        if (!Array.isArray(v) || v.length === 0) {
          setError(`Preencha: ${f.label}`);
          return false;
        }
      } else {
        if (typeof v !== "string" || v.trim() === "") {
          setError(`Preencha: ${f.label}`);
          return false;
        }
      }
    }
    setError(null);
    return true;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validateCurrent()) return;
    setSubmitting(true);
    try {
      const res = await fetch(`/bio/api/submit/${form.persona}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ values }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Erro ao enviar");
      const leadName = (values.nome as string) || "";
      setDone({ leadName, whatsappUrl: buildWhatsappUrl(form.persona, leadName) });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro inesperado");
    } finally {
      setSubmitting(false);
    }
  }

  function next() {
    if (validateCurrent()) setStep((s) => s + 1);
  }

  if (done) {
    return (
      <Shell>
        <div className="flex flex-col items-center gap-[20px] py-[40px] text-center">
          <span className="rounded-full bg-[#FE5206]/15 px-[16px] py-[6px] text-[12px] uppercase tracking-wider text-[#FE5206]">
            Sucesso
          </span>
          <h1 className="text-[28px] font-normal leading-tight text-white md:text-[34px]">
            {form.finalScreen.title}
            {done.leadName && <span className="block text-[18px] text-white/70 md:text-[22px]">Obrigado, {done.leadName}!</span>}
          </h1>
          <p className="max-w-[520px] text-[15px] leading-[1.5] text-white/80">{form.finalScreen.body}</p>
          <a
            href={done.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-[8px] inline-flex h-[48px] items-center gap-[10px] rounded-[10px] bg-[#CC4400] px-[24px] text-[15px] font-medium text-white transition-opacity hover:opacity-90"
          >
            {form.finalScreen.ctaLabel}
            <ExternalLink className="h-[16px] w-[16px]" strokeWidth={2.5} />
          </a>
          <p className="text-[12px] text-white/50">
            Vai abrir conversa com {CONTACTS[form.persona].name} no WhatsApp.
          </p>
          <Link href="/bio" className="mt-[8px] text-[13px] text-white/60 underline-offset-4 hover:underline">
            Voltar para a home
          </Link>
        </div>
      </Shell>
    );
  }

  if (isIntro) {
    return (
      <Shell>
        <div className="flex flex-col items-center gap-[20px] py-[40px] text-center">
          <span className="rounded-full bg-[#FE5206]/15 px-[16px] py-[6px] text-[11px] uppercase tracking-wider text-[#FE5206]">
            {form.intro.eyebrow}
          </span>
          <h1 className="max-w-[640px] text-[28px] font-normal leading-tight text-white md:text-[34px]">
            {form.intro.title}
          </h1>
          <p className="max-w-[600px] text-[14px] leading-[1.6] text-white/75 md:text-[15px]">{form.intro.body}</p>
          <button
            onClick={() => setStep(1)}
            className="mt-[8px] inline-flex h-[48px] items-center gap-[8px] rounded-[10px] bg-[#CC4400] px-[28px] text-[15px] font-medium text-white transition-opacity hover:opacity-90"
          >
            Começar
            <ArrowRight className="h-[16px] w-[16px]" strokeWidth={2.5} />
          </button>
          <Link href="/bio" className="text-[12px] text-white/50 underline-offset-4 hover:underline">
            Voltar
          </Link>
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      <Progress current={step} total={totalSteps} />

      {currentStep!.kind === "news" ? (
        <div className="flex flex-col gap-[16px] py-[24px]">
          <span className="text-[11px] uppercase tracking-wider text-[#FE5206]">Dados de mercado</span>
          <h2 className="text-[24px] font-normal leading-tight text-white md:text-[28px]">{currentStep!.title}</h2>
          <ul className="flex flex-col gap-[12px]">
            {currentStep!.body.map((line, i) => (
              <li key={i} className="text-[14px] leading-[1.55] text-white/80 md:text-[15px]">
                {line}
              </li>
            ))}
          </ul>
          <NavRow onBack={() => setStep((s) => Math.max(1, s - 1))} onNext={next} canBack={step > 1} nextLabel="Continuar" />
        </div>
      ) : (
        <form onSubmit={isLast ? handleSubmit : (e) => { e.preventDefault(); next(); }} className="flex flex-col gap-[20px] py-[24px]">
          <h2 className="text-[22px] font-normal leading-tight text-white md:text-[26px]">{currentStep!.title}</h2>
          <div className="flex flex-col gap-[18px]">
            {currentStep!.fields.map((f) => (
              <Field key={f.id} field={f} value={values[f.id] ?? ""} onChange={(v) => setValue(f.id, v)} />
            ))}
          </div>
          {error && (
            <p className="rounded-[8px] border border-red-400/30 bg-red-500/10 px-[12px] py-[8px] text-[13px] text-red-300">
              {error}
            </p>
          )}
          <NavRow
            onBack={() => setStep((s) => Math.max(1, s - 1))}
            canBack={step > 1}
            onNext={isLast ? undefined : next}
            submitting={submitting}
            nextLabel={isLast ? "Enviar" : "Continuar"}
            isSubmit={isLast}
          />
        </form>
      )}
    </Shell>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative min-h-screen bg-black">
      <div className="absolute inset-0 md:hidden">
        <Image src="/bio/bg-mobile.jpg" alt="" fill priority className="object-cover object-center" sizes="100vw" />
      </div>
      <div className="absolute inset-0 hidden md:block">
        <Image src="/bio/bg-desktop.jpg" alt="" fill priority className="object-cover object-center" sizes="100vw" />
      </div>
      <div className="absolute inset-0 bg-black/65" />
      <div className="relative z-10 mx-auto w-full max-w-[640px] px-[20px] py-[40px] md:py-[60px]">{children}</div>
    </main>
  );
}

function Progress({ current, total }: { current: number; total: number }) {
  const pct = (current / total) * 100;
  return (
    <div className="flex flex-col gap-[6px]">
      <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-white/60">
        <span>Etapa {current} de {total}</span>
        <span>{Math.round(pct)}%</span>
      </div>
      <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/10">
        <div className="h-full bg-[#FE5206] transition-all" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function NavRow({
  onBack,
  onNext,
  canBack,
  submitting,
  nextLabel,
  isSubmit,
}: {
  onBack: () => void;
  onNext?: () => void;
  canBack: boolean;
  submitting?: boolean;
  nextLabel: string;
  isSubmit?: boolean;
}) {
  return (
    <div className="mt-[12px] flex items-center justify-between gap-[12px]">
      <button
        type="button"
        onClick={onBack}
        disabled={!canBack}
        className="inline-flex h-[42px] items-center gap-[6px] rounded-[8px] border border-white/15 px-[16px] text-[14px] text-white transition-opacity hover:opacity-90 disabled:opacity-30"
      >
        <ArrowLeft className="h-[14px] w-[14px]" strokeWidth={2.5} />
        Voltar
      </button>
      {isSubmit ? (
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex h-[42px] items-center gap-[6px] rounded-[8px] bg-[#CC4400] px-[20px] text-[14px] font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {submitting ? "Enviando…" : nextLabel}
          {!submitting && <ArrowRight className="h-[14px] w-[14px]" strokeWidth={2.5} />}
        </button>
      ) : (
        <button
          type="button"
          onClick={onNext}
          className="inline-flex h-[42px] items-center gap-[6px] rounded-[8px] bg-[#CC4400] px-[20px] text-[14px] font-medium text-white transition-opacity hover:opacity-90"
        >
          {nextLabel}
          <ArrowRight className="h-[14px] w-[14px]" strokeWidth={2.5} />
        </button>
      )}
    </div>
  );
}
