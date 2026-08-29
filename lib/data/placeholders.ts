/**
 * Centrally-defined placeholder constants.
 * These represent external configurations, links, and media assets.
 */

/**
 * The live public demo line, held in Retell (nickname "Pest Control Line").
 * This is the site's ONLY phone number and it is a real, answerable US line —
 * the previous value was the placeholder (800) 555-0199, which is a fake 555
 * number sitting in the header of a company that sells call answering.
 *
 * Display form and dial form are separate constants on purpose. Call sites used
 * to derive the dial form with `.replace(/\D/g, "")`, which silently dropped the
 * country code; `tel:` wants E.164.
 */
export const SITE_PHONE_NUMBER: string = "(346) 626-4720";
export const SITE_PHONE_TEL: string = "+13466264720";
export const BOOKING_CALENDAR_URL: string = "/contact";
export const FOUNDER_PHOTO_URL: string = "/images/founders-placeholder.png";

/** Real founder headshots, used in the FoundersTrust attribution cluster. */
export const FOUNDER_PHOTOS: { src: string; name: string }[] = [
  { src: "/images/founder-rakib.jpg", name: "Rakib" },
  { src: "/images/founder-parvej.jpg", name: "Parvej" },
];

/**
 * YouTube video ID for the product demo — the 11-character ID only, NOT the full URL.
 * From https://www.youtube.com/watch?v=dQw4w9WgXcQ the ID is "dQw4w9WgXcQ".
 *
 * When set to empty string (""), the demo section and any demo CTA cleanly hide
 * without leaving empty containers, broken players, or orphaned headings.
 */
export const DEMO_VIDEO_ID: string = "";

/**
 * YouTube video ID for the founder introduction — the 11-character ID only.
 * When empty, the founder video block inside FoundersTrust does not render;
 * the written founder story still does.
 */
export const FOUNDER_VIDEO_ID: string = "";

/**
 * Derived from DEMO_VIDEO_ID — do not set directly.
 *
 * Other pages (Header, /pricing, /live-demo, the persona heroes) branch their CTA copy
 * on "is there a demo video?", and app/live-demo/page.tsx still uses a <video> element.
 * Keeping this derived means setting DEMO_VIDEO_ID lights up the whole site at once,
 * and those pages keep working untouched while the landing page moves to YouTube.
 */
export const DEMO_VIDEO_URL: string = DEMO_VIDEO_ID
  ? `https://www.youtube.com/watch?v=${DEMO_VIDEO_ID}`
  : "";
