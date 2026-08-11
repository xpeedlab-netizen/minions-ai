import { APPROVED_FAQS } from "./site-content";

export type FaqItem = { q: string; a: string };

export const homeFaq: FaqItem[] = APPROVED_FAQS.map((item) => ({
  q: item.q,
  a: item.a,
}));

export const fullFaq: FaqItem[] = homeFaq;
