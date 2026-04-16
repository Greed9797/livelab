import {
  Activity,
  ArrowUpRight,
  Eye,
  Flame,
  MessageCircle,
  ShoppingBag,
  Signal,
} from "lucide-react";
import { Container } from "./container";

const EVENTS = [
  {
    time: "21:04:12",
    kind: "sale",
    label: "+12 pedidos",
    detail: "Vestido Linho Areia · 38",
    tone: "bg-emerald-400",
  },
  {
    time: "21:04:07",
    kind: "peak",
    label: "pico de audiência",
    detail: "2.841 espectadores simultâneos",
    tone: "bg-brand",
  },
  {
    time: "21:03:58",
    kind: "comment",
    label: "+184 comentários",
    detail: "em 60 segundos",
    tone: "bg-sky-400",
  },
  {
    time: "21:03:41",
    kind: "alert",
    label: "alerta",
    detail: "ticket médio +34% no drop 07",
    tone: "bg-brand",
  },
  {
    time: "21:03:20",
    kind: "sale",
    label: "+8 pedidos",
    detail: "Blazer Oversized Cru",
    tone: "bg-emerald-400",
  },
];

const STATS = [
  {
    icon: Eye,
    label: "Ao vivo agora",
    value: "2.841",
    delta: "+38%",
    positive: true,
  },
  {
    icon: MessageCircle,
    label: "Engajamento/min",
    value: "184",
    delta: "+12",
    positive: true,
  },
  {
    icon: ShoppingBag,
    label: "Pedidos na live",
    value: "412",
    delta: "R$ 87k",
    positive: true,
  },
  {
    icon: Flame,
    label: "Produto em alta",
    value: "Drop 07",
    delta: "+34% TM",
    positive: true,
  },
];

// Sparkline path — hand-tuned curve that rises to the right
const SPARKLINE_PATH =
  "M0 78 C 40 72, 60 88, 100 60 S 180 12, 220 30 S 300 82, 340 48 S 420 6, 480 28";

const BAR_HEIGHTS = [38, 48, 42, 58, 74, 64, 82, 70, 88, 66, 96, 82, 78, 90];

export function ProductPreview() {
  return (
    <section id="produto" className="relative py-24 md:py-36">
      <Container>
        <div className="mb-14 flex flex-col items-start gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
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

        {/* The dark island */}
        <div className="relative mx-auto max-w-[1180px]">
          {/* Drop shadow glow */}
          <div
            aria-hidden
            className="absolute inset-x-8 -bottom-8 h-20 rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(232,103,60,0.2),_transparent_60%)] blur-2xl"
          />
          <div className="relative overflow-hidden rounded-[var(--radius-xl)] border border-[color:var(--border-strong)] bg-[#0b0b0c] text-white shadow-[0_40px_120px_-40px_rgba(0,0,0,0.6)]">
            {/* Top chrome */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 md:px-8">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                </div>
                <span className="ml-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
                  livelab · control room
                </span>
              </div>
              <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 md:flex">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
                  Live · 47:12
                </span>
              </div>
            </div>

            {/* Content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Main — stats + chart */}
              <div className="lg:col-span-8 border-b border-white/10 lg:border-b-0 lg:border-r">
                {/* Stat strip */}
                <div className="grid grid-cols-2 divide-white/10 border-b border-white/10 md:grid-cols-4 md:divide-x">
                  {STATS.map(
                    ({ icon: Icon, label, value, delta, positive }) => (
                      <div
                        key={label}
                        className="flex flex-col gap-3 px-6 py-6 md:px-7 md:py-7"
                      >
                        <div className="flex items-center gap-2 text-white/40">
                          <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
                          <span className="font-mono text-[10px] uppercase tracking-[0.18em]">
                            {label}
                          </span>
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="font-display text-3xl tracking-tight text-white md:text-4xl">
                            {value}
                          </span>
                          <span
                            className={
                              positive
                                ? "font-mono text-xs text-brand"
                                : "font-mono text-xs text-white/50"
                            }
                          >
                            {delta}
                          </span>
                        </div>
                      </div>
                    )
                  )}
                </div>

                {/* Chart area */}
                <div className="relative px-6 py-8 md:px-10 md:py-10">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white/40">
                      <Activity className="h-3.5 w-3.5" strokeWidth={1.75} />
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em]">
                        Audiência · últimos 30 min
                      </span>
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3 py-1">
                      <ArrowUpRight className="h-3 w-3 text-brand" />
                      <span className="font-mono text-[10px] text-brand">
                        pico às 21:04
                      </span>
                    </div>
                  </div>

                  {/* Sparkline + bars composition */}
                  <div className="relative h-[220px] w-full">
                    {/* Grid lines */}
                    <div className="absolute inset-0 flex flex-col justify-between">
                      {[0, 1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent"
                        />
                      ))}
                    </div>

                    {/* Bar chart behind */}
                    <div className="absolute inset-x-0 bottom-0 flex h-full items-end gap-[6px] px-1">
                      {BAR_HEIGHTS.map((h, i) => (
                        <div
                          key={i}
                          className="bar-grow flex-1 rounded-sm bg-white/[0.06]"
                          style={{
                            height: `${h}%`,
                            animationDelay: `${i * 40}ms`,
                          }}
                        />
                      ))}
                    </div>

                    {/* Sparkline on top */}
                    <svg
                      className="sparkline absolute inset-0 h-full w-full"
                      viewBox="0 0 480 100"
                      preserveAspectRatio="none"
                      fill="none"
                    >
                      <defs>
                        <linearGradient
                          id="spark-fill"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop offset="0%" stopColor="#E8673C" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="#E8673C" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d={`${SPARKLINE_PATH} L 480 100 L 0 100 Z`}
                        fill="url(#spark-fill)"
                        stroke="none"
                      />
                      <path
                        d={SPARKLINE_PATH}
                        stroke="#E8673C"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    {/* Peak marker */}
                    <div className="absolute left-[62%] top-[8%] flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-brand ring-4 ring-brand/25" />
                      <div className="rounded-md border border-white/10 bg-[#0b0b0c]/90 px-2.5 py-1 font-mono text-[10px] text-white/80 backdrop-blur">
                        2.841 · +38%
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Side — event feed */}
              <div className="lg:col-span-4">
                <div className="border-b border-white/10 px-6 py-5 md:px-7">
                  <div className="flex items-center gap-2 text-white/40">
                    <Signal className="h-3.5 w-3.5" strokeWidth={1.75} />
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em]">
                      Event stream
                    </span>
                  </div>
                </div>
                <ul className="flex flex-col divide-y divide-white/10">
                  {EVENTS.map((event, i) => (
                    <li
                      key={`${event.time}-${i}`}
                      className="rise flex items-start gap-4 px-6 py-5 md:px-7"
                      style={{ animationDelay: `${i * 80 + 200}ms` }}
                    >
                      <div className="mt-1 flex flex-col items-center gap-2">
                        <span className={`h-2 w-2 rounded-full ${event.tone}`} />
                        <span className="h-8 w-px bg-white/10" />
                      </div>
                      <div className="flex flex-1 flex-col gap-0.5">
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="text-sm font-medium text-white">
                            {event.label}
                          </span>
                          <span className="font-mono text-[10px] text-white/40">
                            {event.time}
                          </span>
                        </div>
                        <span className="text-xs text-white/55">
                          {event.detail}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
