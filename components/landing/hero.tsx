import Image from "next/image";
import { ArrowUpRight, Radio } from "lucide-react";
import { Container } from "./container";
import { Button } from "./button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-36">
      {/* Studio background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/hero-studio.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={75}
          className="scale-110 object-cover object-center blur-[7px]"
        />
        {/* Legibility overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,8,6,0.72)_0%,rgba(12,8,6,0.55)_45%,rgba(12,8,6,0.78)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(232,103,60,0.14),_transparent_65%)]" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-start gap-10 md:items-center md:text-center">
          <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 py-2 pl-3 pr-5 backdrop-blur rise">
            <span className="relative flex h-2.5 w-2.5">
              <span className="pulse-dot absolute inline-flex h-full w-full rounded-full" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand" />
            </span>
            <span className="eyebrow !text-white/80">AO VIVO • EM PRODUÇÃO</span>
          </div>

          <h1 className="rise rise-delay-1 max-w-5xl font-display text-[clamp(3rem,8vw,7rem)] leading-[0.92] tracking-[-0.035em] text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.35)]">
            A inteligência por trás
            <br className="hidden md:block" />
            <span className="italic text-white/75">
              das lives que vendem
            </span>
            <span className="ml-2 inline-block translate-y-[0.08em] text-brand">
              .
            </span>
          </h1>

          <p className="rise rise-delay-2 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
            Livelab é a sala de controle para live commerce. Monitore
            audiência, engajamento e vendas em tempo real — e decida o próximo
            passo enquanto a live ainda está no ar.
          </p>

          <div className="rise rise-delay-3 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button href="https://api.whatsapp.com/send/?phone=5547984676404&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" variant="primary" size="lg">
              Quero franquear
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Button>
            <Button href="#produto" variant="inverse" size="lg">
              <Radio className="h-4 w-4" />
              Ver a sala de controle
            </Button>
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
