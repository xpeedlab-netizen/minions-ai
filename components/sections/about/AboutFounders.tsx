import Image from "next/image";
import { Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const founders = [
  {
    name: "Rakib",
    badge: "Ops Master",
    badgeClass: "bg-teal/10 text-teal",
    specialty: "Setup, Integrations & Support",
    image: "/images/founder-rakib.jpg",
    body: "Rakib is the bridge between your current messy workflow and a streamlined automated machine. He ensures every tool talks to each other perfectly.",
    checklist: ["CRMs & Calendars", "24/7 Client Support", "Process Optimization"],
  },
  {
    name: "Parvej",
    badge: "AI Architect",
    badgeClass: "bg-coral/15 text-coral-text",
    specialty: "Builds & Trains AI Agents",
    image: "/images/founder-parvej.jpg",
    body: "Parvej gives the 'Minions' their brains. He specializes in natural language processing to ensure your AI agents sound human and helpful.",
    checklist: ["Voice & SMS Agents", "Custom LLM Training", "Quality Control"],
  },
];

export default function AboutFounders() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink text-balance">
            The Founders
          </h2>
          <p className="mt-4 text-ink/60">The humans behind the robots.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 gap-8">
          {founders.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.08} className="h-full">
              <div className="grid grid-cols-2 h-full overflow-hidden rounded-2xl border border-border bg-white">
                <div className="relative min-h-[280px]">
                  <Image
                    src={f.image}
                    alt={f.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 640px) 25vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading font-bold text-xl text-ink">{f.name}</h3>
                    <span
                      className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide ${f.badgeClass}`}
                    >
                      {f.badge}
                    </span>
                  </div>
                  <p className="mt-2 font-heading font-bold text-sm text-coral-text">
                    {f.specialty}
                  </p>
                  <p className="mt-3 text-sm text-ink/60 leading-relaxed">{f.body}</p>
                  <ul className="mt-4 space-y-2">
                    {f.checklist.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-ink/70">
                        <Check className="size-4 shrink-0 text-success" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
