import { ArrowUpRight, Radio } from "lucide-react";
import { Container } from "./container";
import { Button } from "./button";
import { HeroVideo } from "./hero-video";
import {
  WHATSAPP_FRANCHISE_URL,
  WHATSAPP_SALES_URL,
} from "@/lib/contact";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden py-20 md:py-28">
      {/* Video background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <HeroVideo />
        {/* Legibility overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.58)_45%,rgba(0,0,0,0.82)_100%)]" />
      </div>

      <Container className="relative z-10">
        <div className="flex max-w-2xl flex-col items-start gap-8 text-left md:max-w-3xl md:gap-10">
          <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 py-2 pl-3 pr-5 backdrop-blur rise">
            <span className="relative flex h-2.5 w-2.5">
              <span className="pulse-dot absolute inline-flex h-full w-full rounded-full" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />
            </span>
            <span className="eyebrow !text-white/80">AO VIVO • EM PRODUÇÃO</span>
          </div>

          <h1 className="rise rise-delay-1 font-display text-[clamp(2.75rem,6.5vw,5.5rem)] leading-[0.94] tracking-[-0.035em] text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.35)]">
            A inteligência por trás
            <br />
            <span className="italic text-white/75">
              das lives que vendem
            </span>
            <span className="ml-2 inline-block translate-y-[0.08em] text-brand">
              .
            </span>
          </h1>

          <p className="rise rise-delay-2 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl">
            Livelab é a sala de controle para live commerce. Monitore
            audiência, engajamento e vendas em tempo real — e decida o próximo
            passo enquanto a live ainda está no ar.
          </p>

          <div className="rise rise-delay-3 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button
              href={WHATSAPP_FRANCHISE_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
            >
              Quero franquear
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Button>
            <Button
              href={WHATSAPP_SALES_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="inverse"
              size="lg"
            >
              Quero vender
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Button>
            <a
              href="#recursos"
              className="group inline-flex items-center gap-2 px-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              <Radio className="h-4 w-4" />
              Conhecer os recursos
            </a>
          </div>

          <div className="rise rise-delay-4 flex items-center gap-3 pt-2">
            <div className="hairline-brand" aria-hidden />
            <p className="eyebrow !text-white/60">
              Operando lives que faturam mais de R$&nbsp;50M/ano em
              live&nbsp;commerce
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
