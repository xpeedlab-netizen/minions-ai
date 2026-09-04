import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function ZipHonestPitch() {
  return (
    <section className="bg-[#E8E1DA] py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 font-mono text-xs text-ink/65">
          <CheckCircle2 className="size-3.5 text-success" />
          The Honest Pitch
        </span>
        <h2 className="mt-5 font-heading font-bold text-3xl sm:text-4xl text-ink text-balance">
          This is the fastest win we install.
        </h2>
        <p className="mt-4 text-ink/70 leading-relaxed italic">
          &ldquo;This is the fastest win we install, and it&apos;s usually the one shops feel in
          the first week. If you only do one thing with us, do this.&rdquo;
        </p>
        <div className="relative mt-6 size-12 mx-auto overflow-hidden rounded-full border-2 border-white bg-coral/10 p-0.5 shadow">
          <Image src="/images/mascots/zip.png" alt="Zip" fill className="object-contain" />
        </div>
      </div>
    </section>
  );
}
