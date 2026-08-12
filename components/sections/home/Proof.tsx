import Reveal from "@/components/ui/Reveal";
import { PROOF_STATS, PROOF_STATS_CLOSING } from "@/lib/data/site-content";

export default function Proof() {
  return (
    <section className="bg-teal py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white text-balance text-center">
          Speed to Lead Wins the Job — And the Research Proves It.
        </h2>
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {PROOF_STATS.map((s, i) => (
            <Reveal key={s.stat} delay={i * 0.1} className="h-full">
              <div className="flex h-full flex-col justify-between rounded-2xl border border-white/15 bg-white/5 p-6 sm:p-8 backdrop-blur-sm">
                <div>
                  <p className="font-mono text-4xl sm:text-5xl font-medium text-white">{s.stat}</p>
                  <p className="mt-3 text-white/80 leading-relaxed text-sm sm:text-base">{s.description}</p>
                </div>
                <p className="mt-4 text-xs sm:text-sm text-white/60 font-mono">{s.source}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 font-heading font-extrabold text-2xl sm:text-3xl text-white text-center">
          {PROOF_STATS_CLOSING}
        </p>
      </div>
    </section>
  );
}
