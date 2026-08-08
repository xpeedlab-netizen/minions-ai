import FaqAccordion from "@/components/ui/FaqAccordion";
import type { FaqItem } from "@/lib/data/faq";

export default function ObjectionsSection({
  items,
  heading = "Questions people ask",
}: {
  items: FaqItem[];
  heading?: string;
}) {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-ink text-balance mb-8 text-center">
          {heading}
        </h2>
        <FaqAccordion items={items} />
      </div>
    </section>
  );
}
