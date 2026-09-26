import { AnimatedMarqueeHero } from "@/components/ui/hero-3";
import { WHATSAPP_FRANCHISE_URL } from "@/lib/contact";

const SHOWCASE_IMAGES = Array.from(
  { length: 13 },
  (_, i) => `/showcase/post-${i + 1}.jpg`
);

// Porta da franquia: o modelo é o do slide "Conceito da marca" do Figma.
export function MarqueeShowcase() {
  return (
    <AnimatedMarqueeHero
      id="franquia"
      title={
        <>
          Abra uma LiveLab
          <br />
          na sua <span className="serif-accent">cidade</span>.
        </>
      }
      description="A 1ª franquia de live commerce do Brasil. Você opera cabines equipadas, atende marcas locais e fatura receita fixa + comissão."
      primary={{ text: "Quero abrir uma LiveLab", href: WHATSAPP_FRANCHISE_URL }}
      secondary={{ text: "Conhecer a franquia", href: "/franquia" }}
      images={SHOWCASE_IMAGES}
    />
  );
}
