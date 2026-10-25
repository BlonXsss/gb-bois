import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { business } from "@/lib/business";
import { OrderProvider } from "@/lib/order-context";
import { ScrollProgress } from "@/components/ScrollProgress";
import { absoluteUrl, homeSeo } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.website),
  title: {
    default: homeSeo.title,
    template: `%s | ${business.brand}`,
  },
  description: homeSeo.description,
  applicationName: business.brand,
  authors: [{ name: business.brand }],
  creator: business.brand,
  publisher: business.legalName,
  keywords: [
    "bois de chauffage 77",
    "bois de chauffage Seine-et-Marne",
    "bois de chauffage Île-de-France",
    "livraison bois Yèbles",
    "GB Bois",
    "stère bois pas cher",
  ],
  alternates: {
    canonical: homeSeo.canonical,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: homeSeo.canonical,
    siteName: business.brand,
    title: homeSeo.title,
    description: homeSeo.description,
    images: [
      {
        url: absoluteUrl(business.photos.hero),
        width: 1600,
        height: 900,
        alt: "GB Bois — bois de chauffage sec",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeSeo.title,
    description: homeSeo.description,
    images: [absoluteUrl(business.photos.hero)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body
        className={`${inter.variable} ${grotesk.variable} font-sans min-h-full pb-[calc(5.75rem+env(safe-area-inset-bottom))] sm:pb-0`}
      >
        <OrderProvider>
          <ScrollProgress />
          <a
            href="#contenu"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[90] focus:rounded-full focus:bg-white focus:px-4 focus:py-2"
          >
            Aller au contenu
          </a>
          {children}
        </OrderProvider>
      </body>
    </html>
  );
}
