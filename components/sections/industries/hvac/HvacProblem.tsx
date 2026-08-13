import { Flame, Moon, Search, AlertCircle } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const cards = [
  {
    icon: Flame,
    iconColor: "text-coral-text bg-coral/15 border-coral/30",
    title: "The Heatwave Call Surge",
    subtitle: "Overflowing Office Lines",
    body: "When temperatures hit 98°, 200+ calls hit your office in a single afternoon. Your techs are on ladders, your office staff is swamped, and call #4 goes straight to voicemail.",
  },
  {
    icon: Moon,
    iconColor: "text-accent-blue bg-accent-blue/15 border-accent-blue/30",
    title: "The 11:30 PM Midnight Emergency",
    subtitle: "$8,500 System Replacements Lost",
    body: "Homeowners with dead AC units in July don't leave voicemails. If you don't answer at 11:30 PM, they immediately call competitor #2 and book an $8,500 system replacement.",
  },
  {
    icon: Search,
    iconColor: "text-teal bg-teal/15 border-teal/30",
    title: "The 5-Minute Google Search Race",
    subtitle: "First Responder Wins the Job",
    body: "Homeowners search 'HVAC repair near me' and message 3 contractors. If you don't text back in under 5 seconds, 78% of homeowners hire the first contractor who replies.",
  },
];

export default function HvacProblem() {
  return (
    <section className="bg-cream py-16 sm:py-24 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-coral/10 border border-coral/30 px-3.5 py-1 font-mono text-xs font-bold text-coral-text uppercase tracking-wider">
            <AlertCircle className="size-3.5" />
            <span>The Hidden Revenue Leaks in HVAC</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink text-balance leading-tight">
            Peak heatwave season means peak missed revenue.
          </h2>
          <p className="text-base text-ink/70 max-w-2xl mx-auto">
            In the HVAC industry, summer isn&apos;t just busy — it&apos;s expensive. Every missed call or slow text-back is a $1,000+ repair or $10,000 replacement handed directly to your competition.
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
