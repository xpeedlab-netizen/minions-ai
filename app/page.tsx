import Hero from "@/components/sections/home/Hero";
import TrustStrip from "@/components/sections/home/TrustStrip";
import Problem from "@/components/sections/home/Problem";
import ContractorTimeline from "@/components/sections/home/ContractorTimeline";
import CostCalculator from "@/components/sections/home/CostCalculator";
import Proof from "@/components/sections/home/Proof";
import HowItWorks from "@/components/sections/home/HowItWorks";
import ComparisonTable from "@/components/sections/home/ComparisonTable";
import MeetTheCrew from "@/components/sections/home/MeetTheCrew";
import LiveDemoSection from "@/components/sections/home/LiveDemoSection";
import PricingPreview from "@/components/sections/home/PricingPreview";
import GuaranteeSection from "@/components/sections/home/GuaranteeSection";
import FoundersTrust from "@/components/sections/home/FoundersTrust";
import FounderVideoSection from "@/components/sections/home/FounderVideoSection";
import HonestProof from "@/components/sections/home/HonestProof";
import WhoThisIsNotFor from "@/components/sections/home/WhoThisIsNotFor";
import FaqSection from "@/components/sections/faq/FaqSection";
import FinalCta from "@/components/sections/FinalCta";
import { BOOKING_CALENDAR_URL } from "@/lib/data/placeholders";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Problem />
      <ContractorTimeline />
      <CostCalculator />
      <Proof />
      <HowItWorks />
      <ComparisonTable />
      <MeetTheCrew />
      <LiveDemoSection />
      <PricingPreview />
      <GuaranteeSection />
      <FoundersTrust />
      <FounderVideoSection />
      <HonestProof />
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
