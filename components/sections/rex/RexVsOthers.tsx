import { Check, X, Minus, DollarSign, Clock, ShieldCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { pricingPlans } from "@/lib/data/pricing";

export default function RexVsOthers() {
  const starterPrice = pricingPlans[0].price || "$299";

  return (
    <section className="bg-white py-16 sm:py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block rounded-full bg-teal/10 px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-teal font-bold mb-4">
            Cost &amp; Performance ROI Matrix
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-ink text-balance">
            Why Contractors Save $35,000+/Year With Rex
          </h2>
          <p className="mt-4 text-lg text-ink/70 leading-relaxed">
            Compare the real cost and performance of hiring an in-house receptionist vs traditional call centers vs Rex.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="relative overflow-x-auto pb-4">
          <table className="w-full text-left border-collapse min-w-[760px]">
            <thead>
              <tr>
                <th className="p-4 sm:p-6 w-1/4"></th>
                <th className="p-4 sm:p-6 w-1/4 text-base font-heading font-bold text-ink">
                  In-House Receptionist
                </th>
                <th className="p-4 sm:p-6 w-1/4 text-base font-heading font-bold text-ink">
                  Traditional Call Center
                </th>
                <th className="p-4 sm:p-6 w-1/4 text-base font-heading font-bold text-teal bg-cream rounded-t-2xl border-t border-x border-border shadow-sm">
                  Rex (AI Voice Agent)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-sm">
              <tr>
                <td className="p-4 sm:p-6 font-medium text-ink/80">Typical Monthly Cost</td>
                <td className="p-4 sm:p-6 text-red-600 font-bold">$3,500 – $4,500 / mo + benefits</td>
                <td className="p-4 sm:p-6 text-ink/70">$600 – $1,200 / mo ($1.50/min fees)</td>
                <td className="p-4 sm:p-6 text-teal font-extrabold bg-cream border-x border-border">Flat {starterPrice} / mo</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-6 font-medium text-ink/80">Coverage Hours</td>
                <td className="p-4 sm:p-6 text-ink/70">40 hours/week (9-5 only)</td>
                <td className="p-4 sm:p-6 text-ink/70">24/7 (with peak-hour hold times)</td>
                <td className="p-4 sm:p-6 text-ink font-bold bg-cream border-x border-border">168 hours/week (24/7/365)</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-6 font-medium text-ink/80">Response Speed</td>
                <td className="p-4 sm:p-6 text-ink/70">Varies (busy lines put on hold)</td>
                <td className="p-4 sm:p-6 text-ink/70">30–90 seconds hold time</td>
                <td className="p-4 sm:p-6 text-teal font-bold bg-cream border-x border-border">Under 3 seconds (Ring 1)</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-6 font-medium text-ink/80">Quotes Exact Pricing</td>
                <td className="p-4 sm:p-6 text-ink/70"><Check className="inline size-4 text-teal mr-1" /> Yes</td>
                <td className="p-4 sm:p-6 text-ink/70"><X className="inline size-4 text-red-500 mr-1" /> Reads basic script only</td>
                <td className="p-4 sm:p-6 text-teal font-bold bg-cream border-x border-border"><Check className="inline size-4 text-teal mr-1" /> 100% Trained on your rates</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-6 font-medium text-ink/80">Direct Calendar Booking</td>
                <td className="p-4 sm:p-6 text-ink/70"><Check className="inline size-4 text-teal mr-1" /> Yes</td>
                <td className="p-4 sm:p-6 text-ink/70"><X className="inline size-4 text-red-500 mr-1" /> Takes messages only</td>
                <td className="p-4 sm:p-6 text-teal font-bold bg-cream border-x border-border"><Check className="inline size-4 text-teal mr-1" /> Direct Google Calendar sync</td>
              </tr>
              <tr>
                <td className="p-4 sm:p-6 font-medium text-ink/80">Concurrent Call Handling</td>
                <td className="p-4 sm:p-6 text-ink/70"><X className="inline size-4 text-red-500 mr-1" /> 1 call at a time</td>
                <td className="p-4 sm:p-6 text-ink/70"><Minus className="inline size-4 text-ink/40 mr-1" /> Limited by operator queue</td>
                <td className="p-4 sm:p-6 text-teal font-bold bg-cream rounded-b-2xl border-b border-x border-border shadow-sm"><Check className="inline size-4 text-teal mr-1" /> Unlimited concurrent calls</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Payback Banner */}
        <Reveal className="mt-12">
          <div className="rounded-2xl bg-ink p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
            <div>
              <p className="font-mono text-xs text-teal font-bold uppercase tracking-wider mb-1">
                The Payback Math
              </p>
              <h3 className="font-heading font-bold text-2xl text-white">
                1 Single Saved Job Pays For Your Entire Month of Rex
              </h3>
              <p className="text-sm text-cream/70 mt-1">
                At an average job value of $500, capturing just one emergency call you would have missed covers your entire monthly subscription.
              </p>
            </div>
            <div className="shrink-0 bg-teal/25 border border-teal/40 rounded-2xl p-5 text-center shadow-sm">
              <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#4FD1C5] block">$35,000+</span>
              <p className="text-[11px] text-cream/90 font-mono uppercase font-bold tracking-wider mt-1">Annual Payroll Savings</p>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
