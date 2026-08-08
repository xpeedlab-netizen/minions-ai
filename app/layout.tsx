import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileStickyBar from "@/components/layout/MobileStickyBar";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink font-body pb-16 md:pb-0">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
