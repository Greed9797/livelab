import Image from "next/image";
import { Container } from "./container";
import { Button } from "./button";
import { PlayGlyph } from "@/components/brand/livelab-symbol";
import { WHATSAPP_SALES_URL } from "@/lib/contact";

// Capa da apresentação da marca (slide 1): o título mora dentro da órbita de discos.
export function CtaBand() {
  return (
    <section id="contato" className="relative isolate overflow-hidden bg-preto pb-20 md:pb-28">
      <div className="relative flex h-[130vw] items-center justify-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_14%,black_86%,transparent)] md:h-[min(56vw,780px)]">
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 aspect-square w-[200vw] -translate-x-1/2 -translate-y-1/2 md:w-[min(100vw,1440px)]"
        >
          <Image
            src="/brand/orbita-discos.jpg"
            alt=""
            fill
            sizes="(max-width: 768px) 200vw, 1440px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(7,7,7,0.82)_0%,rgba(7,7,7,0.55)_32%,rgba(7,7,7,0)_60%)]" />
        </div>

        <h2 className="display relative max-w-[13ch] px-6 text-center text-[clamp(2.25rem,4.2vw,3.75rem)] text-gelo">
          A cabine está pronta. Falta a sua{" "}
          <span className="serif-accent">marca</span>
          <span className="text-laranja">.</span>
        </h2>
      </div>

      <Container className="relative flex flex-col items-center gap-9 text-center">
        <p className="max-w-2xl text-lg leading-relaxed text-gelo/65 md:text-xl">
          Conte no WhatsApp o que sua marca vende. A equipe estuda sua
          operação e volta em até 24h com um plano personalizado.
        </p>

        <div className="flex w-full flex-col items-center gap-4 sm:w-auto">
          <Button
            href={WHATSAPP_SALES_URL}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="w-full sm:w-auto"
          >
            Quero vender em live
            <PlayGlyph className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Button>
          <p className="text-sm text-gelo/60">Diagnóstico gratuito, retorno em até 24h.</p>
          <a
            href="/franquia"
            className="mt-2 text-sm font-medium text-gelo/70 underline underline-offset-4 transition-colors hover:text-laranja"
          >
            Quer abrir uma LiveLab? Conheça a franquia
          </a>
        </div>
      </Container>
    </section>
  );
}
