export type NavLink = { label: string; href: string };

export type CrewNavLink = {
  name: string;
  role: string;
  href: string;
};

export const crewNav: CrewNavLink[] = [
  { name: "Rex", role: "24/7 Phone Receptionist", href: "/ai-voice-agent" },
  { name: "Zip", role: "4s Missed Call Text-Back", href: "/speed-to-lead" },
  { name: "Pip", role: "Website Booking Chat", href: "/customer-support-ai" },
  { name: "Gia", role: "Quote Follow-Up AI", href: "/crm-automation" },
  { name: "Otto", role: "Back-Office Automation", href: "/back-office-automation" },
];

export const services: NavLink[] = [
  { label: "AI Voice Agent", href: "/ai-voice-agent" },
  { label: "Speed-to-Lead", href: "/speed-to-lead" },
  { label: "Customer Support AI", href: "/customer-support-ai" },
  { label: "CRM Automation", href: "/crm-automation" },
  { label: "Back-Office Automation", href: "/back-office-automation" },
];

/**
 * UNLINKED 2026-09-07, owner's call: HVAC, plumbing, roofing and electrical were
 * removed from this menu so the site points paid traffic at the two pages that have
 * had the commercial-clarity, trust and visual passes. The ROUTES STILL EXIST and
 * still render — app/industries/{hvac,plumbing,roofing,electrical}/page.tsx are
 * untouched and reachable by direct URL. Nothing was deleted, redirected or
 * noindexed, so restoring them is just putting these four lines back (plus the
 * matching entries in components/layout/Footer.tsx and app/sitemap.ts).
 *
 * The [ORDERING] invariant in .claude/memory.md still governs the FULL six-vertical
 * order if they come back: real-estate, pest-control, hvac, plumbing, roofing,
 * electrical.
 */
export const industries: NavLink[] = [
  { label: "Real Estate", href: "/industries/real-estate" },
  { label: "Pest Control", href: "/industries/pest-control" },
];

export const footerProduct: NavLink[] = [
  { label: "How it Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "The Crew", href: "/#crew" },
  { label: "Real Estate AI", href: "/industries/real-estate" },
  { label: "Pest Control AI", href: "/industries/pest-control" },
  { label: "Blog & Guides", href: "/blog" },
];

export const footerLegal: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export const footerSupport: NavLink[] = [
  { label: "Contact Support", href: "/contact" },
  { label: "Knowledge Base", href: "/faq" },
  { label: "Direct Line", href: "/contact" },
];
