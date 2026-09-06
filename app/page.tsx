import Hero from "@/components/sections/home/Hero";
import TheRealCost from "@/components/sections/home/TheRealCost";
import CallProofSection from "@/components/sections/home/CallProofSection";
import HowItWorks from "@/components/sections/home/HowItWorks";
import MeetTheCrew from "@/components/sections/home/MeetTheCrew";
import PricingPreview from "@/components/sections/home/PricingPreview";
import Proof from "@/components/sections/home/Proof";
import PilotOffer from "@/components/sections/home/PilotOffer";
import HomeFaq from "@/components/sections/home/HomeFaq";
import FinalCta from "@/components/sections/FinalCta";
import { BOOKING_CALENDAR_URL } from "@/lib/data/placeholders";

/**
 * Revalidated daily because the pricing cards print the current month (lib/current-month.ts).
 * Without this the label would freeze at whatever month the last deploy happened in, which
 * is worse than no label at all. Nothing else on the page is time-dependent.
 *
 * BAND ORDER — each band answers exactly one buyer question, in the order a cold visitor
 * asks them. Tone alternates on every step because Section treats the colour change as
 * the separator (see components/ui/Section.tsx); check that rule before inserting a band.
 *
 *   01 Hero               cream   what is this?
 *   02 TheRealCost        white   do I have this problem?
 *   03 CallProofSection   ink     is it real?
 *   04 MeetTheCrew        cream   who does what?
 *   05 HowItWorks         white   how does it get built?
 *   06 Proof              teal    does it work?
 *   07 PilotOffer         cream   has anyone actually paid you? / is this for me?
 *   08 PricingPreview     white   what does it cost? / what if it fails?
 *   09 HomeFaq            cream   what am I still worried about?
 *   10 FinalCta           teal    what is my next step?
 *
 * PilotOffer sits at 07 because that is where the question it answers actually gets
 * asked. Proof (06) is the page's evidence band, and a visitor who has just read three
 * third-party statistics is the one thinking "fine, but has anyone hired YOU" — so the
 * admission that there is no customer yet lands immediately after the research, not
 * pages later. It also has to precede pricing: the pilot changes what the price cards
 * mean, and reading $2,500 before learning the first 30 days are free is the wrong
 * order. Cream is the only tone that keeps the alternation rule between teal and white.
 *
 * WhoThisIsNotFor was removed from the page on 2026-09-05 and its content folded into
 * PilotOffer as a single fit line. It ran immediately after the pilot band, so the page
 * spent band 07 removing every reason to hesitate and band 08 asking whether the visitor
 * qualified. Bands 07 to 10 were also four consecutive commitment moments, each with its
 * own CTA. Three of its four disqualifiers also excluded nobody. The component is kept
 * compiling and unrendered rather than deleted. Removing it left two cream bands
 * adjacent, so PricingPreview moved cream -> white.
 *
 * GuaranteeSection was removed from the page on 2026-09-06. Of its eight claims, four
 * were already made by bands 07 and 08 (30-day tuning, accounts in your name, no
 * long-term contract, and 40% falling due only at handover, which band 08 draws as a
 * milestone strip directly above it) — so it spent an entire ink band opening on its
 * most-repeated material under a heading that promised nothing specific. What was NOT
 * said anywhere else is the buyer's control over the build: approving the script before
 * work starts and running the test calls. That moved into band 08's milestone strip,
 * which is where the payment sequence it belongs to already lives. The component is
 * kept compiling and unrendered rather than deleted, as with WhoThisIsNotFor.
 *
 * This leaves ONE dark band (03) where there were two. The pairing was deliberate — see
 * the atmosphere note in GuaranteeSection — so the page's closing third is now lighter
 * than it was. Band 08 white -> band 09 cream still satisfies the alternation rule, so
 * no retoning was needed.
 *
 * Proof was built, then unrendered on 2026-08-29 when the page was cut from 14 bands to
 * 9 for being too long and too prose-heavy. It is back because the page swung too far
 * the other way and asked for a booking without ever proving the product works. It
 * returned unmodified: that cut was about page length, not about the component being
 * wrong.
 */
export const revalidate = 86400;

export default function Home() {
  return (
    <>
      <Hero />
      <TheRealCost />
      <CallProofSection />
      <MeetTheCrew />
      <HowItWorks />
      <Proof />
      <PilotOffer />
      <PricingPreview />
      <HomeFaq />
      <FinalCta
        heading="Get home on time. Let the crew answer."
        subtext="Your AI crew is live in 3–6 weeks for a fixed one-time fee, with 30 days of tuning included after go-live."
        primaryLabel="Book Your 15-Minute Setup Call"
        primaryHref={BOOKING_CALENDAR_URL}
        analyticsLocation="home_final_cta"
        hideSecondary
        image="/images/illustrations/outcome-home-on-time.webp"
        imageAlt="A service business owner home in the evening, kneeling to greet his young daughter with his phone put away"
      />
    </>
  );
}

