import Image from "next/image";
import Section, { SectionHeading, SectionLead } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import ParallaxBackground from "./ParallaxBackground";
import { RETELL_BILLING } from "@/lib/data/retell";

/**
 * "Built on Retell AI" — the technology trust band, added 2026-09-13 at the owner's
 * request.
 *
 * CLAIM SAFETY — READ lib/data/retell.ts BEFORE EDITING THIS FILE.
 *
 * The Retell partnership is APPLIED FOR BUT NOT CONFIRMED. This band therefore states
 * only what we DO ("built on", "we configure"), never a status we hold. Specifically
 * forbidden here until RETELL_PARTNER_STATUS flips to "official" with owner sign-off:
 *   - "Official", "Certified", "Authorised" or "Partner" as a title
 *   - Any claim of being listed in their partner directory
 *   - Presenting the logo as a badge, seal or endorsement mark of any kind
 *
 * LOGO — ADDED 2026-09-15 (owner's explicit request, confirmed NOT an official-partner
 * claim). public/images/brands/retell-ai-logo-white.svg is Retell AI's own official
 * white wordmark, downloaded from their published brand-assets page
 * (retellai.com/logos). This is nominative/referential use — crediting the platform a
 * product is built on ("Built with Stripe", "Powered by React") — not a certification
 * badge, so it does not require RETELL_PARTNER_STATUS to be "official". Sized at h-9/h-10
 * (owner's follow-up request: "larger and prominent", replacing an initial small inline
 * placement next to the eyebrow) as a standalone mark above the heading — still never
 * enlarged into a full hero lockup or paired with "Partner"/"Official"/"Certified" copy,
 * which would cross back into the claim this section is not allowed to make.
 *
 * EYEBROW PILL AND CTA LINK REMOVED 2026-09-15 (owner: the goal is booking a call, not
 * sending the visitor to read another page; also flagged /retell-ai-implementation as
 * carrying stale pest-control content not yet fit to route brokerage visitors into).
 * RETELL_CLAIM.eyebrow is still used on /retell-ai-implementation itself — do not delete
 * it from lib/data/retell.ts on account of this file no longer rendering it.
 *
 * The heading is NOT hardcoded — it reads RETELL_CLAIM, which is derived from
 * RETELL_PARTNER_STATUS. That is the whole point of that indirection: the claim lives
 * in one place and upgrades everywhere at once. Do not inline a stronger string here.
 *
 * WHY IT SITS AT 07, AFTER THE PROOF BAND AND BEFORE THE PILOT.
 *
 * lib/data/retell.ts argues that a visitor searching "missed calls are costing me
 * listings" has never heard of Retell, and that naming the platform early is a
 * confusing detour — which is why /retell-ai-implementation exists as a separate page
 * for a separate, warmer audience. That argument is still right about the HERO, and
 * this band deliberately does not go there.
 *
 * But it is the wrong conclusion for the page's back half. By band 07 the visitor has
 * heard the call work and read the response research; the question they are holding is
 * no longer "what is this" but "who is actually behind it, and what happens to me if
 * you disappear". That is a technology-provenance question, and leaving it unanswered
 * is what makes a small agency look like a risk. Answering it here also lets the band
 * carry RETELL_BILLING, which is the strongest trust statement written anywhere in this
 * repository and was previously reachable only from a page almost nobody visits.
 *
 * TONE — REWORKED 2026-09-14 INTO A FULL-BLEED PHOTO BAND, ink IS NOW THE BASE TONE
 * (was white). Proof (06) is teal and PilotOffer (08) is cream; a photographic ink band
 * is visually a fourth, more distinct look than either neighbour, so the no-adjacent-
 * tone-repeat rule in components/ui/Section.tsx is still satisfied — if anything more
 * clearly than the flat white it replaced. Do not retone this without checking both
 * neighbours again.
 *
 * NOTE ON THE SEAM BELOW: PilotOffer carries `pb-8 sm:pb-12` because cream -> white was
 * an invisible boundary. That note still holds — it describes the seam between PilotOffer
 * and PricingPreview, which this insertion does not touch. This band's own (now ink) ->
 * cream boundary into PilotOffer is a real tone change and keeps full spacing.
 *
 * The two-column split is the argument: what the platform supplies, and what we build on
 * top of it. Stating both honestly is what makes the claim credible — a page that
 * implied we built the speech stack ourselves would be lying, and a page that implied
 * Retell does all of it would be arguing itself out of a job.
 *
 * FULL-BLEED BACKGROUND + GLASS PANELS (2026-09-14, owner's request). The band was
 * carrying its image in a small side column; the owner asked for it as the section's
 * background instead, with a scroll effect, and the two text columns sitting on top of
 * a blurred version of it rather than beside it.
 *
 * PARALLAX IMPLEMENTATION — REWORKED 2026-09-15 (owner report: "not working on phone,
 * perfectly working on desktop"). The first version used `bg-scroll lg:bg-fixed`, i.e.
 * `background-attachment: fixed` gated to desktop only, with a static `bg-cover` image
 * as the documented mobile fallback. That fallback was working exactly as designed —
 * the "bug" was that "static image, no motion" IS what `lg:`-only fixed-attachment
 * produces below `lg:`, and it reads as broken rather than as a deliberate no-op.
 *
 * Replaced with ParallaxBackground (./ParallaxBackground.tsx), a small client
 * component using framer-motion's useScroll/useTransform to drive a `transform:
 * translateY(...)` on the image as the section scrolls through the viewport. This is
 * the same visual effect (`background-attachment: fixed` is itself just a scroll-linked
 * translate under the hood) but implemented as a JS-driven transform instead of a CSS
 * background property — transforms are not disabled on mobile Safari/Chrome the way
 * `background-attachment: fixed` is, so the effect now runs on every viewport size
 * without a separate mobile fallback path. framer-motion was already a project
 * dependency loaded on this exact page (see Reveal.tsx below), so this adds no new
 * library, only a second small client boundary next to the one that already existed
 * here for Reveal.
 *
 * A dark ink scrim (gradient, not a flat overlay, so the top where the heading sits is
 * darkest and the image reads a little more through lower down) sits between the photo
 * and the text so white type stays legible over a busy photographic image — the same
 * problem every full-bleed hero-photo pattern has to solve.
 *
 * The two content columns sit inside a frosted glass panel (`bg-white/10
 * backdrop-blur-md border border-white/15`): this is what "sits on top of the blurred
 * image" means in practice — backdrop-blur blurs the busy photo actually behind the
 * panel, not a separately blurred copy of the image, which is both simpler and stays
 * correct if the background image ever changes. Bullet dots and dividers move from
 * ink-based colours to white-based ones to stay visible on the dark photo; the teal
 * accent dot is kept because CallProofSection (03, also `tone="ink"`) uses the same
 * dark-band palette, so the two ink bands on the page read as one family.
 *
 * Subject is deliberately NOT a person — every other band already pictures a broker or
 * an agent, and this section is about the technology layer, not a human moment. It
 * shows a studio microphone with a glowing coral audio waveform on a mixing console
 * behind it, in the same locked collage style as every other illustration on the page
 * (torn halftone photo, coral/teal flat blocks, cream ground, ink hairlines). Generated
 * via ChatGPT image generation after repeated attempts kept substituting an unrelated
 * woman's portrait for the requested equipment-only shot — fixed by an explicit "no
 * human face, no person" negation.
 *
 * THE LEAD MUST NOT OPEN ON WHAT WE DO NOT DO (owner's correction, 2026-09-13). The
 * first draft read "We did not build the speech engine, and we are not going to pretend
 * we did." That is accurate and it was written for credibility, but it opens the band
 * on an absence — a prospect reads it as an apology, in the one section whose whole job
 * is to build confidence. Naming a dependency is not the problem; LEADING with a
 * negation is.
 *
 * The honest content is unchanged: we still say plainly that Retell supplies the voice
 * (the left column is titled "Retell AI provides"). The framing is now the engineering
 * decision it actually is — building on proven infrastructure rather than reinventing a
 * speech stack is what a competent shop does, and the value is in the six items on the
 * right. Keep any rewrite pointed at what we build, not at what we buy.
 */

const PLATFORM = {
  label: "Retell AI provides",
  items: [
    "Low-latency speech, interruption handling and natural turn-taking",
    "Call recordings, transcripts and analytics",
    "Function-calling hooks and per-second usage billing",
  ],
};

const OURS = {
  label: "We design, build and run",
  items: [
    "The brokerage conversation: representation, financing, timeline and motivation",
    "Live two-way calendar booking, not an agent that says it booked something",
    "CRM writes into Follow Up Boss, kvCORE or whatever you already run",
    "Routing rules, so the right agent gets the lead and escalations reach a person",
    "Recorded test scenarios you sign off before the line goes live",
    "Tuning in week three, when a caller finds a phrasing nobody predicted",
  ],
};

export default function BuiltOnRetell() {
  return (
    <Section tone="ink" width="wide" className="relative isolate overflow-hidden">
      {/* Full-bleed photo background with a scroll-linked parallax translate. See the
          docblock above for why this is a JS transform (ParallaxBackground) rather
          than `background-attachment: fixed`. */}
      <ParallaxBackground src="/images/illustrations/retell-infrastructure-v1.webp" />
      {/* Darkest at the top where the heading sits, lighter toward the bottom so the
          photo still reads through behind the billing card. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink/95 via-ink/85 to-ink/75"
      />

      <div className="relative">
        <div className="max-w-3xl">
          {/* Nominative brand credit, not a partner badge — see CLAIM SAFETY above.
              Sized prominently (owner's request, 2026-09-15) so it reads as a real
              logo rather than a small inline mark, while staying plain — no border,
              no "Partner" wording, no badge chrome around it. */}
          <Image
            src="/images/brands/retell-ai-logo-white.svg"
            alt="Retell AI"
            width={659}
            height={227}
            className="h-9 w-auto sm:h-10"
          />
          <SectionHeading className="mt-5 text-white">
            Built on Retell AI. Configured and run for your brokerage.
          </SectionHeading>
          <SectionLead tone="dark">
            We build on the same voice infrastructure the best AI phone products run on,
            then do the part that actually books showings: your qualification logic, your
            calendar, your CRM, your escalation rules.
          </SectionLead>
        </div>

        {/* Frosted glass panel: backdrop-blur blurs the photo actually behind it, which
            is what keeps the two-column list readable over a busy background image. */}
        <Reveal className="mt-12 rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-md sm:p-10">
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16 lg:divide-x lg:divide-white/15">
            {[PLATFORM, OURS].map((col, i) => (
              <div key={col.label} className={i === 1 ? "lg:pl-16" : ""}>
                <h3 className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-white/60">
                  {col.label}
                </h3>
                <ul className="mt-5 space-y-3">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-[0.9375rem] leading-[1.6] text-white/85"
                    >
                      <span
                        aria-hidden
                        className="mt-[0.5625rem] size-1.5 shrink-0 rounded-full bg-teal"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        {/* The billing statement, on its own ground. It is the single most trust-building
            thing in lib/data/retell.ts and it answers the question the whole band exists
            to answer: what happens to me if you disappear. Sourced from RETELL_BILLING so
            it cannot drift from the /pricing calculator and the Retell page. Kept as a
            solid cream card rather than another glass panel — it is the one statement in
            this band meant to read as a fixed, certain fact, not as part of the photo. */}
        <Reveal delay={0.16}>
          <div className="mt-14 rounded-2xl bg-cream p-7 shadow-xl sm:p-9">
            <h3 className="font-heading text-lg font-bold tracking-[-0.01em] text-ink sm:text-xl">
              {RETELL_BILLING.heading}
            </h3>
            <p className="mt-3 max-w-2xl text-[0.9375rem] leading-[1.65] text-ink/75">
              {RETELL_BILLING.body}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
