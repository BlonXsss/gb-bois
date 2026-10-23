import { Header, TopBar } from "@/components/Header";
import { Hero } from "@/components/Hero";
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

export default function HomePage() {
  return (
    <>
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
        <MidCta />
        <Contact />
      </main>
      <Footer />
      <StickyOrderBar />
    </>
  );
}
