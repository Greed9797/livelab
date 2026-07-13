import { Star } from "lucide-react";
import { Container } from "./container";

export function Testimonial() {
  return (
    <section id="clientes" className="py-20 md:py-28">
      <Container>
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[var(--radius-xl)] border border-[color:var(--border)] bg-[color:var(--surface)] px-8 py-14 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)] md:px-16 md:py-20">
          {/* brand glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(232,103,60,0.14),_transparent_65%)] blur-2xl"
          />
          {/* oversized quote glyph */}
          <span
            aria-hidden
            className="pointer-events-none absolute -left-1 -top-6 select-none font-display text-[9rem] leading-none text-brand/15 md:text-[13rem]"
          >
            &ldquo;
          </span>

          <div className="relative flex flex-col items-center gap-8 text-center">
            <div className="flex items-center gap-1 text-brand">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" strokeWidth={0} />
              ))}
            </div>

            <blockquote className="font-display text-[clamp(1.75rem,3.6vw,3rem)] leading-[1.12] tracking-[-0.02em] text-foreground">
              A Livelab virou{" "}
              <span className="italic text-brand">
                o único monitor que fica aceso
              </span>{" "}
              atrás do apresentador. A gente para de adivinhar e começa a
              vender.
            </blockquote>

            <div className="flex items-center gap-4 border-t border-[color:var(--border)] pt-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand font-display text-lg text-brand-foreground ring-4 ring-[color:var(--brand-soft)]">
                MR
              </div>
              <div className="flex flex-col items-start">
                <span className="text-sm font-semibold text-foreground">
                  Marina Ribeiro
                </span>
                <span className="text-sm text-[color:var(--muted)]">
                  Head de Live Commerce · Posthaus
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
