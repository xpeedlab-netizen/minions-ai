import { CloudLightning, HardHat, FileX2, AlertCircle } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const cards = [
  {
    icon: CloudLightning,
    iconColor: "text-coral-text bg-coral/15 border-coral/30",
    title: "The Post-Hail Call Avalanche",
    subtitle: "Busy Lines Lose $18,500 Claims",
    body: "When a severe storm hits your county, 200+ homeowners call at once. Busy signals and voicemails drive panicked homeowners directly to out-of-town storm chasers who answer first.",
  },
  {
    icon: HardHat,
    iconColor: "text-teal bg-teal/15 border-teal/30",
    title: "The On-The-Roof Missed Phone Call",
    subtitle: "Estimators Can't Stop Mid-Climb",
    body: "Your crew is up on a 2-story pitch roof wearing harnesses and running nail guns. They literally cannot answer incoming phone calls, letting hot leads slip away unserved.",
  },
  {
    icon: FileX2,
    iconColor: "text-accent-blue bg-accent-blue/15 border-accent-blue/30",
    title: "Incomplete Insurance Intakes",
    subtitle: "Wasted Sales Rep Visits",
    body: "Estimators arrive at driveways with zero carrier info, no claim policy numbers, and no roof damage photos. Sales reps waste 30 minutes doing basic administrative paperwork.",
  },
];

export default function RoofingProblem() {
  return (
    <section className="bg-cream py-16 sm:py-24 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-coral/10 border border-coral/30 px-3.5 py-1 font-mono text-xs font-bold text-coral-text uppercase tracking-wider">
            <AlertCircle className="size-3.5" />
            <span>The Hidden Revenue Leaks in Roofing</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink text-balance leading-tight">
            Storm surges bring high revenue — but only if you answer the phone.
          </h2>
          <p className="text-base text-ink/70 max-w-2xl mx-auto">
            Roofing is a high-ticket, speed-to-lead business. If your office misses a call during a storm event, that $18,500 replacement check goes straight to your competitor.
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
                  <span className="font-bold font-mono">$180k+ / Year</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
