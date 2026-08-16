import React from "react";
import { CheckCircle2, Phone, Sparkles } from "lucide-react";
import { SITE_PHONE_NUMBER } from "@/lib/data/placeholders";

interface ArticleContentProps {
  content: string;
}

// Clean typography and punctuation artifacts
function cleanTextFormatting(text: string): string {
  return text
    .replace(/\s+,\s+/g, ", ")
    .replace(/\s+,\s*$/gm, ",")
    .replace(/—/g, ", ")
    .replace(/--/g, ", ")
    .trim();
}

export default function ArticleContent({ content }: ArticleContentProps) {
  const cleanedContent = cleanTextFormatting(content);

  // Split content by paragraphs or blocks
  const rawBlocks = cleanedContent.split(/\n\n+/).filter(Boolean);

  return (
    <div className="space-y-8 text-ink/90 text-[1.09375rem] leading-[1.72] tracking-[-0.011em] font-body">
      {rawBlocks.map((block, blockIdx) => {
        const trimmed = block.trim();

        // 1. Detect Markdown Images (![alt](url)) - Highest Priority
        if (trimmed.includes("![") && trimmed.includes("](") && trimmed.includes(")")) {
          const parts = trimmed.split(/(!\[.*?\]\(.*?\))/g).filter(Boolean);
          return (
            <div key={blockIdx} className="space-y-6">
              {parts.map((part, pIdx) => {
                const imgMatch = part.match(/!\[(.*?)\]\((.*?)\)/);
                if (imgMatch) {
                  const altText = imgMatch[1] || "Editorial Cover Card";
                  const imgSrc = imgMatch[2];
                  return (
                    <div key={pIdx} className="relative my-8 group">
                      {/* Ambient Teal & Coral Diffusion Glow */}
                      <div className="absolute -inset-1.5 bg-gradient-to-r from-teal/25 via-accent-blue/20 to-coral/25 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition duration-700 -z-10" />
                      
                      {/* Cinematic 16:9 Image Stage with Inner Ring */}
                      <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-ink shadow-2xl shadow-ink/20">
                        <img
                          src={imgSrc}
                          alt={altText}
                          className="w-full aspect-[16/9] object-cover object-center transition-transform duration-500 hover:scale-[1.01]"
                          loading="eager"
                        />
                        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
                      </div>
                      {altText && altText !== "Editorial Image" && (
                        <p className="mt-3 text-center text-xs font-mono tracking-tight text-ink/60 italic">
                          {altText}
                        </p>
                      )}
                    </div>
                  );
                }
                const cleanPart = part.trim();
                if (!cleanPart) return null;
                return (
                  <p key={pIdx} className="leading-[1.72] text-ink/85 mb-6">
                    {cleanPart}
                  </p>
                );
              })}
            </div>
          );
        }

        // 2. Detect if block is a numbered list (either multi-line or single-line containing 1. ... 2. ...)
        const isNumberedList = /^\s*1[\.\)]\s+/m.test(trimmed) || /(?:^|\n)\s*\d+[\.\)]\s+/.test(trimmed);

        if (isNumberedList) {
          // Split by numeric item boundaries: 1. / 2. / 3.
          const items = trimmed
            .split(/(?:^|\n|\s{2,})(?=\d+[\.\)]\s+)/)
            .map((item) => item.trim())
            .filter((item) => /^\d+[\.\)]\s+/.test(item));

          if (items.length > 0) {
            return (
              <div key={blockIdx} className="my-8 space-y-4">
                {items.map((item, itemIdx) => {
                  const match = item.match(/^(\d+)[\.\)]\s*([\s\S]*)$/);
                  const num = match ? match[1] : itemIdx + 1;
                  const itemBody = match ? match[2] : item;

                  // Check if item has a bold title before a colon (e.g. "Title: Description")
                  const colonIndex = itemBody.indexOf(":");
                  let itemTitle = "";
                  let itemDesc = itemBody;

                  if (colonIndex > 0 && colonIndex < 45) {
                    itemTitle = itemBody.slice(0, colonIndex + 1);
                    itemDesc = itemBody.slice(colonIndex + 1).trim();
                  }

                  return (
                    <div
                      key={itemIdx}
                      className="group flex items-start gap-4 rounded-2xl border border-border/80 bg-white p-5 sm:p-6 shadow-sm hover:border-teal/40 hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-teal text-white font-heading font-extrabold text-sm shadow-sm">
                        {num}
                      </div>
                      <div className="flex-1">
                        {itemTitle ? (
                          <p className="text-base sm:text-lg leading-relaxed text-ink/90">
                            <strong className="font-heading font-bold text-ink text-lg block sm:inline mr-1">
                              {itemTitle}
                            </strong>
                            {itemDesc}
                          </p>
                        ) : (
                          <p className="text-base sm:text-lg leading-relaxed text-ink/90">
                            {itemBody}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          }
        }

        // 2. Detect Bullet Lists (- item, • item, * item)
        if (/^\s*[-•*]\s+/m.test(trimmed)) {
          const bulletItems = trimmed
            .split(/\n+/)
            .map((l) => l.trim())
            .filter((l) => /^[-•*]\s+/.test(l));

          return (
            <ul key={blockIdx} className="my-6 space-y-3">
              {bulletItems.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start gap-3 text-base sm:text-lg text-ink/85">
                  <CheckCircle2 className="size-5 text-teal shrink-0 mt-1" />
                  <span>{item.replace(/^[-•*]\s+/, "")}</span>
                </li>
              ))}
            </ul>
          );
        }

        // 3. Detect Call-to-Action phone dial paragraphs (e.g. "Call +1 (614) ...")
        if (/call\s+(\+?1?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})/i.test(trimmed)) {
          const phoneMatch = trimmed.match(/(\+?1?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})/);
          const rawPhone = phoneMatch ? phoneMatch[1] : SITE_PHONE_NUMBER;
          const cleanPhone = rawPhone.replace(/\D/g, "");

          return (
            <div
              key={blockIdx}
              className="my-8 rounded-2xl border-2 border-coral/30 bg-coral/5 p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6"
            >
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-coral/10 text-coral-text px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="size-3.5" />
                  Live Phone Demo
                </span>
                <p className="font-heading font-bold text-lg sm:text-xl text-ink">
                  {trimmed}
                </p>
              </div>
              <a
                href={`tel:${cleanPhone}`}
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-coral hover:bg-coral-text text-white px-6 py-3.5 font-heading font-bold text-sm shadow-md transition-colors"
              >
                <Phone className="size-4" />
                Dial {rawPhone}
              </a>
            </div>
          );
        }

        // 4. Detect Markdown Images (![alt](url))
        if (/^\s*!\[(.*?)\]\((.*?)\)/.test(trimmed)) {
          const imgMatch = trimmed.match(/!\[(.*?)\]\((.*?)\)/);
          if (imgMatch) {
            const altText = imgMatch[1] || "Editorial Image";
            const imgSrc = imgMatch[2];
            return (
              <div key={blockIdx} className="my-8 overflow-hidden rounded-2xl border border-border bg-cream shadow-sm">
                <img
                  src={imgSrc}
                  alt={altText}
                  className="w-full h-auto max-h-[520px] object-cover object-center transition-transform duration-300 hover:scale-[1.01]"
                  loading="eager"
                />
                {altText && altText !== "Hero Image" && (
                  <p className="px-4 py-2 text-xs font-mono text-ink/60 bg-cream/50 border-t border-border/40 text-center italic">
                    {altText}
                  </p>
                )}
              </div>
            );
          }
        }

        // 5. Detect Section Headings (starts with ## or # or ends with a colon on short lines)
        if (/^#{1,3}\s+/.test(trimmed)) {
          const headingText = trimmed.replace(/^#{1,3}\s+/, "");
          return (
            <h2 key={blockIdx} className="font-heading text-2xl sm:text-3xl font-extrabold text-ink pt-6 pb-2 border-b border-border/60">
              {headingText}
            </h2>
          );
        }

        // 5. Detect Blockquotes (starts with > or enclosed in quotes)
        if (trimmed.startsWith("> ")) {
          return (
            <blockquote key={blockIdx} className="my-6 border-l-4 border-teal bg-cream/70 p-5 rounded-r-xl italic text-ink/90 text-lg">
              {trimmed.replace(/^>\s+/, "")}
            </blockquote>
          );
        }

        // 6. Standard Clean Paragraph
        return (
          <p key={blockIdx} className="leading-relaxed text-ink/85">
            {trimmed}
          </p>
        );
      })}
    </div>
  );
}
