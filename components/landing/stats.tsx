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
              className="flex flex-col justify-between gap-8 bg-[color:var(--surface-alt)] p-8 md:p-10"
            >
              <span className="flex items-baseline whitespace-nowrap font-display leading-none tracking-[-0.03em] text-foreground">
                <span className="text-[clamp(2.75rem,5vw,4.25rem)] tabular-nums">
                  {value}
                </span>
                <span className="ml-0.5 text-[clamp(1.75rem,3vw,2.5rem)] text-brand">
                  {suffix}
                </span>
              </span>
              <div className="flex items-center gap-3">
                <div className="h-px w-8 shrink-0 bg-brand" aria-hidden />
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
