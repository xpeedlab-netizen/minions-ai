import type { ReactNode } from "react";

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-ink">{title}</h1>
        <p className="mt-2 font-mono text-sm text-ink/50">Last updated: {updated}</p>
        <div className="mt-10 space-y-8 text-ink/70 leading-relaxed [&_h2]:font-heading [&_h2]:font-bold [&_h2]:text-xl [&_h2]:text-ink [&_h2]:mb-2 [&_p]:mb-3">
          {children}
        </div>
      </div>
    </section>
  );
}
