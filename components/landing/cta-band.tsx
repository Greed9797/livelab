import { ArrowUpRight } from "lucide-react";
import { Container } from "./container";
import { Button } from "./button";

export function CtaBand() {
  return (
    <section id="demo" className="relative overflow-hidden bg-foreground py-24 text-background md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-40 -z-0 flex justify-center"
      >
        <div className="h-[520px] w-[1000px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(232,103,60,0.35),_transparent_60%)] blur-3xl" />
      </div>

      <Container className="relative">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 text-center">
          <div className="flex items-center gap-3">
            <div className="hairline-brand" aria-hidden />
            <span className="eyebrow !text-white/50">
              Pronto quando sua live estiver
            </span>
          </div>

          <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.035em]">
            Coloque a próxima live
            <br />
            <span className="italic text-white/70">dentro de uma sala de controle.</span>
          </h2>

          <p className="max-w-2xl text-lg text-white/60">
            Em 30 minutos a Livelab está operando na sua transmissão. Sem
            SDK, sem integração chata, sem fim-de-semana perdido.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Button href="https://api.whatsapp.com/send/?phone=5547984676404&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" variant="primary" size="lg">
              Quero franquear
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Button>
            <a
              href="https://api.whatsapp.com/send/?phone=5547984676404&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              Falar com vendas →
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
