import { Container } from "./container";

const STATS = [
  {
    value: "R$ 2,4B",
    suffix: "+",
    label: "GMV monitorado em lives",
  },
  {
    value: "12M",
    suffix: "+",
    label: "espectadores analisados",
  },
  {
    value: "99,98",
    suffix: "%",
    label: "uptime durante a transmissão",
  },
];

export function Stats() {
  return (
    <section className="border-y border-[color:var(--border)] bg-[color:var(--surface-alt)] py-20 md:py-28">
      <Container>
        <div className="mb-14 flex flex-col items-start gap-3">
          <div className="flex items-center gap-3">
            <div className="hairline-brand" aria-hidden />
            <span className="eyebrow">Números que o time mede</span>
          </div>
          <p className="max-w-xl text-lg text-[color:var(--muted-strong)]">
            Três anos operando lives de marcas brasileiras. Dado real,
            confiável, e pronto pra sustentar decisão.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--border)] bg-[color:var(--border)] md:grid-cols-3">
          {STATS.map(({ value, suffix, label }) => (
            <div
              key={label}
              className="flex flex-col gap-6 bg-[color:var(--surface-alt)] p-10 md:p-14"
            >
              <div className="flex items-baseline">
                <span className="font-display text-[clamp(3.5rem,8vw,6.5rem)] leading-[0.9] tracking-[-0.04em] text-foreground tabular-nums">
                  {value}
                </span>
                <span className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none text-brand">
                  {suffix}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-[color:var(--border-strong)]" aria-hidden />
                <span className="text-sm text-[color:var(--muted-strong)]">
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
