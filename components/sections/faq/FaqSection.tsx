import FaqAccordion from "@/components/ui/FaqAccordion";
import { APPROVED_FAQS } from "@/lib/data/site-content";

type Props = {
  title?: string;
  subtitle?: string;
  className?: string;
  items?: typeof APPROVED_FAQS;
};

export default function FaqSection({
  title = "Frequently Asked Questions",
  subtitle = "Honest answers to the questions trade owners ask us before signing up.",
  className = "bg-cream py-16 sm:py-24",
  items = APPROVED_FAQS,
}: Props) {
  return (
    <section className={className} id="faq">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-balance font-heading text-3xl font-bold leading-[1.05] tracking-[-0.02em] text-ink sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-5 max-w-xl text-base leading-[1.6] text-ink/65">
              {subtitle}
            </p>
          )}
        </div>

        <div className="rounded-3xl border border-border bg-white p-6 sm:p-10">
          <FaqAccordion items={items} defaultOpenIndex={0} />
        </div>
      </div>
    </section>
  );
}
