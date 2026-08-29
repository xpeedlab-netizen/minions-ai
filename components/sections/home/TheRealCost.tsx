import Image from "next/image";
import Section, { SectionHeading, SectionLead } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

/**
 * "The Real Cost" — band 02. The page's single problem statement.
 *
 * This was three stacked beats (claim, an hour-by-hour day timeline, an ROI slider
 * calculator) running ~1,800px to make one point: missed calls cost you money. The
 * timeline and calculator both restated the claim at length. The calculator still lives
 * on the industry pages, where a visitor who wants a number has already self-selected.
 *
 * COPY — THIS BAND CARRIES THE CORE ARGUMENT. It used to say "Every call that hits
 * voicemail is a job your competitor books", which is a convenience argument. The buyer
 * is an owner in their late fifties or sixties, and pest control is mid-roll-up: 22
 * PE-backed platforms, ~60–90 tuck-ins between 2024 and 2026, and for most independent
 * owners the company is their largest retirement asset. Acquirers price these businesses
 * on recurring revenue. So the argument is a valuation argument, not a time-saving one —
 * a missed call is recurring revenue that never started, and recurring revenue is what
 * the business sells for. The page never made that case before.
 *
 * ARCHETYPE: this band is the page's ONE card grid, and it is the only one that should
 * be. Cut from three cards to two so it reads in a single glance, per the brief. The
 * card dropped was "Call Centers Fall Short" — it argued against a competitor instead of
 * landing recognition, and its copy leaned on Rex by name before the visitor has met
 * him. Its `pain-call-center-hold.webp` collage was deleted once nothing referenced it.
 *
 * The copy sits INSIDE the card on a cream ground under a full-bleed 4:3 image. It gives
 * the row an actual object to be, and 4:3 breaks the all-square image rhythm.
 */

const problemCards = [
  {
    /* v3 (2026-08-29) replaced v2 for the same reason card 2 went to v4: it read as
       AI-generated. v2's tell was the phone SCREEN — the model filled it with
       meaningless blobs standing in for call buttons, which is the artefact a viewer
       spots first on a lit screen in a dark frame. Fixed by specifying the screen as a
       plain, uniform, featureless coral rectangle of light with no icons, buttons, call
       controls or symbols at all, so there is no UI for the model to invent. Also
       pinned "exactly one phone and one nightstand" (v1 produced mirrored duplicate
       nightstands) and "hands relaxed and closed, tucked or out of frame".

       v4 (2026-08-29) fixed the last ICP AGE mismatch on the page. v3's sleeper read as
       a man of about thirty-five with dark hair, against a buyer in his late fifties to
       sixties — and this card is unambiguously the visitor's own bad night, so he was
       looking at someone else. Recast at 60 with the age named as the most important
       part of the brief (thick silver-grey hair, deep forehead creases, grey stubble,
       heavier older build) plus an explicit "do NOT make him a man in his thirties"
       negation, which is required rather than optional — the model defaults hard to
       young men otherwise. Every v3 constraint above was restated, not assumed.

       FRAMING: this card renders 4:3 from a square source, so object-cover crops 25%
       vertically. The prompt pinned his head and the glowing phone inside the central
       horizontal band for that reason. Check any replacement at the real card crop. */
    title: "The 2 AM call",
    body: "Your highest-margin work. Miss it and the caller keeps scrolling until someone picks up.",
    src: "/images/illustrations/pain-2am-emergency-v4.webp",
    alt: "A business owner in his sixties asleep in bed at night while a phone rings unanswered on the nightstand beside him, its screen glowing",
  },
  {
    /* Real estate's only representation in the page's imagery. The hero is a trades
       figure, so putting the showing scene here means each co-primary market
       (invariants.md #3) is actually pictured above the fold-and-a-half.

       The -vN suffix is deliberate: overwriting an image in place does not reach the
       browser, because /_next/image caches optimised output by URL in memory and Chrome
       holds the decoded bitmap through a normal reload. Bump the suffix instead.

       v4 (2026-08-29) replaced v3 because v3 read as AI-generated at a glance: the
       agent's raised open palm had malformed splayed fingers, the man behind her had a
       smeared face, and the background was mush. Regenerated with Nano Banana 2 on the
       Pro model, restating the full locked style block, negating every previous subject
       by name, and adding explicit anti-artefact constraints — no open palms or splayed
       fingers (hands closed around the phone or out of frame), every face fully resolved
       and symmetrical, correct joint anatomy, documentary 35mm look rather than a
       render. The subject changed from "holding off the couple with a raised hand" to
       "taking the call while they wait", which removes the hand the model kept failing
       on. Native 1024px square, not upscaled to the 1200px of the rest of the set. */
    title: "Two calls at once",
    body: "You can only talk to one person. Voicemail takes a message from the other one — whoever answered takes the customer.",
    src: "/images/illustrations/pain-mid-showing-v4.webp",
    alt: "A real estate agent taking a phone call during a viewing while the buyer couple behind her waits, with a stack of incoming calls queued beside her",
  },
];

export default function TheRealCost() {
  return (
    <Section tone="white" width="wide">
      <div className="max-w-3xl">
        <SectionHeading className="text-ink">
          A missed call is revenue that never starts.
        </SectionHeading>
        {/* Two lines, not four. Both markets stay named (invariants.md #3) and the
            valuation argument stays — it is only stated once now instead of twice. */}
        <SectionLead className="max-w-2xl">
          A pest control operator loses a quarterly plan; a broker loses a listing to
          whoever picked up. Both are recurring revenue — the number a buyer values you on.
        </SectionLead>
      </div>

      {/* Two cards spanning the full band. Capped at max-w-4xl they measured 896px
          inside a 1152px band, which left a 256px orphan gap on the right that read as
          a third card failing to load. Full width also suits the brief's "minimal in
          quantity, generous in size". */}
      <ul className="mt-12 grid gap-6 sm:grid-cols-2">
        {problemCards.map((c, i) => (
          <Reveal key={c.title} as="li" delay={i * 0.08} className="h-full">
            <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-cream">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={c.src}
                  alt={c.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-heading text-lg font-bold tracking-[-0.01em] text-ink">
                  {c.title}
                </h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink/75">{c.body}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
