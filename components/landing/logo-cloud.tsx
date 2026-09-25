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
    <section className="border-y border-gelo/10 bg-preto py-12 md:py-14">
      <Container>
        <div className="flex flex-col items-center gap-8 text-center">
          <p className="px-4 text-sm text-gelo/60">
            Marcas que já vendem ao vivo com a LiveLab
          </p>

          <div className="marquee-mask relative w-full overflow-hidden">
            <div className="ticker-track flex w-max items-center gap-14 md:gap-20">
              {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={`${brand.src}-${i}`}
                  src={brand.src}
                  alt={i < BRANDS.length ? brand.alt : ""}
                  aria-hidden={i >= BRANDS.length || undefined}
                  loading="lazy"
                  className="h-6 w-auto max-w-[150px] shrink-0 object-contain opacity-60 [filter:brightness(0)_invert(1)] transition-opacity duration-300 hover:opacity-100 sm:h-7 md:h-8"
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
