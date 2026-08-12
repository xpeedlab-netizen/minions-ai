"use client";

import { useState } from "react";
import { pricingPlans } from "@/lib/data/pricing";

export default function CostCalculator() {
  const [missedCalls, setMissedCalls] = useState(10);
  const [jobValue, setJobValue] = useState(500);
  const [closeRate, setCloseRate] = useState(30);

  const starterPrice = pricingPlans[0].price || "$299";

  // Calculations
  const missedOpportunities = missedCalls;
  const lostJobs = Math.round(missedOpportunities * (closeRate / 100));
  const lostRevenueWeekly = lostJobs * jobValue;
  const lostRevenueYearly = lostRevenueWeekly * 52;

  return (
    <section className="bg-cream py-16 sm:py-24 border-t border-border">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink text-balance">
            Calculate How Much Money You Lose to Missed Calls
          </h2>
          <p className="mt-4 text-lg text-ink/70">
            Adjust the sliders below to see your shop&apos;s lost revenue—and how quickly Minions.AI pays for itself.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Inputs */}
          <div className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm space-y-8">
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
                className="w-full accent-teal h-2 bg-cream rounded-lg appearance-none cursor-pointer"
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
                className="w-full accent-teal h-2 bg-cream rounded-lg appearance-none cursor-pointer"
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
                className="w-full accent-teal h-2 bg-cream rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>

          {/* Outputs */}
          <div className="rounded-2xl bg-ink p-6 sm:p-8 text-white relative overflow-hidden h-full flex flex-col justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-teal/20 to-transparent pointer-events-none" />
            <div className="relative z-10 space-y-8">
              <div>
                <p className="text-cream/70 text-sm uppercase tracking-wide font-mono">Estimated Lost Revenue</p>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-heading font-extrabold text-4xl sm:text-5xl text-white" aria-live="polite">
                    ${lostRevenueWeekly.toLocaleString()}
                  </span>
                  <span className="text-cream/50">/ week</span>
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-heading font-bold text-2xl text-white" aria-live="polite">
                    ${lostRevenueYearly.toLocaleString()}
                  </span>
                  <span className="text-cream/50">/ year</span>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10 mt-auto space-y-2">
                <p className="text-cream/90 leading-relaxed font-medium">
                  The <span className="font-semibold text-teal">{starterPrice}/month Starter Plan</span> pays for itself with just <span className="underline decoration-teal underline-offset-4">1 single saved job</span>.
                </p>
                <p className="text-xs text-cream/50 font-mono italic">
                  * Based on your custom inputs above.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
