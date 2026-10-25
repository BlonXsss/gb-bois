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

const path = "/politique-confidentialite/";

export const metadata = buildPageMetadata({
  title: "Politique de confidentialité | GB Bois",
  description:
    "Politique de confidentialité de GB Bois : traitement des données personnelles collectées via le formulaire de contact et utilisation du site gbbois.fr.",
  path,
  keywords: [
    "politique de confidentialité GB Bois",
    "RGPD bois de chauffage",
    "données personnelles GB Bois",
  ],
});

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Politique de confidentialité", path },
        ])}
      />
      <TopBar />
      <Header />
      <LegalPageView
        title="Politique de confidentialité"
        intro="Information sur la collecte et le traitement des données personnelles sur le site gbbois.fr."
        active="confidentialite"
      >
        <LegalSection title="Responsable du traitement">
          <p className="text-ink">
            <strong>{business.legalName}</strong>
            <br />
            Société par actions simplifiée ({business.legalForm})
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
            ]}
          />
        </LegalSection>

        <LegalSection title="Données personnelles collectées">
          <p>
            Lorsque vous utilisez le formulaire de contact du site, les données
            suivantes peuvent être collectées&nbsp;:
          </p>
          <LegalList
            items={[
              "Nom",
              "Prénom",
              "Commune / code postal",
              "Téléphone",
              "Adresse e-mail",
              "Contenu du message (notamment informations relatives à une demande de devis, de commande ou de livraison, longueur et volume souhaités)",
            ]}
          />
          <p>
            Ces informations sont transmises via le service de formulaire en
            ligne Web3Forms afin d&apos;acheminer votre demande à{" "}
            {business.legalName}.
          </p>
          <p>
            Vous pouvez également nous contacter directement par téléphone, e-mail
            ou WhatsApp&nbsp;; dans ce cas, seules les données que vous nous
            communiquez volontairement sont traitées pour répondre à votre
            demande.
          </p>
          <p>
            Des données techniques de navigation peuvent également être traitées
            dans le cadre du fonctionnement du site et des outils décrits
            ci-dessous (par exemple adresse IP, type de navigateur, pages
            consultées), selon la configuration de votre navigateur et des
            services tiers concernés.
          </p>
        </LegalSection>

        <LegalSection title="Finalités du traitement">
          <p>Les données sont traitées pour&nbsp;:</p>
          <LegalList
            items={[
              "répondre aux demandes de contact et de devis ;",
              "organiser les commandes et les livraisons ;",
              "recontacter le client concernant sa demande ;",
              "assurer le fonctionnement et la sécurité du site ;",
              "respecter les obligations légales applicables, le cas échéant.",
            ]}
          />
        </LegalSection>

        <LegalSection title="Base légale">
          <LegalList
            items={[
              <>
                <strong className="text-ink">
                  Mesures précontractuelles / exécution d&apos;un contrat
                </strong>
                &nbsp;: traitement des demandes de devis, commandes et
                livraisons.
              </>,
              <>
                <strong className="text-ink">Intérêt légitime</strong>
                &nbsp;: gestion du site, prévention des abus (contrôle
                anti-robot du formulaire), suivi de la relation commerciale
                liée à une demande.
              </>,
              <>
                <strong className="text-ink">Obligation légale</strong>
                &nbsp;: lorsque la conservation de certaines informations est
                requise par la loi.
              </>,
            ]}
          />
        </LegalSection>

        <LegalSection title="Durée de conservation">
          <p>
            Les données sont conservées pendant la durée nécessaire aux
            finalités pour lesquelles elles ont été collectées, puis archivées
            ou supprimées conformément aux obligations légales et
            réglementaires applicables. En l&apos;absence de durée spécifique
            publiée sur le site, {business.legalName} applique une conservation
            limitée au besoin opérationnel et légal.
          </p>
        </LegalSection>

        <LegalSection title="Cookies et traceurs">
          <p>Le site gbbois.fr peut utiliser&nbsp;:</p>
          <LegalList
            items={[
              <>
                <strong className="text-ink">
                  Cookies ou technologies nécessaires
                </strong>{" "}
                au fonctionnement technique du site (session, préférences de
                navigation du navigateur).
              </>,
              <>
                <strong className="text-ink">Cartes Google Maps</strong>
                &nbsp;: intégration de cartes pour localiser le siège / le
                dépôt&nbsp;; ce service peut déposer des cookies ou collecter
                des données techniques selon les pratiques de Google.
              </>,
              <>
                <strong className="text-ink">Polices web</strong>
                &nbsp;: polices chargées via Google Fonts (hébergées ou
                fournies par Google), pouvant entraîner des connexions
                techniques vers ce prestataire.
              </>,
            ]}
          />
          <p>
            Vous pouvez configurer votre navigateur pour refuser ou supprimer
            les cookies. Le refus de certains cookies peut limiter certaines
            fonctionnalités (par exemple l&apos;affichage de la carte).
          </p>
        </LegalSection>

        <LegalSection title="Destinataires">
          <p>
            Les données peuvent être communiquées, dans la limite nécessaire
            aux finalités ci-dessus, à&nbsp;:
          </p>
          <LegalList
            items={[
              "le personnel habilité de G.B BOIS ;",
              "le prestataire de formulaire Web3Forms, pour l’acheminement des messages ;",
              "Google, pour les services Maps et polices éventuellement présents sur le site ;",
              "les autorités compétentes, uniquement si la loi l’exige.",
            ]}
          />
        </LegalSection>

        <LegalSection title="Vos droits">
          <p>
            Conformément au Règlement général sur la protection des données
            (RGPD) et à la loi Informatique et Libertés, vous disposez des
            droits suivants, dans les conditions prévues par la
            réglementation&nbsp;:
          </p>
          <LegalList
            items={[
              "droit d’accès ;",
              "droit de rectification ;",
              "droit à l’effacement ;",
              "droit à la limitation du traitement ;",
              "droit d’opposition ;",
              "droit à la portabilité, lorsque applicable ;",
              "droit de retirer votre consentement lorsque le traitement repose sur celui-ci.",
            ]}
          />
          <p>
            Pour exercer vos droits, contactez {business.legalName} par
            téléphone au{" "}
            <a
              href={business.phoneHref}
              className="text-ink underline decoration-amber/40 underline-offset-4"
            >
              {business.phone}
            </a>{" "}
            ou par e-mail à{" "}
            <a
              href={business.emailHref}
              className="break-all text-ink underline decoration-amber/40 underline-offset-4"
            >
              {business.email}
            </a>
            , en précisant votre demande et en joignant, le cas échéant, un
            justificatif d&apos;identité.
          </p>
        </LegalSection>

        <LegalSection title="Réclamation auprès de la CNIL">
          <p>
            Si vous estimez, après nous avoir contactés, que vos droits ne sont
            pas respectés, vous pouvez introduire une réclamation auprès de la
            Commission nationale de l&apos;informatique et des libertés
            (CNIL)&nbsp;:{" "}
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline decoration-amber/40 underline-offset-4"
            >
              www.cnil.fr
            </a>
            .
          </p>
        </LegalSection>

        <LegalSection title="Sécurité">
          <p>
            {business.legalName} met en œuvre des mesures techniques et
            organisationnelles appropriées afin de protéger les données
            personnelles contre l&apos;accès non autorisé, la perte,
            l&apos;altération ou la divulgation.
          </p>
        </LegalSection>

        <LegalSection title="Modifications">
          <p>
            La présente politique de confidentialité peut être mise à jour. La
            version applicable est celle publiée sur cette page.
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
