import Hero from "@/components/sections/home/Hero";
import TrustStrip from "@/components/sections/home/TrustStrip";
import Problem from "@/components/sections/home/Problem";
import Proof from "@/components/sections/home/Proof";
import HowItWorks from "@/components/sections/home/HowItWorks";
import MeetTheCrew from "@/components/sections/home/MeetTheCrew";
import LiveDemoSection from "@/components/sections/home/LiveDemoSection";
import PricingPreview from "@/components/sections/home/PricingPreview";
import FoundersTrust from "@/components/sections/home/FoundersTrust";
import HonestProof from "@/components/sections/home/HonestProof";
import FinalCta from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Problem />
      <Proof />
      <HowItWorks />
      <MeetTheCrew />
      <LiveDemoSection />
      <PricingPreview />
      <FoundersTrust />
      <HonestProof />
      <FinalCta
        heading="The next call is worth a job. Let's make sure you catch it."
        subtext="Join the early access crew and stop losing leads to the voicemail graveyard."
        primaryLabel="Hire the Crew Now"
        primaryHref="/contact"
        hideSecondary
      />
    </>
  );
}
