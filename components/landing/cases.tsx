// Resultados enviados pelo cliente (prints do TikTok Shop Seller Center, Kalodata e
// relatório de operação). Cada número leva o período para não virar promessa genérica.
const CASES = [
  {
    brand: "Rovitex",
    value: "+485%",
    detail: "de crescimento em vendas no TikTok Shop em 15 dias de operação com a LiveLab",
    growth: "15 dias",
    growthLabel: "vs. os 15 dias anteriores",
    period: "15 a 30 jun 2026",
  },
  {
    brand: "Alto Calçados",
    value: "R$ 126,8 mil",
    detail: "vendidos em live na conta da marca em 16 dias",
    growth: "R$ 371 mil",
    growthLabel: "de receita total da loja no período",
    period: "20 ago a 4 set 2026",
  },
  {
    brand: "Popô Baby",
    value: "+311%",
    detail: "de crescimento em vendas no mês, com as lives puxando 58% do faturamento",
    growth: "Top 6",
    growthLabel: "lojas de roupas de bebê no TikTok Shop",
    period: "set 2026",
  },
];

export function Cases() {
  return (
    <ul className="grid min-w-0 gap-4 md:grid-cols-3">
      {CASES.map((c) => (
        <li
          key={c.brand}
          className="flex flex-col gap-5 rounded-[1.25rem] border border-preto/15 bg-white/60 p-6 md:p-7"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-preto/60">{c.brand}</p>
          <div>
            <p className="display text-[clamp(2.5rem,4vw,3.25rem)] leading-none tabular-nums">{c.value}</p>
            <p className="mt-3 text-base leading-snug text-preto/75">{c.detail}</p>
          </div>
          <div className="mt-auto flex items-center gap-3 border-t border-preto/15 pt-5">
            <span className="flex-none whitespace-nowrap rounded-full bg-laranja px-3 py-1 text-sm font-bold text-preto">{c.growth}</span>
            <span className="text-sm leading-snug text-preto/70">{c.growthLabel}</span>
          </div>
          <p className="text-xs text-preto/55">{c.period} · dados do TikTok Shop</p>
        </li>
      ))}
    </ul>
  );
}
