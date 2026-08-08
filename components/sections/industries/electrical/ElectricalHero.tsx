import Image from "next/image";
import Button from "@/components/ui/Button";

export default function ElectricalHero() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block rounded-full bg-teal px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-white">
            Electrical Industry Specialists
          </span>
          <h1 className="mt-5 font-heading font-extrabold text-ink text-4xl sm:text-5xl leading-[1.1] text-balance">
            For Electrical companies: catch every{" "}
            <span className="text-coral-text">&ldquo;my power is out&rdquo;</span> call — even at
            10 PM.
          </h1>
          <p className="mt-6 text-lg text-ink/70 leading-relaxed max-w-xl">
            When the lights go out, customers call the first person who answers. Rex ensures
            that&apos;s you, 24/7. No more missed emergencies, no more lost revenue.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href="/live-demo" size="lg" showArrow>
              Hear Rex handle an electrical call
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Book a Demo
            </Button>
          </div>
        </div>

        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-white shadow-sm">
          <Image
            src="/images/electrical-hero-photo.jpg"
            alt="Rex, the Minions.AI electrical industry AI dispatcher"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 45vw, 90vw"
          />
        </div>
      </div>
    </section>
  );
}
