"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { services, industries } from "@/lib/data/nav";
import { SITE_PHONE_NUMBER, SITE_PHONE_TEL, BOOKING_CALENDAR_URL, DEMO_VIDEO_URL } from "@/lib/data/placeholders";
import Button from "@/components/ui/Button";

function NavDropdown({ label, items }: { label: string; items: typeof services }) {
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
        {label}
        <ChevronDown className="size-4" />
      </button>
      {open && (
        <div className="absolute left-0 top-full w-64 rounded-xl border border-border bg-white p-2 shadow-lg z-50">
          {items.map((item) => (
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
          <NavDropdown label="The Crew" items={services} />
          <NavDropdown label="Industries" items={industries} />
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
              Blog & Field Guides
            </Link>
            <p className="mt-3 mb-1 text-xs font-mono uppercase tracking-wide text-ink/50">The Crew</p>
            {services.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="min-h-12 flex items-center text-ink border-b border-border"
              >
                {item.label}
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
