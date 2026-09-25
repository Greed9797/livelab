import { Container } from "./container";
import { Cases } from "./cases";
import { LivePhone, type LiveShot } from "./live-phone";

const LIVES: LiveShot[] = [
  { name: "Posthaus", src: "/showcase/live-posthaus.jpg" },
  { name: "Rovitex", src: "/showcase/live-rovitex.jpg" },
  { name: "Alto Calçados", src: "/showcase/live-alto.jpg" },
  { name: "Pure Up", src: "/showcase/live-pureup.jpg" },
  { name: "Mirant", src: "/showcase/live-mirant.jpg", detail: "Live de roupa básica" },
];

export function Testimonial() {
  return (
    <section
      id="clientes"
      className="overflow-x-clip bg-gelo py-16 text-preto [--focus:var(--preto)] md:py-20 lg:py-16"
    >
      <Container className="min-w-0">
        <h2 className="display text-[clamp(2.25rem,4.4vw,3.75rem)]">
          Quem já está no <span className="serif-accent">ar</span> com a
          LiveLab<span className="text-laranja">.</span>
        </h2>
        {/* No PC, cards e iPhone dividem a mesma faixa e o aparelho cabe inteiro.
            No celular a pilha continua: cards, depois a máscara com o feed subindo. */}
        <div className="mt-8 flex flex-col gap-10 lg:mt-10 lg:grid lg:grid-cols-[minmax(0,1fr)_11.75rem] lg:items-end lg:gap-10 xl:gap-14">
          <Cases />
          <LivePhone lives={LIVES} />
        </div>
      </Container>
    </section>
  );
}
