import { FileText, Send, ScanText, FolderCheck, Lock, CheckCircle2, Sparkles } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const tags = [
  "Form Extraction",
  "OCR Parsing",
  "Automated Reminders",
  "Folder Routing",
  "NDA Compliant",
];

const integrations = [
  "Google Drive",
  "Dropbox",
  "ServiceTitan",
  "Housecall Pro",
  "Zapier / Webhooks",
];

export default function OttoBentoGrid() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal/10 border border-teal/30 px-3.5 py-1 font-mono text-xs font-bold text-teal uppercase tracking-wider">
            <Sparkles className="size-3.5" />
            <span>Built-In Back-Office &amp; Document Engine</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink text-balance leading-tight">
            Otto automates the document grind so your team focuses on billable work.
          </h2>
          <p className="text-base text-ink/70 max-w-2xl mx-auto">
            From client onboarding forms to chasing missing W-2s and filing PDFs in the right folder, Otto quietly handles administrative paperwork in the background.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {/* Card 1: Main Large Card — Client Intake & Onboarding */}
          <Reveal className="lg:col-span-2">
            <div className="relative h-full rounded-3xl border border-ink/20 bg-ink p-7 text-white shadow-xl overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 size-64 rounded-full bg-teal/20 blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-teal/20 text-teal-300 border border-teal/40">
                    <FileText className="size-5" />
                  </span>
                  <span className="font-mono text-xs font-bold text-teal-300 bg-teal/20 border border-teal/40 px-3 py-1 rounded-full uppercase">
                    100% Automated Intake
                  </span>
                </div>

                <h3 className="mt-6 font-heading font-extrabold text-2xl text-white">
                  Autonomous Client Intake &amp; Onboarding
                </h3>
                <p className="mt-3 text-sm text-white/75 leading-relaxed max-w-xl">
                  Eliminate manual PDF email attachments. Otto creates sleek digital intake forms that capture client details, verify required file uploads, and automatically spin up dedicated client matter records.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-white/80"
                  >
                    <CheckCircle2 className="size-3 text-teal" />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Card 2: Polite Automated Document Chaser */}
          <Reveal delay={0.05}>
            <div className="relative h-full rounded-3xl border border-teal/30 bg-teal p-7 text-white shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-white/15 text-white">
                    <Send className="size-5" />
                  </span>
                  <span className="font-mono text-[11px] font-bold text-white bg-white/20 px-2.5 py-1 rounded-full uppercase">
                    Auto-Nagging
                  </span>
                </div>

                <h3 className="mt-6 font-heading font-extrabold text-xl text-white">
                  Automated Document Chasing
                </h3>
                <p className="mt-3 text-sm text-white/80 leading-relaxed">
                  Polite automated SMS and email reminders that follow up with clients who haven&apos;t sent their W-2s, COIs, or IDs — until every document is received.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/15 font-mono text-xs text-white/90 flex items-center justify-between">
                <span>Follow-up Frequency</span>
                <span className="font-bold text-cream">Automated 24/7</span>
              </div>
            </div>
          </Reveal>

          {/* Card 3: AI Optical Data Extraction */}
          <Reveal delay={0.1}>
            <div className="relative h-full rounded-3xl border border-border bg-white p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <span className="flex size-11 items-center justify-center rounded-2xl bg-teal/10 text-teal border border-teal/30">
                  <ScanText className="size-5" />
                </span>

                <h3 className="mt-6 font-heading font-extrabold text-xl text-ink">
                  AI Optical Data Extraction
                </h3>
                <p className="mt-3 text-sm text-ink/70 leading-relaxed">
                  Otto reads PDFs, tax forms, and scanned images — instantly extracting key text fields, EINs, names, and dates directly into structured CRM variables.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 font-mono text-xs text-ink/60 flex items-center justify-between">
                <span>Extraction Accuracy</span>
                <span className="font-bold text-teal">High Precision OCR</span>
              </div>
            </div>
          </Reveal>

          {/* Card 4: Automated Folder & CRM Routing */}
          <Reveal delay={0.15}>
            <div className="relative h-full rounded-3xl border border-border bg-white p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <span className="flex size-11 items-center justify-center rounded-2xl bg-accent-blue/10 text-accent-blue border border-accent-blue/30">
                  <FolderCheck className="size-5" />
                </span>

                <h3 className="mt-6 font-heading font-extrabold text-xl text-ink">
                  Auto-Filing &amp; Folder Routing
                </h3>
                <p className="mt-3 text-sm text-ink/70 leading-relaxed">
                  Every uploaded file is automatically renamed, categorized, and filed into the exact client folder in Google Drive, Dropbox, or your CRM.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 font-mono text-xs text-ink/60 flex items-center justify-between">
                <span>Filing Speed</span>
                <span className="font-bold text-accent-blue">Instant Routing</span>
              </div>
            </div>
          </Reveal>

          {/* Card 5: Bank-Grade Security & NDA Protection */}
          <Reveal delay={0.2}>
            <div className="relative h-full rounded-3xl border border-ink/20 bg-ink p-7 text-white shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-white/15 text-white">
                    <Lock className="size-5" />
                  </span>
                  <span className="font-mono text-[11px] font-bold text-white bg-white/20 px-2.5 py-1 rounded-full uppercase">
                    Encrypted
                  </span>
                </div>

                <h3 className="mt-6 font-heading font-extrabold text-xl text-white">
                  Bank-Grade NDA &amp; Privacy Protection
                </h3>
                <p className="mt-3 text-sm text-white/80 leading-relaxed">
                  Built specifically for law firms, accountants, and contractors handling sensitive data. Permissioned access, full NDA compliance, and end-to-end encryption.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/15 font-mono text-xs text-white/90">
                <p className="text-[10px] uppercase text-white/60 mb-2 font-bold">Supported Storage &amp; CRMs</p>
                <div className="flex flex-wrap gap-1.5">
                  {integrations.map((c) => (
                    <span key={c} className="rounded-md bg-white/20 px-2 py-0.5 text-[10px]">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
