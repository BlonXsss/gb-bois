import { TopBar, Header } from "@/components/Header";
import { Footer, StickyOrderBar } from "@/components/Sections";
import { ZonePageView } from "@/components/ZonePageView";
import { JsonLd } from "@/components/JsonLd";
import { getSeoZoneBySlug } from "@/lib/seo-zones";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  faqJsonLd,
  localBusinessJsonLd,
  zonePath,
} from "@/lib/seo";

const slug = "bois-de-chauffage-92";
const zone = getSeoZoneBySlug(slug)!;

export const metadata = buildPageMetadata({
  title: zone.title,
  description: zone.description,
  path: zonePath(zone),
  keywords: [
    `bois de chauffage ${zone.name}`,
    `bois de chauffage ${zone.code}`,
    "livraison bois chauffage",
    "GB Bois",
  ],
});

export default function Page() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: zone.name, path: zonePath(zone) },
        ])}
      />
      {zone.faqs.length ? <JsonLd data={faqJsonLd(zone.faqs)} /> : null}
      <TopBar />
      <Header />
      <ZonePageView zone={zone} />
      <Footer />
      <StickyOrderBar />
    </>
  );
}
