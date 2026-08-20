import { PROOF_STATS } from "@/lib/data/site-content";
import Reveal from "@/components/ui/Reveal";
import { Zap, Clock, TrendingUp, ShieldCheck } from "lucide-react";

export default function ZipWhySpeedWins() {
  return (
    <section className="bg-white py-16 sm:py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-cream px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-[#C4472A] font-bold shadow-sm mb-4">
            <Zap className="size-3.5 fill-current" />
            The 5-Minute Gold Mine
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-ink text-balance">
            Speed to Lead Wins the Job — And Research Proves It
          </h2>
          <p className="mt-6 text-lg text-ink/75 leading-relaxed">
            Responding within 5 minutes instead of 30 makes you{" "}
            <strong className="text-[#C4472A] font-extrabold">100× more likely</strong> to reach the prospect and{" "}
            <strong className="text-ink font-extrabold">21× more likely</strong> to qualify and convert the job ({PROOF_STATS[0].source}).
          </p>

          <blockquote className="mt-8 rounded-2xl border-l-4 border-[#C4472A] bg-cream p-6 shadow-sm">
            <p className="font-heading font-bold text-lg text-ink">
              &ldquo;The contractor who responds first gets 80%+ of booked service work. Zip ensures you are always first.&rdquo;
            </p>
          </blockquote>
        </div>

        <Reveal>
          <div className="grid grid-cols-2 gap-5">
            <div className="rounded-3xl border border-border bg-cream p-6 sm:p-8 text-center shadow-sm hover:border-[#C4472A]/40 transition-all">
              <span className="flex size-10 items-center justify-center rounded-xl bg-white border border-border text-[#C4472A] mx-auto mb-3">
                <Zap className="size-5" />
              </span>
              <p className="font-mono text-4xl sm:text-5xl font-extrabold text-[#C4472A]">100×</p>
              <p className="mt-2 font-mono text-xs font-bold uppercase tracking-wider text-ink/70">Better Lead Contact</p>
            </div>

            <div className="rounded-3xl border border-border bg-cream p-6 sm:p-8 text-center shadow-sm hover:border-teal/40 transition-all">
              <span className="flex size-10 items-center justify-center rounded-xl bg-white border border-border text-teal mx-auto mb-3">
                <TrendingUp className="size-5" />
              </span>
              <p className="font-mono text-4xl sm:text-5xl font-extrabold text-teal">21×</p>
              <p className="mt-2 font-mono text-xs font-bold uppercase tracking-wider text-ink/70">Higher Conversion</p>
            </div>

            <div className="col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-3xl bg-ink p-6 sm:p-8 shadow-xl text-white">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-cream/60">
                  Industry Average Response Time
                </span>
                <p className="text-sm text-cream/80 mt-1 font-medium">Across 2,241 companies studied by Harvard Business Review</p>
              </div>
              <span className="shrink-0 font-heading font-extrabold text-3xl sm:text-4xl text-[#C4472A] bg-white/10 px-5 py-2.5 rounded-2xl border border-white/10">
                42 Hours
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
