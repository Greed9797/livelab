"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [pw, setPw] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handle(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/bio/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pw }),
      });
      if (!res.ok) {
        const { error } = await res.json();
        throw new Error(error ?? "Senha inválida");
      }
      router.push("/bio/admin");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-[20px]">
      <form
        onSubmit={handle}
        className="flex w-full max-w-[380px] flex-col gap-[16px] rounded-[12px] border border-white/10 bg-[#0d0d0d] p-[24px]"
      >
        <h1 className="text-[22px] font-normal text-white">Painel LiveLab</h1>
        <input
          type="password"
          placeholder="Senha"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          className="rounded-[8px] border border-white/10 bg-black/40 px-[14px] py-[12px] text-[15px] text-white focus:border-[#FE5206] focus:outline-none"
          autoFocus
          required
        />
        {error && <p className="text-[13px] text-red-400">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="h-[42px] rounded-[8px] bg-[#CC4400] text-[14px] font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Entrando…" : "Entrar"}
        </button>
      </form>
    </main>
  );
}
