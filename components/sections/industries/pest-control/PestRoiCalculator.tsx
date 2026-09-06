"use client";

import { useState } from "react";
import { Calculator, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import { BOOKING_CALENDAR_URL } from "@/lib/data/placeholders";
import { ANNUAL_MINIONS_COST } from "@/lib/data/pricing";

export default function PestRoiCalculator() {
  const [missedCalls, setMissedCalls] = useState(25);
  const [avgTicket, setAvgTicket] = useState(2275); // $2,275 3.5-yr average subscriber LTV
  const [closeRate, setCloseRate] = useState(35); // 35% close rate

  // Math Calculations
  const monthlyLostRevenue = Math.round(missedCalls * (closeRate / 100) * avgTicket);
  const annualLostRevenue = monthlyLostRevenue * 12;
  // First-year cost of a Core Crew build ($2,500 one-time) plus an optional care plan
  // at $297/mo. There is no $499/mo subscription — that plan was retired on 2026-08-29.
  const annualMinionsCost = ANNUAL_MINIONS_COST;
  const netAnnualProfit = Math.max(0, annualLostRevenue - annualMinionsCost);

  return (
    <section className="bg-white py-16 sm:py-24 border-b border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal/10 border border-teal/30 px-3.5 py-1 font-mono text-xs font-bold text-teal uppercase tracking-wider">
            <Calculator className="size-3.5" />
            <span>Pest Control LTV Calculator</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-ink text-balance leading-tight">
            How much recurring LTV are you leaking in missed calls?
          </h2>
          <p className="text-base text-ink/70 max-w-xl mx-auto">
            Adjust your monthly missed call volume to see your annual recovered revenue.
          </p>
        </div>

        {/* Calculator Widget Box */}
        {/* MOBILE (fixed 2026-09-07): this box clipped its whole left column by 32px at
            390px. The cause was the grid, not the children — `grid lg:grid-cols-12`
            declares no mobile track, so the single implicit column sized to its widest
            content and could not shrink, and overflow-hidden hid the result. Grid and
            flex children need min-w-0 to shrink below their content; every row below
            also wraps rather than relying on justify-between, which cannot wrap. */}
        <div className="relative grid w-full grid-cols-1 items-center gap-8 overflow-hidden rounded-[32px] border-4 border-ink/10 bg-ink p-5 text-white shadow-2xl sm:p-10 lg:grid-cols-12">
          {/* Left Inputs Column */}
          <div className="relative z-10 min-w-0 space-y-6 lg:col-span-7">
            {/* Slider 1: Missed Calls per month */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 font-mono text-xs">
                <span className="min-w-0 text-white/70">Estimated Missed Calls / Month:</span>
                <span className="shrink-0 rounded-lg border border-teal/40 bg-teal/20 px-3 py-1 text-sm font-bold text-teal-300">
                  {missedCalls} Calls / Mo
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="100"
                step="5"
                value={missedCalls}
                onChange={(e) => setMissedCalls(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-teal"
              />
              <div className="flex items-center justify-between gap-2 font-mono text-[10px] text-white/40">
                <span className="shrink-0">5 Calls</span>
                <span className="hidden shrink-0 sm:inline">50 Calls</span>
                <span className="min-w-0 truncate text-right">100 Calls (Peak Swarm)</span>
              </div>
            </div>

            {/* Ticket Mix Selector */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-white/70">Lifetime Value (LTV) Mix:</span>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "One-Off", price: "$240", val: 240 },
                  { label: "Quarterly", price: "$2,275", val: 2275 },
                  { label: "Termite", price: "$4,500", val: 4500 },
                ].map((t) => (
                  <button
                    key={t.val}
                    type="button"
                    onClick={() => setAvgTicket(t.val)}
                    aria-pressed={avgTicket === t.val}
                    className={`min-w-0 cursor-pointer rounded-xl border px-1.5 py-2.5 text-center font-mono text-xs transition-all ${
                      avgTicket === t.val
                        ? "border-teal bg-teal font-bold text-white shadow-md"
                        : "border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span className="block text-[clamp(0.625rem,2.9vw,0.75rem)] leading-tight">{t.label}</span>
                    <span className="mt-0.5 block text-[clamp(0.625rem,2.9vw,0.6875rem)] leading-tight opacity-80">{t.price}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Slider 2: Estimated Close Rate */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 font-mono text-xs">
                <span className="min-w-0 text-white/70">Estimated Close Rate:</span>
                <span className="shrink-0 rounded-lg border border-success/40 bg-success/20 px-3 py-1 text-sm font-bold text-crew-gia-on-dark">
                  {closeRate}% Conversion
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="60"
                step="5"
                value={closeRate}
                onChange={(e) => setCloseRate(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-crew-gia-on-dark"
              />
            </div>
          </div>

          {/* Right Output Column */}
          <div className="relative z-10 min-w-0 space-y-5 rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-md sm:p-6 sm:text-left lg:col-span-5">
            <div className="border-b border-white/10 pb-4">
              <p className="font-mono text-xs uppercase tracking-wide text-white/50">
                Annual Leaked Recurring LTV
              </p>
              <p className="mt-1 font-mono text-[clamp(1.5rem,7vw,1.875rem)] font-extrabold whitespace-nowrap text-crew-zip-on-dark sm:text-4xl">
                -${annualLostRevenue.toLocaleString()}
              </p>
              <p className="mt-1 font-mono text-[11px] text-white/50">
                Lost to missed calls &amp; slow replies
              </p>
            </div>

            <div className="border-b border-white/10 pb-4">
              <p className="font-mono text-xs uppercase tracking-wide text-white/50">
                Illustrative Revenue Opportunity
              </p>
              <p className="mt-1 font-mono text-[clamp(1.75rem,8.5vw,2.25rem)] font-extrabold whitespace-nowrap text-teal-300 sm:text-5xl">
                +${netAnnualProfit.toLocaleString()}
              </p>
              <p className="mt-1 flex flex-wrap items-center justify-center gap-1 font-mono text-[11px] font-bold text-teal-300 sm:justify-start">
                <Sparkles aria-hidden className="size-3 shrink-0" />
                <span className="min-w-0">Estimated upside based on your inputs, not a guarantee</span>
              </p>
            </div>

            {/* Assumptions stated where the number is read — see the note in the
                real-estate calculator. */}
            <p className="font-mono text-[11px] leading-relaxed text-white/50 break-words">
              Assumes {closeRate}% of recovered calls close, ${avgTicket.toLocaleString()}{" "}
              lifetime value per subscriber, and a ${annualMinionsCost.toLocaleString()}{" "}
              first-year cost. Your own numbers will differ.
            </p>

            <Button
              href={BOOKING_CALENDAR_URL}
              size="lg"
              showArrow
              track={{ event: "cta_click", params: { location: "pest_roi_calculator" } }}
              className="w-full bg-teal hover:bg-teal-dark text-white shadow-lg"
            >
              Discuss This Estimate
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
