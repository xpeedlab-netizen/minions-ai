import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/ui/FaqAccordion";
import Section, { SectionHeading, SectionLead, Eyebrow } from "@/components/ui/Section";
import PartnersHero from "@/components/sections/partners/PartnersHero";
import PartnerValueGrid from "@/components/sections/partners/PartnerValueGrid";
import CommissionTiers from "@/components/sections/partners/CommissionTiers";
import WhoDoesWhat from "@/components/sections/partners/WhoDoesWhat";
import PartnerFit from "@/components/sections/partners/PartnerFit";
import PartnerSteps from "@/components/sections/partners/PartnerSteps";
import PartnerApplyForm from "@/components/sections/partners/PartnerApplyForm";
import { partnerFaqs } from "@/lib/data/partners";

/**
 * THIS PAGE IS DELIBERATELY UNLISTED (owner decision, 2026-08-29).
 *
 * It is live and shareable, but it is absent from the header nav, the footer and
 * app/sitemap.ts, and it carries `noindex, nofollow` below. The reasoning: the partner
 * pitch is sent to agencies being courted, and a customer who lands on it cold reads
 * commission percentages instead of a reason to book. Do not add it to lib/data/nav.ts
 * or app/sitemap.ts without the owner asking — the omission is the feature.
 *
 * Every commercial figure comes from lib/data/partners.ts, which derives from the
 * approved partner document. Nothing on this page is written inline.
 *
 * BAND SEQUENCE — tones alternate so no two adjacent bands share a background:
 *   01 Hero            ink     what this is, and the two CTAs
 *   02 Why partner     cream   the six reasons, as a hairline grid
 *   03 Commission      white   the three tiers with worked figures
 *   04 Who does what   ink     the objection that kills partner programs
 *   05 Fit             cream   six partner archetypes
 *   06 Getting started white   the five-step sequence to first commission
 *   07 Questions       cream   the eight questions partners ask first
 *   08 Apply           teal    the close
 */
export const metadata: Metadata = {
  title: "Partner Program",
  description:
    "Earn on every AI voice agent client you introduce. Three commission tiers, no cost to join, and we handle the entire build and support.",
  robots: { index: false, follow: false },
};

export default function PartnersPage() {
  return (
    <>
      <PartnersHero />
      <PartnerValueGrid />
      <CommissionTiers />
      <WhoDoesWhat />
      <PartnerFit />
      <PartnerSteps />

      <Section tone="cream" width="default">
        <Eyebrow>Questions</Eyebrow>
        <SectionHeading className="mt-6">The things partners ask first.</SectionHeading>
        <div className="mt-10">
          <FaqAccordion items={partnerFaqs} defaultOpenIndex={null} />
        </div>
      </Section>

      <Section tone="teal" width="wide" id="apply">
        <Eyebrow tone="dark">Apply</Eyebrow>
        <SectionHeading className="mt-6">Tell us who you work with.</SectionHeading>
        <SectionLead tone="dark">
          Two minutes. We read every application ourselves and reply within three business
          days — including when the answer is that it is not the right fit.
        </SectionLead>

        <div className="mt-10 max-w-3xl">
          <PartnerApplyForm />
          {/*
            The source document printed partners@getminions.ai here. That mailbox is not
            provisioned, so this points at /contact instead — swap it back the moment the
            address is live.
          */}
          <p className="mt-5 text-sm leading-relaxed text-cream/75">
            We will only use these details to contact you about partnering. No newsletter, no
            list. Prefer to talk first?{" "}
            <Link href="/contact" className="text-white underline underline-offset-4">
              Get in touch here
            </Link>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
