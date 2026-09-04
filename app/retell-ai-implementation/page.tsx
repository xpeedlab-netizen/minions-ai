import type { Metadata } from "next";
import { Check, Wrench } from "lucide-react";
import Button from "@/components/ui/Button";
import FaqAccordion from "@/components/ui/FaqAccordion";
import Section, { SectionHeading, SectionLead, Eyebrow } from "@/components/ui/Section";
import { BOOKING_CALENDAR_URL } from "@/lib/data/placeholders";
import { SETUP_TIME_PROMISE } from "@/lib/data/site-content";
import {
  RETELL_CLAIM,
  RETELL_GAP,
  RETELL_VERTICALS,
  RETELL_BILLING,
  retellFaqs,
} from "@/lib/data/retell";

/**
 * /retell-ai-implementation — the page for the visitor who already knows what Retell is.
 *
 * SEPARATE PAGE, NOT A HOMEPAGE BAND. The homepage speaks to an owner whose problem is
 * "nobody answers the phone after 5pm"; that visitor has never heard of Retell and a
 * vendor band is a detour for them (see the product spec's tone rule, §7). This page
 * speaks to the much smaller, much warmer visitor who searched for Retell by name and
 * wants it built. Those are different intents and they need different pages — which is
 * also the only way to rank for "Retell AI implementation" without diluting the
 * homepage's pain-first message.
 *
 * NOT /partners. That page is the reseller/commission program and is deliberately
 * noindex + unlisted. This one is the opposite: it exists to be found.
 *
 * All claim wording is derived from RETELL_PARTNER_STATUS in lib/data/retell.ts, which
 * is currently "building-on" because the partnership is applied for but NOT confirmed.
 * Read the claim-safety notes in that file before editing any heading here.
 *
 * BAND ORDER — tones alternate, per components/ui/Section.tsx:
 *   01 Hero        cream   what we do, for whom
 *   02 The gap     white   what Retell gives you vs what still has to be built
 *   03 Verticals   ink     why pest control and real estate specifically
 *   04 Billing     cream   you own the account, we don't mark up minutes
 *   05 FAQ         white   the five questions this visitor actually has
 *   06 CTA         teal    book
 */
export const metadata: Metadata = {
  title: "Retell AI Implementation for Pest Control & Real Estate",
  description:
    "We build and deploy Retell AI voice agents for pest control operators and real estate teams — prompt, calendar booking, CRM integration and post-launch tuning. You own the account; we never mark up your minutes.",
  alternates: { canonical: "https://www.getminions.ai/retell-ai-implementation" },
  openGraph: {
    title: "Retell AI Implementation for Pest Control & Real Estate",
    description:
      "Retell is a developer platform. We do the building, the integrations and the tuning, and hand you a phone line that answers.",
    url: "https://www.getminions.ai/retell-ai-implementation",
    type: "website",
  },
};

export default function RetellImplementationPage() {
  /*
   * Service schema rather than Organization: this page describes a service offering, and
   * `provider` already resolves to the site-wide Organization node declared in
   * app/layout.tsx. Naming Retell under `serviceOutput`/`areaServed` would overstate the
   * relationship, so the platform is referenced only as what we build WITH.
   */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Retell AI Implementation for Pest Control & Real Estate",
    serviceType: "AI voice agent implementation",
    provider: { "@id": "https://www.getminions.ai/#organization" },
    description:
      "Design, build, integration and post-launch tuning of Retell AI voice agents for pest control operators and real estate teams.",
    audience: {
      "@type": "BusinessAudience",
      name: "Pest control operators and real estate teams",
    },
    mainEntityOfPage: "https://www.getminions.ai/retell-ai-implementation",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: retellFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* 01 — Hero */}
      <Section tone="cream" width="default">
        <Eyebrow>{RETELL_CLAIM.eyebrow}</Eyebrow>
        <SectionHeading className="mt-6 max-w-4xl">{RETELL_CLAIM.heading}</SectionHeading>
        <SectionLead className="mt-6">{RETELL_CLAIM.lead}</SectionLead>
        <div className="mt-9 flex flex-wrap gap-4">
          <Button
            href={BOOKING_CALENDAR_URL}
            showArrow
            track={{ event: "cta_click", params: { location: "retell_hero" } }}
          >
            Book a 15-Minute Setup Call
          </Button>
          <Button href="/#hear-it" variant="secondary">
            Hear a call it handled
          </Button>
        </div>
      </Section>

      {/* 02 — The gap. The section that earns the page. */}
      <Section tone="white" width="default">
        <SectionHeading className="max-w-3xl">{RETELL_GAP.heading}</SectionHeading>
        <SectionLead className="mt-5">{RETELL_GAP.lead}</SectionLead>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Retell's half — stated generously. Undercutting the platform we build on
              would be both dishonest and self-defeating. */}
          <div className="rounded-3xl border border-border bg-cream p-7 sm:p-9">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-ink/65">
              {RETELL_GAP.platform.label}
            </p>
            <ul className="mt-6 space-y-4">
              {RETELL_GAP.platform.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    className="mt-0.5 size-[1.125rem] shrink-0 text-teal"
                    strokeWidth={2.25}
                    aria-hidden
                  />
                  <span className="text-[0.9375rem] leading-[1.6] text-ink/75">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Our half — the longer list, which is the argument. */}
          <div className="rounded-3xl border-2 border-ink bg-white p-7 sm:p-9">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-coral-text">
              {RETELL_GAP.gap.label}
            </p>
            <ul className="mt-6 space-y-4">
              {RETELL_GAP.gap.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Wrench
                    className="mt-0.5 size-[1.125rem] shrink-0 text-coral-text"
                    strokeWidth={2}
                    aria-hidden
                  />
                  <span className="text-[0.9375rem] leading-[1.6] text-ink/75">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 03 — Verticals. Equal weight, per invariant #3. */}
      <Section tone="ink" width="default">
        <SectionHeading className="max-w-3xl text-white">
          A voice agent is only as good as its script — and a script is only good if it
          knows the trade.
        </SectionHeading>
        <SectionLead tone="dark" className="mt-5">
          We build in two verticals rather than all of them, because the qualifying
          questions are the product and they are different in each.
        </SectionLead>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {RETELL_VERTICALS.map((v) => (
            <div
              key={v.name}
              className="flex h-full flex-col rounded-3xl border border-white/12 bg-white/[0.04] p-7 sm:p-9"
            >
              <h3 className="font-heading text-xl font-bold tracking-[-0.01em] text-white">
                {v.name}
              </h3>
              <ul className="mt-6 flex-1 space-y-4">
                {v.knows.map((k) => (
                  <li key={k} className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 size-[1.125rem] shrink-0 text-crew-gia-on-dark"
                      strokeWidth={2.25}
                      aria-hidden
                    />
                    <span className="text-[0.9375rem] leading-[1.6] text-cream/75">{k}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 border-t border-white/12 pt-5 font-mono text-xs uppercase tracking-[0.08em] text-cream/65">
                {v.stack}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 04 — Billing. The most trust-building claim on the page. */}
      <Section tone="cream" width="narrow" innerClassName="text-center">
        <SectionHeading>{RETELL_BILLING.heading}</SectionHeading>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.65] text-ink/75 sm:text-[1.0625rem]">
          {RETELL_BILLING.body}
        </p>
        <div className="mt-9">
          <Button href="/pricing" variant="secondary" showArrow>
            See the cost estimator
          </Button>
        </div>
      </Section>

      {/* 05 — FAQ */}
      <Section tone="white" width="default">
        <Eyebrow>Questions</Eyebrow>
        <SectionHeading className="mt-6">
          What people ask before they hand over the phone line.
        </SectionHeading>
        <div className="mt-10">
          <FaqAccordion items={retellFaqs} defaultOpenIndex={null} />
        </div>
      </Section>

      {/* 06 — CTA */}
      <Section tone="teal" width="narrow" innerClassName="text-center">
        <SectionHeading className="text-white">
          Bring us the phone line. We will bring the build.
        </SectionHeading>
        <p className="mx-auto mt-6 max-w-xl text-base leading-[1.65] text-white/85">
          Live in {SETUP_TIME_PROMISE} for a fixed one-time fee, with 30 days of tuning
          included after go-live.
        </p>
        <div className="mt-9 flex justify-center">
          <Button
            href={BOOKING_CALENDAR_URL}
            size="lg"
            showArrow
            track={{ event: "cta_click", params: { location: "retell_final_cta" } }}
          >
            Book Your 15-Minute Setup Call
          </Button>
        </div>
      </Section>
    </>
  );
}
