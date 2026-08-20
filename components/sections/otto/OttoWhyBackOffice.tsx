import { CheckCircle2, XCircle, ShieldCheck, Lock } from "lucide-react";

const comparisonItems = [
  {
    manual: "Skilled staff waste 10+ hours a week re-typing forms & renaming PDFs",
    otto: "100% automated OCR data extraction and file routing into folders",
  },
  {
    manual: "Chasing missing client documents requires manual emails & awkward phone calls",
    otto: "Polite automated SMS & email reminders chase documents automatically",
  },
  {
    manual: "Unorganized intake leads to misplaced client files and missing tax forms",
    otto: "Structured digital intake flows enforce complete document collection upfront",
  },
  {
    manual: "High risk of sensitive client data floating in unencrypted email threads",
    otto: "Bank-grade encrypted storage routing with signed NDA compliance from day one",
  },
];

export default function OttoWhyBackOffice() {
  return (
    <section className="bg-ink py-16 sm:py-24 text-white relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 size-96 rounded-full bg-teal/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Story & Positioning */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal/40 bg-teal/15 px-3.5 py-1.5 font-mono text-xs font-bold text-teal-300">
            <ShieldCheck className="size-3.5" />
            <span>Why Firms Choose Back-Office Autopilot</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white text-balance leading-tight">
            Stop Paying Skilled People to Push Paperwork. <br className="hidden sm:inline" />
            Let Otto Eliminate the Administrative Grind.
          </h2>

          <p className="text-white/75 leading-relaxed text-base">
            Your high-value team members shouldn&apos;t be spending billable hours hunting down missing W-2s, manually typing intake data into spreadsheets, or renaming PDF uploads. Otto operates quietly in the background 24/7.
          </p>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md flex items-center gap-3">
            <Lock className="size-5 text-teal shrink-0" />
            <p className="font-heading font-bold text-white text-sm leading-relaxed">
              Built for firms handling private client information. We sign an NDA before setting up secure, permissioned workflows.
            </p>
          </div>

          {/* Comparison Grid */}
          <div className="space-y-3 pt-2">
            {comparisonItems.map((item, idx) => (
              <div key={idx} className="grid sm:grid-cols-2 gap-3 text-xs font-mono">
                {/* Manual side */}
                <div className="flex items-start gap-2 rounded-xl bg-white/5 border border-white/10 p-3 text-white/50">
                  <XCircle className="size-4 mt-0.5 shrink-0 text-coral-text" />
                  <span>{item.manual}</span>
                </div>
                {/* Otto side */}
                <div className="flex items-start gap-2 rounded-xl bg-teal/20 border border-teal/40 p-3 text-white">
                  <CheckCircle2 className="size-4 mt-0.5 shrink-0 text-teal-300" />
                  <span className="font-medium">{item.otto}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Visual Frame */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-[28px] border-4 border-white/10 overflow-hidden shadow-2xl bg-black/60 p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-mono text-xs text-white/60">Autonomous Back-Office Pipeline</span>
              <span className="font-mono text-xs font-bold text-teal bg-teal/15 px-2.5 py-1 rounded-full">
                Active 24/7
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 space-y-1">
                <div className="flex justify-between text-white/60">
                  <span>Task: Client Intake #4920</span>
                  <span className="text-teal">Completed</span>
                </div>
                <p className="font-bold text-white">Extracted Tax ID &amp; Auto-Filed W-9 to Google Drive</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 space-y-1">
                <div className="flex justify-between text-white/60">
                  <span>Task: Document Chaser</span>
                  <span className="text-accent-blue">Dispatched SMS</span>
                </div>
                <p className="font-bold text-white">Chasing Missing COI Insurance from Contractor</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 space-y-1">
                <div className="flex justify-between text-white/60">
                  <span>Task: CRM Sync</span>
                  <span className="text-success">Synced</span>
                </div>
                <p className="font-bold text-white">Pushed Intake Payload to ServiceTitan &amp; CRM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
