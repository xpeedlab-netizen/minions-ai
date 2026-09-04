"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { track } from "@/lib/analytics";
import type { FaqItem } from "@/lib/data/faq";

export default function FaqAccordion({
  items,
  defaultOpenIndex = 0,
}: {
  items: FaqItem[];
  defaultOpenIndex?: number | null;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  return (
    <div className="divide-y divide-border border-t border-b border-border">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => {
                // Opening a question is a real engagement signal; closing one is not.
                if (!isOpen) track("faq_open", { question: item.q });
                setOpenIndex(isOpen ? null : i);
              }}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left min-h-12"
            >
              <span className="font-heading font-bold text-lg text-ink">{item.q}</span>
              <ChevronDown
                className={`size-5 shrink-0 text-teal transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <p className="pb-5 pr-10 text-ink/70 leading-relaxed">{item.a}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
