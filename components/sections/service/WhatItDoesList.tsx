import { Check } from "lucide-react";

export default function WhatItDoesList({
  heading,
  items,
}: {
  heading: string;
  items: string[];
}) {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-ink text-balance">
          {heading}
        </h2>
        <ul className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-5">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <Check className="size-5 mt-0.5 shrink-0 text-success" />
              <span className="text-ink/80 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
