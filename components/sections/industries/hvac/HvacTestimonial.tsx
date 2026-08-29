import { TUNING_WINDOW, SETUP_TIME_PROMISE } from "@/lib/data/site-content";
import Button from "@/components/ui/Button";
import { BOOKING_CALENDAR_URL } from "@/lib/data/placeholders";

const stats = [
  { label: "Coverage", value: "24/7" },
  { label: "Build Time", value: SETUP_TIME_PROMISE },
  { label: "Contract Term", value: "No lock-in" },
  { label: "Tuning Window", value: `${TUNING_WINDOW.days} Days` },
];

export default function HvacTestimonial() {
  return (
    <section className="relative overflow-hidden bg-cream py-16 sm:py-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <span className="rounded-full bg-ink px-3 py-1 font-mono text-xs uppercase tracking-wide text-white">
            30-Day Tuning Window
          </span>
          <h2 className="mt-4 font-heading font-bold text-2xl sm:text-3xl text-teal-dark leading-snug text-balance">
            {TUNING_WINDOW.heading}
          </h2>
          <p className="mt-4 text-ink/75 leading-relaxed text-base">
            {TUNING_WINDOW.body}
          </p>
          <div className="mt-6">
            <Button href={BOOKING_CALENDAR_URL} showArrow>
              Book a 15-minute call
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-white p-5 text-center">
              <p className="font-heading font-extrabold text-2xl text-teal">{s.value}</p>
              <p className="mt-1 text-xs text-ink/60">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
