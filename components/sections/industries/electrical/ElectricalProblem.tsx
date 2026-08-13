import { Zap, Moon, MapPinOff, AlertCircle } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const cards = [
  {
    icon: Moon,
    iconColor: "text-coral-text bg-coral/15 border-coral/30",
    title: "The 11:15 PM Arcing Breaker Emergency",
    subtitle: "Safety Hazards Don't Wait",
    body: "When a breaker panel arcs or smells like burning plastic at midnight, panicked homeowners don't leave voicemails. If you don't answer on the 1st ring, they call competitor #2 and hand them a $4,850 panel upgrade job.",
  },
  {
    icon: Zap,
    iconColor: "text-accent-blue bg-accent-blue/15 border-accent-blue/30",
    title: "The $4,500 EV Charger & Upgrade Loss",
    subtitle: "High-Ticket Installation Dropoff",
    body: "Homeowners buying Tesla/EV chargers shop around aggressively. If your office takes 45 minutes to respond, 78% of leads have already booked an estimate with another electrical contractor.",
  },
  {
    icon: MapPinOff,
    iconColor: "text-teal bg-teal/15 border-teal/30",
    title: "Out-Of-Area Troubleshooting Sinkhole",
    subtitle: "Wasted Gas & Drive Time",
    body: "Dispatching master electricians 35 miles away for a $120 outlet fix burns billable hours and blocks high-margin local jobs. Your AI must enforce zip code territory logic on every booking.",
  },
];

export default function ElectricalProblem() {
  return (
    <section className="bg-cream py-16 sm:py-24 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-coral/10 border border-coral/30 px-3.5 py-1 font-mono text-xs font-bold text-coral-text uppercase tracking-wider">
            <AlertCircle className="size-3.5" />
            <span>The Hidden Revenue Leaks in Electrical</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink text-balance leading-tight">
            Electrical emergencies are high-hazard — missed calls lose big ticket jobs.
          </h2>
          <p className="text-base text-ink/70 max-w-2xl mx-auto">
            In the electrical contracting industry, response speed isn&apos;t just customer service — it&apos;s your bottom line. Every missed call is a high-margin panel upgrade or generator install lost to your competitor.
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
                  <span className="font-bold font-mono">$130k+ / Year</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
