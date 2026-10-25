import { business } from "@/lib/business";

export type LegalBlock =
  | { type: "p"; html: string }
  | { type: "ul"; items: string[] }
  | { type: "address"; lines: string[] }
  | { type: "note"; text: string };

export type LegalSection = {
  heading: string;
  blocks: LegalBlock[];
};

export type LegalPage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  updated: string;
  sections: LegalSection[];
};

export const legalPages: LegalPage[] = [
  {
    slug: "mentions-legales",
    title: "Mentions légales | GB Bois",
    description:
      "Mentions légales de G.B BOIS (GB Bois) : informations sur l'éditeur du site, le siège social à Verneuil-l'Étang et le dépôt de livraison à Yèbles.",
    h1: "Mentions légales",
    lead: "Informations légales relatives au site gbbois.fr et à la société G.B BOIS.",
    updated: "26 octobre 2026",
    sections: [
      {
        heading: "Éditeur du site",
        blocks: [
          {
            type: "p",
            html: `Le site <strong>gbbois.fr</strong> est édité par :`,
          },
          {
            type: "p",
            html: `<strong>${business.legalName}</strong><br />Société par actions simplifiée (${business.legalForm})<br />Capital social : 1&nbsp;500&nbsp;€`,
          },
          {
            type: "address",
            lines: ["35 Rue Arthur Chaussy", "77390 Verneuil-l'Étang", "France"],
          },
          {
            type: "ul",
            items: [
              `SIREN : ${business.siren}`,
              `SIRET : ${business.siret}`,
              `RCS : Melun`,
              `TVA intracommunautaire : ${business.tva}`,
              `Code APE/NAF : 02.20Z — Exploitation forestière`,
            ],
          },
          {
            type: "p",
            html: `Présidente : <strong>Blenda Berisha</strong>`,
          },
          {
            type: "note",
            text: "La société a été créée en 2025. Nom commercial : GB Bois.",
          },
        ],
      },
      {
        heading: "Activité",
        blocks: [
          {
            type: "p",
            html: "G.B BOIS exerce une activité d'exploitation forestière et commercialise notamment :",
          },
          {
            type: "ul",
            items: [
              "la vente et la livraison de bois de chauffage sec (chêne, hêtre, charme, frêne) ;",
              "des services d'élagage et d'abattage en Seine-et-Marne.",
            ],
          },
        ],
      },
      {
        heading: "Contact",
        blocks: [
          {
            type: "ul",
            items: [
              `Téléphone : <a href="${business.phoneHref}">${business.phone}</a>`,
              `E-mail : <a href="${business.emailHref}">${business.email}</a>`,
              `Site internet : <a href="/">https://gbbois.fr/</a>`,
            ],
          },
        ],
      },
      {
        heading: "Siège social",
        blocks: [
          {
            type: "address",
            lines: ["35 Rue Arthur Chaussy", "77390 Verneuil-l'Étang", "France"],
          },
        ],
      },
      {
        heading: "Dépôt / lieu de livraison",
        blocks: [
          {
            type: "p",
            html: "Le dépôt de stockage et le point de départ des livraisons sont situés à :",
          },
          {
            type: "address",
            lines: ["21 Avenue de la Gare", "77390 Yèbles", "France"],
          },
          {
            type: "note",
            text: "Cette adresse correspond au dépôt de livraisons. Elle n'est pas le siège social de la société.",
          },
        ],
      },
      {
        heading: "Propriété intellectuelle",
        blocks: [
          {
            type: "p",
            html: "L'ensemble des éléments composant le site gbbois.fr (textes, images, photographies, logos, structure, mise en page), sauf mention contraire, est protégé par le droit de la propriété intellectuelle.",
          },
          {
            type: "p",
            html: "Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle, du contenu du site, par quelque procédé que ce soit, est interdite sans autorisation écrite préalable de G.B BOIS.",
          },
        ],
      },
      {
        heading: "Responsabilité",
        blocks: [
          {
            type: "p",
            html: "G.B BOIS s'efforce de fournir sur le site des informations aussi précises que possible. Toutefois, elle ne peut garantir l'exactitude, la complétude ou l'actualité de l'ensemble des informations diffusées.",
          },
          {
            type: "p",
            html: "L'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive. G.B BOIS ne saurait être tenue responsable des dommages directs ou indirects pouvant résulter de l'accès au site, de son utilisation, ou de l'impossibilité d'y accéder.",
          },
          {
            type: "p",
            html: "Les liens vers des sites tiers éventuellement présents sur gbbois.fr n'engagent pas la responsabilité de G.B BOIS quant au contenu de ces sites.",
          },
        ],
      },
    ],
  },
  {
    slug: "politique-confidentialite",
    title: "Politique de confidentialité | GB Bois",
    description:
      "Politique de confidentialité de GB Bois : traitement des données personnelles collectées via le formulaire de contact et utilisation du site gbbois.fr.",
    h1: "Politique de confidentialité",
    lead: "Information sur la collecte et le traitement des données personnelles sur le site gbbois.fr.",
    updated: "26 octobre 2026",
    sections: [
      {
        heading: "Responsable du traitement",
        blocks: [
          {
            type: "p",
            html: `<strong>${business.legalName}</strong><br />Société par actions simplifiée (${business.legalForm})`,
          },
          {
            type: "address",
            lines: ["35 Rue Arthur Chaussy", "77390 Verneuil-l'Étang", "France"],
          },
          {
            type: "ul",
            items: [
              `SIREN : ${business.siren}`,
              `SIRET : ${business.siret}`,
              `Téléphone : <a href="${business.phoneHref}">${business.phone}</a>`,
              `E-mail : <a href="${business.emailHref}">${business.email}</a>`,
            ],
          },
        ],
      },
      {
        heading: "Données personnelles collectées",
        blocks: [
          {
            type: "p",
            html: "Lorsque vous utilisez le formulaire de contact du site, ou lorsque vous nous contactez par téléphone ou e-mail, les données suivantes peuvent être collectées :",
          },
          {
            type: "ul",
            items: [
              "Nom",
              "Prénom",
              "Adresse / commune / code postal",
              "Téléphone",
              "Adresse e-mail",
              "Contenu du message (notamment informations relatives à une demande de devis, de commande ou de livraison)",
            ],
          },
          {
            type: "p",
            html: "Des données techniques de navigation peuvent également être traitées dans le cadre du fonctionnement du site (par exemple type de navigateur, pages consultées), selon la configuration de votre navigateur et des services tiers éventuellement intégrés.",
          },
        ],
      },
      {
        heading: "Finalités du traitement",
        blocks: [
          {
            type: "p",
            html: "Les données sont traitées pour :",
          },
          {
            type: "ul",
            items: [
              "répondre aux demandes de contact et de devis ;",
              "organiser les commandes et les livraisons ;",
              "recontacter le client concernant sa demande ;",
              "assurer le fonctionnement et la sécurité du site ;",
              "respecter les obligations légales applicables, le cas échéant.",
            ],
          },
        ],
      },
      {
        heading: "Base légale",
        blocks: [
          {
            type: "ul",
            items: [
              "<strong>Mesures précontractuelles / exécution d'un contrat</strong> : traitement des demandes de devis, commandes et livraisons.",
              "<strong>Intérêt légitime</strong> : gestion du site, prévention des abus, suivi de la relation commerciale liée à une demande.",
              "<strong>Obligation légale</strong> : lorsque la conservation de certaines informations est requise par la loi.",
            ],
          },
        ],
      },
      {
        heading: "Durée de conservation",
        blocks: [
          {
            type: "p",
            html: "Les données sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, puis archivées ou supprimées conformément aux obligations légales et réglementaires applicables. En l'absence de durée spécifique publiée sur le site, G.B BOIS applique une conservation limitée au besoin opérationnel et légal.",
          },
        ],
      },
      {
        heading: "Cookies et traceurs",
        blocks: [
          {
            type: "p",
            html: "Le site gbbois.fr peut utiliser :",
          },
          {
            type: "ul",
            items: [
              "<strong>Cookies ou technologies nécessaires</strong> au fonctionnement technique du site (session, préférences de navigation du navigateur).",
              "<strong>Cartes Google Maps</strong> : intégration d'une carte pour localiser le siège / le dépôt ; ce service peut déposer des cookies ou collecter des données techniques selon les pratiques de Google.",
              "<strong>Polices web</strong> : polices chargées via l'infrastructure de polices utilisée par le site, pouvant entraîner des connexions techniques vers le prestataire correspondant.",
            ],
          },
          {
            type: "p",
            html: "Vous pouvez configurer votre navigateur pour refuser ou supprimer les cookies. Le refus de certains cookies peut limiter certaines fonctionnalités (par exemple l'affichage de la carte).",
          },
        ],
      },
      {
        heading: "Destinataires",
        blocks: [
          {
            type: "p",
            html: "Les données peuvent être communiquées, dans la limite nécessaire aux finalités ci-dessus, à :",
          },
          {
            type: "ul",
            items: [
              "le personnel habilité de G.B BOIS ;",
              "Google, pour le service Maps éventuellement présent sur le site ;",
              "les autorités compétentes, uniquement si la loi l'exige.",
            ],
          },
        ],
      },
      {
        heading: "Vos droits",
        blocks: [
          {
            type: "p",
            html: "Conformément au Règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants, dans les conditions prévues par la réglementation :",
          },
          {
            type: "ul",
            items: [
              "droit d'accès ;",
              "droit de rectification ;",
              "droit à l'effacement ;",
              "droit à la limitation du traitement ;",
              "droit d'opposition ;",
              "droit à la portabilité, lorsque applicable ;",
              "droit de retirer votre consentement lorsque le traitement repose sur celui-ci.",
            ],
          },
          {
            type: "p",
            html: `Pour exercer vos droits, contactez G.B BOIS par téléphone au <a href="${business.phoneHref}">${business.phone}</a> ou par e-mail à <a href="${business.emailHref}">${business.email}</a>, en précisant votre demande et en joignant, le cas échéant, un justificatif d'identité.`,
          },
        ],
      },
      {
        heading: "Réclamation auprès de la CNIL",
        blocks: [
          {
            type: "p",
            html: `Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la Commission nationale de l'informatique et des libertés (CNIL) : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>.`,
          },
        ],
      },
      {
        heading: "Sécurité",
        blocks: [
          {
            type: "p",
            html: "G.B BOIS met en œuvre des mesures techniques et organisationnelles appropriées afin de protéger les données personnelles contre l'accès non autorisé, la perte, l'altération ou la divulgation.",
          },
        ],
      },
      {
        heading: "Modifications",
        blocks: [
          {
            type: "p",
            html: "La présente politique de confidentialité peut être mise à jour. La version applicable est celle publiée sur cette page.",
          },
        ],
      },
    ],
  },
];

export function getLegalPage(slug: string) {
  return legalPages.find((p) => p.slug === slug);
}
