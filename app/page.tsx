import Hero from "@/components/sections/home/Hero";
import TheRealCost from "@/components/sections/home/TheRealCost";
import Proof from "@/components/sections/home/Proof";
import HowItWorks from "@/components/sections/home/HowItWorks";
import IndustriesSection from "@/components/sections/home/IndustriesSection";
import MeetTheCrew from "@/components/sections/home/MeetTheCrew";
import PricingPreview from "@/components/sections/home/PricingPreview";
import FinalCta from "@/components/sections/FinalCta";
import { BOOKING_CALENDAR_URL } from "@/lib/data/placeholders";

/**
 * Landing page band sequence.
 *
 * Tone alternates deliberately — no two adjacent bands share a background — with the
 * accent bands (teal / INK) acting as punctuation across the scroll.
 *
 *   cream(hero) · white · teal · cream · white · INK(crew) · cream · teal
 *
 * FoundersTrust was removed at the owner's direction. It was the page's only dark
 * band, so MeetTheCrew inherits the INK slot — the mascot PNGs read better on dark
 * than on cream anyway, and it keeps two dark punctuations in the scroll.
 *
 * Deliberately short. Sections that restated an argument the page had already made
 * (ComparisonTable, GuaranteeSection, WhoThisIsNotFor) or that duplicate a dedicated
 * route (FaqSection -> /faq) were removed rather than shortened: the page's problem
 * was section count, not paragraph length inside each one. The guarantee still appears
 * as a line in FinalCta, which is where it converts.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <TheRealCost />
      <Proof />
      <HowItWorks />
      <IndustriesSection />
      <MeetTheCrew />
      <PricingPreview />
      <FinalCta
        heading="Get home on time. Let the crew answer."
        subtext="Deploy your AI crew in about 7 days. Backed by a 30-day money-back guarantee."
        primaryLabel="Book Your 15-Minute Setup Call"
        primaryHref={BOOKING_CALENDAR_URL}
        hideSecondary
        image="/images/illustrations/outcome-home-on-time.webp"
        imageAlt="A contractor arriving home in the evening and being greeted by his daughter, phone away in his pocket"
      />
    </>
  );
}
