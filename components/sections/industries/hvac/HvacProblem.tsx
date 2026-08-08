import { Wrench, BellOff, Search } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const cards = [
  {
    icon: Wrench,
    title: "The Overflow Trap",
    body: "Your techs are on ladders, your office is swamped, and the phone won't stop ringing. Who's answering the 4th caller?",
  },
  {
    icon: BellOff,
    title: "The 11 PM Emergency",
    body: "Homeowners don't wait for business hours when their furnace dies in January. If you're asleep, you're losing the job.",
  },
  {
    icon: Search,
    title: 'The "Google" Race',
    body: "Customers call the top 3 results on Google. If you don't answer or text back in 5 minutes, they're already booking with #2.",
  },
];

export default function HvacProblem() {
  return (
    <section className="bg-[#efe6da] py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-teal-dark text-balance">
            Peak season means peak missed calls.
          </h2>
          <p className="mt-4 text-ink/60">
            In the HVAC world, summer isn&apos;t just hot — it&apos;s expensive. Every missed call
            is a lead going straight to the shop down the street.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08} className="h-full">
              <div className="h-full rounded-2xl border border-border bg-cream p-6">
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
