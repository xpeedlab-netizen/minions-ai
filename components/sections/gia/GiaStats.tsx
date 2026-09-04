import { ShieldCheck, Zap, Star, RefreshCw } from "lucide-react";

const items = [
  {
    value: "0",
    unit: "Hours",
    label: "Manual CRM Data Entry",
    sub: "Every call & chat auto-logged",
    icon: ShieldCheck,
  },
  {
    value: "< 5s",
    unit: "Speed",
    label: "Automated SMS Follow-up",
    sub: "Instant text-back to missed leads",
    icon: Zap,
  },
  {
    value: "5x",
    unit: "Reviews",
    label: "Google Review Volume",
    sub: "Automated post-job review triggers",
    icon: Star,
  },
  {
    value: "100%",
    unit: "Managed",
    label: "Done-For-You Setup & Ops",
    sub: "We configure & run your pipelines",
    icon: RefreshCw,
  },
];

export default function GiaStats() {
  return (
    <section className="bg-cream-dark/60 py-12 border-y border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {items.map((s) => (
            <div
              key={s.label}
              className="relative rounded-2xl border border-border/80 bg-white p-5 shadow-xs hover:border-success/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-9 items-center justify-center rounded-xl bg-success/10 text-success">
                  <s.icon className="size-4.5" />
                </span>
                <span className="font-mono text-[10px] font-bold text-success uppercase tracking-wider bg-success/10 px-2 py-0.5 rounded-full">
                  {s.unit}
                </span>
              </div>
              <p className="mt-4 font-mono text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
                {s.value}
              </p>
              <p className="mt-1 font-heading font-bold text-sm text-ink">{s.label}</p>
              <p className="mt-1 font-mono text-[11px] text-ink/65">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
