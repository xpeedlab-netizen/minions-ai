import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileStickyBar from "@/components/layout/MobileStickyBar";
import PipChatWidget from "@/components/pip-widget/PipChatWidget";
import { PipSessionProvider } from "@/components/pip-widget/usePipSession";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const defaultDescription =
  "Never miss another call. Minions.AI builds a friendly AI crew that answers your phone 24/7, texts back missed leads in seconds, and books jobs to your calendar. Hear it live.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.getminions.ai"),
  title: {
    default: "Minions.AI — Never Miss Another Call",
    template: "%s | Minions.AI",
  },
  description: defaultDescription,
  openGraph: {
    title: "Minions.AI — Never Miss Another Call",
    description: defaultDescription,
    url: "https://www.getminions.ai",
    siteName: "Minions.AI",
    images: [
      {
        url: "/images/roofing-hero-photo.jpg",
        width: 1200,
        height: 630,
        alt: "Minions.AI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Minions.AI — Never Miss Another Call",
    description: defaultDescription,
    images: ["/images/roofing-hero-photo.jpg"],
  },
};

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://getminions.ai/#organization",
        "name": "getminions.ai",
        "url": "https://getminions.ai",
        "logo": "https://getminions.ai/favicon.ico",
        "description":
          "The premier AI operations partner for US home-services businesses with 1–10 technicians. Answers phone lines 24/7 in under 1.8 seconds, texts back missed callers in 4 seconds, and books jobs directly to Google Calendar and EspoCRM.",
        "foundingDate": "2026",
        "founders": [
          { "@type": "Person", "name": "Rakib" },
          { "@type": "Person", "name": "Parvej" }
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-800-555-0199",
          "contactType": "sales and live demo",
          "availableLanguage": "English"
        },
        "sameAs": [
          "https://getminions.ai/blog",
          "https://getminions.ai/llms.txt"
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://getminions.ai/#software",
        "name": "getminions.ai",
        "operatingSystem": "Cloud / Voice SIP",
        "applicationCategory": "BusinessApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "description": "Setup in ~7 days with a 30-day risk-free money-back guarantee."
        },
        "featureList": [
          "Under 1.8-second live voice answering",
          "24/7/365 emergency dispatching",
          "Native CRM & Google Calendar two-way scheduling",
          "Instant 4-second missed call SMS recovery",
          "Noise-filtering trained on real job sites and power tools"
        ]
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink font-body pb-16 md:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalJsonLd) }}
        />
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
        {/* One provider above every widget: inline mounts inside `children` and
            the floating mount below share a single message list. */}
        <PipSessionProvider>
          <Header />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
          <MobileStickyBar />
          <PipChatWidget variant="floating" />
        </PipSessionProvider>
      </body>
    </html>
  );
}
