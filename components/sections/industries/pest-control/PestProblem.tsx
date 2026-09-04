import { Moon, RefreshCw, MapPinOff, AlertCircle } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const cards = [
  {
    icon: Moon,
    iconColor: "text-coral-text bg-coral/15 border-coral/30",
    title: "10:45 PM Panic Calls",
    subtitle: "Missed Emergency Dropoff",
    body: "Homeowners with late-night infestations call down Google until someone answers. Rex locks the deal on ring one.",
    loss: "$60k+ / Year",
  },
  {
    icon: RefreshCw,
    iconColor: "text-accent-blue bg-accent-blue/15 border-accent-blue/30",
    title: "The One-Off Spray Trap",
    subtitle: "Lost Subscription LTV",
    body: "Single sprays bleed margin. Rex automatically pitches recurring $59/mo protection on every inbound call.",
    loss: "$75k+ / Year",
  },
  {
    icon: MapPinOff,
    iconColor: "text-teal bg-teal/15 border-teal/30",
    title: "Route Disruption",
    subtitle: "Wasted Gas & Drive Time",
    body: "Zero wasted fuel on 35-mile one-offs. Rex enforces strict zip code territory and route density logic.",
    loss: "$25k+ / Year",
  },
];

export default function PestProblem() {
  return (
    <section className="bg-cream py-16 sm:py-24 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-coral/10 border border-coral/30 px-3.5 py-1 font-mono text-xs font-bold text-coral-text uppercase tracking-wider">
            <AlertCircle className="size-3.5" />
            <span>The 3 Costliest Pest Revenue Leaks</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-ink text-balance leading-tight">
            Pest emergencies are high urgency — missed calls destroy recurring subscription growth.
          </h2>
          <p className="text-base text-ink/70 max-w-2xl mx-auto">
            Every missed emergency call isn&apos;t just a missed $149 spray — it&apos;s $2,500+ in lost recurring revenue.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08} className="h-full">
              <div className="h-full rounded-3xl border border-border/80 bg-white p-6 shadow-xs hover:shadow-md hover:border-teal/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`flex size-10 items-center justify-center rounded-2xl border ${c.iconColor}`}>
                      <c.icon className="size-5" />
                    </span>
                    <span className="font-mono text-[10px] font-bold text-ink/65 bg-cream px-2.5 py-1 rounded-full uppercase">
                      Leak #{i + 1}
                    </span>
                  </div>

                  <h3 className="mt-5 font-heading font-bold text-lg text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-0.5 font-mono text-xs font-semibold text-teal">
                    {c.subtitle}
                  </p>

                  <p className="mt-2.5 text-sm text-ink/70 leading-relaxed">
                    {c.body}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-border/50 font-mono text-xs text-coral-text flex items-center justify-between">
                  <span>Estimated Loss:</span>
                  <span className="font-bold font-mono">{c.loss}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
