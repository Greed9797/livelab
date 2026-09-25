import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "./container";
import { PRESS } from "@/lib/company";

// Fala: matéria do Empreenda News (30 jun 2026). Nomes e funções: enviados pelo cliente.
// Na ordem da foto, da esquerda para a direita. A copy não cita outras empresas.
export const FOUNDERS = [
  { name: "Rui Orsini", role: "Franquia" },
  { name: "Luan Cavati", role: "CEO e expansão" },
  { name: "Leonardo Ames", role: "Performance" },
  { name: "Lucas Monteiro", role: "Operações" },
  { name: "Gustavo Hofmann", role: "Aquisição" },
];

export function Founders() {
  const press = PRESS[0];
  return (
    <section id="quem-somos" className="bg-preto py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <div>
          <h2 className="display text-[clamp(2.25rem,4.4vw,3.75rem)] text-gelo">
            Quem está por <span className="serif-accent">trás</span>
            <span className="text-laranja">.</span>
          </h2>
          <p className="mt-6 max-w-[36rem] text-lg leading-relaxed text-gelo/70">
            Cinco fundadores da LiveLab. A proposta: tirar o live commerce de
            São Paulo e tornar a operação profissional, escalável e replicável,
            para marcas e para quem quer trabalhar ao vivo.
          </p>
        </div>

        <figure className="border-t border-gelo/15 pt-8">
          <blockquote className="display text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] text-gelo">
            “Quando existe uma pessoa ao vivo mostrando o produto e respondendo
            dúvidas em tempo real, a compra deixa de ser apenas uma transação e
            passa a ter uma camada de <span className="serif-accent">confiança</span>.”
          </blockquote>
          <figcaption className="mt-8 flex flex-col gap-4 text-sm text-gelo/65 sm:flex-row sm:items-center sm:justify-between">
            <span>
              <span className="font-semibold text-gelo">Lucas Monteiro</span>,
              Diretor de Crescimento
            </span>
            <a
              href={press.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-gelo/20 px-4 py-2 text-gelo/80 transition-colors hover:border-laranja hover:text-laranja"
            >
              Ler no {press.outlet}
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </figcaption>
        </figure>

        <figure className="lg:col-span-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-grafite sm:aspect-[16/9]">
            <Image
              src="/brand/fundadores.webp"
              alt="Fundadores da LiveLab, da esquerda para a direita: Rui Orsini, Luan Cavati, Leonardo Ames, Lucas Monteiro e Gustavo Hofmann"
              fill
              sizes="(max-width: 1240px) 100vw, 1160px"
              className="object-cover"
            />
          </div>
          <figcaption>
            <p className="mt-6 text-sm text-gelo/55">
              Fundadores da LiveLab, da esquerda para a direita
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-5">
              {FOUNDERS.map((f) => (
                <li key={f.name} className="border-t border-gelo/15 pt-4">
                  <p className="font-semibold text-gelo">{f.name}</p>
                  <p className="mt-1 text-sm text-gelo/65">{f.role}</p>
                </li>
              ))}
            </ul>
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
