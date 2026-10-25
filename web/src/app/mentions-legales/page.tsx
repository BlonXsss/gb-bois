import Link from "next/link";
import { TopBar, Header } from "@/components/Header";
import {
  LegalAddress,
  LegalList,
  LegalPageView,
  LegalSection,
} from "@/components/LegalPageView";
import { Footer, StickyOrderBar } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { business } from "@/lib/business";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  localBusinessJsonLd,
} from "@/lib/seo";

const path = "/mentions-legales/";

export const metadata = buildPageMetadata({
  title: "Mentions légales | GB Bois",
  description:
    "Mentions légales de G.B BOIS (GB Bois) : informations sur l’éditeur du site, le siège social à Verneuil-l’Étang et le dépôt de livraison à Yèbles.",
  path,
  keywords: [
    "mentions légales GB Bois",
    "G.B BOIS SAS",
    "SIREN 942509688",
    "Verneuil-l'Étang",
  ],
});

export default function MentionsLegalesPage() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Mentions légales", path },
        ])}
      />
      <TopBar />
      <Header />
      <LegalPageView
        title="Mentions légales"
        intro="Informations légales relatives au site gbbois.fr et à la société G.B BOIS."
        active="mentions"
      >
        <LegalSection title="Éditeur du site">
          <p>
            Le site <strong className="text-ink">gbbois.fr</strong> est édité
            par&nbsp;:
          </p>
          <p className="text-ink">
            <strong>{business.legalName}</strong>
            <br />
            Société par actions simplifiée ({business.legalForm})
            <br />
            Capital social&nbsp;: 1&nbsp;500&nbsp;€
          </p>
          <LegalAddress>
            35 Rue Arthur Chaussy
            <br />
            77390 Verneuil-l&apos;Étang
            <br />
            France
          </LegalAddress>
          <LegalList
            items={[
              <>SIREN&nbsp;: {business.siren}</>,
              <>SIRET&nbsp;: {business.siret}</>,
              <>RCS&nbsp;: Melun</>,
              <>TVA intracommunautaire&nbsp;: {business.tva}</>,
              <>Code APE/NAF&nbsp;: 02.20Z — Exploitation forestière</>,
            ]}
          />
          <p>
            Présidente&nbsp;: <strong className="text-ink">Blenda Berisha</strong>
          </p>
          <p className="text-xs text-muted/90">
            La société a été créée en 2025. Nom commercial&nbsp;:{" "}
            {business.brand}.
          </p>
        </LegalSection>

        <LegalSection title="Activité">
          <p>
            {business.legalName} exerce une activité d&apos;exploitation
            forestière et commercialise notamment&nbsp;:
          </p>
          <LegalList
            items={[
              "la vente et la livraison de bois de chauffage sec (chêne, hêtre, charme, frêne) ;",
              "des services d’élagage et d’abattage en Seine-et-Marne.",
            ]}
          />
        </LegalSection>

        <LegalSection title="Contact">
          <LegalList
            items={[
              <>
                Téléphone&nbsp;:{" "}
                <a
                  href={business.phoneHref}
                  className="text-ink underline decoration-amber/40 underline-offset-4"
                >
                  {business.phone}
                </a>
              </>,
              <>
                E-mail&nbsp;:{" "}
                <a
                  href={business.emailHref}
                  className="break-all text-ink underline decoration-amber/40 underline-offset-4"
                >
                  {business.email}
                </a>
              </>,
              <>
                Site internet&nbsp;:{" "}
                <Link
                  href="/"
                  className="text-ink underline decoration-amber/40 underline-offset-4"
                >
                  https://gbbois.fr/
                </Link>
              </>,
            ]}
          />
        </LegalSection>

        <LegalSection title="Siège social">
          <LegalAddress>
            35 Rue Arthur Chaussy
            <br />
            77390 Verneuil-l&apos;Étang
            <br />
            France
          </LegalAddress>
        </LegalSection>

        <LegalSection title="Dépôt / lieu de livraison">
          <p>
            Le dépôt de stockage et le point de départ des livraisons sont
            situés à&nbsp;:
          </p>
          <LegalAddress>
            21 Avenue de la Gare
            <br />
            77390 Yèbles
            <br />
            France
          </LegalAddress>
          <p className="text-xs text-muted/90">
            Cette adresse correspond au dépôt de livraisons. Elle n&apos;est
            pas le siège social de la société.
          </p>
        </LegalSection>

        <LegalSection title="Propriété intellectuelle">
          <p>
            L&apos;ensemble des éléments composant le site gbbois.fr (textes,
            images, photographies, logos, structure, mise en page), sauf
            mention contraire, est protégé par le droit de la propriété
            intellectuelle.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication ou
            adaptation, totale ou partielle, du contenu du site, par quelque
            procédé que ce soit, est interdite sans autorisation écrite
            préalable de {business.legalName}.
          </p>
        </LegalSection>

        <LegalSection title="Responsabilité">
          <p>
            {business.legalName} s&apos;efforce de fournir sur le site des
            informations aussi précises que possible. Toutefois, elle ne peut
            garantir l&apos;exactitude, la complétude ou l&apos;actualité de
            l&apos;ensemble des informations diffusées.
          </p>
          <p>
            L&apos;utilisateur reconnaît utiliser ces informations sous sa
            responsabilité exclusive. {business.legalName} ne saurait être
            tenue responsable des dommages directs ou indirects pouvant
            résulter de l&apos;accès au site, de son utilisation, ou de
            l&apos;impossibilité d&apos;y accéder.
          </p>
          <p>
            Les liens vers des sites tiers éventuellement présents sur
            gbbois.fr n&apos;engagent pas la responsabilité de{" "}
            {business.legalName} quant au contenu de ces sites.
          </p>
        </LegalSection>

        <p className="border-t border-ink/8 pt-6 text-xs text-muted">
          Dernière mise à jour&nbsp;: 31 août 2026.
        </p>
      </LegalPageView>
      <Footer />
      <StickyOrderBar />
    </>
  );
}
