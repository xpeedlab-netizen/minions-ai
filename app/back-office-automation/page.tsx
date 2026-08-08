import type { Metadata } from "next";
import ServiceHero from "@/components/sections/service/ServiceHero";
import OttoHeroAnimation from "@/components/sections/service/OttoHeroAnimation";
import WhatItDoesList from "@/components/sections/service/WhatItDoesList";
import TextSection from "@/components/sections/service/TextSection";
import FinalCta from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Back-Office & Document Automation for Accountants & Law Firms",
  description:
    "Otto automates client intake, document chasing, data entry and filing — so your team spends its time on billable work instead of paperwork.",
};

const whatOttoDoes = [
  "Client intake and onboarding flows",
  "Automatic document requests, and the polite nagging that follows",
  "Pulls key data out of forms and documents",
  "Routes files to the right folder, matter or client record",
  "Status tracking so nothing gets lost between people",
  "Careful handling of sensitive information",
];

export default function BackOfficeAutomationPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Otto — Back-Office Automation"
        h1="Stop paying skilled people to do paperwork."
        subhead="Otto handles the document grind for accounting and law firms — intake forms, chasing the client who still hasn't sent their W-2, sorting and filing, and getting the right data into the right system. Quietly, in the background."
        ctaLabel="Book a process review"
        ctaHref="/contact"
        visual={<OttoHeroAnimation />}
      />
      <WhatItDoesList heading="What Otto does" items={whatOttoDoes} />
      <TextSection
        heading="Trust"
        body="Built for firms that handle private information. We'll sign an NDA before we see anything, and set up secure, permissioned access from day one."
      />
      <FinalCta
        heading="The paperwork is just… done."
        primaryLabel="Book a process review"
        primaryHref="/contact"
      />
    </>
  );
}
