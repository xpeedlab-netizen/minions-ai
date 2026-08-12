import Image from "next/image";
import { INTEGRATION_COPY } from "@/lib/data/site-content";
import Reveal from "@/components/ui/Reveal";
import Section, { SectionHeading } from "@/components/ui/Section";

const steps = [
  {
    n: "STEP 01",
    title: "Custom Knowledge Base Build",
    who: "Otto",
    img: "/images/otto-mascot.jpg",
    body: "Our team analyzes your services, pricing schedules, service areas, and customer FAQs. We train your AI crew so they sound natural and represent your brand with 100% accuracy.",
  },
  {
    n: "STEP 02",
    title: "Calendar & CRM Integration",
    who: "Rex",
    img: "/images/rex-mascot.jpg",
    body: `We connect your AI crew to your tools. ${INTEGRATION_COPY.calendar} ${INTEGRATION_COPY.crm}`,
  },
  {
    n: "STEP 03",
    title: "2-Minute Call Forwarding",
    who: "Zip",
    img: "/images/zip-mascot.jpg",
    body: `${INTEGRATION_COPY.phone} From that second on, every call is answered instantly, 24/7/365.`,
  },
];

export default function HowItWorks() {
  return (
    <Section tone="white" width="wide">
      <SectionHeading className="text-ink text-center">
        100% Done-For-You Setup in 3 Simple Steps
      </SectionHeading>
      <div className="mt-12 space-y-6">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.08}>
            <div
              className={`flex flex-col ${i % 2 === 1 ? "sm:flex-row-reverse" : "sm:flex-row"} items-center gap-6 sm:gap-8 rounded-2xl border border-border bg-cream p-6 sm:p-8`}
            >
              <div className="relative size-32 sm:size-40 shrink-0 overflow-hidden rounded-xl border border-border bg-white shadow-sm">
                <Image
                  src={s.img}
                  alt={s.who}
                  fill
                  sizes="(min-width: 640px) 10rem, 8rem"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-mono text-xs text-teal font-bold tracking-wide">{s.n}</p>
                <h3 className="mt-1 font-heading font-bold text-xl sm:text-2xl text-ink">{s.title}</h3>
                <p className="mt-2 text-ink/70 leading-relaxed max-w-xl">{s.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
