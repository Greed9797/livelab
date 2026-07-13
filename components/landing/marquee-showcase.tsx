import { AnimatedMarqueeHero } from "@/components/ui/hero-3";

const SHOWCASE_IMAGES = Array.from(
  { length: 13 },
  (_, i) => `/showcase/post-${i + 1}.jpg`
);

export function MarqueeShowcase() {
  return (
    <AnimatedMarqueeHero
      tagline="Marcas que já vendem ao vivo com a Livelab"
      title={
        <>
          Sua próxima live
          <br />
          começa aqui.
        </>
      }
      description="Da cabine à sala de controle: montamos, operamos e otimizamos a sua transmissão enquanto você foca em vender."
      ctaText="Quero franquear"
      images={SHOWCASE_IMAGES}
    />
  );
}
