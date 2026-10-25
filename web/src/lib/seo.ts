import type { Metadata } from "next";
import { business } from "@/lib/business";
import { seoZonePages, type SeoZonePage } from "@/lib/seo-zones";

export const siteUrl = business.website.replace(/\/$/, "");

export const homeSeo = {
  title: "GB Bois | Bois de Chauffage 77 Pas Cher – Livraison Seine-et-Marne & IDF",
  description:
    "GB Bois : bois de chauffage sec en Seine-et-Marne (77) et Île-de-France. 75€ à 85€/stère — 25, 33, 40, 50 cm et 1 m. Dépôt Yèbles. Chêne, hêtre, charme, frêne. ☎ 06 71 73 82 76.",
  canonical: `${siteUrl}/`,
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const normalized = path.endsWith("/") || path === "/" ? path : `${path}/`;
  const url = absoluteUrl(normalized === "" ? "/" : normalized);
  return {
    title: { absolute: title },
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      url,
      siteName: business.brand,
      title,
      description,
      images: [
        {
          url: absoluteUrl(business.photos.hero),
          width: 1600,
          height: 900,
          alt: `${business.brand} — bois de chauffage sec`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(business.photos.hero)],
    },
    robots: { index: true, follow: true },
  };
}

export function zonePath(zone: SeoZonePage) {
  return `/${zone.slug}/`;
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Store"],
    "@id": `${siteUrl}/#business`,
    name: business.brand,
    legalName: business.legalName,
    url: siteUrl,
    telephone: business.phoneDisplayIntl,
    email: business.email,
    image: absoluteUrl(business.logo),
    logo: absoluteUrl(business.logo),
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: "35 Rue Arthur Chaussy",
      addressLocality: "Verneuil-l'Étang",
      postalCode: "77390",
      addressRegion: "Seine-et-Marne",
      addressCountry: "FR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    areaServed: seoZonePages
      .filter((z) => !z.isHub)
      .map((z) => ({
        "@type": "AdministrativeArea",
        name: `${z.name} (${z.code})`,
      })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.rating.value,
      reviewCount: business.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: business.brand,
    description: homeSeo.description,
    inLanguage: "fr-FR",
    publisher: { "@id": `${siteUrl}/#business` },
  };
}

export function faqJsonLd(faqs: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export const sitemapPaths = [
  "/",
  ...seoZonePages.map((z) => zonePath(z)),
  "/mentions-legales/",
  "/politique-confidentialite/",
];
