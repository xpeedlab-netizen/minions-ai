import Link from "next/link";
import { footerProduct, footerLegal, footerSupport } from "@/lib/data/nav";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-ink text-cream/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="font-heading font-extrabold text-2xl text-white">
              Minions<span className="text-vest-orange">.AI</span>
            </Link>
            {/* "Professional automation for the blue-collar backbone" read well but
                silently excluded half the target market — a real-estate broker does not
                identify as blue-collar. Both co-primary verticals are now named. */}
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              The AI front office for pest control operators and real estate agencies. Not
              affiliated with any film franchise.
            </p>
            {/* Infrastructure credit. Lived at the foot of FoundersTrust until that band
                was removed; the footer is the right home for it — quiet, and it keeps the
                Retell AI name on the homepage for the search intent it actually serves. */}
            <p className="mt-3 font-mono text-[0.6875rem] leading-[1.6] text-current/60 max-w-xs">
              Built on enterprise voice infrastructure — Retell AI · n8n · Google Calendar · EspoCRM
            </p>
          </div>

          <div>
            <h3 className="font-heading font-bold text-white mb-4">Product</h3>
            <ul className="space-y-3 text-sm">
              {footerProduct.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              {footerLegal.map((s, i) => (
                <li key={`${s.label}-${i}`}>
                  <Link href={s.href} className="hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-white mb-4">Support</h3>
            <ul className="space-y-3 text-sm">
              {footerSupport.map((s, i) => (
                <li key={`${s.label}-${i}`}>
                  <Link href={s.href} className="hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-xs">
          <p>© {new Date().getFullYear()} Minions.AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
