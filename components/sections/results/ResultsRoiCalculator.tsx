"use client";

import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";

export default function ResultsRoiCalculator() {
  const [callsMissed, setCallsMissed] = useState(5);
  const [jobValue, setJobValue] = useState(1200);
  const [closeRate, setCloseRate] = useState(40);

  const weeklyLoss = useMemo(
    () => Math.round(callsMissed * jobValue * (closeRate / 100)),
    [callsMissed, jobValue, closeRate]
  );
  const yearlyLoss = weeklyLoss * 52;

  return (
    <section className="bg-[#F4EDE5] py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink text-balance">
            The math, on your numbers.
          </h2>
          <p className="mt-4 text-ink/70 leading-relaxed max-w-md">
            Every missed call is a missed opportunity. When you&apos;re in the crawlspace or on a
            roof, your business shouldn&apos;t stop. Calculate what&apos;s walking out your door.
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm font-medium text-teal">
            <Calculator className="size-4" />
            Transparent Formula
          </div>
          <div className="mt-3 rounded-xl border border-border bg-white px-4 py-3 font-mono text-sm text-ink">
            Calls Missed × Job Value × Close Rate ={" "}
            <span className="text-coral-text font-bold">Lost Revenue</span>
          </div>
        </div>

        <div className="rounded-2xl border-2 border-teal bg-white p-6 sm:p-8">
          <div className="space-y-5">
            <label className="block">
              <span className="font-mono text-xs uppercase tracking-wide text-ink/50">
                Calls Missed Per Week
              </span>
              <input
                type="number"
                min={0}
                value={callsMissed}
                onChange={(e) => setCallsMissed(Number(e.target.value) || 0)}
                className="mt-2 min-h-12 w-full rounded-xl bg-cream px-4 text-lg font-heading font-bold text-ink focus:outline-none focus:ring-2 focus:ring-teal"
              />
            </label>
            <label className="block">
              <span className="font-mono text-xs uppercase tracking-wide text-ink/50">
                Average Job Value ($)
              </span>
              <input
                type="number"
                min={0}
                value={jobValue}
                onChange={(e) => setJobValue(Number(e.target.value) || 0)}
                className="mt-2 min-h-12 w-full rounded-xl bg-cream px-4 text-lg font-heading font-bold text-ink focus:outline-none focus:ring-2 focus:ring-teal"
              />
            </label>
            <label className="block">
              <span className="font-mono text-xs uppercase tracking-wide text-ink/50">
                Close Rate (%)
              </span>
              <input
                type="number"
                min={0}
                max={100}
                value={closeRate}
                onChange={(e) => setCloseRate(Number(e.target.value) || 0)}
                className="mt-2 min-h-12 w-full rounded-xl bg-cream px-4 text-lg font-heading font-bold text-ink focus:outline-none focus:ring-2 focus:ring-teal"
              />
            </label>
          </div>

          <div className="mt-6 border-t border-border pt-5">
            <p className="font-mono text-xs uppercase tracking-wide text-coral-text">
              Weekly Lost Revenue
            </p>
            <p className="mt-1 font-heading font-extrabold text-4xl text-coral-text">
              ${weeklyLoss.toLocaleString()}
            </p>
            <p className="mt-1 text-sm text-ink/50">
              That&apos;s ${yearlyLoss.toLocaleString()} per year you aren&apos;t seeing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
