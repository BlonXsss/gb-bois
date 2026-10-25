import { Header, TopBar } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import {
  About,
  Contact,
  Extras,
  Faq,
  Footer,
  Gallery,
  Locations,
  MidCta,
  Pricing,
  Process,
  Reassurance,
  Services,
  SpeciesGrid,
  StickyOrderBar,
  VolumeCalculator,
  Zones,
} from "@/components/Sections";
import { HomeSeo } from "@/components/HomeSeo";
import { business } from "@/lib/business";
import {
  buildPageMetadata,
  faqJsonLd,
  homeSeo,
  localBusinessJsonLd,
  websiteJsonLd,
} from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: homeSeo.title,
  description: homeSeo.description,
  path: "/",
  keywords: [
    "bois de chauffage 77",
    "bois de chauffage pas cher",
    "livraison bois Seine-et-Marne",
    "bois de chauffage Île-de-France",
    "GB Bois Yèbles",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteJsonLd()} />
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd data={faqJsonLd(business.faq)} />
      <TopBar />
      <Header />
      <main id="contenu">
        <Hero />
        <Reassurance />
        <Process />
        <Pricing />
        <Extras />
        <VolumeCalculator />
        <SpeciesGrid />
        <Services />
        <Zones />
        <Gallery />
        <About />
        <Locations />
        <Faq />
        <HomeSeo />
        <MidCta />
        <Contact />
      </main>
      <Footer />
      <StickyOrderBar />
    </>
  );
}
