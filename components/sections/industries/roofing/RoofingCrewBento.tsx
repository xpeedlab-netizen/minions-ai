import { PhoneCall, MessageSquare, Bot, Layers, FileText, CheckCircle2, Sparkles } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const tags = [
  "24/7 Storm Dispatch",
  "ServiceTitan & Jobber",
  "Insurance Intake",
  "Damage Photo Links",
  "5-Star Reviews",
];

export default function RoofingCrewBento() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal/10 border border-teal/30 px-3.5 py-1 font-mono text-xs font-bold text-teal uppercase tracking-wider">
            <Sparkles className="size-3.5" />
            <span>Dedicated Roofing AI Crew Architecture</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-ink text-balance leading-tight">
            Meet your 24/7 specialized roofing front-office crew.
          </h2>
          <p className="text-base text-ink/70 max-w-2xl mx-auto">
            From storm-surge phone dispatching and damage photo text-backs to automated inspection bookings.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {/* Card 1: Rex — 24/7 AI Voice Dispatcher (Featured Large Card) */}
          <Reveal className="lg:col-span-2">
            <div className="relative h-full rounded-3xl border border-ink/20 bg-ink p-7 text-white shadow-xl overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 size-64 rounded-full bg-teal/20 blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-teal/20 text-teal-300 border border-teal/40">
                    <PhoneCall className="size-5" />
                  </span>
                  <span className="font-mono text-xs font-bold text-teal-300 bg-teal/20 border border-teal/40 px-3 py-1 rounded-full uppercase">
                    Rex — Voice Chief Dispatcher
                  </span>
                </div>

                <h3 className="mt-6 font-heading font-bold text-2xl text-white">
                  24/7 Storm-Surge Voice Answering with Insurance Intake
                </h3>
                <p className="mt-2.5 text-sm text-white/75 leading-relaxed max-w-xl">
                  Answers 200+ storm calls concurrently, collects insurance policy numbers, quotes emergency tarping fees, and books roof inspection slots in ServiceTitan or Jobber.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-white/80"
                  >
                    <CheckCircle2 className="size-3 text-teal" />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Card 2: Zip — 5-Second Speed to Lead */}
          <Reveal delay={0.05}>
            <div className="relative h-full rounded-3xl border border-coral/30 bg-coral/10 p-7 text-ink shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-coral/20 text-coral-text">
                    <MessageSquare className="size-5" />
                  </span>
                  <span className="font-mono text-[11px] font-bold text-coral-text bg-coral/20 px-2.5 py-1 rounded-full uppercase">
                    Zip — Speed Agent
                  </span>
                </div>

                <h3 className="mt-6 font-heading font-bold text-xl text-ink">
                  Instant Damage Photo Link
                </h3>
                <p className="mt-2 text-sm text-ink/75 leading-relaxed">
                  Texts missed callers in &lt; 5 seconds with a photo upload link to collect roof damage pictures before storm chasers arrive.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 font-mono text-xs text-ink/80 flex items-center justify-between">
                <span>Response Speed</span>
                <span className="font-bold text-coral-text">&lt; 5 Seconds</span>
              </div>
            </div>
          </Reveal>

          {/* Card 3: Pip — Support AI */}
          <Reveal delay={0.1}>
            <div className="relative h-full rounded-3xl border border-border bg-white p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <span className="flex size-11 items-center justify-center rounded-2xl bg-accent-blue/10 text-accent-blue border border-accent-blue/30">
                  <Bot className="size-5" />
                </span>

                <h3 className="mt-6 font-heading font-bold text-xl text-ink">
                  Pip — 24/7 Web Chat Support
                </h3>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">
                  Answers website questions about shingle warranties, insurance claim processes, deductibles, and timelines.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 font-mono text-xs text-ink/60 flex items-center justify-between">
                <span>Knowledge Base</span>
                <span className="font-bold text-accent-blue">100% Grounded</span>
              </div>
            </div>
          </Reveal>

          {/* Card 4: Gia — CRM & Review Autopilot */}
          <Reveal delay={0.15}>
            <div className="relative h-full rounded-3xl border border-border bg-white p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <span className="flex size-11 items-center justify-center rounded-2xl bg-success/10 text-success border border-success/30">
                  <Layers className="size-5" />
                </span>

                <h3 className="mt-6 font-heading font-bold text-xl text-ink">
                  Gia — CRM &amp; Review Engine
                </h3>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">
                  Sends 24h/1h inspection reminders and triggers 5-star Google review requests post-claim settlement.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 font-mono text-xs text-ink/60 flex items-center justify-between">
                <span>Google Reviews</span>
                <span className="font-bold text-success">Automated 1-Click</span>
              </div>
            </div>
          </Reveal>

          {/* Card 5: Otto — Insurance Claim & Permit AI */}
          <Reveal delay={0.2}>
            <div className="relative h-full rounded-3xl border border-ink/20 bg-ink p-7 text-white shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-white/15 text-white">
                    <FileText className="size-5" />
                  </span>
                  <span className="font-mono text-[11px] font-bold text-white bg-white/20 px-2.5 py-1 rounded-full uppercase">
                    Otto — Insurance Doc AI
                  </span>
                </div>

                <h3 className="mt-6 font-heading font-bold text-xl text-white">
                  Otto — Claim &amp; Permit Docs
                </h3>
                <p className="mt-2 text-sm text-white/80 leading-relaxed">
                  Automates adjuster report extractions, municipal roofing permits, and manufacturer warranty registrations.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/15 font-mono text-xs text-white/90 flex items-center justify-between">
                <span>Document Automation</span>
                <span className="font-bold text-teal-300">Zero Paperwork Delays</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
