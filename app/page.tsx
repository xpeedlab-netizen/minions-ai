import Hero from "@/components/sections/home/Hero";
import TrustStrip from "@/components/sections/home/TrustStrip";
import TheRealCost from "@/components/sections/home/TheRealCost";
import LiveDemoSection from "@/components/sections/home/LiveDemoSection";
import Proof from "@/components/sections/home/Proof";
import HowItWorks from "@/components/sections/home/HowItWorks";
import MeetTheCrew from "@/components/sections/home/MeetTheCrew";
import ComparisonTable from "@/components/sections/home/ComparisonTable";
import PricingPreview from "@/components/sections/home/PricingPreview";
import GuaranteeSection from "@/components/sections/home/GuaranteeSection";
import FoundersTrust from "@/components/sections/home/FoundersTrust";
import WhoThisIsNotFor from "@/components/sections/home/WhoThisIsNotFor";
import FaqSection from "@/components/sections/faq/FaqSection";
import FinalCta from "@/components/sections/FinalCta";
import { BOOKING_CALENDAR_URL } from "@/lib/data/placeholders";

/**
 * Landing page band sequence.
 *
 * Tone alternates deliberately — no two adjacent bands share a background — with the
 * three accent bands (teal / ink / teal) acting as punctuation across the scroll.
 * Three sections carry `feature` density (TheRealCost, MeetTheCrew, PricingPreview);
 * everything else is standard, which is what gives the page its rhythm.
 *
 *   cream · ink(thin) · cream · white · teal · white · cream · white · INK(founders) ·
 *   cream · ink · white · cream · teal
 *
 * The two dark bands are deliberate punctuation: FoundersTrust (why we built this)
 * and GuaranteeSection (what we promise). They are kept apart by PricingPreview so
 * neither loses its impact.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <TheRealCost />
      {/* Hidden until DEMO_VIDEO_ID is set. */}
      <LiveDemoSection />
      <Proof />
      <HowItWorks />
      <MeetTheCrew />
      <ComparisonTable />
      {/* Founders is a dark inverted band (story + video as one moment), so it sits
          between two light sections rather than next to the ink GuaranteeSection. */}
      <FoundersTrust />
      <PricingPreview />
      <GuaranteeSection />
      <WhoThisIsNotFor />
      <FaqSection />
      <FinalCta
        heading="Every Missed Call Belongs to Your Competitor. Fix It Today."
        subtext="Deploy your 24/7 custom AI crew in about 7 days. Backed by a 100% 30-day money-back guarantee with zero contract risk."
        primaryLabel="Book Your 15-Minute Setup Call"
        primaryHref={BOOKING_CALENDAR_URL}
        hideSecondary
      />
    </>
  );
}
