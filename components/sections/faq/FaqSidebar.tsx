"use client";

import Link from "next/link";
import {
  HelpCircle,
  Headset,
  SlidersHorizontal,
  Receipt,
  ShieldCheck,
  Users,
  Phone,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { FAQ_CATEGORIES, FaqCategoryId } from "./categories";
import { SITE_PHONE_NUMBER, SITE_PHONE_TEL } from "@/lib/data/placeholders";

const ICON_MAP = {
  HelpCircle,
  Headset,
  SlidersHorizontal,
  Receipt,
  ShieldCheck,
  Users,
};

interface FaqSidebarProps {
  selectedCategory: FaqCategoryId;
  onSelectCategory: (category: FaqCategoryId) => void;
  categoryCounts: Record<string, number>;
}

export default function FaqSidebar({
  selectedCategory,
  onSelectCategory,
  categoryCounts,
}: FaqSidebarProps) {
  return (
    <aside className="lg:sticky lg:top-28 space-y-6">
      {/* Category Selection Nav */}
      <div className="rounded-2xl border border-border bg-white p-3 sm:p-4 shadow-xs">
        <p className="px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-ink/50">
          Browse by Topic
        </p>
        <nav className="mt-2 space-y-1" aria-label="FAQ Categories">
          {FAQ_CATEGORIES.map((category) => {
            const Icon = ICON_MAP[category.icon as keyof typeof ICON_MAP] || HelpCircle;
            const isSelected = selectedCategory === category.id;
            const count = categoryCounts[category.id] ?? 0;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => onSelectCategory(category.id)}
                className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-all ${
                  isSelected
                    ? "bg-teal text-white shadow-xs font-semibold"
                    : "text-ink/75 hover:bg-cream hover:text-ink"
                }`}
              >
                <span className="flex items-center gap-2.5 truncate">
                  <Icon
                    className={`size-4 shrink-0 transition-colors ${
                      isSelected ? "text-white" : "text-teal"
                    }`}
                  />
                  <span className="truncate">{category.label}</span>
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-mono transition-colors shrink-0 ${
                    isSelected
                      ? "bg-white/20 text-white font-bold"
                      : "bg-cream-dark text-ink/60"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Live Phone Test Callout Card */}
      <div className="rounded-2xl border border-border bg-ink p-5 text-white shadow-md relative overflow-hidden">
        <div className="pointer-events-none absolute -right-6 -bottom-6 size-24 rounded-full bg-teal/20 blur-xl" />
        <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold uppercase tracking-wider text-coral">
          <Sparkles className="size-3" /> Live Phone Demo
        </span>
        <h4 className="mt-2 font-heading font-bold text-base text-white">
          Hear Rex answer right now
        </h4>
        <p className="mt-1.5 text-xs text-cream/75 leading-relaxed">
          Test sub-1.8s voice response and emergency job qualification live on your cell phone.
        </p>

        <a
          href={`tel:${SITE_PHONE_TEL}`}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-coral px-4 py-2.5 font-heading font-bold text-xs text-white hover:bg-coral-text shadow-sm transition-transform active:scale-95"
        >
          <Phone className="size-3.5" />
          Call {SITE_PHONE_NUMBER}
        </a>
      </div>

      {/* Direct assistance from the build team */}
      <div className="rounded-2xl border border-border bg-cream p-4 text-xs text-ink/75 shadow-xs">
        <p className="font-heading font-bold text-ink text-sm">Need a custom workflow?</p>
        <p className="mt-1 text-ink/70 leading-relaxed">
          Talk directly with the engineers who build it about your dispatch setup.
        </p>
        <Link
          href="/contact"
          className="mt-3 inline-flex items-center gap-1 font-heading font-bold text-teal hover:text-teal-dark transition-colors"
        >
          Book 15-min Setup Call
          <ArrowRight className="size-3" />
        </Link>
      </div>
    </aside>
  );
}
