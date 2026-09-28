import { ShieldCheck, Lock, Database, FileCheck, Server, UserCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Section, { SectionHeading } from "@/components/ui/Section";

const TRUST_PILLARS = [
  {
    icon: Lock,
    title: "256-Bit AES Encryption",
    description:
      "All customer call recordings, transcripts, and lead records are encrypted at rest using AES-256 and in transit via TLS 1.3.",
  },
  {
    icon: Database,
    title: "100% Data Isolation (Zero AI Training)",
    description:
      "Your private business conversations and customer data are never sold, shared, or used to train public LLM models.",
  },
  {
    icon: FileCheck,
    title: "TCPA & Consent Compliant",
    description:
      "Automated call recording disclosures, compliant SMS opt-out (STOP) processing, and strict telephony regulations built-in.",
  },
  {
    icon: Server,
    title: "Your Voice Account, In Your Name",
    description:
      "The voice layer runs on Retell AI, in a Retell account you own and pay directly at their published rates. You are never locked to us to keep the line running.",
  },
  {
    icon: UserCheck,
    title: "Complete Data Ownership",
    description:
      "You own all your CRM records, customer notes, and audio transcripts. Export or delete your data at any time with one click.",
  },
  {
    icon: ShieldCheck,
    title: "Approved Answers Only",
    description:
      "Your AI crew only quotes the listings, prices and policies you approve. When it has no approved answer, it hands the caller to a person instead of guessing.",
  },
];

export default function SecurityTrustSection() {
  return (
    <Section tone="cream" width="wide" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-3.5 py-1 text-xs font-semibold text-teal">
          <ShieldCheck className="size-4 text-teal" />
          <span>Enterprise Security & Data Isolation</span>
        </div>
        <SectionHeading className="mt-4 text-ink">
          Your Call Recordings & Business Data Stay Yours.
        </SectionHeading>
        <p className="mt-4 text-base sm:text-lg text-ink/70">
          Your callers' details, recordings and transcripts are encrypted, isolated to your account, and never used to train public models.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TRUST_PILLARS.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <Reveal key={pillar.title} delay={idx * 0.06} className="h-full">
              <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-white p-7 shadow-sm transition-all hover:border-teal/30 hover:shadow-md">
                <div>
                  <div className="flex size-12 items-center justify-center rounded-xl bg-teal/10 text-teal">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-bold text-ink">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink/70">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
