"use client";

import { useState } from "react";
import { Calculator, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import { BOOKING_CALENDAR_URL } from "@/lib/data/placeholders";

export default function PestRoiCalculator() {
  const [missedCalls, setMissedCalls] = useState(25);
  const [avgTicket, setAvgTicket] = useState(2275); // $2,275 3.5-yr average subscriber LTV
  const [closeRate, setCloseRate] = useState(35); // 35% close rate

  // Math Calculations
  const monthlyLostRevenue = Math.round(missedCalls * (closeRate / 100) * avgTicket);
  const annualLostRevenue = monthlyLostRevenue * 12;
  const annualMinionsCost = 5988; // ~$499/mo annual plan estimate
  const netAnnualProfit = Math.max(0, annualLostRevenue - annualMinionsCost);
  const roiMultiplier = (annualLostRevenue / Math.max(1, annualMinionsCost)).toFixed(1);

  return (
    <section className="bg-cream py-16 sm:py-24 border-b border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal/10 border border-teal/30 px-3.5 py-1 font-mono text-xs font-bold text-teal uppercase tracking-wider">
            <Calculator className="size-3.5" />
            <span>Pest Control LTV Calculator</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink text-balance leading-tight">
            How much recurring LTV are you leaking in missed calls?
          </h2>
          <p className="text-base text-ink/70 max-w-xl mx-auto">
            Adjust your monthly missed call volume to see your annual recovered revenue.
          </p>
        </div>

        {/* Calculator Widget Box */}
        <div className="relative rounded-[32px] border-4 border-ink/10 bg-ink p-6 sm:p-10 text-white shadow-2xl overflow-hidden grid lg:grid-cols-12 gap-8 items-center">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 size-80 rounded-full bg-teal/20 blur-3xl pointer-events-none" />

          {/* Left Inputs Column */}
          <div className="lg:col-span-7 space-y-6 relative z-10">
            {/* Slider 1: Missed Calls per month */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-white/70">Estimated Missed Calls / Month:</span>
                <span className="font-bold text-teal-300 text-sm bg-teal/20 px-3 py-1 rounded-lg border border-teal/40">
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
              <div className="flex justify-between text-[10px] font-mono text-white/40">
                <span>5 Calls</span>
                <span>50 Calls</span>
                <span>100 Calls (Peak Swarm)</span>
              </div>
            </div>

            {/* Ticket Mix Selector */}
            <div className="space-y-2">
              <span className="text-xs font-mono text-white/70">Lifetime Value (LTV) Mix:</span>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "One-Off ($240)", val: 240 },
                  { label: "Quarterly ($2,275)", val: 2275 },
                  { label: "Termite ($4,500)", val: 4500 },
                ].map((t) => (
                  <button
                    key={t.val}
                    type="button"
                    onClick={() => setAvgTicket(t.val)}
                    className={`rounded-xl p-2.5 text-center font-mono text-xs transition-all border cursor-pointer ${
                      avgTicket === t.val
                        ? "bg-teal border-teal text-white font-bold shadow-md"
                        : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider 2: Estimated Close Rate */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-white/70">Estimated Close Rate:</span>
                <span className="font-bold text-success text-sm bg-success/20 px-3 py-1 rounded-lg border border-success/40">
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
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-success"
              />
            </div>
          </div>

          {/* Right Output Column */}
          <div className="lg:col-span-5 relative z-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md space-y-5 text-center sm:text-left">
            <div className="border-b border-white/10 pb-4">
              <p className="font-mono text-xs uppercase tracking-wide text-white/50">
                Annual Leaked Recurring LTV
              </p>
              <p className="mt-1 font-mono text-3xl sm:text-4xl font-extrabold text-coral-text">
                -${annualLostRevenue.toLocaleString()}
              </p>
              <p className="mt-1 font-mono text-[11px] text-white/50">
                Lost to missed calls &amp; slow replies
              </p>
            </div>

            <div className="border-b border-white/10 pb-4">
              <p className="font-mono text-xs uppercase tracking-wide text-white/50">
                Projected Net LTV Recovered
              </p>
              <p className="mt-1 font-mono text-4xl sm:text-5xl font-extrabold text-teal-300">
                +${netAnnualProfit.toLocaleString()}
              </p>
              <p className="mt-1 font-mono text-[11px] text-teal-300 font-bold flex items-center gap-1 justify-center sm:justify-start">
                <Sparkles className="size-3" />
                Estimated {roiMultiplier}x Annual ROI Factor
              </p>
            </div>

            <Button href={BOOKING_CALENDAR_URL} size="lg" showArrow className="w-full bg-teal hover:bg-teal-dark text-white shadow-lg">
              Claim Your Recovered LTV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
