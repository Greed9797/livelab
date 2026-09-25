"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "./container";
import { OPERATION, PRESS } from "@/lib/company";

const BASE_MS = new Date(OPERATION.baseAt).getTime();
const DAY_MS = 86_400_000;
const COUNT_UP_MS = 1800;
// A contagem de entrada parte de 8% abaixo do valor atual, para o movimento aparecer em toda visita.
const COUNT_FROM = 0.92;

const int = new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 0 });

// Valor projetado para um instante: base + ritmo diário × dias decorridos.
function valuesAt(ms: number) {
  const days = Math.max(0, ms - BASE_MS) / DAY_MS;
  return {
    lives: OPERATION.lives.base + OPERATION.lives.perDay * days,
    hours: OPERATION.hours.base + OPERATION.hours.perDay * days,
    gmv: OPERATION.gmv.base + OPERATION.gmv.perDay * days,
  };
}

const BASE = valuesAt(BASE_MS);

export function ProofNumbers() {
  // O HTML estático sai com os valores base; no navegador eles sobem até "agora" e seguem contando.
  const [v, setV] = useState(BASE);

  useEffect(() => {
    const target = valuesAt(Date.now());
    const from = {
      lives: target.lives * COUNT_FROM,
      hours: target.hours * COUNT_FROM,
      gmv: target.gmv * COUNT_FROM,
    };
    // Sem movimento: pula direto para o valor de agora.
    const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : COUNT_UP_MS;
    const start = performance.now();
    let raf = 0;

    const countUp = (t: number) => {
      const p = duration === 0 ? 1 : Math.min(1, (t - start) / duration);
      const e = 1 - Math.pow(1 - p, 4);
      setV({
        lives: from.lives + (target.lives - from.lives) * e,
        hours: from.hours + (target.hours - from.hours) * e,
        gmv: from.gmv + (target.gmv - from.gmv) * e,
      });
      if (p < 1) raf = requestAnimationFrame(countUp);
    };

    raf = requestAnimationFrame(countUp);

    // Depois da contagem, acompanha o relógio (o GMV muda a cada ~4 s).
    let tick = 0;
    const startTicking = window.setTimeout(() => {
      tick = window.setInterval(() => setV(valuesAt(Date.now())), 1000);
    }, duration);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(startTicking);
      window.clearInterval(tick);
    };
  }, []);

  const numbers = [
    { value: int.format(Math.floor(v.lives)), label: "lives realizadas", cell: "" },
    { value: int.format(Math.round(v.hours)), label: "horas ao vivo", cell: "pl-5 md:pl-8" },
    { value: `R$ ${int.format(Math.floor(v.gmv))}`, label: "vendidos em live", cell: "col-span-2 md:col-span-1 md:pl-8" },
    { value: OPERATION.brands, label: "marcas atendidas", cell: "col-span-2 md:col-span-1 md:pl-8" },
  ];
  const press = PRESS[0];

  return (
    <section className="bg-preto pb-16 pt-4 md:pb-20">
      <Container>
        <dl className="grid grid-cols-2 border-t border-gelo/15 md:grid-cols-[1fr_1fr_1.55fr_0.9fr]">
          {numbers.map(({ value, label, cell }, i) => (
            <div
              key={label}
              className={`flex flex-col gap-2 border-b border-gelo/15 py-7 md:border-b-0 md:py-9 ${cell} ${
                i > 0 ? "md:border-l md:border-gelo/15" : ""
              }`}
            >
              <dt className="order-last text-sm text-gelo/65 md:text-base">{label}</dt>
              <dd className="display whitespace-nowrap text-[clamp(2rem,3.4vw,3rem)] leading-none tabular-nums text-gelo">
                {value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex flex-col gap-4 text-sm text-gelo/60 md:flex-row md:items-center md:justify-between">
          <p className="flex items-center gap-2.5">
            <span className="rec-dot" aria-hidden />
            Operação LiveLab acumulada, atualizando ao vivo.
          </p>
          <a
            href={press.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-gelo/20 px-4 py-2 text-gelo/80 transition-colors hover:border-laranja hover:text-laranja"
          >
            Na imprensa: {press.outlet}
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </Container>
    </section>
  );
}
