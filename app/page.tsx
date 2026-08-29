import Hero from "@/components/sections/home/Hero";
import TheRealCost from "@/components/sections/home/TheRealCost";
import HowItWorks from "@/components/sections/home/HowItWorks";
import MeetTheCrew from "@/components/sections/home/MeetTheCrew";
import PricingPreview from "@/components/sections/home/PricingPreview";
import FinalCta from "@/components/sections/FinalCta";
import { BOOKING_CALENDAR_URL } from "@/lib/data/placeholders";

/**
 * Landing page band sequence — the six-band plan from the landing brief.
 *
 *   01 Hero          cream   say what this is; book, or dial the demo line
 *   02 The problem    white   one beat of recognition, then the valuation argument
 *   03 What you get   INK     the four capabilities in plain language
 *   04 How it works   cream   kill the "this will be a project" fear
 *   06 Price          cream   defuse cost against the human alternative
 *   07 Book           teal    the close
 *
 * Tone still alternates so no two adjacent bands share a background, with the accent
 * bands acting as punctuation across the scroll.
 *
 * TWO BANDS RETIRED FROM THE HOMEPAGE (both pages still exist and still rank):
 *   - Proof — the MIT/InsideSales and HBR speed-to-lead research. It argued about
 *     lead-response research in general rather than about us, and the studies are from
 *     2007 and 2011, with the 100x/21x figures funded by a vendor selling speed-to-lead
 *     software. It is a good argument on a research page and a weak one here.
 *   - IndustriesSection — a six-row table of verticals. Not on the path from landing to
 *     booked; the industries nav dropdown and the two per-market footer links carry it.
 *
 * BAND 05 "WHO WE ARE" IS CUT, NOT PENDING. The owner ruled on 2026-08-29: no founder
 * photos and no trust band of that kind for now. The landing brief argued the opposite —
 * that with two named engineers and no customers, the faces ARE the trust — and that
 * argument was overruled. FoundersTrust stays in the repo, unrendered. Do not add it back
 * without the owner asking.
 *
 * CONSEQUENCE WORTH KNOWING. With Proof retired and this band cut, the page makes no
 * claim about who is behind the product. Credibility rests entirely on the live demo
 * number in the hero, the guarantee, the no-lock-in terms and the named integrations —
 * so the demo line has to work, and it is the one element here that must not regress.
 *
 * Sections that restated an argument the page had already made (ComparisonTable,
 * GuaranteeSection, WhoThisIsNotFor) or that duplicate a dedicated route (FaqSection ->
 * /faq) were removed rather than shortened. The guarantee still appears as a line in
 * FinalCta, which is where it converts.
 */

/**
 * CLOSING ILLUSTRATION, v1 -> v2. The original outcome-home-on-time.webp was the last image
 * never audited against the ICP, and it failed on two counts at once: the figure read as a man
 * of about thirty-five, roughly 25 years younger than the buyer (see the ICP casting pattern in
 * memory.md), and it had drifted off the locked collage style into a plain photographic collage.
 * v2 restates the full sme.careers-derived style block — one torn halftone fragment with a white
 * deckled edge over flat axis-aligned coral/teal rectangles on cream, drafting hairlines and
 * registration marks, no text — and casts him at 58 in the same uniform shirt and cap as the hero
 * owner, so the page opens and closes on the same man at the two ends of his day.
 *
 * NO PHONE APPEARS IN THIS IMAGE, DELIBERATELY. Every other illustration in the set uses a
 * coral-lit phone as its accent; this is the one band whose whole message is that the phone is no
 * longer his problem, so the coral lives in the blocks instead. Do not "restore" a phone here.
 *
 * outcome-home-on-time.webp (v1) IS DELIBERATELY RETAINED ON DISK at the owner's request even
 * though nothing references it. Do not delete it in an unused-asset sweep.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <TheRealCost />
      <MeetTheCrew />
      <HowItWorks />
      <PricingPreview />
      <FinalCta
        heading="Get home on time. Let the crew answer."
        subtext="Deploy your AI crew in about 7 days. Backed by a 30-day money-back guarantee."
        primaryLabel="Book Your 15-Minute Setup Call"
        primaryHref={BOOKING_CALENDAR_URL}
        hideSecondary
        image="/images/illustrations/outcome-home-on-time-v2.webp"
        imageAlt="A pest control owner in his late fifties, still in his uniform shirt and cap, crouched on his own porch steps with both arms around his granddaughter at the end of the day"
      />
    </>
  );
}
