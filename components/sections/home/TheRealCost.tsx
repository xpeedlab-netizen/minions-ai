import Image from "next/image";
import Section, { SectionHeading, SectionLead } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

/**
 * "The Real Cost" — the page's single problem statement.
 *
 * This was three stacked beats (claim, an hour-by-hour day timeline, an ROI slider
 * calculator) running ~1,800px to make one point: missed calls cost you money. The
 * timeline and calculator both restated the claim at length, so the visitor paid the
 * attention cost three times over. The calculator still lives on the industry pages,
 * where a visitor who wants a number has already self-selected.
 *
 * ARCHETYPE: this band is the page's ONE equal-card grid, and it is the only one that
 * should be. Measured at 1440px the page was running five consecutive three-column
 * grids (this, Proof, HowItWorks, Industries, Crew) at near-identical heights, which
 * is the single reason the scroll felt repetitive — sme.careers, the quality bar,
 * ships exactly one card grid and makes every other band a different kind of object.
 * HowItWorks is now a stepper and Industries a text-tile table, so this shape is
 * unique on the page and can afford to be the strong version of itself.
 *
 * The copy sits INSIDE the card on a cream ground under a full-bleed 4:3 image, rather
 * than floating under a bare square. Two reasons: it gives the row an actual object to
 * be, and 4:3 breaks the all-square image rhythm — every image on the page measured
 * 1.00 aspect, so nothing had a shape of its own. The 4:3 window is a centred crop of
 * the square source (~43px off top and bottom), which the content-bbox normalisation
 * leaves room for.
 */

const problemCards = [
  {
    title: "2 AM Emergencies",
    body: "Your highest-margin calls. Miss one and the caller keeps scrolling until someone picks up.",
    src: "/images/illustrations/pain-2am-emergency-v2.webp",
    alt: "A homeowner asleep at night while a phone glows unanswered on the nightstand",
  },
  {
    /* Real estate's only representation in the page's imagery. The hero is a trades
       figure, so putting the showing scene here means each co-primary market
       (invariants.md #3) is actually pictured above the fold-and-a-half, rather than a
       broker reading inclusive copy over exclusively trades artwork. It replaced an
       HVAC-tech-on-a-ladder collage.

       The -v3 suffix is deliberate: overwriting an image in place does not reach the
       browser, because /_next/image caches optimised output by URL in memory and Chrome
       holds the decoded bitmap through a normal reload. Bump the suffix instead. */
    title: "Peak-Hour Overlap",
    body: "Four calls at once while you're mid-showing or out on a route. Voicemail takes a message—your competitor takes the customer.",
    src: "/images/illustrations/pain-mid-showing-v3.webp",
    alt: "A real estate agent holding off a buyer couple with one raised hand while a stack of incoming calls crowds in beside her",
  },
  {
    title: "Call Centers Fall Short",
    body: "Hold music, per-minute billing, generic scripts. Rex quotes your pricing and books on the spot.",
    src: "/images/illustrations/pain-call-center-hold.webp",
    alt: "A frustrated customer left waiting on hold on the phone",
  },
];

export default function TheRealCost() {
  return (
    <Section tone="white" width="wide">
      <div className="max-w-3xl">
        <SectionHeading className="text-ink">
          Every call that hits voicemail is a job your competitor books.
        </SectionHeading>
        <SectionLead className="max-w-2xl">
          By the time you check voicemail, the customer has already booked with the shop
          that answered on the first ring.
        </SectionLead>
      </div>

      {/* 2-up at sm, 3-up only from lg. `sm:grid-cols-3` engaged at 640px and squeezed
          these illustrations to ~190px through the whole tablet range — the same
          too-small-to-read problem the HowItWorks medallions had. */}
      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {problemCards.map((c, i) => (
          <Reveal key={c.title} as="li" delay={i * 0.08} className="h-full">
            <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-cream">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={c.src}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-heading text-lg font-bold tracking-[-0.01em] text-ink">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{c.body}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
