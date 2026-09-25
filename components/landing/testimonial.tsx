import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Container } from "./container";

const TESTIMONIALS = [
  { name: "Posthaus", src: "/showcase/live-posthaus.jpg" },
  { name: "Rovitex", src: "/showcase/live-rovitex.jpg" },
  { name: "Alto Calçados", src: "/showcase/live-alto.jpg" },
  { name: "Pure Up", src: "/showcase/live-pureup.jpg" },
];

export function Testimonial() {
  return (
    <section id="clientes" className="bg-gelo py-20 text-preto [--focus:var(--preto)] md:py-28">
      <Container>
        <h2 className="display text-[clamp(2.25rem,4.4vw,3.75rem)]">
          Quem já está no <span className="serif-accent">ar</span> com a
          LiveLab<span className="text-laranja">.</span>
        </h2>
        <AnimatedTestimonials testimonials={TESTIMONIALS} autoplay />
      </Container>
    </section>
  );
}
