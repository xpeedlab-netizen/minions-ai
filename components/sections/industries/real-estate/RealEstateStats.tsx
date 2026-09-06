import { DollarSign, Zap, Scale, CalendarCheck2 } from "lucide-react";

/**
 * CAPABILITIES, NOT RESULTS. Same rule as PestStats — see the note there.
 *
 * Two of these were engineering measurements ("< 800ms" latency, "87ms" lookup)
 * printed as marketing proof. A precise millisecond figure invites a buyer to hold us
 * to it on their network and their CRM, where we do not control the result, so they
 * now describe the behaviour instead of quoting a number we would have to defend.
 *
 * "100% Compliant" was the riskiest claim on either page: Fair Housing is a legal
 * exposure, and guaranteeing perfect compliance is a promise we cannot make on a
 * customer's behalf. Compliance is the BROKERAGE's obligation and the agent is one
 * control inside it, so every Fair Housing string on this page (here, the hero, and
 * the page metadata) now says the agent FOLLOWS RULES THE CUSTOMER APPROVES rather
 * than that it enforces or guarantees the law. Keep that framing if you reword these.
 */
const items = [
  {
    value: "$360k+",
    unit: "Illustrative",
    label: "Commission Pipeline You Are Protecting",
    sub: "Example only: 2 saved deals a month at your own average commission",
    icon: DollarSign,
  },
  {
    value: "Sub-second",
    unit: "Designed",
    label: "Natural Voice Cadence",
    sub: "Answers without the pause that tells a caller it is a bot",
    icon: Zap,
  },
  {
    value: "Your Rules",
    unit: "Guardrails",
    label: "Fair Housing & Post-NAR",
    sub: "Follows the guardrails and escalation rules you approve",
    icon: Scale,
  },
  {
    value: "Live",
    unit: "Integration",
    label: "Google Cal & CRM Sync",
    sub: "Checks real availability before it offers a slot",
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
              <p className="mt-1 font-mono text-[11px] text-ink/65">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
