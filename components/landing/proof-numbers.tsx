import { ArrowUpRight } from "lucide-react";
import { Container } from "./container";
import { OPERATION, PRESS } from "@/lib/company";

const NUMBERS = [
  { value: OPERATION.lives, label: "lives realizadas" },
  { value: OPERATION.hours, label: "horas ao vivo" },
  { value: OPERATION.gmv, label: "vendidos em live" },
  { value: OPERATION.brands, label: "marcas atendidas" },
];

export function ProofNumbers() {
  const press = PRESS[0];
  return (
    <section className="bg-preto pb-16 pt-4 md:pb-20">
      <Container>
        <dl className="grid grid-cols-2 border-t border-gelo/15 md:grid-cols-4">
          {NUMBERS.map(({ value, label }, i) => (
            <div
              key={label}
              className={`flex flex-col gap-2 border-b border-gelo/15 py-7 md:border-b-0 md:py-9 ${
                i % 2 === 1 ? "pl-5" : ""
              } ${i > 0 ? "md:border-l md:border-gelo/15 md:pl-8" : ""}`}
            >
              <dt className="order-last text-sm text-gelo/65 md:text-base">{label}</dt>
              <dd className="display whitespace-nowrap text-[clamp(1.875rem,3.4vw,3rem)] leading-none tabular-nums text-gelo">
                {value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex flex-col gap-4 text-sm text-gelo/60 md:flex-row md:items-center md:justify-between">
          <p>Acumulado da operação LiveLab até {OPERATION.asOf}.</p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={press.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-gelo/20 px-4 py-2 text-gelo/80 transition-colors hover:border-laranja hover:text-laranja"
            >
              Na imprensa: {press.outlet}
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
