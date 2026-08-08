import { Bell, TrendingUp, AlarmClock } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const cards = [
  {
    icon: Bell,
    title: "The Midnight Scurry",
    body: "Roaches don't wait for Monday morning. If you're not answering at 11 PM, your competitor is.",
  },
  {
    icon: TrendingUp,
    title: "Seasonal Swamping",
    body: "When the wasps emerge, your phones blow up. Don't let high volume lead to low service levels.",
  },
  {
    icon: AlarmClock,
    title: "The 5-Minute Window",
    body: "MIT research shows leads go cold after just 5 minutes of silence. Speed is your only advantage.",
  },
];

export default function PestProblem() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-teal-dark text-balance">
            Pests don&apos;t wait for business hours.
          </h2>
          <p className="mt-4 text-ink/60">
            Seasonal spikes in spring and summer can swamp your office. When leads get a
            voicemail, they just click the next Google result.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08} className="h-full">
              <div className="h-full rounded-2xl border border-border bg-white p-6">
                <c.icon className="size-6 text-coral-text" />
                <h3 className="mt-4 font-heading font-bold text-ink">{c.title}</h3>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
