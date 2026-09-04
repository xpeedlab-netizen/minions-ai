"use client";

import { useState } from "react";
import { Calculator, ExternalLink, PhoneCall, Clock, Sparkles, CheckCircle } from "lucide-react";
import { calculatorPresets } from "@/lib/data/pricing";

export default function CostCalculator() {
  const [monthlyCalls, setMonthlyCalls] = useState<number>(100);
  const [avgDurationMinutes, setAvgDurationMinutes] = useState<number>(2.0);
  const [selectedTierId, setSelectedTierId] = useState<"budget" | "standard" | "premium">("budget");

  const currentTier =
    calculatorPresets.find((p) => p.id === selectedTierId) || calculatorPresets[1];

  const totalMinutes = Math.round(monthlyCalls * avgDurationMinutes);
  const monthlyAiCost = totalMinutes * currentTier.ratePerMin;
  const costPerCall = monthlyCalls > 0 ? monthlyAiCost / monthlyCalls : 0;

  return (
    <section className="bg-white py-16 sm:py-24" id="estimator">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-teal">
            <Calculator className="size-3.5" /> Retell AI Cost Estimator
          </span>
          <h2 className="mt-3 font-heading font-extrabold text-3xl sm:text-4xl text-ink text-balance">
            Estimate your monthly AI call costs
          </h2>
          <p className="mt-3 text-sm sm:text-base text-ink/70 leading-relaxed">
            These are Retell AI&apos;s cloud infrastructure charges &mdash; billed directly to your account at wholesale cost with <strong>zero markup from us</strong>. They sit outside the one-time build fee. If you later take a care plan, this usage is absorbed into that monthly figure instead.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl border border-border bg-cream/30 p-6 sm:p-8 space-y-6">
            {/* 1. Monthly Calls */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="calls-slider"
                  className="flex items-center gap-2 font-heading font-bold text-ink text-sm cursor-pointer"
                >
                  <PhoneCall className="size-4 text-teal" />
                  Estimated Calls / Month
                </label>
                <span className="font-mono text-xl font-bold text-teal">
                  {monthlyCalls.toLocaleString()}{" "}
                  <span className="text-xs text-ink/65 font-normal">calls</span>
                </span>
              </div>
              <input
                id="calls-slider"
                aria-label="Estimated Calls Per Month"
                type="range"
                min="25"
                max="2500"
                step="25"
                value={monthlyCalls}
                onChange={(e) => setMonthlyCalls(Number(e.target.value))}
                className="mt-3 w-full accent-teal h-2 bg-white rounded-lg cursor-pointer"
              />
              <div className="mt-1.5 flex justify-between text-[10px] font-mono text-ink/65">
                <span>25 calls</span>
                <span>500 calls</span>
                <span>1,250 calls</span>
                <span>2,500+ calls</span>
              </div>
            </div>

            {/* 2. Duration */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="duration-slider"
                  className="flex items-center gap-2 font-heading font-bold text-ink text-sm cursor-pointer"
                >
                  <Clock className="size-4 text-coral" />
                  Average Call Duration
                </label>
                <span className="font-mono text-xl font-bold text-coral">
                  {avgDurationMinutes.toFixed(1)}{" "}
                  <span className="text-xs text-ink/65 font-normal">min</span>
                </span>
              </div>
              <input
                id="duration-slider"
                aria-label="Average Call Duration in Minutes"
                type="range"
                min="1.0"
                max="8.0"
                step="0.5"
                value={avgDurationMinutes}
                onChange={(e) => setAvgDurationMinutes(Number(e.target.value))}
                className="mt-3 w-full accent-coral h-2 bg-white rounded-lg cursor-pointer"
              />
              <div className="mt-1.5 flex justify-between text-[10px] font-mono text-ink/65">
                <span>1.0 min (Quick)</span>
                <span>3.5 min (Standard)</span>
                <span>8.0 min (Detailed)</span>
              </div>
            </div>

            {/* 3. LLM Intelligence Tier */}
            <div>
              <label className="block font-heading font-bold text-ink text-sm mb-2.5">
                AI Model & Voice Intelligence
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {calculatorPresets.map((preset) => {
                  const isSelected = preset.id === selectedTierId;
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => setSelectedTierId(preset.id)}
                      className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                        isSelected
                          ? "border-teal bg-white ring-2 ring-teal shadow-sm"
                          : "border-border bg-white/60 hover:bg-white text-ink"
                      }`}
                    >
                      <div>
                        <div className="font-heading font-bold text-xs">
                          {preset.name}
                        </div>
                        <div className="text-[10px] font-mono text-teal font-semibold mt-0.5">
                          ~${preset.ratePerMin}/min
                        </div>
                      </div>
                      <div className="text-[10px] text-ink/65 mt-1.5 truncate">
                        {preset.models}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Output Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border-2 border-teal bg-ink p-6 sm:p-8 text-white shadow-lg">
            <div>
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-cream">
                  Estimated AI Usage
                </span>
                <span className="text-[11px] font-mono text-teal-light bg-teal/20 px-2 py-0.5 rounded-full">
                  At-Cost Pass-Through
                </span>
              </div>

              <div className="mt-6 space-y-4 font-mono text-xs sm:text-sm">
                <div className="flex items-center justify-between text-white/80">
                  <span>Total Call Minutes:</span>
                  <span className="text-white font-bold">{totalMinutes.toLocaleString()} min</span>
                </div>
                <div className="flex items-center justify-between text-white/80">
                  <span>Selected Rate:</span>
                  <span className="text-white font-bold">~${currentTier.ratePerMin.toFixed(3)} / min</span>
                </div>
                <div className="flex items-center justify-between text-white/80">
                  <span>Cost per Call:</span>
                  <span className="text-cream font-bold">~${costPerCall.toFixed(2)} / call</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/15">
                <span className="text-xs text-white/70 block">
                  Estimated Monthly Retell AI Bill:
                </span>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-mono text-4xl sm:text-5xl font-extrabold text-cream">
                    ${Math.round(monthlyAiCost)}
                  </span>
                  <span className="text-xs font-mono text-white/60">
                    / month (est.)
                  </span>
                </div>
              </div>

              <div className="mt-4 rounded-xl bg-teal/20 p-3 text-xs text-white/90 leading-relaxed flex items-start gap-2">
                <CheckCircle className="size-4 text-cream shrink-0 mt-0.5" />
                <span>
                  Compare to a human receptionist: <strong>${Math.round(monthlyAiCost)}/mo</strong> vs <strong>$3,500+/mo</strong> salary.
                </span>
              </div>
            </div>

            {/* Retell Link Note */}
            <div className="mt-6 pt-4 border-t border-white/15">
              <p className="text-[11px] text-white/70 leading-snug">
                Retell AI is the underlying cloud voice engine. Billing is strictly pay-as-you-go to the exact second with zero platform fee.
              </p>
            </div>
          </div>
        </div>

        {/* Full Retell AI Pricing Button Below Cards */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <a
            href="https://www.retellai.com/pricing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-cream/70 px-5 py-2.5 text-xs sm:text-sm font-heading font-semibold text-ink hover:bg-cream hover:border-teal hover:text-teal transition-all shadow-xs"
          >
            <span>View Full Retell AI Pricing Breakdown</span>
            <ExternalLink className="size-4 text-teal" />
          </a>
          <span className="text-xs text-ink/65 font-mono">
            (Wholesale provider rates for all voice models & telephony)
          </span>
        </div>
      </div>
    </section>
  );
}
