import { Zap, CalendarClock, Moon } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { INTEGRATION_COPY } from "@/lib/data/site-content";

const cards = [
  {
    icon: Zap,
    title: "Emergency Dispatch",
    body: "Rex is trained to identify critical safety issues like burning smells, sparking panels, or total power loss. He alerts your crew immediately for high-priority emergency calls.",
  },
  {
    icon: CalendarClock,
    title: "Quote Scheduling",
    body: `From panel upgrades to full home rewires, Rex qualifies the lead and ${INTEGRATION_COPY.calendar.toLowerCase()}`,
  },
  {
    icon: Moon,
    title: "24/7 Coverage",
    body: "Never miss a weekend or late-night lead again. Rex works around the clock so you don't have to, capturing every inbound call.",
  },
];

export default function ElectricalFeatures() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-ink text-balance text-center">
          Built for Electrical Service Teams
        </h2>
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08} className="h-full">
              <div className="h-full rounded-2xl border border-border bg-white p-6">
                <span className="flex size-10 items-center justify-center rounded-xl bg-coral/15 text-coral-text">
                  <c.icon className="size-5" />
                </span>
                <h3 className="mt-4 font-heading font-bold text-ink">{c.title}</h3>
                <p className="mt-2 text-sm text-ink/60 leading-relaxed">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
