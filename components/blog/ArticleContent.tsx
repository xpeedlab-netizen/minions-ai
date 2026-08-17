"use client";

import React, { useState } from "react";
import { CheckCircle2, Phone, Sparkles, Terminal, Copy, Check, ShieldAlert, Cpu } from "lucide-react";
import { SITE_PHONE_NUMBER } from "@/lib/data/placeholders";

interface ArticleContentProps {
  content: string;
}

// Clean typography and punctuation artifacts
function cleanTextFormatting(text: string): string {
  return text
    .replace(/!\[([^\]]*)\]\s*\((https?:\/\/[^)\s]+)\)/g, "\n\n![$1]($2)\n\n")
    .replace(/\s+,\s+/g, ", ")
    .replace(/\s+,\s*$/gm, ",")
    .replace(/—/g, ", ")
    .replace(/--/g, ", ")
    .trim();
}

function CodeBlockRenderer({ code, language }: { code: string; language?: string }) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-ink/40 bg-[#0c0d12] shadow-2xl max-w-full">
      {/* Top Window Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#161822] border-b border-ink/30 text-xs font-mono text-ink/70">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="size-3 rounded-full bg-[#ff5f56]" />
            <div className="size-3 rounded-full bg-[#ffbd2e]" />
            <div className="size-3 rounded-full bg-[#27c93f]" />
          </div>
          <span className="ml-2 text-cream/70 font-semibold">{language || "json"}</span>
        </div>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-ink/50 text-cream/80 hover:text-white hover:bg-ink/80 transition-colors"
        >
          {copied ? <Check className="size-3.5 text-teal" /> : <Copy className="size-3.5" />}
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>

      {/* Code Text */}
      <pre className="p-4 sm:p-5 text-xs sm:text-sm font-mono leading-relaxed text-[#00F2FE] overflow-x-auto selection:bg-teal/30 max-w-full">
        <code>{code.trim()}</code>
      </pre>
    </div>
  );
}

export default function ArticleContent({ content }: ArticleContentProps) {
  const cleanedContent = cleanTextFormatting(content);

  // Split content by paragraphs or blocks
  const rawBlocks = cleanedContent.split(/\n\n+/).filter(Boolean);

  return (
    <div className="space-y-8 text-ink/90 text-[1.09375rem] leading-[1.75] tracking-[-0.011em] font-body max-w-full">
      {rawBlocks.map((block, blockIdx) => {
        const trimmed = block.trim();

        // 1. Detect Markdown Images (![alt](url)) or standalone image URLs - Highest Priority
        if (
          (trimmed.includes("![") && trimmed.includes("](") && trimmed.includes(")")) ||
          /^\(?(https?:\/\/[^\s)]+\.(png|jpe?g|webp|svg|gif)(\?[^\s)]*)?)\)?$/i.test(trimmed) ||
          /^\(?(https?:\/\/image\.pollinations\.ai\/[^\s)]+)\)?$/i.test(trimmed)
        ) {
          // Check if it is a standalone image URL
          if (/^\(?(https?:\/\/[^\s)]+)\)?$/i.test(trimmed) && (trimmed.includes("pollinations.ai") || /\.(png|jpe?g|webp|svg|gif)/i.test(trimmed))) {
            const rawUrl = trimmed.replace(/^\(|\)$/g, "").trim();
            return (
              <div key={blockIdx} className="relative my-8 group max-w-full">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-teal/25 via-accent-blue/20 to-coral/25 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition duration-700 -z-10" />
                <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-ink shadow-2xl shadow-ink/20 aspect-[16/9] w-full max-w-full">
                  <img
                    src={rawUrl}
                    alt="Editorial Graphic"
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.01]"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
                </div>
              </div>
            );
          }

          const parts = trimmed.split(/(!\[.*?\]\(.*?\))/g).filter(Boolean);
          return (
            <div key={blockIdx} className="space-y-6 max-w-full">
              {parts.map((part, pIdx) => {
                const imgMatch = part.match(/!\[(.*?)\]\((.*?)\)/);
                if (imgMatch) {
                  const altText = imgMatch[1] || "Editorial Cover Card";
                  const imgSrc = imgMatch[2];
                  return (
                    <div key={pIdx} className="relative my-8 group max-w-full">
                      {/* Ambient Teal & Coral Diffusion Glow */}
                      <div className="absolute -inset-1.5 bg-gradient-to-r from-teal/25 via-accent-blue/20 to-coral/25 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition duration-700 -z-10" />
                      
                      {/* Cinematic 16:9 Image Stage with Inner Ring */}
                      <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-ink shadow-2xl shadow-ink/20 aspect-[16/9] w-full max-w-full">
                        <img
                          src={imgSrc}
                          alt={altText}
                          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.01]"
                          loading="eager"
                        />
                        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
                      </div>
                      {altText && altText !== "Editorial Image" && altText !== "Editorial Cover Card" && (
                        <p className="mt-3 text-center text-xs font-mono tracking-tight text-ink/60 italic truncate px-2">
                          {altText}
                        </p>
                      )}
                    </div>
                  );
                }
                const cleanPart = part.trim();
                if (!cleanPart) return null;
                return (
                  <p key={pIdx} className="leading-[1.75] text-ink/85 mb-6 break-words [overflow-wrap:anywhere]">
                    {cleanPart}
                  </p>
                );
              })}
            </div>
          );
        }

        // 2. Detect Code Fences (```json ... ```)
        if (trimmed.startsWith("```")) {
          const lines = trimmed.split("\n");
          const language = lines[0].replace(/^```/, "").trim() || "json";
          const code = lines.slice(1, lines[lines.length - 1].startsWith("```") ? -1 : undefined).join("\n");
          return <CodeBlockRenderer key={blockIdx} code={code} language={language} />;
        }

        // 3. Detect Rule Callout Cards (e.g. "Rule 1: ...", "Rule 2: ...", "Rule 3: ...")
        if (/^Rule\s+\d+:/i.test(trimmed)) {
          const ruleMatch = trimmed.match(/^(Rule\s+\d+:)\s*([\s\S]*)$/i);
          const ruleHeader = ruleMatch ? ruleMatch[1] : "Rule";
          const ruleBody = ruleMatch ? ruleMatch[2] : trimmed;

          return (
            <div
              key={blockIdx}
              className="my-6 rounded-2xl border border-border/80 bg-cream/70 p-5 sm:p-6 border-l-4 border-l-teal shadow-sm"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold uppercase tracking-wide bg-teal/10 text-teal border border-teal/20">
                  {ruleHeader}
                </span>
              </div>
              <p className="text-base sm:text-lg leading-relaxed text-ink/90 font-medium">
                {ruleBody}
              </p>
            </div>
          );
        }

        // 4. Detect Section Headings (starts with ### or ## or #)
        if (/^#{1,3}\s+/.test(trimmed)) {
          const headingText = trimmed.replace(/^#{1,3}\s+/, "");
          return (
            <h2 key={blockIdx} className="font-heading text-2xl sm:text-3xl font-extrabold text-ink pt-8 pb-3 border-b border-border/60 tracking-tight">
              {headingText}
            </h2>
          );
        }

        // 5. Detect Call-to-Action phone dial paragraphs (e.g. "call +1 800 ...")
        if (/call\s+(\+?1?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})/i.test(trimmed)) {
          const phoneMatch = trimmed.match(/(\+?1?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})/);
          const rawPhone = phoneMatch ? phoneMatch[1] : SITE_PHONE_NUMBER;
          const cleanPhone = rawPhone.replace(/\D/g, "");

          return (
            <div
              key={blockIdx}
              className="my-8 rounded-2xl border-2 border-coral/30 bg-coral/5 p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm"
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

        // 6. Detect Numbered Lists (1. Title: Description)
        const isNumberedList = /^\s*1[\.\)]\s+/m.test(trimmed) || /(?:^|\n)\s*\d+[\.\)]\s+/.test(trimmed);
        if (isNumberedList) {
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

        // 7. Standard Paragraph
        return (
          <p key={blockIdx} className="leading-[1.75] text-ink/85 mb-6">
            {trimmed}
          </p>
        );
      })}
    </div>
  );
}
