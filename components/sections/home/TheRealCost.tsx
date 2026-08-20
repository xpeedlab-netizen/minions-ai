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
          Every Call That Hits Voicemail Is a Job Your Competitor Books Instead.
        </SectionHeading>
        <SectionLead className="max-w-2xl">
          When your hands are tied on a job site, unanswered calls mean lost business. By the time you finally check voicemail, the customer has already booked with the shop that answered on the first ring.
        </SectionLead>
      </div>

      {/*
        Hairline-divided columns, not boxes — matches the pattern Proof already
        established for this exact "three things, stated plainly" shape. Bordered
        cream cards here duplicated a container the page already uses six other
        places; the hairline rule says the same thing with one line instead of four.
      */}
      <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-3 sm:divide-x sm:divide-border">
        {problemCards.map((c, i) => (
          <Reveal key={c.title} as="li" delay={i * 0.08} className="sm:px-8 sm:first:pl-0">
            <h3 className="font-heading font-bold text-ink text-lg tracking-[-0.01em]">{c.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">{c.body}</p>
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
          One flowing row per hour instead of a stacked pair of full-width panels.
          The old layout gave "without" and "with" equal-sized boxes with duplicate
          borders and headers — 5 rows of that ran to ~1,400px of near-identical
          card chrome before saying anything new. The time and crew name now read
          as a compact label column; without -> with reads as one sentence pair
          separated by an arrow, so the eye tracks the transformation in one line
          instead of re-reading two headers per row.
        */}
        <ol className="mt-10 divide-y divide-border border-t border-border">
          {CONTRACTOR_DAY_TIMELINE.map((item, i) => (
            <Reveal key={item.time} as="li" delay={i * 0.06} className="py-7 sm:py-8">
              <div className="sm:grid sm:grid-cols-[9rem_1fr] sm:gap-8">
                <div className="mb-3 flex items-center gap-2 sm:mb-0 sm:flex-col sm:items-start sm:gap-1.5">
                  <span className="inline-flex items-center gap-1.5 font-mono text-sm font-bold text-ink">
                    <Clock className="size-4 text-teal" aria-hidden /> {item.time}
                  </span>
                  <span className="font-mono text-[0.6875rem] font-bold uppercase tracking-wider text-teal">
                    {item.crewHero}
                  </span>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-lg text-ink">{item.title}</h4>
                  <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-start">
                    <p className="flex gap-2 text-sm leading-relaxed text-ink/55 sm:flex-1">
                      <XCircle className="mt-0.5 size-4 shrink-0 text-coral-text/70" aria-hidden />
                      {item.without}
                    </p>
                    <p className="flex gap-2 text-sm font-medium leading-relaxed text-ink sm:flex-1">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden />
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
