import { Container } from "./container";
import { Button } from "./button";
import { HeroVideo } from "./hero-video";
import { LivelabLogo } from "@/components/brand/livelab-logo";
import { LivelabSymbol, PlayGlyph } from "@/components/brand/livelab-symbol";
import { WHATSAPP_SALES_URL } from "@/lib/contact";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-preto">
      <Container className="relative z-20 flex items-center justify-between pt-6 md:pt-9">
        <a href="#top" aria-label="Livelab — início" className="text-gelo">
          <LivelabLogo className="h-7 w-auto md:h-9" />
        </a>
        <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-gelo/70">
          <span className="rec-dot" aria-hidden />
          Luz, câmera, vendas!
        </p>
      </Container>

      <Container className="relative z-10 grid flex-1 items-center gap-12 pb-16 pt-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-10 lg:py-16">
        <div className="flex flex-col items-start gap-8 md:gap-10">
          <h1 className="display text-[clamp(2.75rem,5.4vw,5rem)] text-gelo">
            Sua marca <span className="serif-accent">vende</span> em live sem
            montar estúdio<span className="text-laranja">.</span>
          </h1>

          <p className="max-w-[34rem] text-lg leading-relaxed text-gelo/70 md:text-xl">
            Você traz o produto. A LiveLab entra com a cabine equipada,
            apresentador(a) profissional e playbook de vendas. Sem contratar
            equipe, sem improviso.
          </p>

          <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
            <Button
              href={WHATSAPP_SALES_URL}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              Quero vender em live
              <PlayGlyph className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Button>
            <Button href="#como-funciona" variant="outline" size="lg">
              Ver como funciona
              <PlayGlyph className="h-3 w-3 rotate-90 transition-transform duration-300 group-hover:translate-y-0.5" />
            </Button>
            <a
              href="#franquia"
              className="px-2 py-3 text-sm font-medium text-gelo/70 underline-offset-4 transition-colors hover:text-gelo hover:underline"
            >
              Quer abrir uma LiveLab? Conheça a franquia
            </a>
          </div>

          <p className="flex items-center gap-3 text-sm text-gelo/60">
            <span className="h-1.5 w-1.5 flex-none rounded-full bg-laranja" aria-hidden />
            Diagnóstico gratuito da sua operação, com retorno em até&nbsp;24h
          </p>
        </div>

        {/* O círculo do REC, com a cabine gravando dentro. */}
        <div
          aria-hidden
          className="relative order-first mx-auto mb-[calc(min(80vw,24rem)*0.13)] aspect-square w-[min(80vw,24rem)] md:mb-[calc(min(60vw,28rem)*0.13)] md:w-[min(60vw,28rem)] lg:order-none lg:mb-0 lg:w-full lg:max-w-[34rem] lg:justify-self-end"
        >
          <div className="disc-slide absolute inset-0 rounded-full bg-laranja [--disc-x:-15%] [--disc-y:13%] lg:max-xl:[--disc-x:0%]" />
          <div className="rec-open absolute inset-0 overflow-hidden rounded-full bg-grafite">
            <HeroVideo />
          </div>
          <LivelabSymbol className="absolute -right-[3%] top-[6%] w-[24%] text-laranja" />
        </div>
      </Container>
    </section>
  );
}
