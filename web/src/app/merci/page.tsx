import Link from "next/link";
import type { Metadata } from "next";
import { TopBar, Header } from "@/components/Header";
import { Footer, StickyOrderBar } from "@/components/Sections";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { business } from "@/lib/business";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  localBusinessJsonLd,
  siteUrl,
} from "@/lib/seo";

const path = "/merci/";

export const metadata: Metadata = {
  title: { absolute: "Merci | GB Bois" },
  description:
    "Merci pour votre demande. GB Bois vous recontacte rapidement pour votre devis bois de chauffage.",
  alternates: { canonical: absoluteUrl(path) },
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: absoluteUrl(path),
    siteName: business.brand,
    title: "Merci | GB Bois",
    description:
      "Votre demande a bien été envoyée. Nous vous recontactons rapidement.",
    images: [
      {
        url: absoluteUrl(business.photos.hero),
        width: 1600,
        height: 900,
        alt: `${business.brand} — bois de chauffage sec`,
      },
    ],
  },
};

export default function MerciPage() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Merci", path },
        ])}
      />
      <TopBar />
      <Header />
      <main id="contenu">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1714] via-[#2a241c] to-[#3d3428]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,162,94,0.22),transparent_55%)]" />
          <div className="section-pad site-width relative py-10 sm:py-14 lg:py-16">
            <nav aria-label="Fil d’Ariane" className="text-sm text-white/55">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-white">
                    Accueil
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-amber-light">Merci</li>
              </ol>
            </nav>
            <p className="eyebrow mt-6 !text-amber-light sm:mt-8">
              Demande envoyée
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-[1.85rem] font-medium leading-[1.1] tracking-tightest text-white sm:text-5xl">
              Merci — nous avons bien reçu votre message
            </h1>
            <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-white/70 sm:mt-5 sm:text-lg">
              Un conseiller GB Bois vous recontacte rapidement pour confirmer
              votre devis et organiser la livraison depuis Yèbles.
            </p>
          </div>
        </section>

        <section className="section-pad site-width py-10 sm:py-14">
          <Reveal>
            <div className="mx-auto max-w-3xl space-y-8">
              <p className="text-sm leading-relaxed text-muted sm:text-[0.975rem]">
                En attendant, vous pouvez nous joindre directement — le téléphone
                reste le moyen le plus rapide pour un devis en environ 5 minutes.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href={business.phoneHref}
                  className="group relative block overflow-hidden rounded-[1.75rem] bg-deep p-6 text-white shadow-lift transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,162,94,0.28),transparent_55%)]" />
                  <div className="relative">
                    <p className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-amber-light">
                      Téléphone
                    </p>
                    <p className="mt-2 font-display text-2xl tracking-tightest">
                      {business.phone}
                    </p>
                    <p className="mt-2 text-sm text-white/70">
                      {business.phoneDevisNote}
                    </p>
                  </div>
                </a>

                <a
                  href={business.emailHref}
                  className="soft-card soft-card-interactive flex flex-col justify-center p-6"
                >
                  <p className="text-[0.7rem] uppercase tracking-[0.16em] text-muted">
                    Email · 24 h
                  </p>
                  <p className="mt-2 break-all font-display text-lg tracking-tightest text-ink">
                    {business.email}
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    {business.emailDevisNote}
                  </p>
                </a>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/" className="btn-amber">
                  Retour à l’accueil
                </Link>
                <Link
                  href="/bois-de-chauffage-pas-cher-77/"
                  className="btn-slate"
                >
                  Zones de livraison
                </Link>
                <a
                  href={business.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-slate"
                >
                  WhatsApp
                </a>
              </div>

              <p className="border-t border-ink/8 pt-6 text-xs text-muted">
                {business.hours} · Dépôt {business.depot.address} ·{" "}
                <a href={siteUrl} className="underline decoration-amber/40">
                  {siteUrl.replace(/^https?:\/\//, "")}
                </a>
              </p>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
      <StickyOrderBar />
    </>
  );
}
