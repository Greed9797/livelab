import { Plus } from "lucide-react";
import { Container } from "./container";

// Só perguntas com resposta confirmada pelo cliente. Preço, fidelidade, TikTok Shop e
// segmentos entram quando houver resposta oficial.
export const QUESTIONS = [
  {
    q: "Preciso ter estúdio ou equipamento?",
    a: "Não. A live acontece na cabine LiveLab, com luz, câmera e transmissão prontas.",
  },
  {
    q: "Quem apresenta a live?",
    a: "Apresentadores profissionais da LiveLab. Você não precisa ir pra frente da câmera nem contratar ninguém.",
  },
  {
    q: "Já tentei live e não vendeu. O que muda?",
    a: "Live que vende não é cenário, é método: estrutura profissional, apresentador(a) e playbook de vendas validado.",
  },
  {
    q: "A LiveLab atende minha cidade?",
    a: "Depende da região. Mande sua cidade no WhatsApp e a equipe confirma a disponibilidade.",
  },
  {
    q: "Quanto custa?",
    a: "Depende do formato e da frequência das lives. A equipe monta a proposta pra sua operação no WhatsApp.",
  },
  {
    q: "Como eu começo?",
    a: "Chame no WhatsApp. A equipe estuda sua operação e volta em até 24h com um diagnóstico gratuito.",
  },
];

export function Faq() {
  return (
    <section id="perguntas" className="bg-gelo py-20 text-preto [--focus:var(--preto)] md:py-28">
      <Container className="grid gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-20">
        <h2 className="display text-[clamp(2.25rem,4.4vw,3.75rem)] md:sticky md:top-20 md:self-start">
          O que as marcas perguntam <span className="serif-accent">antes</span>
          <span className="text-laranja">.</span>
        </h2>

        <div className="border-t border-preto/15">
          {QUESTIONS.map(({ q, a }) => (
            <details key={q} className="group border-b border-preto/15">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-semibold tracking-[-0.02em] md:text-xl [&::-webkit-details-marker]:hidden">
                {q}
                <span
                  aria-hidden
                  className="grid h-10 w-10 flex-none place-items-center rounded-full border border-preto/25 transition-[transform,border-color,background-color,color] duration-300 group-open:rotate-45 group-open:border-laranja group-open:bg-laranja group-open:text-preto"
                >
                  <Plus className="h-4 w-4" strokeWidth={2} />
                </span>
              </summary>
              <p className="max-w-[60ch] pb-7 pr-16 text-base leading-relaxed text-preto/70 md:text-lg">
                {a}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
