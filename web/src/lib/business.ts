export type LengthOption = {
  id: string;
  label: string;
  cm: number;
  pricePerStere: number;
  useCase: string;
  /** m³ vrac approx per stère when short-cut and loose */
  m3PerStere: number;
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
  brand: "GB Bois 77",
  legalName: "GB Bois 77",
  tagline: "Bois de chauffage sec · Île-de-France",
  phone: "+33 1 23 45 67 89",
  phoneHref: "tel:+33123456789",
  email: "contact@gbbois77.fr",
  emailHref: "mailto:contact@gbbois77.fr",
  address: "123 Rue du Bois, 75000 Paris",
  hours: "Lundi au samedi, 8 h – 18 h",
  region: "Île-de-France",
  deliveryLine: "77 · 78 · 91 · 92 · 93 · 94 · 95",
  freeDeliveryFromSteres: 5,
  minOrderSteres: 2,
  maxOrderSteres: 20,
  heroBadge: "Bois sec sous abri · devis sous 24 h",
  heroHeadline: "Livraison de bois de chauffage sec en Île-de-France",
  heroSubtitle:
    "Essences nobles, soigneusement stockées sous abri. Prix au stère, livraison rapide dans les départements 77 à 95 — offerte dès 5 stères.",
  unitLabel: "stère",
  unitLabelPlural: "stères",
  priceUnitSuffix: "/ stère",
  photos: {
    hero: "/img/hero-forest.jpg",
    about: "/img/about-wood.jpg",
    midCta: "/img/cta-forest.jpg",
    gallery: [
      { src: "/img/forest-5176376_1280.jpg", caption: "Forêt gérée durablement" },
      { src: "/img/pexels-goumbik-296333.jpg", caption: "Paysages d’Île-de-France" },
      { src: "/img/pexels-khaydenarts-923167.jpg", caption: "Nature & saison" },
      { src: "/img/pexels-mikey-dabro-293966-1285421.jpg", caption: "Bois prêt à brûler" },
      { src: "/img/chene.PNG", caption: "Chêne" },
      { src: "/img/Hetre.PNG", caption: "Hêtre" },
    ],
  },
  lengths: [
    {
      id: "25",
      label: "25 cm",
      cm: 25,
      pricePerStere: 85,
      useCase:
        "Courtes et nerveuses : elles s’allument vite dans un poêle ou un insert.",
      m3PerStere: 0.6,
    },
    {
      id: "33",
      label: "33 cm",
      cm: 33,
      pricePerStere: 75,
      useCase:
        "La longueur la plus demandée, à l’aise dans la plupart des poêles et inserts.",
      m3PerStere: 0.7,
      popular: true,
    },
    {
      id: "50",
      label: "50 cm",
      cm: 50,
      pricePerStere: 70,
      useCase:
        "Grandes bûches pour les foyers ouverts et les larges cheminées.",
      m3PerStere: 0.8,
    },
  ] as LengthOption[],
  reassurances: [
    {
      title: "Bois sec",
      text: "Stocké sous abri pour une combustion nette et un allumage facile.",
    },
    {
      title: "Prix au stère",
      text: "Tarifs clairs par longueur. Livraison offerte dès 5 stères.",
    },
    {
      title: "Zones claires",
      text: "Seine-et-Marne et toute l’Île-de-France (77 à 95).",
    },
    {
      title: "Devis sous 24 h",
      text: "Réponse les jours ouvrés, sans engagement.",
    },
  ],
  species: [
    {
      name: "Chêne",
      latin: "Quercus",
      blurb: "Dense, braises tenaces, combustion lente. Le bois de la nuit.",
      image: "/img/chene.PNG",
    },
    {
      name: "Charme",
      latin: "Carpinus",
      blurb: "Pouvoir calorifique élevé, peu d’étincelles, flamme franche.",
      image: "/img/charme.PNG",
    },
    {
      name: "Frêne",
      latin: "Fraxinus",
      blurb: "S’allume facilement, belle flamme dès les premières minutes.",
      image: "/img/frene.PNG",
    },
    {
      name: "Hêtre",
      latin: "Fagus",
      blurb: "Chaleur régulière, odeur discrète, idéal en foyer fermé.",
      image: "/img/Hetre.PNG",
    },
  ] as Species[],
  zones: [
    {
      code: "77",
      name: "Seine-et-Marne",
      towns: ["Melun", "Meaux", "Fontainebleau", "Provins", "Torcy"],
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
    title: "De la forêt au foyer",
    stats: [
      { value: "7", label: "départements" },
      { value: "4", label: "essences" },
      { value: "2+", label: "ans d’expérience" },
    ],
    paragraphs: [
      "GB Bois 77 est née d’une passion pour la nature et le confort du feu de bois. Nous sélectionnons et stockons nos essences sous abri pour garantir une performance optimale à chaque livraison.",
      "Notre équipe assure un service rapide et fiable sur toute l’Île-de-France. Chaque stère est soigneusement préparé — chêne, hêtre, charme ou frêne — pour un chauffage durable et une satisfaction durable.",
    ],
  },
  faq: [
    {
      q: "Le prix est-il au stère ou au mètre cube ?",
      a: "Nous facturons au stère, selon la longueur de bûche choisie. Le convertisseur de la page estime le volume en m³ en vrac pour comparer avec d’autres habitudes de mesure.",
    },
    {
      q: "Quel est le minimum de commande ?",
      a: "Le minimum est de 2 stères. La livraison est offerte à partir de 5 stères commandés.",
    },
    {
      q: "Sous quel délai livrez-vous ?",
      a: "Comptez en général quelques jours ouvrés selon la saison et votre commune. Un devis confirme le créneau avant engagement.",
    },
    {
      q: "Le bois est-il vraiment sec ?",
      a: "Oui. Notre bois est stocké sous abri pour une combustion optimale, peu de fumée et un allumage sans forcer. À réception, stockez-le à l’abri et à l’air.",
    },
    {
      q: "Quelle longueur pour mon appareil ?",
      a: "25 cm pour la plupart des poêles et petits inserts. 33 cm pour le format le plus polyvalent. 50 cm pour cheminée ouverte ou grand foyer. En cas de doute, mesurez la largeur utile du foyer.",
    },
    {
      q: "Comment stocker le bois après la livraison ?",
      a: "Sur palettes ou bastaings, jamais à même le sol. Sous un auvent ou une bâche qui couvre le dessus sans enfermer les côtés, pour laisser circuler l’air.",
    },
  ],
  midCta: {
    title: "Commune, longueur, volume. On s’occupe du reste.",
    text: "Réponse sous 24 h. Livraison Île-de-France — offerte dès 5 stères.",
  },
  footerNote: "Démo confidentielle · design Alpin adapté à GB Bois 77",
} as const;

export type Business = typeof business;
