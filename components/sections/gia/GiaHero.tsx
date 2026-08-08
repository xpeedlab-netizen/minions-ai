import { ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import GiaHeroAnimation from "./GiaHeroAnimation";

export default function GiaHero() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1 font-mono text-xs uppercase tracking-wide text-ink/60">
            <ShieldCheck className="size-3.5 text-success" />
            Meet Gia: CRM specialist
          </span>
          <h1 className="mt-5 font-heading font-extrabold text-ink text-4xl sm:text-5xl leading-[1.1] text-balance">
            A CRM that actually works — because we make it{" "}
            <span className="text-success">run itself</span>.
          </h1>
          <p className="mt-6 text-lg text-ink/70 leading-relaxed max-w-xl">
            Stop letting leads rot in your inbox. Gia sets up or rescues your GoHighLevel instance
            to automate follow-ups, reminders, and reviews while you&apos;re out on the job site.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href="/contact" size="lg" showArrow>
              Book a free CRM audit
            </Button>
            <Button href="/live-demo" variant="outline" size="lg">
              See Gia in Action
            </Button>
          </div>
        </div>

        <div className="relative">
          <GiaHeroAnimation />
        </div>
      </div>
    </section>
  );
}
