"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { crewNav, industries } from "@/lib/data/nav";
import { SITE_PHONE_NUMBER, SITE_PHONE_TEL, BOOKING_CALENDAR_URL, DEMO_VIDEO_URL } from "@/lib/data/placeholders";
import Button from "@/components/ui/Button";

function CrewNavDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="flex items-center gap-1 py-2 font-medium text-ink hover:text-teal transition-colors min-h-[44px]"
        aria-expanded={open}
      >
        The Crew
        <ChevronDown className="size-4" />
      </button>
      {open && (
        <div className="absolute left-0 top-full w-72 rounded-xl border border-border bg-white p-2 shadow-xl z-50">
          <div className="px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-ink/45 border-b border-border mb-1">
            24/7 Front-Office Agents
          </div>
          {crewNav.map((c) => (
            <Link
              key={c.name}
              href={c.href}
              className="block rounded-lg px-3 py-2 text-ink hover:bg-cream transition-colors group"
            >
              <div className="flex items-center justify-between">
                <span className="font-heading font-bold text-sm text-ink group-hover:text-teal transition-colors">
                  {c.name}
                </span>
                <span className="font-mono text-[11px] text-teal font-semibold">
                  {c.name === "Rex" ? "Phone" : c.name === "Zip" ? "Text-Back" : c.name === "Pip" ? "Chat" : c.name === "Gia" ? "Follow-Up" : "Ops"}
                </span>
              </div>
              <p className="text-xs text-ink/65 group-hover:text-ink/85 transition-colors">
                {c.role}
              </p>
            </Link>
          ))}
          <div className="mt-1 border-t border-border pt-2 px-3 pb-1">
            <Link
              href="/#crew"
              className="text-xs font-mono font-medium text-teal hover:underline flex items-center justify-between"
            >
              <span>See full crew on homepage</span>
              <span>↓</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

function IndustriesNavDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="flex items-center gap-1 py-2 font-medium text-ink hover:text-teal transition-colors min-h-[44px]"
        aria-expanded={open}
      >
        Industries
        <ChevronDown className="size-4" />
      </button>
      {open && (
        <div className="absolute left-0 top-full w-64 rounded-xl border border-border bg-white p-2 shadow-xl z-50">
          {industries.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-lg px-4 py-2.5 text-sm text-ink hover:bg-cream hover:text-teal transition-colors min-h-[44px] flex items-center"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const primaryCtaHref = DEMO_VIDEO_URL ? "/live-demo" : BOOKING_CALENDAR_URL;
  const primaryCtaLabel = DEMO_VIDEO_URL ? "Hear the AI" : "Book a Call";

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-cream/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-heading font-extrabold text-2xl text-ink shrink-0 min-h-[44px] flex items-center">
          Minions<span className="text-teal">.AI</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
          <Link href="/how-it-works" className="whitespace-nowrap font-medium text-ink hover:text-teal transition-colors min-h-[44px] flex items-center">
            How It Works
          </Link>
          <Link href="/pricing" className="whitespace-nowrap font-medium text-ink hover:text-teal transition-colors min-h-[44px] flex items-center">
            Pricing
          </Link>
          <CrewNavDropdown />
          <IndustriesNavDropdown />
          <Link href="/blog" className="whitespace-nowrap font-medium text-ink hover:text-teal transition-colors min-h-[44px] flex items-center">
            Blog
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-3.5 xl:gap-6">
          <a
            href={`tel:${SITE_PHONE_TEL}`}
            className="hidden xl:flex items-center gap-2 font-mono text-xs xl:text-sm font-semibold text-ink/80 hover:text-teal transition-colors min-h-[44px] whitespace-nowrap"
          >
            <Phone className="size-4 text-teal" />
            {SITE_PHONE_NUMBER}
          </a>
          <Button href={primaryCtaHref} showArrow className="whitespace-nowrap">
            {primaryCtaLabel}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden flex items-center gap-2 min-h-12 min-w-12 justify-center text-ink"
          aria-label="Menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          <span className="text-sm font-medium">Menu</span>
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-cream px-4 pb-6 pt-2">
          <nav className="flex flex-col gap-1">
            <Link
              href="/how-it-works"
              onClick={() => setMobileOpen(false)}
              className="min-h-12 flex items-center font-medium text-ink border-b border-border"
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileOpen(false)}
              className="min-h-12 flex items-center font-medium text-ink border-b border-border"
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileOpen(false)}
              className="min-h-12 flex items-center font-medium text-ink border-b border-border"
            >
              Blog &amp; Field Guides
            </Link>
            <p className="mt-3 mb-1 text-xs font-mono uppercase tracking-wide text-ink/50">The Crew</p>
            {crewNav.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                onClick={() => setMobileOpen(false)}
                className="min-h-12 flex flex-col justify-center border-b border-border"
              >
                <div className="flex items-center justify-between">
                  <span className="font-heading font-semibold text-ink">{c.name}</span>
                  <span className="font-mono text-[11px] text-teal">{c.role}</span>
                </div>
              </Link>
            ))}
            <p className="mt-3 mb-1 text-xs font-mono uppercase tracking-wide text-ink/50">Industries</p>
            {industries.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="min-h-12 flex items-center text-ink border-b border-border"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${SITE_PHONE_TEL}`}
              className="min-h-12 flex items-center gap-2 font-mono text-sm font-semibold text-teal pt-2"
            >
              <Phone className="size-4 text-teal" />
              {SITE_PHONE_NUMBER}
            </a>
          </nav>
          <Button href={primaryCtaHref} showArrow className="mt-4 w-full">
            {primaryCtaLabel}
          </Button>
        </div>
      )}
    </header>
  );
}
