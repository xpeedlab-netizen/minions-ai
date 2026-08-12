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
        <div className="text-center mb-12">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink text-balance leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-ink/70 leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="rounded-3xl border border-border bg-white p-6 sm:p-10 shadow-sm">
          <FaqAccordion items={items} defaultOpenIndex={0} />
        </div>
      </div>
    </section>
  );
}
