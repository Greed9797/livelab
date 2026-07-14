import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Container } from "./container";

const TESTIMONIALS = [
  {
    quote:
      "A Livelab virou o único monitor que fica aceso atrás do apresentador. A gente para de adivinhar e começa a vender.",
    name: "Equipe Posthaus",
    designation: "Operação de live commerce",
    src: "/showcase/post-1.jpg",
  },
  {
    quote:
      "Dobramos o faturamento por live no primeiro mês. Ver audiência, engajamento e vendas juntos muda a decisão em tempo real.",
    name: "Time Vernissage",
    designation: "Operação comercial",
    src: "/showcase/post-5.jpg",
  },
  {
    quote:
      "Não precisei montar equipe nem integrar nada. Em 30 minutos estávamos operando com a sala de controle no ar.",
    name: "Equipe Pokoloka",
    designation: "Marketing e live commerce",
    src: "/showcase/post-9.jpg",
  },
  {
    quote:
      "O alerta de produto em alta salvou nossa última live. Repetimos a oferta antes de encerrar e o ticket médio subiu 34%.",
    name: "Time Bauny",
    designation: "Operação de live commerce",
    src: "/showcase/post-3.jpg",
  },
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
