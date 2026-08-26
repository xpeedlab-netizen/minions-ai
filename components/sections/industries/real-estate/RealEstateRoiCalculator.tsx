"use client";

import { useState } from "react";
import { Calculator, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import { BOOKING_CALENDAR_URL } from "@/lib/data/placeholders";

export default function RealEstateRoiCalculator() {
  const [missedCalls, setMissedCalls] = useState(15);
  const [medianPrice, setMedianPrice] = useState(550000);
  const [commissionRate, setCommissionRate] = useState(2.75);
  const [closeRate, setCloseRate] = useState(15);

  const commissionPerDeal = Math.round(medianPrice * (commissionRate / 100));
  const closedDealsMonthly = (missedCalls * (closeRate / 100));
  const monthlyLostRevenue = Math.round(closedDealsMonthly * commissionPerDeal);
  const annualLostRevenue = monthlyLostRevenue * 12;
  const annualMinionsCost = 5988;
  const netAnnualProfit = Math.max(0, annualLostRevenue - annualMinionsCost);
  const roiMultiplier = (annualLostRevenue / Math.max(1, annualMinionsCost)).toFixed(1);

  return (
    <section className="bg-white py-16 sm:py-24 border-b border-border w-full overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 px-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal/10 border border-teal/30 px-3.5 py-1 font-mono text-xs font-bold text-teal uppercase tracking-wider">
            <Calculator className="size-3.5 shrink-0" />
            <span className="truncate">Brokerage Commission ROI Calculator</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-ink text-balance leading-tight">
            How much Gross Commission Income are you losing to voicemail?
          </h2>
          <p className="text-base text-ink/70 max-w-xl mx-auto">
            Adjust your monthly sign call and Zillow inquiry volume to see your annual recovered commission.
          </p>
        </div>

        {/* Calculator Widget Box */}
        <div className="relative rounded-[32px] border border-white/10 bg-ink/95 backdrop-blur-2xl p-5 sm:p-10 text-white shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ring-1 ring-white/10 w-full max-w-full">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 size-80 rounded-full bg-teal/20 blur-3xl pointer-events-none" />

          {/* Left Inputs Column */}
          <div className="lg:col-span-7 space-y-6 relative z-10 w-full min-w-0">
            {/* Slider 1: Missed Inbound Calls / Month */}
            <div className="space-y-2 w-full">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs font-mono w-full">
                <span className="text-white/70 whitespace-normal break-words">Missed Calls / Inquiries (Monthly):</span>
                <span className="font-bold text-teal-300 text-sm bg-teal/20 px-3 py-1.5 rounded-lg border border-teal/40 w-full sm:w-auto text-center sm:text-left shrink-0">
                  {missedCalls} Calls / Mo
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="60"
                step="5"
                value={missedCalls}
                onChange={(e) => setMissedCalls(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-teal block"
              />
              <div className="flex justify-between text-[10px] font-mono text-white/40 w-full">
                <span>5 Calls</span>
                <span>30 Calls</span>
                <span>60 Calls (Peak)</span>
              </div>
            </div>

            {/* Home Price Range Selector */}
            <div className="space-y-2 w-full">
              <span className="text-xs font-mono text-white/70 block">Median Market Home Price:</span>
              <div className="grid grid-cols-3 gap-2 w-full">
                {[
                  { label: "$400k", val: 400000 },
                  { label: "$550k", val: 550000 },
                  { label: "$850k+", val: 850000 },
                ].map((t) => (
                  <button
                    key={t.val}
                    type="button"
                    onClick={() => setMedianPrice(t.val)}
                    className={`rounded-xl p-2 sm:p-2.5 text-center font-mono text-xs transition-all border cursor-pointer truncate ${
                      medianPrice === t.val
                        ? "bg-teal border-teal text-white font-bold shadow-md"
                        : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider 2: Average Commission Rate */}
            <div className="space-y-2 w-full">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs font-mono w-full">
                <span className="text-white/70 whitespace-normal break-words">Average Commission / Side:</span>
                <span className="font-bold text-success text-sm bg-success/20 px-3 py-1.5 rounded-lg border border-success/40 w-full sm:w-auto text-center sm:text-left shrink-0 truncate">
                  {commissionRate}% (~${commissionPerDeal.toLocaleString()})
                </span>
              </div>
              <input
                type="range"
                min="2.0"
                max="3.5"
                step="0.25"
                value={commissionRate}
                onChange={(e) => setCommissionRate(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-success block"
              />
            </div>
          </div>

          {/* Right Output Column */}
          <div className="lg:col-span-5 relative z-10 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-md space-y-5 text-center sm:text-left w-full min-w-0">
            <div className="border-b border-white/10 pb-4">
              <p className="font-mono text-xs uppercase tracking-wide text-white/50 break-words">
                Annual Leaked Commission (GCI)
              </p>
              <p className="mt-1 font-mono text-3xl sm:text-4xl font-extrabold text-coral-text drop-shadow-[0_0_15px_rgba(255,107,107,0.4)] truncate">
                -${annualLostRevenue.toLocaleString()}
              </p>
              <p className="mt-1 font-mono text-[11px] text-white/50 break-words">
                Lost to missed calls &amp; slow Zillow replies
              </p>
            </div>

            <div className="border-b border-white/10 pb-4">
              <p className="font-mono text-xs uppercase tracking-wide text-white/50 break-words">
                Projected Net GCI Recovered
              </p>
              <p className="mt-1 font-mono text-4xl sm:text-5xl font-extrabold text-teal-300 truncate">
                +${netAnnualProfit.toLocaleString()}
              </p>
              <p className="mt-1 font-mono text-[11px] text-teal-300 font-bold flex items-center gap-1 justify-center sm:justify-start flex-wrap">
                <Sparkles className="size-3 shrink-0" />
                <span>Estimated {roiMultiplier}x Annual Broker ROI</span>
              </p>
            </div>

            <Button href={BOOKING_CALENDAR_URL} size="lg" showArrow className="w-full bg-teal hover:bg-teal-dark text-white shadow-lg justify-center truncate">
              Protect Your Commission
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
