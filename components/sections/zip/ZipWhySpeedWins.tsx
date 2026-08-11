import { PROOF_STATS } from "@/lib/data/site-content";

export default function ZipWhySpeedWins() {
  return (
    <section className="bg-white py-16 sm:py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink text-balance">
            Why speed wins
          </h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            Responding in 5 minutes instead of 30 makes you{" "}
            <strong className="text-ink">100× more likely</strong> to reach the lead and{" "}
            <strong className="text-ink">21× more likely</strong> to qualify it ({PROOF_STATS[0].source}). Meanwhile the average business takes 42 hours to respond ({PROOF_STATS[2].source}).
          </p>
          <blockquote className="mt-6 rounded-r-xl border-l-4 border-coral bg-cream p-5 font-heading font-bold text-lg text-coral-text">
            &ldquo;Zip responds in seconds. Your crew gets the job.&rdquo;
          </blockquote>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-border bg-white p-6 text-center">
            <p className="font-mono text-4xl font-medium text-coral-text">100×</p>
            <p className="mt-1 font-mono text-xs uppercase tracking-wide text-ink/50">Better Reach</p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-6 text-center">
            <p className="font-mono text-4xl font-medium text-ink">21×</p>
            <p className="mt-1 font-mono text-xs uppercase tracking-wide text-ink/50">Lead Qualify</p>
          </div>
          <div className="col-span-2 flex items-center justify-between rounded-2xl bg-ink px-6 py-4">
            <span className="font-mono text-xs uppercase tracking-wide text-cream/60">
              Vs. Industry Average
            </span>
            <span className="font-heading font-bold text-white">42 Hours</span>
          </div>
        </div>
      </div>
    </section>
  );
}
