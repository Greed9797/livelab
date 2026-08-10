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
    <section id="clientes" className="py-12 md:py-16">
      <Container>
        <div className="mb-4 flex items-center gap-3">
          <div className="hairline-brand" aria-hidden />
          <span className="eyebrow">Quem já opera com a Livelab</span>
        </div>
        <AnimatedTestimonials testimonials={TESTIMONIALS} autoplay />
      </Container>
    </section>
  );
}
