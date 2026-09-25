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
      className="overflow-x-clip bg-gelo py-20 text-preto [--focus:var(--preto)] md:py-28"
    >
      <Container className="min-w-0">
        <h2 className="display text-[clamp(2.25rem,4.4vw,3.75rem)]">
          Quem já está no <span className="serif-accent">ar</span> com a
          LiveLab<span className="text-laranja">.</span>
        </h2>
        <Cases />
        <LivePhone lives={LIVES} />
      </Container>
    </section>
  );
}
