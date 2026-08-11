import { CloudLightning, TrendingDown, ClipboardList } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const cards = [
  {
    icon: CloudLightning,
    title: "The Sunday Surge",
    body: "Storms don't wait for office hours. Emergency roofing calls spike outside 9-to-5, when your office isn't picking up.",
  },
  {
    icon: TrendingDown,
    title: "The Lead Decay",
    body: "Lead value drops significantly if you wait too long to respond. For a high-ticket roof, that's an expensive wait.",
  },
  {
    icon: ClipboardList,
    title: "Intake Bottlenecks",
    body: "Gathering insurance info over the phone takes time your office staff doesn't have during a catastrophe.",
  },
];

export default function RoofingProblem() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-ink text-balance">
            &ldquo;When the clouds break, the phone doesn&apos;t stop.&rdquo;
          </h2>
          <p className="mt-4 text-ink/60 leading-relaxed">
            In roofing, the first responder usually wins the insurance job. If you&apos;re letting
            leads go to voicemail during a storm surge, you&apos;re handing thousands in
            high-ticket revenue to your competitors.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08} className="h-full">
              <div className="h-full rounded-2xl border border-border bg-cream p-6">
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
