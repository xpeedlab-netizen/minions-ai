import { PhoneMissed, Scale, Car, AlertCircle } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const cards = [
  {
    icon: PhoneMissed,
    iconColor: "text-coral-text bg-coral/15 border-coral/30",
    title: "The 90-Second Zillow Dropoff",
    subtitle: "78% Rule: First Agent Wins",
    body: "Homebuyers calling off yard signs or Zillow hang up on voicemail and immediately call the next listing agent. Alex secures the showing on ring one.",
    loss: "$180k+ / Year in Lost GCI",
  },
  {
    icon: Scale,
    iconColor: "text-accent-blue bg-accent-blue/15 border-accent-blue/30",
    title: "The Post-NAR Exclusivity Trap",
    subtitle: "Unrepresented Buyer Risk",
    body: "Showing homes without verifying signed buyer agreements risks MLS compliance fines. Alex gates exclusivity upfront before any showing is booked.",
    loss: "Avoids $5,000+ MLS Penalties",
  },
  {
    icon: Car,
    iconColor: "text-teal bg-teal/15 border-teal/30",
    title: "Weekend Showing Disruption",
    subtitle: "In-Car Phone Burnout",
    body: "Driving between open houses while missing $20,000 listing consultation calls. Alex books both buyer tours and seller CMA walkthroughs automatically.",
    loss: "$120k+ / Year in Lost Listings",
  },
];

export default function RealEstateProblem() {
  return (
    <section className="bg-cream py-16 sm:py-24 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-coral/10 border border-coral/30 px-3.5 py-1 font-mono text-xs font-bold text-coral-text uppercase tracking-wider">
            <AlertCircle className="size-3.5" />
            <span>The 3 Costliest Real Estate Revenue Leaks</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-ink text-balance leading-tight">
            High commission stakes mean missed calls cost small agencies hundreds of thousands.
          </h2>
          <p className="text-base text-ink/70 max-w-2xl mx-auto">
            Every missed inbound call isn&apos;t just a missed message — it&apos;s a $15,000 to $30,000 commission check handed directly to your local competitor.
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
                    <span className="font-mono text-[10px] font-bold text-ink/50 bg-cream px-2.5 py-1 rounded-full uppercase">
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
                  <span>Estimated Impact:</span>
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
