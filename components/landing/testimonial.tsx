import { Container } from "./container";

export function Testimonial() {
  return (
    <section id="clientes" className="py-24 md:py-36">
      <Container>
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 text-center">
          <span className="font-display text-[7rem] leading-none text-brand md:text-[9rem]">
            &ldquo;
          </span>
          <blockquote className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.08] tracking-[-0.02em] text-foreground">
            A Livelab virou{" "}
            <span className="italic text-[color:var(--muted-strong)]">
              o único monitor que fica aceso
            </span>{" "}
            atrás do apresentador. A gente para de adivinhar e começa a
            vender.
          </blockquote>
          <div className="flex items-center gap-4 pt-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand font-display text-lg text-brand-foreground">
              MR
            </div>
            <div className="flex flex-col items-start">
              <span className="text-sm font-semibold text-foreground">
                Marina Ribeiro
              </span>
              <span className="text-sm text-[color:var(--muted)]">
                Head de Live Commerce · Aurora
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
