import Hero from "@/components/sections/home/Hero";
import TrustStrip from "@/components/sections/home/TrustStrip";
import Problem from "@/components/sections/home/Problem";
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
        heading="The next call is worth a job. Let's make sure you catch it."
        subtext="Join the early access crew and stop losing leads to the voicemail graveyard."
        primaryLabel="Hire the Crew Now"
        primaryHref={BOOKING_CALENDAR_URL}
        hideSecondary
      />
    </>
  );
}
