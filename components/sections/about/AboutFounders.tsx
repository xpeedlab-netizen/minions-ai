import Image from "next/image";
import { Check, ShieldCheck, ExternalLink } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const founders = [
  {
    name: "Rakib",
    role: "Co-Founder & Operations Architecture",
    badge: "Ops & Systems",
    badgeClass: "bg-teal/10 text-teal",
    specialty: "CRM Pipelines, Dispatch Workflows & Integrations",
    image: "/images/founder-rakib.jpg",
    linkedin: "https://www.linkedin.com/in/rakibs",
    body: "Ex-operations architect with deep expertise bridging trade software (ServiceTitan, Jobber, FieldRoutes) into autonomous dispatch engines. Rakib ensures your AI crew handles call routing, calendar booking, and customer handoffs with zero operational friction.",
    checklist: [
      "Field Service CRM & Calendar Sync",
      "Carrier Telephony & SIP Architecture",
      "Dedicated 24/7 Priority Support",
    ],
  },
  {
    name: "Parvej",
    role: "Co-Founder & AI Voice Engineering",
    badge: "AI Systems",
    badgeClass: "bg-teal/15 text-teal",
    specialty: "Voice Latency, NLP & Hallucination Guardrails",
    image: "/images/founder-parvej.jpg",
    linkedin: "https://www.linkedin.com/in/parvej",
    body: "Conversational AI and NLP engineer specializing in sub-second voice latency, real-time speech turn-taking, and deterministic contractor guardrails. Parvej ensures Rex and Zip sound remarkably natural while strictly adhering to your exact trade pricing.",
    checklist: [
      "<1.8s Real-Time Voice Turn-Taking",
      "Zero-Hallucination Pricing Guardrails",
      "Custom Regional Dialect & Accent Tuning",
    ],
  },
];

export default function AboutFounders() {
  return (
    <section className="bg-cream-dark py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-3.5 py-1 text-xs font-semibold text-teal">
            <ShieldCheck className="size-4 text-teal" />
            <span>Verifiable Leadership</span>
          </div>
          <h2 className="mt-3 font-heading font-bold text-3xl sm:text-4xl text-ink text-balance">
            The Founders Behind Minions.AI
          </h2>
          <p className="mt-3 text-base text-ink/70">
            Real engineers and operations veterans dedicated to solving contractor phone coverage.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-8">
          {founders.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.08} className="h-full">
              <div className="flex flex-col md:flex-row h-full overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all hover:shadow-md">
                <div className="relative min-h-[260px] md:w-5/12 shrink-0">
                  <Image
                    src={f.image}
                    alt={`${f.name} - ${f.role}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 640px) 25vw, 50vw"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-heading font-bold text-xl text-ink">{f.name}</h3>
                        <span
                          className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide font-semibold ${f.badgeClass}`}
                        >
                          {f.badge}
                        </span>
                      </div>
                      <a
                        href={f.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${f.name}'s LinkedIn Profile`}
                        className="inline-flex items-center gap-1 rounded-lg border border-border bg-cream px-2 py-1 text-xs font-semibold text-ink/70 transition-colors hover:border-teal/40 hover:text-teal"
                      >
                        <svg className="size-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                        <span>LinkedIn</span>
                        <ExternalLink className="size-3 opacity-60" />
                      </a>
                    </div>
                    <p className="mt-1 font-heading font-semibold text-xs text-teal">
                      {f.specialty}
                    </p>
                    <p className="mt-3 text-xs sm:text-sm text-ink/70 leading-relaxed">
                      {f.body}
                    </p>
                  </div>
                  <ul className="mt-4 space-y-1.5 border-t border-border/60 pt-3">
                    {f.checklist.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs font-medium text-ink/80">
                        <Check className="size-3.5 shrink-0 text-success" />
                        <span>{item}</span>
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
