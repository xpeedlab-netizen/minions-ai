"use client";

import { useState, useMemo } from "react";
import FaqHero from "./FaqHero";
import FaqSidebar from "./FaqSidebar";
import FaqContent from "./FaqContent";
import { FaqCategoryId } from "./categories";
import { KNOWLEDGE_BASE_FAQS } from "@/lib/data/faq";

export default function FaqInteractiveSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<FaqCategoryId>("all");

  // Calculate category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: KNOWLEDGE_BASE_FAQS.length,
    };

    KNOWLEDGE_BASE_FAQS.forEach((item) => {
      if (item.category) {
        counts[item.category] = (counts[item.category] || 0) + 1;
      }
    });

    return counts;
  }, []);

  // Filter count for current query
  const totalFilteredCount = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return KNOWLEDGE_BASE_FAQS.length;

    return KNOWLEDGE_BASE_FAQS.filter((item) => {
      const inQuestion = item.q.toLowerCase().includes(query);
      const inAnswer = item.a.toLowerCase().includes(query);
      const inTag = item.tag?.toLowerCase().includes(query);
      const inCategory = item.categoryLabel?.toLowerCase().includes(query);
      return inQuestion || inAnswer || inTag || inCategory;
    }).length;
  }, [searchQuery]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
  };

  return (
    <>
      <FaqHero
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q);
          if (q.trim() && selectedCategory !== "all") {
            // switch to all so user sees global search results
            setSelectedCategory("all");
          }
        }}
        totalResultsCount={totalFilteredCount}
        isFiltered={Boolean(searchQuery.trim())}
      />

      <section className="bg-cream-dark py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[240px_1fr] gap-8 lg:gap-12 items-start">
          <FaqSidebar
            selectedCategory={selectedCategory}
            onSelectCategory={(cat) => {
              setSelectedCategory(cat);
              // if category selected, clear text query so category shows in full
              if (searchQuery) setSearchQuery("");
            }}
            categoryCounts={categoryCounts}
          />
          <FaqContent
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
            onClearFilters={handleResetFilters}
          />
        </div>
      </section>
    </>
  );
}
