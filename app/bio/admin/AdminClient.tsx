"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

type Persona = "cliente" | "franqueado" | "apresentador";

interface Submission {
  id: string | number;
  persona: Persona;
  lead_name: string | null;
  contact_email: string | null;
  whatsapp: string | null;
  city: string | null;
  status: string | null;
  source_path: string | null;
  metadata: Record<string, unknown> | null;
  ip_address: string | null;
  user_agent: string | null;
  payload: Record<string, string | string[]>;
  created_at: string;
}

interface Props {
  submissions: Array<Record<string, unknown>>;
  dbError: string | null;
}

const PERSONA_LABEL: Record<Persona, string> = {
  cliente: "Cliente",
  franqueado: "Franqueado",
  apresentador: "Apresentador",
};

export default function AdminClient({ submissions, dbError }: Props) {
  const list = submissions as unknown as Submission[];
  const [filter, setFilter] = useState<Persona | "all">("all");
  const [selected, setSelected] = useState<Submission | null>(null);
  const router = useRouter();

  const filtered = filter === "all" ? list : list.filter((s) => s.persona === filter);
  const counts = {
    all: list.length,
    cliente: list.filter((s) => s.persona === "cliente").length,
    franqueado: list.filter((s) => s.persona === "franqueado").length,
    apresentador: list.filter((s) => s.persona === "apresentador").length,
  };

  async function logout() {
    await fetch("/bio/api/admin/login", { method: "DELETE" });
    router.push("/bio/admin/login");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="flex items-center justify-between border-b border-white/10 px-[24px] py-[16px]">
        <h1 className="text-[18px] font-medium">Painel LiveLab</h1>
        <button onClick={logout} className="inline-flex items-center gap-[6px] rounded-[8px] border border-white/15 px-[12px] py-[6px] text-[13px] hover:bg-white/5">
          <LogOut className="h-[14px] w-[14px]" /> Sair
        </button>
      </header>

      <div className="mx-auto flex max-w-[1100px] flex-col gap-[20px] px-[24px] py-[24px]">
        {dbError && (
          <div className="rounded-[10px] border border-yellow-500/30 bg-yellow-500/10 px-[16px] py-[12px] text-[14px] text-yellow-200">
            {dbError}
          </div>
        )}

        <div className="flex flex-wrap gap-[8px]">
          {(["all", "cliente", "franqueado", "apresentador"] as const).map((k) => (
            <button
              key={k}
              onClick={() => setFilter(k)}
              className={`rounded-[8px] border px-[14px] py-[8px] text-[13px] transition-colors ${
                filter === k ? "border-[#FE5206] bg-[#FE5206]/15 text-white" : "border-white/10 bg-black/30 text-white/70 hover:border-white/20"
              }`}
            >
              {k === "all" ? "Todos" : PERSONA_LABEL[k as Persona]} ({counts[k]})
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-[14px] text-white/60 py-[40px]">Nenhuma submissão{dbError ? " (DB não configurado)" : " ainda"}.</p>
        ) : (
          <div className="overflow-hidden rounded-[12px] border border-white/10 bg-[#0d0d0d]">
            <table className="w-full text-[13px]">
              <thead className="border-b border-white/10 bg-white/5 text-left text-[11px] uppercase tracking-wider text-white/60">
                <tr>
                  <th className="px-[14px] py-[10px]">Data</th>
                  <th className="px-[14px] py-[10px]">Tipo</th>
                  <th className="px-[14px] py-[10px]">Nome</th>
                  <th className="px-[14px] py-[10px]">WhatsApp</th>
                  <th className="px-[14px] py-[10px]">Cidade</th>
                  <th className="px-[14px] py-[10px]">Status</th>
                  <th className="px-[14px] py-[10px]"></th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((s) => (
                  <tr key={s.id} className="border-b border-white/5 last:border-0 hover:bg-white/5">
                    <td className="px-[14px] py-[10px] text-white/70">{new Date(s.created_at).toLocaleString("pt-BR")}</td>
                    <td className="px-[14px] py-[10px]">
                      <span className="rounded-full bg-[#FE5206]/15 px-[8px] py-[2px] text-[11px] text-[#FE5206]">{PERSONA_LABEL[s.persona]}</span>
                    </td>
                    <td className="px-[14px] py-[10px]">{s.lead_name ?? s.payload?.nome ?? "—"}</td>
                    <td className="px-[14px] py-[10px] text-white/70">{s.whatsapp ?? (s.payload?.whatsapp as string) ?? "—"}</td>
                    <td className="px-[14px] py-[10px] text-white/70">{s.city ?? (s.payload?.cidade as string) ?? (s.payload?.cidade_estado as string) ?? "—"}</td>
                    <td className="px-[14px] py-[10px] text-white/70">{s.status ?? "novo"}</td>
                    <td className="px-[14px] py-[10px] text-right">
                      <button onClick={() => setSelected(s)} className="text-[12px] text-[#FE5206] hover:underline">
                        Ver detalhes
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-[16px] md:items-center"
          onClick={() => setSelected(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] w-full max-w-[640px] overflow-auto rounded-[12px] border border-white/10 bg-[#0d0d0d] p-[24px]"
          >
            <div className="mb-[16px] flex items-center justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#FE5206]">{PERSONA_LABEL[selected.persona]}</p>
                <h3 className="text-[18px] text-white">{selected.lead_name ?? "Sem nome"}</h3>
                <p className="text-[12px] text-white/50">{new Date(selected.created_at).toLocaleString("pt-BR")}</p>
              </div>
              <button onClick={() => setSelected(null)} className="text-white/60 hover:text-white">
                ✕
              </button>
            </div>
            <dl className="flex flex-col gap-[10px]">
              <div className="flex flex-col gap-[2px] border-b border-white/5 pb-[8px]">
                <dt className="text-[11px] uppercase tracking-wider text-white/50">metadata</dt>
                <dd className="text-[14px] text-white">{JSON.stringify({
                  email: selected.contact_email,
                  whatsapp: selected.whatsapp,
                  cidade: selected.city,
                  origem: selected.source_path,
                  ip: selected.ip_address,
                  userAgent: selected.user_agent,
                  ...selected.metadata,
                })}</dd>
              </div>
              {Object.entries(selected.payload ?? {}).map(([k, v]) => (
                <div key={k} className="flex flex-col gap-[2px] border-b border-white/5 pb-[8px]">
                  <dt className="text-[11px] uppercase tracking-wider text-white/50">{k}</dt>
                  <dd className="text-[14px] text-white">{Array.isArray(v) ? v.join(", ") : String(v)}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      )}
    </main>
  );
}
