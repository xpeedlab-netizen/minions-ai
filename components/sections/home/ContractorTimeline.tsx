"use client";

import { CONTRACTOR_DAY_TIMELINE } from "@/lib/data/site-content";
import Reveal from "@/components/ui/Reveal";
import { XCircle, CheckCircle2, Clock } from "lucide-react";

export default function ContractorTimeline() {
  return (
    <section className="bg-white py-16 sm:py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block rounded-full bg-teal/10 px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-teal font-bold mb-4">
            A Day in Your Shoes
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-ink text-balance">
            How Your Day Changes When You Deploy the AI Crew
          </h2>
          <p className="mt-4 text-lg text-ink/70 leading-relaxed">
            From 6:00 AM emergency calls to 8:30 PM kitchen-table paperwork, see how Minions.AI protects your hard-earned revenue every hour.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:-ml-px before:w-0.5 before:bg-border before:hidden sm:before:block">
          {CONTRACTOR_DAY_TIMELINE.map((item, idx) => (
            <Reveal key={item.time} delay={idx * 0.1}>
              <div className="rounded-3xl border border-border bg-cream p-6 sm:p-8 shadow-sm hover:border-teal/30 transition-all">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-border pb-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 bg-ink text-white px-3 py-1 rounded-lg font-mono text-sm font-bold">
                      <Clock className="size-4 text-teal" /> {item.time}
                    </span>
                    <h3 className="font-heading font-bold text-xl text-ink">{item.title}</h3>
                  </div>
                  <span className="bg-teal/10 text-teal text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-teal/20">
                    Protected by {item.crewHero}
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Without Minions.AI */}
                  <div className="rounded-2xl bg-white border border-red-200 p-5 space-y-2">
                    <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
                      <XCircle className="size-5 shrink-0" />
                      <span>Without Minions.AI (The Daily Grind)</span>
                    </div>
                    <p className="text-sm text-ink/70 leading-relaxed font-medium">
                      {item.without}
                    </p>
                  </div>

                  {/* With Minions.AI */}
                  <div className="rounded-2xl bg-white border border-teal/40 p-5 space-y-2 shadow-sm">
                    <div className="flex items-center gap-2 text-teal font-bold text-sm">
                      <CheckCircle2 className="size-5 shrink-0" />
                      <span>With Minions.AI (Automated Growth)</span>
                    </div>
                    <p className="text-sm text-ink/90 leading-relaxed font-medium">
                      {item.with}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
