import Image from "next/image";
import { Container } from "./container";

export function ProductPreview() {
  return (
    <section id="produto" className="relative py-16 md:py-24">
      <Container>
        <div className="mb-10 flex flex-col items-start gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="flex items-center gap-3">
            <div className="hairline-brand" aria-hidden />
            <span className="eyebrow">Veja em ação</span>
          </div>
          <h2 className="max-w-2xl font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.02] tracking-[-0.025em] text-foreground">
            Uma sala de controle
            <br />
            <span className="italic text-[color:var(--muted-strong)]">
              para a sua próxima live.
            </span>
          </h2>
        </div>

        <div className="relative mx-auto max-w-[1180px]">
          {/* Drop shadow glow */}
          <div
            aria-hidden
            className="absolute inset-x-8 -bottom-8 h-20 rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(232,103,60,0.2),_transparent_60%)] blur-2xl"
          />
          <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[color:var(--border-strong)] shadow-[0_40px_120px_-40px_rgba(0,0,0,0.6)]">
            <Image
              src="/control-room.png"
              alt="Sala de controle Livelab — métricas da live em tempo real"
              width={2000}
              height={1000}
              sizes="(max-width: 1180px) 100vw, 1180px"
              quality={85}
              className="h-auto w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
