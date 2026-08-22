import type { Metadata } from "next";
import FaqInteractiveSection from "@/components/sections/faq/FaqInteractiveSection";
import FaqFinalCta from "@/components/sections/faq/FaqFinalCta";
import { KNOWLEDGE_BASE_FAQS } from "@/lib/data/faq";

export const metadata: Metadata = {
  title: "FAQ & Knowledge Base — AI Phone Answering Questions, Answered Straight",
  description:
    "Zero fluff answers on voice naturalness, 7-day setup timeline, CRM integrations (ServiceTitan, Jobber, Housecall Pro), pricing guarantees, and call recording compliance.",
};

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: KNOWLEDGE_BASE_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FaqInteractiveSection />
      <FaqFinalCta />
    </>
  );
}

