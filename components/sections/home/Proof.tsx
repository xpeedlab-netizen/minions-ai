import Reveal from "@/components/ui/Reveal";
import Section, { SectionHeading } from "@/components/ui/Section";
import { PROOF_STATS, PROOF_STATS_CLOSING } from "@/lib/data/site-content";

export default function Proof() {
  return (
    <Section tone="teal" width="wide">
      <SectionHeading className="text-white text-center">
        Speed to Lead Wins the Job — And the Research Proves It.
      </SectionHeading>
      <div className="mt-10 grid sm:grid-cols-3 gap-6">
        {PROOF_STATS.map((s, i) => (
          <Reveal key={s.stat} delay={i * 0.08} className="h-full">
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
      <p className="mt-10 font-heading font-extrabold text-2xl sm:text-3xl text-white text-center text-balance">
        {PROOF_STATS_CLOSING}
      </p>
    </Section>
  );
}
