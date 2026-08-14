"use client";

import { useState } from "react";
import { Clock, XCircle, CheckCircle2 } from "lucide-react";
import Section, { SectionHeading, Eyebrow, SectionLead } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { CONTRACTOR_DAY_TIMELINE } from "@/lib/data/site-content";
import { pricingPlans } from "@/lib/data/pricing";
import { BOOKING_CALENDAR_URL } from "@/lib/data/placeholders";

/**
 * "The Real Cost" — merges what were three consecutive full bands (Problem,
 * ContractorTimeline, CostCalculator) into one argument with three escalating beats.
 *
 * All three were making the same case — missed calls cost you money — so the visitor
 * paid the attention cost three times for one idea, across ~1,800px. Now it is one
 * section header and three h3 beats: the claim, the day it happens over, the number.
 *
 * Copy is unchanged throughout; only its arrangement moved.
 */

const problemCards = [
  {
    title: "High-Margin 2 AM Emergencies",
    body: "Emergency service calls carry your highest profit margins. If you don't answer immediately, callers keep moving down Google Search until someone picks up.",
  },
  {
    title: "Peak-Hour Call Overlap",
    body: "Four calls hit simultaneously while you're covered in grease or wiring. Voicemail takes a message—your competitor takes the revenue.",
  },
  {
    title: "Call Centers Fall Short",
    body: "Traditional answering services put callers on hold, charge per minute, and read generic scripts. Rex quotes exact pricing and books jobs on the spot.",
  },
];

export default function TheRealCost() {
  const [missedCalls, setMissedCalls] = useState(10);
  const [jobValue, setJobValue] = useState(500);
  const [closeRate, setCloseRate] = useState(30);

  const starterPrice = pricingPlans[0].price || "$299";

  const lostJobs = Math.round(missedCalls * (closeRate / 100));
  const lostRevenueWeekly = lostJobs * jobValue;
  const lostRevenueYearly = lostRevenueWeekly * 52;

  return (
    <Section tone="white" width="wide" density="feature">
      {/* ---- Beat 1: the claim ---- */}
      <div className="max-w-3xl">
        <SectionHeading className="text-ink">
          85% of Callers Who Hit Voicemail Hire Your Competitor Next.
        </SectionHeading>
        <SectionLead className="max-w-2xl">
          When your hands are tied on a job site, unanswered calls mean lost business. By the time you finally check voicemail, the customer has already booked with the shop that answered on the first ring.
        </SectionLead>
      </div>

      <ul className="mt-10 grid sm:grid-cols-3 gap-6">
        {problemCards.map((c, i) => (
          <Reveal
            key={c.title}
            as="li"
            delay={i * 0.08}
            className="flex h-full flex-col rounded-2xl border border-border bg-cream p-6 hover:border-teal/40 transition-colors"
          >
            <h3 className="font-heading font-bold text-ink text-lg tracking-[-0.01em]">{c.title}</h3>
            <p className="mt-3 text-sm text-ink/70 leading-relaxed">{c.body}</p>
          </Reveal>
        ))}
      </ul>

      {/* ---- Beat 2: the day it happens over ---- */}
      <div className="mt-20">
        <Eyebrow className="mb-5">A Day in Your Shoes</Eyebrow>
        <SectionHeading as="h3" className="text-ink">
          How Your Day Changes When You Deploy the AI Crew
        </SectionHeading>

        <SectionLead className="max-w-2xl">
          From 6:00 AM emergency calls to 8:30 PM kitchen-table paperwork, see how Minions.AI protects your hard-earned revenue every hour.
        </SectionLead>

        {/*
          Side-by-side without/with contrast, one row per hour of the day. The two
          labelled panels ARE the argument — collapsing them into a single narrow
          column loses the comparison entirely, so the row stays full width.

          The spine sits on the left at every breakpoint and the cards are inset past
          it, so it reads as an actual timeline rather than running behind the cards.
        */}
        <ol className="mt-10 space-y-6 relative before:absolute before:top-2 before:bottom-2 before:left-[7px] before:w-0.5 before:bg-border sm:before:left-2">
          {CONTRACTOR_DAY_TIMELINE.map((item, i) => (
            <Reveal key={item.time} as="li" delay={i * 0.08} className="relative pl-8 sm:pl-10">
              {/* Spine node */}
              <span
                className="absolute left-0 top-2 size-4 rounded-full border-2 border-teal bg-white sm:left-[3px]"
                aria-hidden
              />

              <div className="rounded-3xl border border-border bg-cream p-5 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-4 mb-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 bg-ink text-white px-3 py-1 rounded-lg font-mono text-sm font-bold">
                      <Clock className="size-4 text-teal" aria-hidden /> {item.time}
                    </span>
                    <h4 className="font-heading font-bold text-lg sm:text-xl text-ink">
                      {item.title}
                    </h4>
                  </div>
                  <span className="shrink-0 self-start sm:self-auto bg-teal/10 text-teal text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-teal/20">
                    Protected by {item.crewHero}
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* Without */}
                  <div className="rounded-2xl bg-white border border-coral-text/20 p-5 space-y-2">
                    <div className="flex items-center gap-2 text-coral-text font-bold text-sm">
                      <XCircle className="size-5 shrink-0" aria-hidden />
                      <span>Without Minions.AI (The Daily Grind)</span>
                    </div>
                    <p className="text-sm text-ink/70 leading-relaxed font-medium">
                      {item.without}
                    </p>
                  </div>

                  {/* With */}
                  <div className="rounded-2xl bg-white border border-teal/30 p-5 space-y-2">
                    <div className="flex items-center gap-2 text-teal font-bold text-sm">
                      <CheckCircle2 className="size-5 shrink-0" aria-hidden />
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
        </ol>
      </div>

      {/* ---- Beat 3: the number ---- */}
      <div className="mt-20">
        <SectionHeading as="h3" className="text-ink">
          Calculate How Much Money You Lose to Missed Calls
        </SectionHeading>
        <SectionLead className="max-w-2xl">
          Adjust the sliders below to see your shop&apos;s lost revenue—and how quickly Minions.AI pays for itself.
        </SectionLead>

        <div className="mt-10 grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Inputs */}
          <div className="rounded-2xl border border-border bg-cream p-6 sm:p-8 space-y-8">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="missedCalls" className="font-medium text-ink">Missed calls per week</label>
                <span className="font-mono text-teal font-bold">{missedCalls}</span>
              </div>
              <input
                id="missedCalls"
                type="range"
                min="1"
                max="100"
                value={missedCalls}
                onChange={(e) => setMissedCalls(Number(e.target.value))}
                className="w-full accent-teal h-2 bg-white rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="jobValue" className="font-medium text-ink">Average job value ($)</label>
                <span className="font-mono text-teal font-bold">${jobValue.toLocaleString()}</span>
              </div>
              <input
                id="jobValue"
                type="range"
                min="50"
                max="50000"
                step="50"
                value={jobValue}
                onChange={(e) => setJobValue(Number(e.target.value))}
                className="w-full accent-teal h-2 bg-white rounded-lg appearance-none cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="closeRate" className="font-medium text-ink">Estimated close rate (%)</label>
                <span className="font-mono text-teal font-bold">{closeRate}%</span>
              </div>
              <input
                id="closeRate"
                type="range"
                min="1"
                max="100"
                value={closeRate}
                onChange={(e) => setCloseRate(Number(e.target.value))}
                className="w-full accent-teal h-2 bg-white rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>

          {/* Outputs */}
          <div className="rounded-2xl bg-ink p-6 sm:p-8 text-white relative overflow-hidden flex flex-col justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-teal/20 to-transparent pointer-events-none" />
            <div className="relative z-10 space-y-8">
              <div>
                <p className="text-cream/70 text-sm uppercase tracking-wide font-mono">Estimated Lost Revenue</p>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-heading font-bold text-4xl sm:text-5xl tabular-nums tracking-[-0.02em] text-white" aria-live="polite">
                    ${lostRevenueWeekly.toLocaleString()}
                  </span>
                  <span className="text-cream/50">/ week</span>
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-heading font-bold text-2xl tabular-nums text-white" aria-live="polite">
                    ${lostRevenueYearly.toLocaleString()}
                  </span>
                  <span className="text-cream/50">/ year</span>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10 space-y-2">
                <p className="text-cream/90 leading-relaxed font-medium">
                  The <span className="font-semibold text-teal">{starterPrice}/month Starter Plan</span> pays for itself with just <span className="underline decoration-teal underline-offset-4">1 single saved job</span>.
                </p>
                <p className="text-xs text-cream/50 font-mono italic">
                  * Based on your custom inputs above.
                </p>
              </div>

              {/*
                The CTA this section was missing. Previously the visitor watched their own
                money appear on screen and had nowhere to click — the start of a six-section
                CTA desert.
              */}
              <Button
                href={BOOKING_CALENDAR_URL}
                size="lg"
                showArrow
                className="w-full"
              >
                Stop the leak — book a call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
