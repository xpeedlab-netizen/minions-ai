"use client";

import { BookOpen, Search, X, Sparkles } from "lucide-react";

interface FaqHeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalResultsCount?: number;
  isFiltered?: boolean;
}

const POPULAR_SEARCH_TAGS = [
  "ServiceTitan",
  "Month-to-Month",
  "Keep Your Number",
  "Recording Consent",
  "Fail-Safe",
];

export default function FaqHero({
  searchQuery,
  onSearchChange,
  totalResultsCount,
  isFiltered,
}: FaqHeroProps) {
  return (
    <section className="bg-cream pt-14 pb-12 sm:pt-20 sm:pb-16 border-b border-border/80 relative overflow-hidden">
      {/* Subtle decorative background glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 size-96 rounded-full bg-teal/5 blur-3xl" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3.5 py-1 font-mono text-xs uppercase tracking-wide text-ink/70 shadow-xs">
          <BookOpen className="size-3.5 text-teal" />
          Knowledge Base & FAQ
        </span>

        <h1 className="mt-5 font-heading font-bold text-3xl sm:text-5xl lg:text-6xl text-ink text-balance tracking-tight">
          Your questions, <span className="text-teal">answered straight.</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-ink/75 max-w-2xl mx-auto leading-relaxed">
          Zero fluff. Everything you need to know about 24/7 AI voice answering, CRM calendar syncing, pricing guarantees, and call recording compliance.
        </p>

        {/* Search Bar */}
        <div className="mt-8 max-w-xl mx-auto">
          <div className="relative flex items-center">
            <Search className="absolute left-4 size-5 text-ink/40 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search questions (e.g. ServiceTitan, setup time, recording laws...)"
              className="w-full rounded-2xl border border-border bg-white py-4 pl-12 pr-12 text-sm sm:text-base text-ink placeholder:text-ink/40 shadow-sm transition-all focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
              aria-label="Search frequently asked questions"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange("")}
                className="absolute right-3.5 flex size-7 items-center justify-center rounded-full bg-cream-dark text-ink/60 hover:text-ink hover:bg-border transition-colors"
                aria-label="Clear search query"
              >
                <X className="size-3.5" />
              </button>
            )}
          </div>

          {/* Quick Tag Suggestions & Result Counter */}
          <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="font-mono text-ink/50 text-[11px] uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="size-3 text-teal" /> Popular:
            </span>
            {POPULAR_SEARCH_TAGS.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => onSearchChange(tag)}
                className={`rounded-full px-2.5 py-1 font-mono transition-colors border ${
                  searchQuery.toLowerCase() === tag.toLowerCase()
                    ? "bg-teal text-white border-teal"
                    : "bg-white/80 border-border text-ink/70 hover:bg-white hover:text-teal hover:border-teal/30"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {isFiltered && typeof totalResultsCount === "number" && (
            <div className="mt-3 text-xs font-mono text-ink/60">
              Showing <span className="font-bold text-teal">{totalResultsCount}</span> {totalResultsCount === 1 ? "question" : "questions"} matching &ldquo;{searchQuery}&rdquo;
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
