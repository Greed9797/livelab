import { Container } from "./container";

const BRANDS = [
  { src: "/brands/posthaus.png", alt: "Posthaus" },
  { src: "/brands/vernissage.svg", alt: "Vernissage" },
  { src: "/brands/pokoloka.svg", alt: "Pokoloka" },
  { src: "/brands/bauny.svg", alt: "Bauny" },
  { src: "/brands/haag.svg", alt: "Haag" },
  { src: "/brands/mirante.webp", alt: "Loja Mirante" },
];

export function LogoCloud() {
  return (
    <section className="border-y border-[color:var(--border)] bg-[color:var(--surface-alt)] py-12 md:py-16">
      <Container>
        <div className="flex flex-col items-center gap-8 text-center">
          <p className="eyebrow px-4">Marcas que já vendem ao vivo com a Livelab</p>

          <div className="marquee-mask relative w-full overflow-hidden">
            <div className="ticker-track flex w-max items-center gap-12 md:gap-16">
              {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={`${brand.src}-${i}`}
                  src={brand.src}
                  alt={brand.alt}
                  loading="lazy"
                  className="h-6 w-auto max-w-[150px] shrink-0 object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-7 md:h-8"
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
