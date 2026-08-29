import Image from "next/image";
import { INTEGRATION_COPY } from "@/lib/data/site-content";
import Reveal from "@/components/ui/Reveal";
import Section, { SectionHeading, Eyebrow } from "@/components/ui/Section";

const steps = [
  {
    n: "01",
    title: "We learn your business",
    body: "We analyze your services, pricing, service areas, and FAQs, then train your crew to represent your brand accurately.",
  },
  {
    n: "02",
    title: "We connect your calendar and CRM",
    /* Only the calendar half of INTEGRATION_COPY. Appending the CRM sentence too made
       this row run to twice the length of the other two. The title already says CRM;
       the pipeline detail lives on /how-it-works. */
    body: INTEGRATION_COPY.calendar,
  },
  {
    n: "03",
    title: "You forward your line — two minutes",
    body: `${INTEGRATION_COPY.phone} From that second on, every call is answered instantly.`,
  },
];

/**
 * Setup process — an asymmetric stepper.
 *
 * ARCHETYPE CHANGE. This was a three-up grid of full-column square illustrations, which
 * made it structurally IDENTICAL to TheRealCost four hundred pixels up the page: same
 * columns, same square images, same h3-over-one-sentence, heights within 60px of each
 * other. Measured at 1440px the page ran five consecutive three-column grids; this was
 * the most obvious duplicate of the five and the cheapest to break.
 *
 * The replacement is the move sme.careers uses for its own "Start Earning in weeks"
 * band, and it is the strongest layout on that page: heading top-left, the numbered
 * steps as compact stacked rows in a narrow left column, and ONE tall figure holding
 * the whole right column. Three payoffs — the band stops being a grid, the steps read
 * as a sequence rather than three peers (which is what a numbered process actually is),
 * and the portrait image finally breaks the all-square rhythm.
 *
 * WHITE, NOT CREAM. The reordered page puts this band directly above the cream pricing
 * band, and two cream bands in a row erase the boundary between them. The step rows and
 * the portrait frame take the cream fill instead, so the objects still read as objects.
 *
 * Three images became one on purpose. The step collages were decoration: nothing in
 * "Calendar & CRM Integration" is made clearer by a picture, and paying for three
 * illustrations to say so is what inflated the band. The step collages this orphaned
 * (`step-knowledge-base`, `step-calendar-crm`, `step-call-forwarding`) were deleted at
 * the owner's request once nothing referenced them.
 */
export default function HowItWorks() {
  return (
    <Section tone="white" width="wide">
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <div>
          <Eyebrow className="mb-5">Setup</Eyebrow>
          <SectionHeading className="max-w-xl text-ink">
            We build it. You forward your line.
          </SectionHeading>

          <ol className="mt-10 space-y-3">
            {steps.map((s, i) => (
              <Reveal key={s.n} as="li" delay={i * 0.08}>
                <div className="flex gap-5 rounded-2xl border border-border bg-cream p-5 sm:p-6">
                  <span className="font-mono text-sm font-bold leading-6 tabular-nums text-teal">
                    {s.n}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-heading text-base font-bold leading-[1.3] tracking-[-0.01em] text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink/75">{s.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        {/*
          One portrait figure, not a framed square, and generated NATIVELY at 4:5
          (1000x1250) rather than cropped out of a square — so `object-cover` here has
          nothing to trim and the composition is exactly what was authored. It replaced
          the step-knowledge-base collage, whose figures did not read as US-based; the
          ICP is United States pest control and real estate operators.
        */}
        {/* Capped below lg. Unconstrained, the 4:5 window rendered 637x796 at a 700px
            viewport, which made this the TALLEST band on the page (1,618px) through the
            whole tablet range — the portrait aspect that helps on desktop works against
            it once the columns stack. */}
        <Reveal delay={0.12} className="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none lg:sticky lg:top-24">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-cream">
            <Image
              src="/images/illustrations/step-owner-portrait.webp"
              alt="A US small-business owner standing calmly with their phone lowered at their side while their AI crew is built for them"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
