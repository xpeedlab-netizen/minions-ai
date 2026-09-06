import type { Metadata } from "next";
import PestHero from "@/components/sections/industries/pest-control/PestHero";
import PestStats from "@/components/sections/industries/pest-control/PestStats";
import PestProblem from "@/components/sections/industries/pest-control/PestProblem";
import PestCrewBento from "@/components/sections/industries/pest-control/PestCrewBento";
import WorkflowDiagram from "@/components/ui/WorkflowDiagram";
import PestRoiCalculator from "@/components/sections/industries/pest-control/PestRoiCalculator";
import PestFinalCta from "@/components/sections/industries/pest-control/PestFinalCta";

export const metadata: Metadata = {
  title: "24/7 AI Answering & Recurring Lead Automation for Pest Control | Minions AI",
  description:
    "Turn 2 AM pest panics into $2,500+ recurring subscriptions. Our AI crew answers on the 1st ring 24/7, converts one-off callers into quarterly plans, and syncs directly with FieldRoutes, PestPac, and GorillaDesk.",
};

export default function PestControlIndustryPage() {
  return (
    <>
      <PestHero />
      <PestStats />
      <PestProblem />
      {/* What happens on the call, before the crew band explains WHO does it. Sits
          between the leak band and the crew so the visitor knows the mechanism before
          the roster. */}
      <section className="border-b border-border bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <WorkflowDiagram
            heading="What Happens When Your Phone Rings"
            steps={[
              { title: "Answers on ring one", body: "24/7, including the 10:45 PM panic call and the whole weekend." },
              { title: "Triages the pest", body: "Identifies the species, the urgency and whether it is inside your service area." },
              { title: "Books the route slot", body: "Offers real open windows and confirms one, with prep details texted." },
              { title: "Writes to your CRM", body: "Lands in FieldRoutes, PestPac or GorillaDesk with the notes attached." },
            ]}
          />
        </div>
      </section>
      <PestCrewBento />
      <PestRoiCalculator />
      <PestFinalCta />
    </>
  );
}
