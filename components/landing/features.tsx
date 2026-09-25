import {
  BookOpen,
  Megaphone,
  Mic,
  Video,
  type LucideIcon,
} from "lucide-react";
import { Container } from "./container";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

// Entregas publicadas pela própria marca (posts 9 a 13 do Instagram).
const FEATURES: Feature[] = [
  {
    icon: Video,
    title: "Cabine pronta pra vender",
    description:
      "Luz, câmera, cenário e transmissão já montados. Sua marca não compra equipamento nem monta estúdio.",
  },
  {
    icon: Mic,
    title: "Apresentador(a) que vende",
    description:
      "Apresentadores profissionais conduzem a live e puxam a venda. Você não precisa ir pra frente da câmera nem contratar ninguém.",
  },
  {
    icon: BookOpen,
    title: "Playbook, não improviso",
    description:
      "Estratégias de venda validadas nos maiores mercados do mundo, como China e EUA. Você não começa do zero.",
  },
  {
    icon: Megaphone,
    title: "Marketing validado",
    description:
      "Estratégias de marketing validadas com grandes marcas, aplicadas à sua live. Não é só ligar a câmera.",
  },
];

export function Features() {
  return (
    <section id="recursos" className="bg-gelo py-20 text-preto [--focus:var(--preto)] md:py-32">
      <Container className="grid gap-12 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-20">
        <h2 className="display text-[clamp(2.25rem,4.4vw,3.75rem)] md:sticky md:top-20 md:self-start">
          Tudo que falta pra sua marca{" "}
          <span className="serif-accent">vender</span> ao vivo
          <span className="text-laranja">.</span>
        </h2>

        <ul className="border-t border-preto/15">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <li
              key={title}
              className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-5 border-b border-preto/15 py-8 md:gap-x-8 md:py-10"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-laranja text-preto">
                <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
              </span>
              <div>
                <h3 className="text-2xl font-bold tracking-[-0.03em] md:text-[2rem] md:leading-tight">
                  {title}
                </h3>
                <p className="mt-3 max-w-[36rem] text-base leading-relaxed text-preto/70 md:text-lg">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
