import { ArrowUpRight, Radio } from "lucide-react";
import { Container } from "./container";
import { Button } from "./button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-36">
      {/* Background atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center"
      >
        <div className="h-[520px] w-[1100px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(232,103,60,0.16),_transparent_60%)] blur-3xl" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <Container>
        <div className="flex flex-col items-start gap-10 md:items-center md:text-center">
          <div className="flex items-center gap-3 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)]/80 py-2 pl-3 pr-5 backdrop-blur rise">
            <span className="relative flex h-2.5 w-2.5">
              <span className="pulse-dot absolute inline-flex h-full w-full rounded-full" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />
            </span>
            <span className="eyebrow">AO VIVO • EM PRODUÇÃO</span>
          </div>

          <h1 className="rise rise-delay-1 max-w-5xl font-display text-[clamp(3rem,8vw,7rem)] leading-[0.92] tracking-[-0.035em] text-foreground">
            A inteligência por trás
            <br className="hidden md:block" />
            <span className="italic text-foreground-soft">
              das lives que vendem
            </span>
            <span className="ml-2 inline-block translate-y-[0.08em] text-brand">
              .
            </span>
          </h1>

          <p className="rise rise-delay-2 max-w-2xl text-lg leading-relaxed text-[color:var(--muted-strong)] md:text-xl">
            Livelab é a sala de controle para live commerce. Monitore
            audiência, engajamento e vendas em tempo real — e decida o próximo
            passo enquanto a live ainda está no ar.
          </p>

          <div className="rise rise-delay-3 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button href="https://api.whatsapp.com/send/?phone=5547984676404&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" variant="primary" size="lg">
              Quero franquear
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Button>
            <Button href="#produto" variant="secondary" size="lg">
              <Radio className="h-4 w-4" />
              Ver a sala de controle
            </Button>
          </div>

          <div className="rise rise-delay-4 flex items-center gap-3 pt-2">
            <div className="hairline-brand" aria-hidden />
            <p className="eyebrow !text-[color:var(--muted-strong)]">
              Operando lives que faturam mais de R$&nbsp;50M/ano em
              live&nbsp;commerce
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
