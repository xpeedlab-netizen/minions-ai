import Image from "next/image";
import { INTEGRATION_COPY } from "@/lib/data/site-content";
import Reveal from "@/components/ui/Reveal";
import Section, { SectionHeading } from "@/components/ui/Section";

const steps = [
  {
    n: "01",
    title: "Custom Knowledge Base Build",
    who: "Knowledge Base Build",
    img: "/images/kb-build-step.jpg",
    body: "Our team analyzes your services, pricing schedules, service areas, and customer FAQs. We train your AI crew so they sound natural and represent your brand with 100% accuracy.",
  },
  {
    n: "02",
    title: "Calendar & CRM Integration",
    who: "Calendar & CRM Integration",
    img: "/images/crm-sync-step.jpg",
    body: `We connect your AI crew to your tools. ${INTEGRATION_COPY.calendar} ${INTEGRATION_COPY.crm}`,
  },
  {
    n: "03",
    title: "2-Minute Call Forwarding",
    who: "2-Minute Call Forwarding",
    img: "/images/call-forward-step.jpg",
    body: `${INTEGRATION_COPY.phone} From that second on, every call is answered instantly, 24/7/365.`,
  },
];

/**
 * Setup process.
 *
 * Numbered progression: an oversized step numeral anchors each row, a connecting
 * rule runs between them on desktop. The ordinal and image carry the eye.
 */
export default function HowItWorks() {
  return (
    <Section tone="white" width="wide">
      <SectionHeading className="mx-auto max-w-2xl text-center text-ink">
        100% Done-For-You Setup in 3 Simple Steps
      </SectionHeading>

      <div className="relative mt-14">
        {/* The rule sits at the vertical center of the mascot medallions on desktop */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-[16%] right-[16%] top-[4.5rem] hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block"
        />

        <ol className="relative grid gap-10 lg:grid-cols-3 lg:gap-8">
          {steps.map((s, i) => (
            <Reveal
              key={s.n}
              as="li"
              delay={i * 0.08}
              className="flex h-full flex-row items-start gap-5 lg:flex-col lg:items-start lg:gap-0"
            >
              {/* Medallion frame holding generated product UI step image */}
              <div className="relative size-24 shrink-0 overflow-hidden rounded-2xl border border-border bg-cream shadow-sm sm:size-28 lg:size-36">
                <Image
                  src={s.img}
                  alt={s.who}
                  fill
                  sizes="(min-width: 1024px) 9rem, (min-width: 640px) 7rem, 6rem"
                  className="object-cover"
                />
              </div>

              <div className="lg:mt-7">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-3xl font-medium leading-none tabular-nums text-teal/25 lg:text-4xl">
                    {s.n}
                  </span>
                  <h3 className="font-heading text-xl font-bold leading-[1.15] tracking-[-0.01em] text-balance text-ink sm:text-2xl">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-3 text-[0.9375rem] leading-[1.6] text-ink/65">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
