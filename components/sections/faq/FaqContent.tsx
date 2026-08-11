import Link from "next/link";
import { Headset, SlidersHorizontal, Receipt, ShieldCheck, Users, ArrowRight } from "lucide-react";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { APPROVED_FAQS } from "@/lib/data/site-content";

const aiExperienceFaq = APPROVED_FAQS.slice(0, 3);
const setupTechFaq = APPROVED_FAQS.slice(3, 6);

const pricingCards = [
  {
    title: "Transparent Monthly Billing",
    body: "No hidden fees or long-term lock-ins. Flexible month-to-month terms with a 30-day guarantee.",
  },
  {
    title: "Flat Monthly Rate",
    body: "Unlike traditional human call centers that bill padded per-minute rates, we offer clear flat monthly plans.",
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
          label="Recording Law & Compliance"
        />
        <div className="mt-6 flex flex-col sm:flex-row items-start gap-5 rounded-2xl border-2 border-teal bg-white p-6">
          <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-teal-dark text-white">
            <ShieldCheck className="size-6" />
          </span>
          <div>
            <h3 className="font-heading font-bold text-ink">Are calls recorded?</h3>
            <p className="mt-2 text-ink/70 leading-relaxed">
              Recording is configurable, and recording law varies by state — including two-party-consent states like California and Illinois. We&apos;ll set this up with you during onboarding so it matches the rules where you operate. We won&apos;t quietly switch it on and leave you to find out.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-cream px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-ink/60">
                Configurable Consent
              </span>
              <span className="rounded-full bg-cream px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-ink/60">
                Onboarding Setup Included
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
              Why work with us?
            </h3>
            <p className="mt-3 text-white/70 leading-relaxed">
              You work directly with the two founders. We provide month-to-month terms, a 30-day guarantee, and you hear your custom AI crew in action before launching.
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
