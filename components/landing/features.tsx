import {
  Activity,
  MessageCircle,
  TrendingUp,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Container } from "./container";

type Feature = {
  icon: LucideIcon;
  kicker: string;
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    icon: Activity,
    kicker: "01",
    title: "Audiência viva",
    description:
      "Quantos espectadores estão com você neste segundo. De onde vieram, quando saíram, e o pico exato da live.",
  },
  {
    icon: MessageCircle,
    kicker: "02",
    title: "Engajamento por minuto",
    description:
      "Comentários, reações e cliques desenhando uma curva sincronizada com o momento do produto apresentado.",
  },
  {
    icon: TrendingUp,
    kicker: "03",
    title: "Vendas em tempo real",
    description:
      "Pedidos, ticket médio e conversão acompanhando a fala do apresentador — não o relatório do dia seguinte.",
  },
  {
    icon: Zap,
    kicker: "04",
    title: "Alertas inteligentes",
    description:
      "Um produto estourou acima do esperado? A Livelab te avisa antes do fim da live — dá pra repetir.",
  },
];

export function Features() {
  return (
    <section id="recursos" className="relative py-24 md:py-36">
      <Container>
        <div className="mb-16 flex flex-col items-start gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div className="flex items-center gap-3">
            <div className="hairline-brand" aria-hidden />
            <span className="eyebrow">O que a Livelab enxerga</span>
          </div>
          <h2 className="max-w-2xl font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.02] tracking-[-0.025em] text-foreground">
            Tudo que você precisa saber
            <br />
            <span className="italic text-[color:var(--muted-strong)]">
              enquanto a live ainda acontece.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--border)] md:grid-cols-2">
          {FEATURES.map(({ icon: Icon, kicker, title, description }) => (
            <article
              key={kicker}
              className="group relative flex flex-col gap-8 bg-[color:var(--background)] p-10 transition-colors duration-500 hover:bg-[color:var(--surface)] md:min-h-[320px] md:p-14"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-[0.2em] text-[color:var(--muted)]">
                  / {kicker}
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] text-brand transition-all duration-500 group-hover:scale-105 group-hover:border-brand group-hover:bg-[color:var(--brand-soft)]">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
              </div>
              <div className="mt-auto flex flex-col gap-4">
                <h3 className="font-display text-[clamp(1.75rem,2.5vw,2.5rem)] leading-[1.05] tracking-[-0.015em] text-foreground">
                  {title}
                </h3>
                <p className="max-w-md text-base leading-relaxed text-[color:var(--muted-strong)]">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
