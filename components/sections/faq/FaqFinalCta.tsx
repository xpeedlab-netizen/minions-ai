import { Phone, ShieldCheck, ArrowRight, MessageSquare } from "lucide-react";
import Button from "@/components/ui/Button";
import { TUNING_WINDOW } from "@/lib/data/site-content";
import { SITE_PHONE_NUMBER, SITE_PHONE_TEL } from "@/lib/data/placeholders";

export default function FaqFinalCta() {
  return (
    <section className="bg-cream border-t border-border py-16 sm:py-24 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 size-96 rounded-full bg-teal/5 blur-3xl" />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-teal/20 bg-teal/5 px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-teal">
          <ShieldCheck className="size-3.5 text-teal" />
          {TUNING_WINDOW.days}-Day Tuning Window Included
        </span>

        <h2 className="mt-5 font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-ink text-balance tracking-tight">
          Still have questions? Let&apos;s talk straight.
        </h2>

        <p className="mt-4 text-base sm:text-lg text-ink/75 leading-relaxed max-w-xl mx-auto">
          We&apos;re software engineers who answer our own phones. Let&apos;s find 15 minutes to review your call volume and CRM setup before you spend a dime.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact" size="lg">
            Book a 15-minute call
            <ArrowRight className="size-4" />
          </Button>

          <a
            href={`tel:${SITE_PHONE_TEL}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-6 py-3 font-heading font-bold text-sm text-ink shadow-xs hover:bg-cream-dark hover:border-teal/30 transition-all min-h-12"
          >
            <Phone className="size-4 text-teal" />
            Dial Live AI: {SITE_PHONE_NUMBER}
          </a>
        </div>

        <p className="mt-6 font-mono text-xs text-ink/65">
          No long-term contract · Fixed price, paid across three milestones · You own every account
        </p>
      </div>
    </section>
  );
}
