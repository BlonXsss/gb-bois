export type LengthOption = {
  id: string;
  label: string;
  cm: number;
  /** Tarif standard (€ / stère) */
  pricePerStere: number;
  /** Tarif si livraison < 30 km du dépôt Yèbles (−3 €, sauf 1 m) */
  priceNearPerStere: number;
  useCase: string;
  m3PerStere: number;
  image: string;
  popular?: boolean;
};

export type Zone = {
  code: string;
  name: string;
  towns: string[];
};

export type Species = {
  name: string;
  latin: string;
  blurb: string;
  image: string;
};

export const business = {
  brand: "GB Bois",
  brandShort: "GB Bois 77",
  legalName: "G.B BOIS",
  legalForm: "SAS",
  siren: "942 509 688",
  siret: "942 509 688 00019",
  tva: "FR28942509688",
  rcs: "RCS Melun",
  tagline: "Bois de chauffage sec · Seine-et-Marne & Île-de-France",
  phone: "06 71 73 82 76",
  phoneHref: "tel:+33671738276",
  phoneDisplayIntl: "+33 6 71 73 82 76",
  whatsappHref: "https://wa.me/33671738276",
  email: "gbbois77commandes@gmail.com",
  emailHref: "mailto:gbbois77commandes@gmail.com",
  website: "https://gbbois.fr",
  logo: "/img/gb-bois-logo.png",
  rating: { value: 4.8, count: 23, label: "Avis clients" },
  siege: {
    label: "Siège administratif",
    address: "35 Rue Arthur Chaussy, 77390 Verneuil-l'Étang",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=35+Rue+Arthur+Chaussy+77390+Verneuil-l%27%C3%89tang",
    mapsEmbed:
      "https://maps.google.com/maps?q=35%20Rue%20Arthur%20Chaussy%2077390%20Verneuil-l%27%C3%89tang&t=&z=14&ie=UTF8&iwloc=&output=embed",
  },
  depot: {
    label: "Dépôt & livraisons",
    address: "21 Avenue de la Gare, 77390 Yèbles",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=21+Avenue+de+la+Gare+77390+Y%C3%A8bles",
    mapsEmbed:
      "https://maps.google.com/maps?q=21%20Avenue%20de%20la%20Gare%2077390%20Y%C3%A8bles&t=&z=14&ie=UTF8&iwloc=&output=embed",
  },
  address: "35 Rue Arthur Chaussy, 77390 Verneuil-l'Étang",
  hours: "Lundi – samedi, 8 h – 18 h",
  hoursShort: "Lun–sam · 8 h – 18 h",
  region: "Seine-et-Marne & Île-de-France",
  deliveryLine: "77 · 78 · 91 · 92 · 93 · 94 · 95",
  nearDiscountKm: 30,
  nearDiscountEuros: 3,
  freeDeliveryFromSteres: 5,
  minOrderSteres: 5,
  minOrderNote:
    "Commande en ligne à partir de 5 stères. En dessous, appelez-nous pour les frais de livraison.",
  maxOrderSteres: 20,
  phoneDevisNote: "Devis au téléphone en environ 5 minutes",
  emailDevisNote: "Devis par email — réponse sous 24 h",
  callCtaLabel: "Appelez-nous pour un devis rapide",
  heroBadge: "Stocké sous abri à Yèbles · devis gratuit",
  heroHeadline: "Bois de chauffage sec livré en Seine-et-Marne & Île-de-France",
  heroSubtitle:
    "Appelez pour un devis en ~5 minutes. Par email, réponse sous 24 h. Joignables lundi à samedi, 8 h – 18 h. Livraison depuis Yèbles — tarif −3 €/stère à moins de 30 km du dépôt.",
  unitLabel: "stère",
  unitLabelPlural: "stères",
  priceUnitSuffix: "/ stère",
  photos: {
    hero: "/img/hero-premium.jpg",
    about: "/img/about-wood.jpg",
    midCta: "/img/cta-forest.jpg",
    kindling: "/img/sac.png",
    gallery: [
      { src: "/img/galerie-1.jpeg", caption: "Bois stocké sous abri" },
      { src: "/img/galerie-2.jpeg", caption: "Livraison Seine-et-Marne" },
      { src: "/img/galerie-3.jpeg", caption: "Stères de bois sec" },
      { src: "/img/galerie-4.jpeg", caption: "Chêne & hêtre" },
      { src: "/img/galerie-5.jpeg", caption: "Dépôt de Yèbles" },
      { src: "/img/galerie-6.jpeg", caption: "GB Bois — Île-de-France" },
      { src: "/img/galerie-7.jpg", caption: "Approvisionnement forestier" },
      { src: "/img/galerie-8.jpg", caption: "Forêt & essences nobles" },
      { src: "/img/galerie-9.jpg", caption: "Bois prêt à brûler" },
      { src: "/img/galerie-10.jpg", caption: "Saison de chauffe" },
      { src: "/img/galerie-11.jpg", caption: "Livraison Île-de-France" },
    ],
  },
  lengths: [
    {
      id: "25",
      label: "25 cm",
      cm: 25,
      pricePerStere: 85,
      priceNearPerStere: 82,
      useCase: "Poêle et insert — allumage rapide, format compact.",
      m3PerStere: 0.6,
      image: "/img/length-25.jpg",
    },
    {
      id: "33",
      label: "33 cm",
      cm: 33,
      pricePerStere: 80,
      priceNearPerStere: 77,
      useCase: "Le format le plus polyvalent pour la plupart des poêles et inserts.",
      m3PerStere: 0.7,
      image: "/img/length-33.jpg",
      popular: true,
    },
    {
      id: "40",
      label: "40 cm",
      cm: 40,
      pricePerStere: 84,
      priceNearPerStere: 81,
      useCase: "Poêles à grand foyer et inserts plus larges.",
      m3PerStere: 0.75,
      image: "/img/length-40.jpg",
    },
    {
      id: "50",
      label: "50 cm",
      cm: 50,
      pricePerStere: 75,
      priceNearPerStere: 72,
      useCase: "Cheminées ouvertes et grands foyers.",
      m3PerStere: 0.8,
      image: "/img/length-50.jpg",
    },
    {
      id: "100",
      label: "1 m",
      cm: 100,
      pricePerStere: 78,
      priceNearPerStere: 78,
      useCase: "Grande cheminée ou chaudière — tarif proximité inchangé.",
      m3PerStere: 1.0,
      image: "/img/length-100.jpg",
    },
  ] as LengthOption[],
  extras: [
    {
      id: "kindling",
      title: "Filets de bois d’allumage",
      price: 10,
      unit: "l’unité",
      blurb:
        "Prêts à l’emploi pour démarrer le feu. Offert avec chaque commande de bois (selon disponibilité — précisez-le dans votre message).",
      image: "/img/sac-fit.png",
    },
  ],
  services: [
    {
      title: "Élagage",
      text: "Taille et entretien d’arbres pour particuliers et professionnels en Seine-et-Marne. Devis selon l’ampleur des travaux.",
    },
    {
      title: "Abattage",
      text: "Abattage sécurisé et débardage. Nous intervenons autour de Verneuil-l'Étang et dans le 77.",
    },
    {
      title: "Bois de chauffage",
      text: "Vente et livraison de feuillus durs secs, stockés sous abri au dépôt de Yèbles.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Choisissez longueur & volume",
      text: "25, 33, 40, 50 cm ou 1 m. Minimum 5 stères en ligne.",
    },
    {
      step: "02",
      title: "Indiquez votre commune",
      text: "À moins de 30 km de Yèbles : −3 €/stère (sauf 1 m).",
    },
    {
      step: "03",
      title: "Confirmez par téléphone ou devis",
      text: "06 71 73 82 76 — réponse rapide, sans engagement.",
    },
    {
      step: "04",
      title: "Livraison à votre adresse",
      text: "Depuis le dépôt de Yèbles vers le 77 et toute l’Île-de-France.",
    },
  ],
  reassurances: [
    {
      title: "Bois sec sous abri",
      text: "Stocké au dépôt de Yèbles pour une combustion nette et un bon rendement.",
    },
    {
      title: "−3 € près de Yèbles",
      text: "Remise de proximité si votre adresse est à moins de 30 km du dépôt (sauf 1 m).",
    },
    {
      title: "7 départements IDF",
      text: "Seine-et-Marne (77) et 78, 91, 92, 93, 94, 95.",
    },
    {
      title: "Devis au téléphone",
      text: "Appelez le 06 71 73 82 76 — devis en environ 5 minutes. Lun–sam 8 h – 18 h.",
    },
  ],
  species: [
    {
      name: "Chêne",
      latin: "Quercus",
      blurb: "Dense, braises tenaces, combustion lente. Le bois de la nuit.",
      image: "/img/chene.png",
    },
    {
      name: "Charme",
      latin: "Carpinus",
      blurb: "Pouvoir calorifique élevé, peu d’étincelles, flamme franche.",
      image: "/img/charme.png",
    },
    {
      name: "Frêne",
      latin: "Fraxinus",
      blurb: "S’allume facilement, belle flamme dès les premières minutes.",
      image: "/img/frene.png",
    },
    {
      name: "Hêtre",
      latin: "Fagus",
      blurb: "Chaleur régulière, odeur discrète, idéal en foyer fermé.",
      image: "/img/Hetre.png",
    },
  ] as Species[],
  zones: [
    {
      code: "77",
      name: "Seine-et-Marne",
      towns: [
        "Verneuil-l'Étang",
        "Yèbles",
        "Melun",
        "Meaux",
        "Fontainebleau",
        "Provins",
        "Chelles",
        "Savigny-le-Temple",
      ],
    },
    {
      code: "78",
      name: "Yvelines",
      towns: ["Versailles", "Rambouillet", "Saint-Germain-en-Laye", "Mantes-la-Jolie", "Poissy"],
    },
    {
      code: "91",
      name: "Essonne",
      towns: ["Évry", "Corbeil-Essonnes", "Massy", "Palaiseau", "Étampes"],
    },
    {
      code: "92",
      name: "Hauts-de-Seine",
      towns: ["Nanterre", "Boulogne-Billancourt", "Rueil-Malmaison", "Antony", "Issy-les-Moulineaux"],
    },
    {
      code: "93",
      name: "Seine-Saint-Denis",
      towns: ["Saint-Denis", "Montreuil", "Bobigny", "Aulnay-sous-Bois", "Bondy"],
    },
    {
      code: "94",
      name: "Val-de-Marne",
      towns: ["Créteil", "Vitry-sur-Seine", "Champigny-sur-Marne", "Saint-Maur", "Ivry-sur-Seine"],
    },
    {
      code: "95",
      name: "Val-d’Oise",
      towns: ["Cergy", "Argenteuil", "Sarcelles", "Pontoise", "Gonesse"],
    },
  ] as Zone[],
  about: {
    title: "Fournisseur local depuis Verneuil-l'Étang",
    stats: [
      { value: "7", label: "départements" },
      { value: "5", label: "longueurs" },
      { value: "4,8", label: "23 avis" },
      { value: "−3€", label: "si < 30 km" },
    ],
    paragraphs: [
      "GB Bois (G.B BOIS, SAS) est une entreprise basée à Verneuil-l'Étang (77390), spécialisée dans la vente et la livraison de bois de chauffage sec en Seine-et-Marne et Île-de-France. Nous sélectionnons des essences nobles — chêne, hêtre, charme et frêne — et les stockons sous abri au dépôt de Yèbles.",
      "Activité : exploitation forestière, abattage, débardage, achat et vente de grumes et de bois de chauffage, travaux paysagers. Livraison depuis Yèbles vers le 77 et les départements 78, 91, 92, 93, 94 et 95.",
    ],
  },
  faq: [
    {
      q: "Qui est GB Bois ?",
      a: "GB Bois (raison sociale G.B BOIS, SAS) vend et livre du bois de chauffage sec en Seine-et-Marne et Île-de-France. Siège : 35 Rue Arthur Chaussy, 77390 Verneuil-l'Étang. Dépôt : 21 Avenue de la Gare, 77390 Yèbles. Téléphone : 06 71 73 82 76.",
    },
    {
      q: "Quel est le prix du bois de chauffage ?",
      a: "De 75 € à 85 € le stère selon la longueur : 25 cm (85 €), 33 cm (80 €), 40 cm (84 €), 50 cm (75 €) et 1 m (78 €). À moins de 30 km de Yèbles : −3 €/stère (sauf 1 m). Filets d’allumage : 10 € l’unité.",
    },
    {
      q: "Livrez-vous dans toute la Seine-et-Marne ?",
      a: "Oui, toute la Seine-et-Marne (77) ainsi que 91, 94, 92, 93, 78 et 95. Commande en ligne à partir de 5 stères ; en dessous, appelez pour les frais de livraison.",
    },
    {
      q: "Votre bois est-il bien sec ?",
      a: "Oui. Il est soigneusement stocké sous abri au dépôt de Yèbles pour une combustion optimale et un bon rendement calorifique. Essences : chêne, hêtre, charme, frêne.",
    },
    {
      q: "Proposez-vous l’élagage et l’abattage ?",
      a: "Oui, en Seine-et-Marne (77) pour particuliers et professionnels. Tarifs selon l’ampleur des travaux — devis au 06 71 73 82 76.",
    },
    {
      q: "Quelle longueur choisir ?",
      a: "25 ou 33 cm pour poêle et insert. 40 cm pour grand foyer. 50 cm pour cheminée ouverte. 1 m pour grande cheminée ou chaudière.",
    },
    {
      q: "Comment obtenir un devis ?",
      a: "Le plus rapide : appelez le 06 71 73 82 76 — devis en environ 5 minutes. Par email (gbbois77commandes@gmail.com), réponse sous 24 h. Nous sommes joignables du lundi au samedi, 8 h – 18 h.",
    },
  ],
  midCta: {
    title: "Commune, longueur, volume. On s’occupe du reste.",
    text: "Appelez le 06 71 73 82 76 pour un devis en ~5 minutes. Email : réponse sous 24 h. Ouverts lundi à samedi, 8 h – 18 h.",
  },
  footerNote: "G.B BOIS · SAS · SIREN 942 509 688 · RCS Melun",
} as const;

export type Business = typeof business;

export function priceFor(
  length: LengthOption,
  nearDepot: boolean
): number {
  return nearDepot ? length.priceNearPerStere : length.pricePerStere;
}
