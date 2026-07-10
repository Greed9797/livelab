import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "./container";
import { Button } from "./button";

const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=5547984676404&type=phone_number&app_absent=0";

const BRANDS = [
  { src: "/brands/posthaus.png", alt: "Posthaus", width: 931, height: 240 },
  { src: "/brands/vernissage.png", alt: "Vernissage", width: 1247, height: 240 },
  { src: "/brands/pokoloka.png", alt: "Pokoloka", width: 805, height: 240 },
  { src: "/brands/bauny.png", alt: "Bauny", width: 768, height: 240 },
];

export function LogoCloud() {
  return (
    <section className="border-y border-[color:var(--border)] bg-[color:var(--surface-alt)] py-12 md:py-20">
      <Container>
        <div className="flex flex-col items-center gap-8 text-center md:gap-10">
          <p className="eyebrow px-4">Marcas que já vendem ao vivo com a Livelab</p>

          <div className="marquee-mask relative w-full overflow-hidden">
            <div className="ticker-track flex w-max items-center gap-12 md:gap-16">
              {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
                <Image
                  key={`${brand.src}-${i}`}
                  src={brand.src}
                  alt={brand.alt}
                  width={brand.width}
                  height={brand.height}
                  sizes="160px"
                  quality={80}
                  className="h-6 w-auto max-w-[140px] shrink-0 object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-7 md:h-8"
                />
              ))}
            </div>
          </div>

          <div className="mt-2 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
            <Button
              href={`${WHATSAPP}&text=${encodeURIComponent(
                "Quero franquear a Livelab"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="w-full sm:w-auto"
            >
              Quero franquear
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Button>
            <Button
              href={`${WHATSAPP}&text=${encodeURIComponent(
                "Quero contratar a Livelab para vender nas minhas lives"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Quero vender ao vivo
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Button>
          </div>

          <p className="max-w-md text-sm text-[color:var(--muted)]">
            Abra sua franquia ou contrate a Livelab para operar as lives da sua
            marca.
          </p>
        </div>
      </Container>
    </section>
  );
}
