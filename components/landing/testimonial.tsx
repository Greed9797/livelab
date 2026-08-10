import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Container } from "./container";

const TESTIMONIALS = [
  {
    quote:
      "A Livelab virou o único monitor que fica aceso atrás do apresentador. A gente para de adivinhar e começa a vender.",
    name: "Posthaus",
    designation: "Moda • operação de live commerce",
    src: "/showcase/live-posthaus.jpg",
  },
  {
    quote:
      "Dobramos o faturamento por live no primeiro mês. Ver audiência, engajamento e vendas juntos muda a decisão em tempo real.",
    name: "Rovitex",
    designation: "Moda • operação comercial",
    src: "/showcase/live-rovitex.jpg",
  },
  {
    quote:
      "Não precisei montar equipe nem integrar nada. Em 30 minutos estávamos operando com a sala de controle no ar.",
    name: "Alto Calçados",
    designation: "Calçados • marketing e live commerce",
    src: "/showcase/live-alto.jpg",
  },
  {
    quote:
      "O alerta de produto em alta salvou nossa última live. Repetimos a oferta antes de encerrar e o ticket médio subiu 34%.",
    name: "Pure Up",
    designation: "Suplementos • operação de live commerce",
    src: "/showcase/live-pureup.jpg",
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
