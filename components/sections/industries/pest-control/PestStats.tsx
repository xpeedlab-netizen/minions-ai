import { DollarSign, Zap, PhoneOff, CalendarCheck2 } from "lucide-react";

/**
 * CAPABILITIES, NOT RESULTS.
 *
 * These cards used to read as outcomes we had produced ("$640k+ Annual Contract Value
 * At Stake", "0 Swarm-Season Losses", "100% Synced"). We have no customer evidence
 * behind those numbers, and a number presented as achieved proof that cannot be
 * sourced is the fastest way to lose a buyer who checks. See
 * lib/data/customer-proof.ts, which is still empty.
 *
 * So each card now states what the system is BUILT to do, and any figure is labelled
 * as an illustration of the buyer's own exposure rather than our track record. When
 * real customer numbers exist, they belong here with a named source.
 */
const items = [
  {
    value: "$640k+",
    unit: "Illustrative",
    label: "Recurring Value You Are Protecting",
    sub: "Example only: 5-8 saved quarterly plans/wk at your own contract value",
    icon: DollarSign,
  },
  {
    value: "< 5s",
    unit: "Designed",
    label: "Pest Photo Text-Back",
    sub: "Texts the species photo link while the caller is still on the line",
    icon: Zap,
  },
  {
    value: "24/7",
    unit: "Coverage",
    label: "Built For Swarm Season",
    sub: "Answers wasp and rodent calls at 2 AM, weekends and peak",
    icon: PhoneOff,
  },
  {
    value: "Native",
    unit: "Integration",
    label: "FieldRoutes & PestPac Sync",
    sub: "Books direct, with route density rules you set",
    icon: CalendarCheck2,
  },
];

export default function PestStats() {
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
              <p className="mt-1 font-mono text-[11px] text-ink/65">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
