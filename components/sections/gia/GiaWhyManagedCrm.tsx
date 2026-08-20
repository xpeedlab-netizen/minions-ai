import Image from "next/image";
import { CheckCircle2, XCircle, ShieldCheck, Sparkles } from "lucide-react";
import { INTEGRATION_COPY } from "@/lib/data/site-content";

const comparisonItems = [
  {
    diy: "Hours spent trying to build custom triggers & workflows",
    gia: "100% Done-For-You pipeline build tailored to your trade",
  },
  {
    diy: "Leads sit uncontacted in spreadsheets or chaotic inboxes",
    gia: "< 5-second automated SMS text-back to every incoming inquiry",
  },
  {
    diy: "High customer no-show rates on scheduled estimate calls",
    gia: "Automated 24h & 1h SMS reminders with 1-click confirmation",
  },
  {
    diy: "Zero post-job follow-up; missing out on Google 5-star reviews",
    gia: "Instant post-completion SMS review requests sent on autopilot",
  },
];

export default function GiaWhyManagedCrm() {
  return (
    <section className="bg-ink py-16 sm:py-24 text-white relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 size-96 rounded-full bg-success/10 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Story & Positioning */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-success/40 bg-success/15 px-3.5 py-1.5 font-mono text-xs font-bold text-success">
            <ShieldCheck className="size-3.5" />
            <span>Why Contractors Choose Managed CRM</span>
          </div>

          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white text-balance leading-tight">
            Stop Fighting Complex Dashboards. <br className="hidden sm:inline" />
            Let Gia Manage Your Pipeline.
          </h2>

          <p className="text-white/75 leading-relaxed text-base">
            Most home service business owners buy expensive CRM software only to leave 80% of its features unused because setting up workflows takes dozens of hours. Gia eliminates the technical headache completely.
          </p>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
            <p className="font-heading font-bold text-white text-sm leading-relaxed">
              {INTEGRATION_COPY.crm}
            </p>
          </div>

          {/* Comparison List */}
          <div className="space-y-3 pt-2">
            {comparisonItems.map((item, idx) => (
              <div key={idx} className="grid sm:grid-cols-2 gap-3 text-xs font-mono">
                {/* DIY side */}
                <div className="flex items-start gap-2 rounded-xl bg-white/5 border border-white/10 p-3 text-white/50">
                  <XCircle className="size-4 mt-0.5 shrink-0 text-coral-text" />
                  <span>{item.diy}</span>
                </div>
                {/* Gia side */}
                <div className="flex items-start gap-2 rounded-xl bg-success/15 border border-success/30 p-3 text-white">
                  <CheckCircle2 className="size-4 mt-0.5 shrink-0 text-success" />
                  <span className="font-medium">{item.gia}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Dashboard Visual Frame */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-[28px] border-4 border-white/10 overflow-hidden shadow-2xl bg-black/60 aspect-[4/3] group">
            <Image
              src="/images/gia-ghl-screenshot.jpg"
              alt="Gia Managed CRM Pipeline Dashboard"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(min-width: 1024px) 45vw, 90vw"
            />
            {/* Dark Gradient Overlay & Live Badge */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/10 bg-ink/90 px-4 py-2.5 backdrop-blur-md text-xs font-mono">
              <span className="flex items-center gap-2 text-white/80">
                <Sparkles className="size-4 text-success" />
                <span>ServiceTitan &amp; Housecall Pro Ready</span>
              </span>
              <span className="font-bold text-success">Managed Autopilot</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
