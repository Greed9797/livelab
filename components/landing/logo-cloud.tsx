import { Container } from "./container";

type Brand = {
  name: string;
  src?: string;
};

// Só entra arquivo que já está em public/brands. Sem arquivo, o nome segue no letreiro.
const BRANDS: Brand[] = [
  { name: "Posthaus", src: "/brands/posthaus.png" },
  { name: "Haag", src: "/brands/haag.svg" },
  { name: "Loja Mirante", src: "/brands/mirante.webp" },
  { name: "Popô Baby", src: "/brands/popo-baby.png" },
  { name: "Fakini", src: "/brands/fakini.png" },
  { name: "Upkids", src: "/brands/upkids.png" },
  { name: "Grupo Cristina", src: "/brands/grupo-cristina.png" },
  { name: "Alto Calçados", src: "/brands/alto.png" },
  { name: "Cofari", src: "/brands/cofari.svg" },
  { name: "Ame Kids" },
];

function BrandMark({ brand, decorative }: { brand: Brand; decorative: boolean }) {
  if (brand.src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={brand.src}
        alt={decorative ? "" : brand.name}
        loading="lazy"
        className="h-6 w-auto max-w-[300px] shrink-0 object-contain opacity-60 [filter:brightness(0)_invert(1)] transition-opacity duration-300 hover:opacity-100 sm:h-7 md:h-8"
      />
    );
  }

  return (
    <span className="inline-flex shrink-0 items-center whitespace-nowrap text-2xl font-semibold leading-none tracking-[-0.03em] text-gelo opacity-60 transition-opacity duration-300 hover:opacity-100 sm:text-[1.75rem] md:text-[2rem]">
      {brand.name}
    </span>
  );
}

export function LogoCloud() {
  return (
    <section className="overflow-x-clip border-y border-gelo/10 bg-preto py-12 md:py-14">
      <Container>
        <div className="flex flex-col items-center gap-8 text-center">
          <p className="px-4 text-sm text-gelo/60">
            Marcas que já vendem ao vivo com a LiveLab
          </p>

          <div className="marquee-mask relative w-full overflow-hidden">
            <div className="ticker-track flex w-max items-center">
              {[0, 1].map((copy) => (
                <ul
                  key={copy}
                  className="flex shrink-0 items-center gap-14 pr-14 md:gap-20 md:pr-20"
                  aria-hidden={copy === 1 || undefined}
                >
                  {BRANDS.map((brand) => (
                    <li key={brand.name} className="shrink-0">
                      <BrandMark brand={brand} decorative={copy === 1} />
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
