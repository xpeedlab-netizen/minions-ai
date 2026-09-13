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
 * voicemail is a job your competitor books", which is a convenience argument, and was
 * then rewritten into a valuation argument aimed at a pest-control owner approaching
 * retirement in a mid-roll-up market.
 *
 * REPOSITIONED 2026-09-13 FOR A BROKERAGE READER. The valuation frame survives, because
 * it is still the strongest thing this band does and it still fits: a brokerage is also
 * priced on what recurs — the agents it retains and the pipeline it can show. But the
 * LOSS is now stated the way a broker actually experiences it, and that is not a
 * quarterly contract. It is money already spent. Every inbound lead was paid for twice
 * over — the portal fee, the listing spend, the years of referral reputation — and a
 * lead that rings out is that spend converted into nothing, plus a commission that goes
 * to whoever answered.
 *
 * WHAT THIS BAND MUST NOT DO is put a dollar figure on a missed call. Commission splits,
 * price points and conversion rates vary so widely between brokerages that any number we
 * print is wrong for most readers, and a wrong number in the page's core argument is
 * worse than no number. The industry ROI calculators exist for visitors who want one and
 * have self-selected. Keep the loss qualitative here.
 *
 * THE ARGUMENT IS UNCHANGED; ITS VOICE IS NOT (2026-09-10). It read as "A missed call is
 * revenue that never starts. … Both are recurring revenue: the number a buyer values you
 * on." — correct, and written like a CFO memo. Two problems. First, it never named the
 * moment the valuation argument is actually ABOUT: the day the owner sells, which for
 * this buyer is the day they retire. "Recurring revenue" is the mechanism; the exit is
 * the stake, and only the stake is worth feeling. Second, the hero was reframed the same
 * day to open on the loss ("Every missed call is a customer someone else just booked"),
 * so this band's old heading no longer INTRODUCED that argument — it repeated it in the
 * same sentence shape one screen later. It now escalates instead: the hero takes one
 * call, this band takes the contract behind it and the number the company sells for.
 *
 * "Whatever you sell this business for" is deliberately conditional. Not every owner
 * intends to sell, and presuming it would lose the ones who don't — but the brokerage is
 * their largest asset either way, so the conditional keeps the stake without the claim.
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
    /* !!! PLACEHOLDER IMAGE — NOT THE REAL ASSET AS OF 2026-09-13 !!!
       pain-after-hours-inquiry-v1.webp is currently a byte-for-byte COPY of
       pain-2am-emergency-v4.webp, staged so the build stays green while the real
       generation is produced. The v4 sleeper is a generic older man in a dark bedroom,
       so it is not actively wrong for a brokerage owner — but it was briefed and
       approved as a PEST-CONTROL owner's bad night and it has not been re-approved for
       this card. Replace it before this reaches production, and delete this warning
       when you do.

       The prompt is written and matches the locked style block (torn-paper fragment,
       deckled edge, coarse halftone, ink crosshairs, documentary 35mm) with the age
       constraint restated — the model defaults hard to men in their thirties, and this
       card is unambiguously the visitor's own bad night, so a young subject makes him
       someone else. Anti-artefact constraints carried over from v3/v4: the phone screen
       is a plain featureless coral rectangle with no UI for the model to invent, exactly
       one phone and one nightstand, hands closed or out of frame.

       WHY THE CARD CHANGED AT ALL. The old copy ("The 2 AM call / Your highest-margin
       work") is emergency-dispatch framing: 2 AM is when a pest or plumbing emergency
       calls, not when a buyer inquires. The real after-hours moment for a brokerage is
       the evening, when someone browsing listings after work rings the number on the
       sign. Same structure, same image composition, a moment the reader actually has.

       FRAMING: this card renders 4:3 from a square source, so object-cover crops 25%
       vertically. Keep his head and the glowing phone inside the central horizontal
       band. Check any replacement at the real card crop.

       ---- PRIOR HISTORY OF THE IMAGE THIS CARD USED (pain-2am-emergency-*), KEPT
       BECAUSE THE NEW GENERATION INHERITS EVERY ONE OF THESE CONSTRAINTS ----

       v3 (2026-08-29) replaced v2 for the same reason card 2 went to v4: it read as
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
       young men otherwise. Every v3 constraint above was restated, not assumed. */
    title: "The 9 PM listing inquiry",
    body: "Most buyers start online, after work. They call the first number on the listing and keep going down the results until someone answers.",
    src: "/images/illustrations/pain-after-hours-inquiry-v1.webp",
    alt: "A brokerage owner in his sixties asleep in bed at night while a phone rings unanswered on the nightstand beside him, its screen glowing",
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
    title: "Two leads at once",
    body: "You are mid-showing and the second one rings out. You paid for that lead twice over; the commission goes to whoever picked up.",
    src: "/images/illustrations/pain-mid-showing-v4.webp",
    alt: "A real estate agent taking a phone call during a viewing while the buyer couple behind her waits, with a stack of incoming calls queued beside her",
  },
];

export default function TheRealCost() {
  return (
    <Section tone="white" width="wide">
      <div className="max-w-3xl">
        <SectionHeading className="text-ink">
          Whatever you sell this brokerage for, it will be priced on the leads you
          answered.
        </SectionHeading>
        {/*
          The valuation argument stays — this band is the only place the page makes it,
          so it is the one thing that cannot be cut for length.

          "not one showing" is the whole point of the sentence: the reader's instinct is
          to price a missed call at a single appointment, and the correction to money
          already spent is what carries them to the heading's claim. The lead names what
          was spent (portal fee, listing spend, referral) rather than a dollar figure,
          for the reason in the docblock — any number we print is wrong for most
          brokerages.

          KEEP IT SHORT. An earlier draft ran the correction, the acquirer clause and
          "the largest thing they own" together — 213 characters and five lines at 390,
          and the owner cut it back. The heading states the valuation claim outright, so
          the lead does not have to argue it as well. 137 characters here.

          The `max-w-2xl` this used to pass did nothing: SectionLead caps itself at
          max-w-xl and wins the cascade. Removed rather than forced.
        */}
        <SectionLead>
          A missed call is not one showing. It is the portal fee, the listing spend and
          the referral you already paid for, converted into nothing.
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
