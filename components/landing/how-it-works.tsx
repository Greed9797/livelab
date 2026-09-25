import { Container } from "./container";
import { Button } from "./button";
import { PlayGlyph } from "@/components/brand/livelab-symbol";
import { WHATSAPP_SALES_URL } from "@/lib/contact";

// A numeração aqui carrega sequência de verdade: é a ordem do atendimento.
const STEPS = [
  {
    title: "Chame no WhatsApp",
    description: "Conte o que sua marca vende e em qual cidade está.",
  },
  {
    title: "Receba o diagnóstico",
    description:
      "A equipe estuda sua operação e volta em até 24h com um plano personalizado. Sem custo.",
  },
  {
    title: "Entre no ar",
    description:
      "Sua live acontece na cabine LiveLab, com apresentador(a) profissional e playbook de vendas.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-preto py-20 md:py-28">
      <Container>
        <h2 className="display max-w-[16ch] text-[clamp(2.25rem,4.4vw,3.75rem)] text-gelo">
          Três passos até a sua <span className="serif-accent">live</span>
          <span className="text-laranja">.</span>
        </h2>

        <ol className="mt-12 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-8">
          {STEPS.map((step, i) => (
            <li key={step.title} className="flex flex-col gap-4 border-t border-gelo/15 pt-6">
              <span className="display text-5xl leading-none tabular-nums text-laranja">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-2xl font-bold tracking-[-0.03em] text-gelo">{step.title}</h3>
              <p className="max-w-[30ch] text-base leading-relaxed text-gelo/65 md:text-lg">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex md:mt-16">
          <Button
            href={WHATSAPP_SALES_URL}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="w-full sm:w-auto"
          >
            Quero vender em live
            <PlayGlyph className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
