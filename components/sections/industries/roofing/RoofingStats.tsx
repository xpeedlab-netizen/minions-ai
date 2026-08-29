import { DollarSign, Zap, PhoneOff, CalendarCheck2 } from "lucide-react";

const items = [
  {
    value: "$520k+",
    unit: "Projected",
    label: "Annual Storm Revenue At Stake",
    sub: "From 3-4 saved replacement claims/wk",
    icon: DollarSign,
  },
  {
    value: "< 5s",
    unit: "Speed",
    label: "Damage Photo Text-Back",
    sub: "Sends photo upload link instantly",
    icon: Zap,
  },
  {
    value: "0",
    unit: "Missed",
    label: "Post-Storm Surge Losses",
    sub: "Handles 100+ concurrent storm calls",
    icon: PhoneOff,
  },
  {
    value: "100%",
    unit: "Synced",
    label: "ServiceTitan / Jobber Sync",
    sub: "Direct inspection slot booking",
    icon: CalendarCheck2,
  },
];

export default function RoofingStats() {
  return (
    <section className="bg-cream-dark/60 py-12 border-y border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {items.map((s) => (
            <div
              key={s.label}
              className="relative rounded-2xl border border-border/80 bg-white p-5 shadow-xs hover:border-teal/40 transition-colors"
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
