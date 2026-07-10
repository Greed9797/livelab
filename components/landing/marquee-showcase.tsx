import { AnimatedMarqueeHero } from "@/components/ui/hero-3";

const SHOWCASE_IMAGES = [
  "/showcase/s1.jpg",
  "/showcase/s2.jpg",
  "/showcase/s3.jpg",
  "/showcase/s4.jpg",
  "/showcase/s2.jpg",
  "/showcase/s4.jpg",
  "/showcase/s1.jpg",
  "/showcase/s3.jpg",
];

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
