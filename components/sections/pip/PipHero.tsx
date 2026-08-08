import Button from "@/components/ui/Button";
import PipHeroAnimation from "./PipHeroAnimation";

export default function PipHero() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-ink/60">
            Meet the Crew: Pip
          </span>
          <h1 className="mt-5 font-heading font-extrabold text-ink text-4xl sm:text-5xl leading-[1.1] text-balance">
            Your customers get answers at midnight.{" "}
            <span className="text-teal">You get your evenings back.</span>
          </h1>
          <p className="mt-6 text-lg text-ink/70 leading-relaxed max-w-xl">
            Pip handles the questions you answer fifty times a week — hours, pricing, &quot;do you
            service my area?&quot;, &quot;when&apos;s my appointment?&quot; — by chat and email. The
            tricky ones come straight to you.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href="/live-demo" size="lg" showArrow>
              Try the chat demo
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Book a call
            </Button>
          </div>
        </div>

        <div className="relative">
          <PipHeroAnimation />
        </div>
      </div>
    </section>
  );
}
