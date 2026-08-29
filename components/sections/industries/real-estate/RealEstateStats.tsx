import { DollarSign, Zap, Scale, CalendarCheck2 } from "lucide-react";

const items = [
  {
    value: "$360k+",
    unit: "Annual GCI",
    label: "Commission Pipeline At Stake",
    sub: "From 2 saved buyer/seller deals per month",
    icon: DollarSign,
  },
  {
    value: "< 800ms",
    unit: "Latency",
    label: "Natural Voice Cadence",
    sub: "Human-grade speed with Cartesia & Gemini",
    icon: Zap,
  },
  {
    value: "100%",
    unit: "Compliant",
    label: "Fair Housing & Post-NAR",
    sub: "Zero-tolerance crime & exclusivity deflection",
    icon: Scale,
  },
  {
    value: "87ms",
    unit: "Lookup",
    label: "Google Cal & CRM Sync",
    sub: "Follow Up Boss, KVCore & EspoCRM ready",
    icon: CalendarCheck2,
  },
];

export default function RealEstateStats() {
  return (
    <section className="bg-cream-dark/60 py-12 border-y border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {items.map((s) => (
            <div
              key={s.label}
              className="relative rounded-2xl border border-border/80 bg-white p-5 shadow-sm hover:shadow-xl hover:border-teal/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-9 items-center justify-center rounded-xl bg-teal/10 text-teal">
                  <s.icon className="size-4.5" />
                </span>
                <span className="font-mono text-[10px] font-bold text-teal uppercase tracking-wider bg-teal/10 px-2 py-0.5 rounded-full">
                  {s.unit}
                </span>
              </div>
              <p className="mt-4 font-mono text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
                {s.value}
              </p>
              <p className="mt-1 font-heading font-bold text-sm text-ink">{s.label}</p>
              <p className="mt-1 font-mono text-[11px] text-ink/60">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
