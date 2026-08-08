import Link from "next/link";
import { Headset, SlidersHorizontal, Receipt, ShieldCheck, Users, ArrowRight } from "lucide-react";
import FaqAccordion from "@/components/ui/FaqAccordion";

const aiExperienceFaq = [
  {
    q: "Does the AI sound like a robot?",
    a: "Not at all. We use advanced neural voice synthesis that captures the cadence, warmth, and nuances of a professional human dispatcher. Most customers won't even realize they aren't talking to a live person unless you want them to know.",
  },
  {
    q: "Will customers know they are talking to an AI?",
    a: "Most don't notice. What they notice is that someone answered quickly, was polite, and knew the answer. If a caller asks directly, it's honest about being an automated assistant.",
  },
  {
    q: "How does it handle unusual requests?",
    a: "It only answers from information you've approved. If it doesn't know, it says so and either takes a message or transfers the caller to you.",
  },
];

const setupTechFaq = [
  {
    q: "How long does the setup take?",
    a: "About a week from our first call to going live.",
  },
  {
    q: "Do I need to buy new hardware?",
    a: "No. Everything runs in the cloud through your existing phone line and CRM — no hardware, no installs, nothing to plug in.",
  },
];

const pricingCards = [
  {
    title: "Transparent Monthly Billing",
    body: "No hidden fees or long-term lock-ins. Pay for what you use with flexible month-to-month terms.",
  },
  {
    title: "Cost-Per-Resolution",
    body: "Unlike human call centers that bill by the minute, we bill based on successful outcomes and handled inquiries.",
  },
];

function CategoryHeading({
  id,
  icon: Icon,
  iconBg,
  label,
}: {
  id: string;
  icon: typeof Headset;
  iconBg: string;
  label: string;
}) {
  return (
    <h2 id={id} className="scroll-mt-28 flex items-center gap-3">
      <span
        className={`flex size-9 shrink-0 items-center justify-center rounded-lg text-white ${iconBg}`}
      >
        <Icon className="size-4" />
      </span>
      <span className="font-heading font-extrabold text-2xl sm:text-3xl text-ink">{label}</span>
    </h2>
  );
}

export default function FaqContent() {
  return (
    <div className="space-y-14">
      <section>
        <CategoryHeading
          id="ai-experience"
          icon={Headset}
          iconBg="bg-coral"
          label="The AI & Experience"
        />
        <div className="mt-6">
          <FaqAccordion items={aiExperienceFaq} />
        </div>
      </section>

      <section>
        <CategoryHeading
          id="setup-tech"
          icon={SlidersHorizontal}
          iconBg="bg-teal"
          label="Setup & Tech"
        />
        <div className="mt-6">
          <FaqAccordion items={setupTechFaq} defaultOpenIndex={null} />
        </div>
      </section>

      <section>
        <CategoryHeading
          id="pricing-contracts"
          icon={Receipt}
          iconBg="bg-[#7A2E1F]"
          label="Pricing & Contracts"
        />
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          {pricingCards.map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-cream p-6">
              <h3 className="font-heading font-bold text-ink">{c.title}</h3>
              <p className="mt-2 text-sm text-ink/70 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <CategoryHeading
          id="compliance-safety"
          icon={ShieldCheck}
          iconBg="bg-success"
          label="Compliance & Safety"
        />
        <div className="mt-6 flex flex-col sm:flex-row items-start gap-5 rounded-2xl border-2 border-teal bg-white p-6">
          <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-teal-dark text-white">
            <ShieldCheck className="size-6" />
          </span>
          <div>
            <h3 className="font-heading font-bold text-ink">Is this legal and compliant?</h3>
            <p className="mt-2 text-ink/70 leading-relaxed">
              Yes. All calls are recorded and logged for your protection. We strictly adhere to
              TCPA regulations and SOC2 data privacy standards. Your customer data never leaves our
              secure, encrypted infrastructure.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-cream px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-ink/60">
                GDPR Ready
              </span>
              <span className="rounded-full bg-cream px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-ink/60">
                TCPA Compliant
              </span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <CategoryHeading id="the-team" icon={Users} iconBg="bg-accent-blue" label="The Team" />
        <div className="relative mt-6 overflow-hidden rounded-2xl bg-ink p-6 sm:p-8">
          <Users className="absolute -right-4 -bottom-4 size-32 text-white/5" />
          <div className="relative max-w-xl">
            <h3 className="font-heading font-bold text-lg text-white">
              Why choose us over a traditional answering service?
            </h3>
            <p className="mt-3 text-white/70 leading-relaxed">
              Traditional services are slow, expensive, and prone to human error. Minions.AI offers
              100% reliability, zero wait times, and deep technical integration with your
              CRM—at a fraction of the cost.
            </p>
            <Link
              href="/about"
              className="mt-5 inline-flex items-center gap-1.5 font-heading font-bold text-sm text-white hover:text-white/80 transition-colors"
            >
              Meet the founders
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
