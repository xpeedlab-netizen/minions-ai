import { Sparkles, Phone, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { BOOKING_CALENDAR_URL, SITE_PHONE_NUMBER } from "@/lib/data/placeholders";

export default function RealEstateFinalCta() {
  return (
    <section className="relative bg-ink py-20 sm:py-28 text-white overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 right-1/4 size-96 rounded-full bg-teal/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 size-80 rounded-full bg-coral/15 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 font-mono text-xs font-bold text-teal-300 uppercase tracking-wider">
          <Sparkles className="size-3.5" />
          <span>7-Day Turnkey Brokerage Setup</span>
        </div>

        <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white text-balance leading-tight max-w-3xl mx-auto">
          Every missed call is a $15,000 commission check to your competitor. Let&apos;s fix it.
        </h2>

        <p className="text-base sm:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
          Deploy your custom AI real estate ISA in about 7 days. Backed by our 100% 30-day money-back guarantee with zero long-term contract lock-in.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            href={BOOKING_CALENDAR_URL}
            size="lg"
            showArrow
            className="w-full sm:w-auto bg-teal hover:bg-teal-dark text-white shadow-xl px-8"
          >
            Book Your 15-Minute Setup Call
          </Button>

          <a
            href={`tel:${SITE_PHONE_NUMBER.replace(/\D/g, "")}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-mono text-sm font-semibold text-white hover:bg-white/10 transition-colors w-full sm:w-auto"
          >
            <Phone className="size-4 text-teal" />
            Test Live Demo: {SITE_PHONE_NUMBER}
          </a>
        </div>

        <p className="font-mono text-xs text-white/50 pt-2">
          Syncs with Google Calendar, Follow Up Boss, KVCore, Lofty, and EspoCRM.
        </p>
      </div>
    </section>
  );
}
