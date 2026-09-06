import type { Metadata } from "next";
import RealEstateHero from "@/components/sections/industries/real-estate/RealEstateHero";
import RealEstateStats from "@/components/sections/industries/real-estate/RealEstateStats";
import RealEstateProblem from "@/components/sections/industries/real-estate/RealEstateProblem";
import RealEstateCrewBento from "@/components/sections/industries/real-estate/RealEstateCrewBento";
import WorkflowDiagram from "@/components/ui/WorkflowDiagram";
import RealEstateRoiCalculator from "@/components/sections/industries/real-estate/RealEstateRoiCalculator";
import RealEstateFinalCta from "@/components/sections/industries/real-estate/RealEstateFinalCta";

export const metadata: Metadata = {
  title: "24/7 AI Showing Receptionist & Lead Scoring for Real Estate | Minions AI",
  description:
    "Stop losing high-value buyers to voicemail. Alex answers 1st ring 24/7, qualifies buyers via LPMAMA, follows your approved Fair Housing guardrails, and syncs directly with Google Calendar and Follow Up Boss.",
};

export default function RealEstateIndustryPage() {
  return (
    <>
      <RealEstateHero />
      <RealEstateStats />
      <RealEstateProblem />
      {/* What happens on the call, before the crew band explains WHO does it. */}
      <section className="border-b border-border bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <WorkflowDiagram
            heading="What Happens When A Buyer Calls"
            steps={[
              { title: "Answers on ring one", body: "While you are mid-showing, in a closing, or driving between the two." },
              { title: "Qualifies with LPMAMA", body: "Location, price, motivation and timeline, inside your approved guardrails." },
              { title: "Books the showing", body: "Checks real availability and offers alternatives when a slot is taken." },
              { title: "Writes to your CRM", body: "Lands in Follow Up Boss, kvCORE or EspoCRM with the qualification notes." },
            ]}
          />
        </div>
      </section>
      <RealEstateCrewBento />
      <RealEstateRoiCalculator />
      <RealEstateFinalCta />
    </>
  );
}
