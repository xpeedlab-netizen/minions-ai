import Image from "next/image";
import Button from "@/components/ui/Button";

export default function RoofingHero() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block rounded-full bg-ink px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-white">
            Built for the blue-collar backbone
          </span>
          <h1 className="mt-5 font-heading font-extrabold text-ink text-4xl sm:text-5xl leading-[1.1] text-balance">
            For Roofing companies: catch every{" "}
            <span className="text-coral-text">&ldquo;storm just took my shingles&rdquo;</span> call
            — even on a Sunday.
          </h1>
          <p className="mt-6 text-lg text-ink/70 leading-relaxed max-w-xl">
            When the storm surge hits, speed is profit. Rex and the crew handle high-volume
            insurance intakes and estimate scheduling while your actual crew is on the roof.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href="/contact" size="lg" showArrow>
              Get a Storm-Ready ROI Audit
            </Button>
            <Button href="/live-demo" variant="outline" size="lg">
              Watch Rex Demo
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-sm">
            <Image
              src="/images/roofing-hero-photo.jpg"
              alt="Roofer repairing storm-damaged shingles"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 90vw"
            />
          </div>
          <div className="absolute -bottom-8 -left-6 w-32 sm:w-36 rounded-xl border-2 border-teal bg-white p-1 shadow-lg">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/images/roofing-crew-photo.jpg"
                alt="Rex on a roof with a tablet"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-1 text-center font-mono text-[9px] uppercase tracking-wide text-ink/50">
              Chief Dispatcher
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
