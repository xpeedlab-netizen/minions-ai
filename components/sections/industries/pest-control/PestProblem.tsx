import { Moon, RefreshCw, MapPinOff, AlertCircle } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const cards = [
  {
    icon: Moon,
    iconColor: "text-coral-text bg-coral/15 border-coral/30",
    title: "The 10:45 PM Panic Call Dropoff",
    subtitle: "Homeowners Won't Wait for Morning",
    body: "When a mother spots a wasp nest near the nursery at 11 PM, she won't leave a voicemail. If you don't answer on the 1st ring, she calls your competitor and hands them a $2,500 lifetime subscription.",
  },
  {
    icon: RefreshCw,
    iconColor: "text-accent-blue bg-accent-blue/15 border-accent-blue/30",
    title: "The One-Off Spray Trap",
    subtitle: "Missing Recurring Plan Conversions",
    body: "One-time $149 sprays don't build a 7-figure pest control business — recurring subscriptions do. If your front office forgets to pitch quarterly plans on every call, you bleed recurring MRR.",
  },
  {
    icon: MapPinOff,
    iconColor: "text-teal bg-teal/15 border-teal/30",
    title: "Route Disruption & Out-Of-Area Sinks",
    subtitle: "Wasted Gas & Low Tech Efficiency",
    body: "Sending technicians 35 miles away for a one-time $99 flea job burns fuel and disrupts your route density. Your AI must enforce zip code territory logic on every booking.",
  },
];

export default function PestProblem() {
  return (
    <section className="bg-cream py-16 sm:py-24 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-coral/10 border border-coral/30 px-3.5 py-1 font-mono text-xs font-bold text-coral-text uppercase tracking-wider">
            <AlertCircle className="size-3.5" />
            <span>The Hidden Revenue Leaks in Pest Control</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink text-balance leading-tight">
            Pest emergencies are high urgency — missed calls destroy recurring subscription growth.
          </h2>
          <p className="text-base text-ink/70 max-w-2xl mx-auto">
            In the pest control industry, customer LTV is built on quarterly subscriptions. Every missed emergency call isn&apos;t just a missed $149 spray — it&apos;s $2,500+ in lost recurring revenue.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08} className="h-full">
              <div className="h-full rounded-3xl border border-border/80 bg-white p-7 shadow-xs hover:shadow-md hover:border-teal/40 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`flex size-11 items-center justify-center rounded-2xl border ${c.iconColor}`}>
                      <c.icon className="size-5" />
                    </span>
                    <span className="font-mono text-[10px] font-bold text-ink/50 bg-cream px-2.5 py-1 rounded-full uppercase">
                      Revenue Leak #{i + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 font-heading font-extrabold text-xl text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs font-semibold text-teal">
                    {c.subtitle}
                  </p>

                  <p className="mt-3 text-sm text-ink/70 leading-relaxed">
                    {c.body}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/50 font-mono text-xs text-coral-text flex items-center justify-between">
                  <span>Estimated Annual Loss:</span>
                  <span className="font-bold font-mono">$150k+ / Year</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
