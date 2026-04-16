import { Container } from "./container";

const BRANDS = [
  "AURORA",
  "Gávea",
  "Vitrô",
  "Ponteio",
  "Cartel",
  "Vermelho",
  "Nordeste+",
  "Olinda.",
];

export function LogoCloud() {
  return (
    <section className="border-y border-[color:var(--border)] bg-[color:var(--surface-alt)] py-12">
      <Container>
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-12">
          <p className="eyebrow whitespace-nowrap md:border-r md:border-[color:var(--border)] md:pr-8">
            Operando para marcas brasileiras
          </p>
          <div className="marquee-mask relative w-full overflow-hidden">
            <div className="ticker-track flex w-max items-center gap-14">
              {[...BRANDS, ...BRANDS].map((brand, i) => (
                <span
                  key={`${brand}-${i}`}
                  className="font-display text-2xl italic text-[color:var(--muted)] transition-colors hover:text-foreground md:text-3xl"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
