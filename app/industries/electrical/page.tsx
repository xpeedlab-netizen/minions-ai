import type { Metadata } from "next";
import ElectricalHero from "@/components/sections/industries/electrical/ElectricalHero";
import ElectricalResponseGap from "@/components/sections/industries/electrical/ElectricalResponseGap";
import ElectricalFeatures from "@/components/sections/industries/electrical/ElectricalFeatures";
import ElectricalLocalMap from "@/components/sections/industries/electrical/ElectricalLocalMap";
import ElectricalFinalCta from "@/components/sections/industries/electrical/ElectricalFinalCta";

export const metadata: Metadata = {
  title: "AI Answering & Lead Follow-Up for Electrical Companies",
  description:
    "When the lights go out, customers call the first person who answers. Rex ensures that's you, 24/7. No more missed emergencies, no more lost revenue.",
};

export default function ElectricalIndustryPage() {
  return (
    <>
      <ElectricalHero />
      <ElectricalResponseGap />
      <ElectricalFeatures />
      <ElectricalLocalMap />
      <ElectricalFinalCta />
    </>
  );
}
