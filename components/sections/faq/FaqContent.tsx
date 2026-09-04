"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Search,
  SlidersHorizontal,
  Headset,
  Receipt,
  ShieldCheck,
  Users,
  HelpCircle,
  Phone,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { KNOWLEDGE_BASE_FAQS, FaqItem } from "@/lib/data/faq";
import { FAQ_CATEGORIES, FaqCategoryId } from "./categories";
import { SITE_PHONE_NUMBER, SITE_PHONE_TEL } from "@/lib/data/placeholders";

const CATEGORY_ICONS = {
  "ai-experience": Headset,
  "setup-tech": SlidersHorizontal,
  "pricing-contracts": Receipt,
  "compliance-safety": ShieldCheck,
  "the-team": Users,
  all: HelpCircle,
};

interface FaqContentProps {
  searchQuery: string;
  selectedCategory: FaqCategoryId;
  onClearFilters: () => void;
}

export default function FaqContent({
  searchQuery,
  selectedCategory,
  onClearFilters,
}: FaqContentProps) {
  // Store multiple open question IDs
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    "sound-like-robot": true,
    "change-number": true,
  });

  const toggleQuestion = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Filter items based on search query & selected category
  const filteredFaqs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return KNOWLEDGE_BASE_FAQS.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;

      if (!matchesCategory) return false;
      if (!query) return true;

      const inQuestion = item.q.toLowerCase().includes(query);
      const inAnswer = item.a.toLowerCase().includes(query);
      const inTag = item.tag?.toLowerCase().includes(query);
      const inCategory = item.categoryLabel?.toLowerCase().includes(query);

      return inQuestion || inAnswer || inTag || inCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Group items by category if "all" is selected and no search query
  const groupedSections = useMemo(() => {
    if (selectedCategory !== "all" || searchQuery.trim()) {
      return null;
    }

    const groups: { category: (typeof FAQ_CATEGORIES)[number]; items: FaqItem[] }[] = [];

    FAQ_CATEGORIES.filter((cat) => cat.id !== "all").forEach((cat) => {
      const items = KNOWLEDGE_BASE_FAQS.filter((f) => f.category === cat.id);
      if (items.length > 0) {
        groups.push({ category: cat, items });
      }
    });

    return groups;
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-12">
      {/* Empty State when no results found */}
      {filteredFaqs.length === 0 && (
        <div className="rounded-3xl border border-border bg-white p-8 sm:p-12 text-center shadow-xs">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-cream-dark text-teal">
            <Search className="size-6" />
          </div>
          <h3 className="mt-4 font-heading font-bold text-xl text-ink">
            No matching questions found
          </h3>
          <p className="mt-2 text-sm text-ink/70 max-w-md mx-auto leading-relaxed">
            We couldn&apos;t find an answer matching &ldquo;{searchQuery}&rdquo;. Try another search term or ask our team directly.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={onClearFilters}
              className="rounded-xl bg-teal px-5 py-2.5 font-heading font-bold text-xs text-white hover:bg-teal-dark transition-colors"
            >
              Clear Filter & View All
            </button>
            <a
              href={`tel:${SITE_PHONE_TEL}`}
              className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-cream px-5 py-2.5 font-heading font-bold text-xs text-ink hover:bg-cream-dark transition-colors"
            >
              <Phone className="size-3.5 text-teal" />
              Call Live Test Line
            </a>
          </div>
        </div>
      )}

      {/* Grouped View (Default when browsing "All") */}
      {groupedSections ? (
        <div className="space-y-12">
          {groupedSections.map(({ category, items }) => {
            const Icon = CATEGORY_ICONS[category.id as keyof typeof CATEGORY_ICONS] || HelpCircle;

            return (
              <section key={category.id} id={category.id} className="scroll-mt-28">
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-border/80 mb-6">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-teal text-white shadow-xs">
                    <Icon className="size-4" />
                  </span>
                  <div>
                    <h2 className="font-heading font-bold text-xl sm:text-2xl text-ink">
                      {category.label}
                    </h2>
                  </div>
                  <span className="ml-auto rounded-full bg-white px-2.5 py-0.5 text-xs font-mono font-medium text-ink/65 border border-border">
                    {items.length} {items.length === 1 ? "item" : "items"}
                  </span>
                </div>

                {/* Question Cards List */}
                <div className="space-y-3.5">
                  {items.map((item, idx) => {
                    const itemId = item.id || `faq-${category.id}-${idx}`;
                    const isOpen = !!openIds[itemId];

                    return (
                      <div
                        key={itemId}
                        className={`rounded-2xl border transition-all duration-200 ${
                          isOpen
                            ? "border-teal/40 bg-white shadow-sm ring-1 ring-teal/10"
                            : "border-border/80 bg-white/80 hover:bg-white hover:border-border hover:shadow-xs"
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => toggleQuestion(itemId)}
                          aria-expanded={isOpen}
                          className="flex w-full items-start justify-between gap-4 p-5 sm:p-6 text-left"
                        >
                          <div className="space-y-1.5 pr-2">
                            {item.tag && (
                              <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold uppercase tracking-wider text-teal">
                                <Sparkles className="size-2.5" />
                                {item.tag}
                              </span>
                            )}
                            <h3 className="font-heading font-bold text-base sm:text-lg text-ink leading-snug">
                              {item.q}
                            </h3>
                          </div>
                          <span
                            className={`mt-1 flex size-7 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ${
                              isOpen
                                ? "bg-teal text-white rotate-180"
                                : "bg-cream text-ink/65"
                            }`}
                          >
                            <ChevronDown className="size-4" />
                          </span>
                        </button>

                        {isOpen && (
                          <div className="px-5 pb-6 pt-1 sm:px-6 border-t border-border/40">
                            <p className="text-sm sm:text-base text-ink/75 leading-relaxed">
                              {item.a}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        /* Filtered List (when search query or specific category is active) */
        filteredFaqs.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-border/80">
              <span className="font-heading font-bold text-lg text-ink">
                {selectedCategory === "all"
                  ? "Search Results"
                  : FAQ_CATEGORIES.find((c) => c.id === selectedCategory)?.label}
              </span>
              <span className="font-mono text-xs text-ink/65">
                {filteredFaqs.length} {filteredFaqs.length === 1 ? "question" : "questions"}
              </span>
            </div>

            <div className="space-y-3.5">
              {filteredFaqs.map((item, idx) => {
                const itemId = item.id || `faq-filtered-${idx}`;
                const isOpen = openIds[itemId] ?? true;

                return (
                  <div
                    key={itemId}
                    className={`rounded-2xl border transition-all duration-200 ${
                      isOpen
                        ? "border-teal/40 bg-white shadow-sm ring-1 ring-teal/10"
                        : "border-border/80 bg-white/80 hover:bg-white hover:border-border hover:shadow-xs"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleQuestion(itemId)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between gap-4 p-5 sm:p-6 text-left"
                    >
                      <div className="space-y-1.5 pr-2">
                        <div className="flex flex-wrap items-center gap-2">
                          {item.categoryLabel && (
                            <span className="rounded-md bg-cream px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-ink/65">
                              {item.categoryLabel}
                            </span>
                          )}
                          {item.tag && (
                            <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold uppercase tracking-wider text-teal">
                              <Sparkles className="size-2.5" />
                              {item.tag}
                            </span>
                          )}
                        </div>
                        <h3 className="font-heading font-bold text-base sm:text-lg text-ink leading-snug">
                          {item.q}
                        </h3>
                      </div>
                      <span
                        className={`mt-1 flex size-7 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ${
                          isOpen
                            ? "bg-teal text-white rotate-180"
                            : "bg-cream text-ink/65"
                        }`}
                      >
                        <ChevronDown className="size-4" />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-6 pt-1 sm:px-6 border-t border-border/40">
                        <p className="text-sm sm:text-base text-ink/75 leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )
      )}
    </div>
  );
}
