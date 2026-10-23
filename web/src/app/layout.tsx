import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { business } from "@/lib/business";
import { OrderProvider } from "@/lib/order-context";
import { ScrollProgress } from "@/components/ScrollProgress";

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
  title: `${business.brand} — Bois de chauffage Île-de-France`,
  description: business.heroSubtitle,
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body
        className={`${inter.variable} ${grotesk.variable} font-sans min-h-full pb-24 sm:pb-0`}
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
