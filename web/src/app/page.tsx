import { Header, TopBar } from "@/components/Header";
import { Hero } from "@/components/Hero";
import {
  About,
  Contact,
  Faq,
  Footer,
  Gallery,
  MidCta,
  Pricing,
  Reassurance,
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
        <Pricing />
        <VolumeCalculator />
        <SpeciesGrid />
        <Zones />
        <Gallery />
        <About />
        <Faq />
        <MidCta />
        <Contact />
      </main>
      <Footer />
      <StickyOrderBar />
    </>
  );
}
