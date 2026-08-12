import Image from "next/image";
import { INTEGRATION_COPY } from "@/lib/data/site-content";
import Reveal from "@/components/ui/Reveal";

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
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink text-balance text-center">
          100% Done-For-You Setup in 3 Simple Steps
        </h2>
        <div className="mt-12 space-y-6">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div
                className={`flex flex-col ${i % 2 === 1 ? "sm:flex-row-reverse" : "sm:flex-row"} items-center gap-6 rounded-2xl border border-border bg-cream p-6 sm:p-8`}
              >
                <div className="relative size-24 sm:size-32 shrink-0 overflow-hidden rounded-xl border border-border bg-white shadow-sm">
                  <Image src={s.img} alt={s.who} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-mono text-xs text-teal font-bold tracking-wide">{s.n}</p>
                  <h3 className="mt-1 font-heading font-bold text-xl text-ink">{s.title}</h3>
                  <p className="mt-2 text-ink/70 leading-relaxed max-w-xl">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
