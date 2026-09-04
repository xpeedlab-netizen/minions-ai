import Hero from "@/components/sections/home/Hero";
import TheRealCost from "@/components/sections/home/TheRealCost";
import CallProofSection from "@/components/sections/home/CallProofSection";
import HowItWorks from "@/components/sections/home/HowItWorks";
import MeetTheCrew from "@/components/sections/home/MeetTheCrew";
import PricingPreview from "@/components/sections/home/PricingPreview";
import Proof from "@/components/sections/home/Proof";
import WhoThisIsNotFor from "@/components/sections/home/WhoThisIsNotFor";
import GuaranteeSection from "@/components/sections/home/GuaranteeSection";
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
 *   07 WhoThisIsNotFor    white   is this for me?
 *   08 PricingPreview     cream   what does it cost?
 *   09 GuaranteeSection   ink     what if it fails?
 *   10 HomeFaq            cream   what am I still worried about?
 *   11 FinalCta           teal    what is my next step?
 *
 * Proof, WhoThisIsNotFor and GuaranteeSection were built, then unrendered on 2026-08-29
 * when the page was cut from 14 bands to 9 for being too long and too prose-heavy. They
 * are back because the page swung too far the other way: it asked for a booking without
 * ever proving the product works, disqualifying anyone, or naming what happens if it
 * fails. They return unmodified — the earlier cut was about page length, not about these
 * components being wrong.
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
      <WhoThisIsNotFor />
      <PricingPreview />
      <GuaranteeSection />
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

