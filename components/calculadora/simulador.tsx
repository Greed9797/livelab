"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/landing/button";
import { WHATSAPP_PRESENTER_URL } from "@/lib/contact";

/**
 * Regras vigentes, iguais às que o sistema aplica no fechamento do mês
 * (src/config/presenter_defaults.js e src/services/presenter-commission.js do backend).
 * A escada incide sobre o GMV ACUMULADO do mês, não live a live: quando uma venda empurra a
 * apresentadora para a faixa de cima, o mês inteiro é recalculado naquela faixa.
 */
const FIXO_MENSAL = 2700;
const FAIXAS = [
  { ate: 70000, pct: 1 },
  { ate: 150000, pct: 1.5 },
  { ate: Infinity, pct: 2 },
] as const;
const PCT_FIM_DE_SEMANA = 2;
const GMV_MAXIMO = 300000;

const brl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});
const brlExato = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
const pctFmt = (valor: number) =>
  `${valor.toLocaleString("pt-BR", { maximumFractionDigits: 1 })}%`;

function faixaDe(gmvDoMes: number) {
  return FAIXAS.find((faixa) => gmvDoMes <= faixa.ate) ?? FAIXAS[FAIXAS.length - 1];
}

function calcular(gmvDoMes: number, fatiaFimDeSemana: number) {
  const gmvFimDeSemana = Math.round((gmvDoMes * fatiaFimDeSemana) / 100);
  const gmvSemana = gmvDoMes - gmvFimDeSemana;
  const pctSemana = faixaDe(gmvDoMes).pct;
  const comissaoSemana = (gmvSemana * pctSemana) / 100;
  const comissaoFimDeSemana = (gmvFimDeSemana * PCT_FIM_DE_SEMANA) / 100;
  return {
    gmvSemana,
    gmvFimDeSemana,
    pctSemana,
    comissaoSemana,
    comissaoFimDeSemana,
    total: FIXO_MENSAL + comissaoSemana + comissaoFimDeSemana,
  };
}

export function SimuladorGanho() {
  const [gmv, setGmv] = useState(80000);
  const [fatiaFds, setFatiaFds] = useState(30);

  const conta = useMemo(() => calcular(gmv, fatiaFds), [gmv, fatiaFds]);

  // Quanto falta para a próxima faixa e o que ela somaria — a informação que faz alguém
  // decidir marcar mais uma live, e a única forma honesta de mostrar a escada em movimento.
  const proximaFaixa = useMemo(() => {
    const indice = FAIXAS.findIndex((faixa) => gmv <= faixa.ate);
    const proxima = FAIXAS[indice + 1];
    if (!proxima) return null;
    const alvo = FAIXAS[indice].ate;
    const ganhoNoAlvo = calcular(alvo + 1, fatiaFds).total;
    return {
      falta: Math.max(0, alvo - gmv),
      pct: proxima.pct,
      ganhoNoAlvo,
      diferenca: ganhoNoAlvo - conta.total,
    };
  }, [gmv, fatiaFds, conta.total]);

  return (
    <div className="rounded-[var(--radius-xl)] border border-[color:var(--border)] bg-surface shadow-[0_28px_60px_-40px_rgba(10,10,10,0.45)]">
      <div className="grid gap-0 lg:grid-cols-[1.05fr_1fr]">
        {/* ── Controles ───────────────────────────────────────────────── */}
        <div className="flex flex-col gap-10 border-b border-[color:var(--border)] p-7 md:p-10 lg:border-b-0 lg:border-r">
          <div>
            <label
              htmlFor="gmv"
              className="text-sm font-medium text-muted-strong"
            >
              Quanto suas lives venderam no mês
            </label>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-display text-3xl text-muted">R$</span>
              <input
                id="gmv"
                type="text"
                inputMode="numeric"
                value={gmv.toLocaleString("pt-BR")}
                onChange={(event) => {
                  const apenasDigitos = event.target.value.replace(/\D/g, "");
                  const valor = apenasDigitos === "" ? 0 : Number(apenasDigitos);
                  setGmv(Math.min(GMV_MAXIMO, valor));
                }}
                aria-describedby="gmv-ajuda"
                className="w-full min-w-0 bg-transparent font-display text-[clamp(2.75rem,7vw,4.25rem)] leading-none tracking-[-0.03em] tabular-nums text-foreground caret-brand outline-none focus-visible:text-brand"
              />
            </div>

            <div className="mt-7">
              <input
                type="range"
                min={0}
                max={GMV_MAXIMO}
                step={1000}
                value={gmv}
                onChange={(event) => setGmv(Number(event.target.value))}
                aria-label="GMV do mês"
                className="calc-range w-full"
              />
              {/* Régua: as duas quebras da escada, no lugar exato em que acontecem. */}
              <div className="relative mt-3 h-9" aria-hidden>
                {FAIXAS.slice(0, -1).map((faixa) => (
                  <div
                    key={faixa.ate}
                    className="absolute top-0 flex -translate-x-1/2 flex-col items-center gap-1.5"
                    style={{ left: `${(faixa.ate / GMV_MAXIMO) * 100}%` }}
                  >
                    <span className="h-2.5 w-px bg-[color:var(--border-strong)] opacity-40" />
                    <span className="whitespace-nowrap font-mono text-[11px] tracking-[0.04em] text-muted">
                      {/* "R$ 70 mil" e não "R$ 70.000": em 390px os dois rótulos da régua
                          encostam um no outro e viram um borrão de dígitos. */}
                      {`R$ ${faixa.ate / 1000} mil`}
                    </span>
                  </div>
                ))}
              </div>
              <p id="gmv-ajuda" className="mt-4 text-sm text-muted">
                A porcentagem vale sobre o total do mês. Passou de{" "}
                {brl.format(70000)}, o mês inteiro sobe de faixa — inclusive as
                lives já feitas.
              </p>
            </div>
          </div>

          <div className="h-px w-full bg-[color:var(--border)]" />

          <div>
            <label
              htmlFor="fds"
              className="text-sm font-medium text-muted-strong"
            >
              Quanto desse total veio de sábado e domingo
            </label>
            <div className="mt-3 flex items-baseline gap-3">
              <span className="font-display text-4xl leading-none tabular-nums text-foreground">
                {fatiaFds}%
              </span>
              <span className="text-sm tabular-nums text-muted">
                {brl.format(conta.gmvFimDeSemana)}
              </span>
            </div>
            <input
              id="fds"
              type="range"
              min={0}
              max={100}
              step={5}
              value={fatiaFds}
              onChange={(event) => setFatiaFds(Number(event.target.value))}
              className="calc-range mt-6 w-full"
            />
            <p className="mt-4 text-sm text-muted">
              Live de fim de semana paga {pctFmt(PCT_FIM_DE_SEMANA)} desde a
              primeira venda, independente da faixa do mês.
            </p>
          </div>
        </div>

        {/* ── Holerite ────────────────────────────────────────────────── */}
        <div className="flex flex-col justify-between gap-8 p-7 md:p-10">
          <div className="flex flex-col gap-5">
            <p className="text-sm font-medium text-muted-strong">
              O que entra no fim do mês
            </p>

            <dl className="flex flex-col gap-4 text-sm">
              <div className="flex items-baseline justify-between gap-6">
                <dt className="text-muted">Fixo mensal</dt>
                <dd className="tabular-nums text-foreground">
                  {brlExato.format(FIXO_MENSAL)}
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-6">
                <dt className="text-muted">
                  Comissão de segunda a sexta
                  <span className="ml-2 font-mono text-[11px] tracking-[0.04em] text-muted-strong">
                    {pctFmt(conta.pctSemana)}
                  </span>
                </dt>
                <dd className="tabular-nums text-foreground">
                  {brlExato.format(conta.comissaoSemana)}
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-6">
                <dt className="text-muted">
                  Comissão de sábado e domingo
                  <span className="ml-2 font-mono text-[11px] tracking-[0.04em] text-muted-strong">
                    {pctFmt(PCT_FIM_DE_SEMANA)}
                  </span>
                </dt>
                <dd className="tabular-nums text-foreground">
                  {brlExato.format(conta.comissaoFimDeSemana)}
                </dd>
              </div>
            </dl>

            <div className="h-px w-full bg-[color:var(--border-strong)]" />

            <div className="flex flex-col gap-1">
              <span className="text-sm text-muted">Total do mês</span>
              <span className="font-display text-[clamp(3rem,8vw,4.75rem)] leading-[0.95] tracking-[-0.035em] tabular-nums text-foreground">
                {brlExato.format(conta.total)}
              </span>
            </div>

            {proximaFaixa ? (
              <p className="max-w-[46ch] text-sm leading-relaxed text-muted-strong">
                Faltam{" "}
                <span className="font-medium tabular-nums text-foreground">
                  {brl.format(proximaFaixa.falta)}
                </span>{" "}
                de vendas para o mês virar {pctFmt(proximaFaixa.pct)}. Só de
                cruzar essa linha, o mês fecha em{" "}
                <span className="font-medium tabular-nums text-foreground">
                  {brl.format(proximaFaixa.ganhoNoAlvo)}
                </span>
                .
              </p>
            ) : (
              <p className="max-w-[46ch] text-sm leading-relaxed text-muted-strong">
                Esse mês já está na faixa mais alta:{" "}
                {pctFmt(FAIXAS[FAIXAS.length - 1].pct)} sobre tudo o que vender
                daqui em diante.
              </p>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <Button
              href={WHATSAPP_PRESENTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Quero apresentar
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
            <p className="text-xs leading-relaxed text-muted">
              Valores do padrão vigente, os mesmos que o sistema usa para fechar
              o mês. Contratos individuais podem ter fixo ou faixas próprias.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
