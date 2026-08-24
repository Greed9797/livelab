import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/landing/container";
import { SiteFooter } from "@/components/landing/site-footer";
import { SimuladorGanho } from "@/components/calculadora/simulador";

export const metadata: Metadata = {
  title: "Calculadora de ganho da apresentadora — Livelab",
  description:
    "Simule quanto uma apresentadora Livelab recebe no mês: fixo mensal mais comissão sobre o que as lives venderam.",
  alternates: { canonical: "/calculadora" },
  openGraph: {
    title: "Quanto uma apresentadora Livelab leva no fim do mês",
    description:
      "Fixo mensal mais comissão sobre as vendas das lives. Mexa no quanto vendeu e veja a conta.",
    url: "/calculadora",
    locale: "pt_BR",
    type: "website",
    siteName: "Livelab",
  },
};

export default function CalculadoraPage() {
  return (
    <>
      <header className="border-b border-[color:var(--border)]">
        <Container className="flex h-16 items-center justify-between md:h-20">
          <Link
            href="/"
            className="flex items-center gap-2.5 rounded-full transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--ring)]"
            aria-label="Livelab — início"
          >
            <Image src="/logo.png" alt="" width={28} height={28} priority />
            <span className="font-display text-xl tracking-[-0.01em]">
              Livelab
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm text-muted underline-offset-4 transition-colors hover:text-brand hover:underline focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--ring)]"
          >
            Voltar para o site
          </Link>
        </Container>
      </header>

      <main className="flex flex-1 flex-col pb-24 pt-14 md:pb-32 md:pt-20">
        <Container className="flex flex-col gap-12 md:gap-16">
          <div className="flex max-w-3xl flex-col gap-6">
            <h1 className="rise font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.96] tracking-[-0.035em]">
              Quanto uma apresentadora leva
              <br />
              <span className="italic text-muted-strong">
                no fim do mês
              </span>
            </h1>
            <p className="rise rise-delay-1 max-w-[62ch] text-lg leading-relaxed text-muted-strong">
              O ganho tem duas partes: um fixo que cai todo mês, tenha a live
              vendido bem ou mal, e uma comissão sobre o que as lives venderam.
              Quanto mais o mês vende, maior a porcentagem — e ela vale para o
              mês inteiro, não só para a última venda.
            </p>
          </div>

          <div className="rise rise-delay-2">
            <SimuladorGanho />
          </div>

          <section className="flex flex-col gap-8 md:gap-10">
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.05] tracking-[-0.03em]">
              A escada, sem letra miúda
            </h2>

            <div className="max-w-3xl overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <caption className="sr-only">
                  Faixas de comissão por GMV acumulado no mês
                </caption>
                <thead>
                  <tr className="border-b border-[color:var(--border-strong)]">
                    <th
                      scope="col"
                      className="py-3 pr-6 text-sm font-medium text-muted-strong"
                    >
                      O que as lives venderam no mês
                    </th>
                    <th
                      scope="col"
                      className="py-3 text-right text-sm font-medium text-muted-strong"
                    >
                      Comissão
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[color:var(--border)]">
                    <td className="py-4 pr-6 tabular-nums">Até R$ 70 mil</td>
                    <td className="py-4 text-right tabular-nums">1%</td>
                  </tr>
                  <tr className="border-b border-[color:var(--border)]">
                    <td className="py-4 pr-6 tabular-nums">
                      De R$ 70 mil a R$ 150 mil
                    </td>
                    <td className="py-4 text-right tabular-nums">1,5%</td>
                  </tr>
                  <tr className="border-b border-[color:var(--border)]">
                    <td className="py-4 pr-6 tabular-nums">
                      Acima de R$ 150 mil
                    </td>
                    <td className="py-4 text-right tabular-nums">2%</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-6">
                      Live de sábado ou domingo
                    </td>
                    <td className="py-4 text-right tabular-nums">2%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid max-w-4xl gap-8 text-[15px] leading-relaxed text-muted-strong md:grid-cols-2 md:gap-12">
              <p>
                A faixa olha o mês inteiro, não cada live isolada. Quando uma
                venda empurra o mês para a faixa de cima, o sistema volta e
                recalcula tudo o que já tinha sido feito naquele mês pela nova
                porcentagem.
              </p>
              <p>
                Fim de semana é a exceção: live de sábado ou domingo paga 2%
                desde a primeira venda, mesmo num mês que ainda está na faixa de
                1%. O GMV do fim de semana continua contando para subir a faixa
                dos outros dias.
              </p>
            </div>
          </section>
        </Container>
      </main>

      <SiteFooter />
    </>
  );
}
