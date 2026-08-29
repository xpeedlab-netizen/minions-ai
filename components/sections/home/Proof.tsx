import Reveal from "@/components/ui/Reveal";
import Section, { SectionHeading } from "@/components/ui/Section";
import { PROOF_STATS, PROOF_STATS_CLOSING } from "@/lib/data/site-content";

/**
 * Proof band.
 *
 * Design reference: Sierra's "The results speak for themselves" — a stat row where the
 * NUMBER is the entire visual event. Ours was burying the numbers inside bordered cards
 * with backdrop-blur, so the stat competed with its own container.
 *
 * Changes: the cards lose their boxes and become columns divided by hairlines (the
 * pattern every metrics row on Linear/Sierra uses); the stat scales up and goes
 * tabular so the digits align; the source drops to a whisper. Copy is unchanged.
 *
 * DENSITY: this band is punctuation, not a destination — it exists to break the run of
 * light content bands and hand the visitor one hard number. On sme.careers the
 * equivalent palate-cleanser bands run 342-544px; this one measured 723px, which made
 * it read as another full chapter. It now runs `compact`, and the closing line has
 * dropped from text-3xl to a quiet lead: the band was firing TWO display-scale
 * moments (the h2 and the closing statement) at each other across three stats.
 */
export default function Proof() {
  return (
    <Section tone="teal" width="wide" density="compact" className="relative overflow-hidden">
      {/* Depth, so the teal band isn't a flat rectangle. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/3 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-white/5 blur-3xl"
      />

      <div className="relative z-10">
        <SectionHeading className="mx-auto max-w-3xl text-center text-white">
          Speed to Lead Wins the Deal — And the Research Proves It.
        </SectionHeading>

        {/*
          Hairline-divided columns rather than cards. `divide-*` gives the row structure
          without drawing four borders around every number.
        */}
        {/* items-stretch + h-full on the Reveal wrapper is what lets the `mt-auto` on
            each source line resolve against the tallest column. */}
        <dl className="mt-10 grid items-stretch gap-y-10 sm:grid-cols-3 sm:gap-y-0 sm:divide-x sm:divide-white/15">
          {PROOF_STATS.map((s, i) => (
            <Reveal
              key={s.stat}
              delay={i * 0.08}
              className="flex h-full flex-col px-0 text-center sm:px-8"
            >
              {/* text-balance + a capped measure keep "42 hours" from setting a much
                  wider column than "100x" and skewing the row. */}
              <dt className="text-balance font-mono text-[2.75rem] font-medium leading-[1.05] tabular-nums text-white lg:text-6xl">
                {s.stat}
              </dt>
              <dd className="mt-5 flex flex-1 flex-col">
                <p className="mx-auto max-w-[22rem] text-[0.9375rem] leading-[1.6] text-white/75">
                  {s.description}
                </p>
                {/* mt-auto pins every source to the bottom of the tallest column, so
                    the three citations align on one line. */}
                <p className="mx-auto mt-auto max-w-[22rem] pt-6 font-mono text-xs leading-[1.5] text-white/80">
                  {s.source}
                </p>
              </dd>
            </Reveal>
          ))}
        </dl>

        <p className="mx-auto mt-12 max-w-xl text-balance text-center font-heading text-lg font-semibold leading-[1.4] tracking-[-0.01em] text-white/90">
          {PROOF_STATS_CLOSING}
        </p>
      </div>
    </Section>
  );
}
