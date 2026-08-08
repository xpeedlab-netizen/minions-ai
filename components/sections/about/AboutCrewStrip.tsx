import { Wrench, Zap, MessageCircle, RefreshCw, FileText } from "lucide-react";
import { crew } from "@/lib/data/crew";

const icons: Record<string, typeof Wrench> = {
  Rex: Wrench,
  Zip: Zap,
  Pip: MessageCircle,
  Gia: RefreshCw,
  Otto: FileText,
};

export default function AboutCrewStrip() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {crew.map((m) => {
            const Icon = icons[m.name] ?? Wrench;
            return (
              <div key={m.name} className="flex flex-col items-center gap-2">
                <span className="flex size-11 items-center justify-center rounded-full border border-border bg-cream text-ink/40">
                  <Icon className="size-4" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wide text-ink/40">
                  {m.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
