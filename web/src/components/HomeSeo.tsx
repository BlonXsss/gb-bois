import Link from "next/link";
import { business } from "@/lib/business";
import { seoZonePages } from "@/lib/seo-zones";
import { zonePath } from "@/lib/seo";
import { Reveal } from "@/components/Reveal";

const paragraphs = [
  `GB Bois (raison sociale ${business.legalName}, ${business.legalForm}) vend et livre du bois de chauffage sec en Seine-et-Marne et Île-de-France. Siège : ${business.siege.address}. Dépôt & livraisons : ${business.depot.address}. Téléphone : ${business.phone}.`,
  `Tarifs au stère : 25 cm (85 €), 33 cm (80 €), 40 cm (84 €), 50 cm (75 €), 1 m (78 €). Remise −${business.nearDiscountEuros} €/stère à moins de ${business.nearDiscountKm} km de Yèbles (sauf 1 m). ${business.minOrderNote}`,
  `Essences : chêne, hêtre, charme et frêne, stockées sous abri à Yèbles. Formats pour poêle, insert, cheminée et chaudière. Filets d’allumage : 10 € l’unité (selon disponibilité).`,
  `Zones de livraison bois de chauffage : 77, 78, 91, 92, 93, 94 et 95. Paris (75) non desservi. Devis rapide au ${business.phone} (~5 minutes) ou par email (${business.email}, réponse sous 24 h). Ouverts ${business.hours.toLowerCase()}.`,
  `Activités : vente de bois de chauffage, exploitation forestière, abattage, débardage, travaux paysagers. Élagage et abattage proposés en Seine-et-Marne (77) — devis selon l’ampleur des travaux.`,
];

export function HomeSeo() {
  const depts = seoZonePages.filter((z) => !z.isHub);
  const hub = seoZonePages.find((z) => z.isHub)!;

  return (
    <section className="section-pad site-width section-y" aria-labelledby="seo-accueil">
      <Reveal>
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow">Bois de chauffage · guide</p>
          <h2 id="seo-accueil" className="display-title mt-3">
            Fournisseur de bois de chauffage sec en Seine-et-Marne &amp; Île-de-France
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted sm:text-[0.975rem]">
            {paragraphs.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </div>

          <h3 className="mt-8 font-display text-xl tracking-tightest text-ink">
            Pages zones pour le référencement local
          </h3>
          <p className="mt-2 text-sm text-muted">
            Contenu dédié par département — mêmes tarifs, dépôt Yèbles, contact unique.
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            <li className="col-span-2 sm:col-span-1">
              <Link
                href={zonePath(hub)}
                className="flex min-h-[44px] items-center rounded-2xl border border-amber/30 bg-amber-light/20 px-3 py-2.5 text-sm font-medium text-ink"
              >
                Île-de-France
              </Link>
            </li>
            {depts.map((z) => (
              <li key={z.id}>
                <Link
                  href={zonePath(z)}
                  className="flex min-h-[44px] items-center rounded-2xl border border-ink/8 bg-white px-3 py-2.5 text-sm text-ink"
                >
                  <span className="font-display text-amber">{z.code}</span>
                  <span className="ml-2 truncate">{z.name}</span>
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="mt-8 font-display text-xl tracking-tightest text-ink">
            Mots-clés &amp; intentions de recherche
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Bois de chauffage 77, bois de chauffage Seine-et-Marne, bois de chauffage pas cher,
            livraison bois Yèbles, stère bois sec, chêne hêtre charme frêne, bois de chauffage
            Île-de-France, devis bois de chauffage{" "}
            {business.phone.replace(/ /g, "")}.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
