import Link from "next/link";
import { business } from "@/lib/business";
import { seoZonePages } from "@/lib/seo-zones";
import { zonePath } from "@/lib/seo";
import { Reveal } from "@/components/Reveal";

const rates = business.lengths.map((l) => ({
  label: l.label,
  price: l.pricePerStere,
}));

const keywords = [
  "Bois de chauffage 77",
  "bois de chauffage Seine-et-Marne",
  "bois de chauffage pas cher",
  "livraison bois Yèbles",
  "stère bois sec",
  "chêne hêtre charme frêne",
  "bois de chauffage Île-de-France",
  `devis bois de chauffage ${business.phone.replace(/ /g, "")}`,
];

export function HomeSeo() {
  const depts = seoZonePages.filter((z) => !z.isHub);
  const hub = seoZonePages.find((z) => z.isHub)!;
  const totalCommunes = depts.reduce((n, z) => n + z.towns.length, 0);

  return (
    <section
      className="relative overflow-hidden border-t border-ink/6"
      aria-labelledby="seo-accueil"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(900px 420px at 12% 0%, rgba(196,132,56,0.12), transparent 55%), linear-gradient(180deg, rgba(255,255,255,0.55) 0%, transparent 42%)",
        }}
      />

      <div className="section-pad site-width section-y relative">
        <Reveal>
          <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.9fr)] lg:gap-14 xl:gap-16">
            <div>
              <p className="eyebrow">Bois de chauffage · guide</p>
              <h2
                id="seo-accueil"
                className="display-title mt-3 max-w-2xl"
              >
                Fournisseur de bois de chauffage sec en Seine-et-Marne &amp;
                Île-de-France
              </h2>
              <p className="display-lead mt-4 max-w-2xl">
                GB Bois (raison sociale {business.legalName}, {business.legalForm})
                vend et livre du bois de chauffage sec depuis Yèbles — mêmes
                tarifs, dépôt unique, contact unique sur toute la zone.
              </p>

              <dl className="mt-8 grid gap-5 border-t border-ink/8 pt-7 sm:grid-cols-2">
                <div>
                  <dt className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-amber">
                    Siège
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-ink">
                    {business.siege.address}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-amber">
                    Dépôt &amp; livraisons
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-ink">
                    {business.depot.address}
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-amber">
                    Contact
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-ink">
                    <a
                      href={business.phoneHref}
                      className="font-medium text-ink underline decoration-amber/40 underline-offset-4 transition hover:decoration-amber"
                    >
                      {business.phone}
                    </a>
                    <span className="text-muted"> · </span>
                    <a
                      href={business.emailHref}
                      className="text-muted underline decoration-ink/15 underline-offset-4 transition hover:text-ink hover:decoration-amber"
                    >
                      {business.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-amber">
                    Horaires
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-ink">
                    {business.hours}
                    <span className="mt-1 block text-muted">
                      Devis téléphone ~5 min · email sous 24 h
                    </span>
                  </dd>
                </div>
              </dl>

              <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted sm:text-[0.975rem]">
                <p>
                  Essences : chêne, hêtre, charme et frêne, stockées sous abri à
                  Yèbles. Formats pour poêle, insert, cheminée et chaudière.
                  Filets d’allumage : 10 € l’unité (selon disponibilité).
                </p>
                <p>
                  Zones de livraison : 77, 78, 91, 92, 93, 94 et 95 —{" "}
                  {totalCommunes} communes. Paris (75) non desservi.{" "}
                  {business.minOrderNote}
                </p>
                <p>
                  Activités : vente de bois de chauffage, exploitation forestière,
                  abattage, débardage, travaux paysagers. Élagage et abattage
                  proposés en Seine-et-Marne (77) — devis selon l’ampleur des
                  travaux.
                </p>
              </div>
            </div>

            <aside className="flex flex-col gap-5">
              <div className="overflow-hidden rounded-[1.6rem] border border-ink/8 bg-white/90 shadow-soft">
                <div className="border-b border-ink/6 bg-gradient-to-br from-[#1a1714] via-[#2a241c] to-[#3d3428] px-5 py-5 text-white sm:px-6">
                  <p className="text-[0.68rem] uppercase tracking-[0.16em] text-amber-light">
                    Tarifs au stère
                  </p>
                  <p className="mt-2 font-display text-2xl tracking-tightest">
                    75 € – 85 €
                  </p>
                  <p className="mt-1 text-sm text-white/65">
                    Remise −{business.nearDiscountEuros} €/stère à moins de{" "}
                    {business.nearDiscountKm} km de Yèbles (sauf 1 m)
                  </p>
                </div>
                <ul className="divide-y divide-ink/6">
                  {rates.map((r) => (
                    <li
                      key={r.label}
                      className="flex items-baseline justify-between gap-3 px-5 py-3 sm:px-6"
                    >
                      <span className="font-display text-[0.95rem] tracking-tightest text-ink">
                        {r.label}
                      </span>
                      <span className="text-sm tabular-nums text-muted">
                        <span className="font-medium text-ink">{r.price} €</span>
                        <span className="text-muted/80"> / stère</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.6rem] border border-ink/8 bg-white/80 px-5 py-5 sm:px-6">
                <p className="text-[0.68rem] font-medium uppercase tracking-[0.16em] text-amber">
                  Pages zones · référencement local
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Contenu dédié par département — mêmes tarifs, dépôt Yèbles,
                  contact unique.
                </p>
                <ul className="mt-4 grid grid-cols-2 gap-2">
                  <li className="col-span-2">
                    <Link
                      href={zonePath(hub)}
                      className="group flex min-h-[52px] items-center justify-between gap-3 rounded-2xl bg-deep px-4 py-3 text-white transition hover:bg-ink"
                    >
                      <span>
                        <span className="block font-display text-lg tracking-tightest">
                          Île-de-France
                        </span>
                        <span className="text-xs text-white/55">
                          Hub · {totalCommunes} communes
                        </span>
                      </span>
                      <span className="text-amber-light transition group-hover:translate-x-0.5">
                        →
                      </span>
                    </Link>
                  </li>
                  {depts.map((z) => (
                    <li key={z.id}>
                      <Link
                        href={zonePath(z)}
                        className="soft-card soft-card-interactive flex min-h-[64px] flex-col justify-center px-3.5 py-3"
                      >
                        <span className="font-display text-xl tracking-tightest text-amber">
                          {z.code}
                        </span>
                        <span className="mt-0.5 truncate text-xs text-muted">
                          {z.name}
                          <span className="text-ink/25"> · </span>
                          {z.towns.length}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Reveal>

        <Reveal className="reveal-delay-1">
          <div className="mt-10 border-t border-ink/8 pt-7 sm:mt-12">
            <h3 className="font-display text-lg tracking-tightest text-ink sm:text-xl">
              Mots-clés &amp; intentions de recherche
            </h3>
            <p className="mt-3 max-w-4xl text-sm leading-relaxed text-muted">
              {keywords.map((k, i) => (
                <span key={k}>
                  {i > 0 ? (
                    <span className="mx-1.5 text-ink/20" aria-hidden>
                      ·
                    </span>
                  ) : null}
                  <span className="text-ink/75">{k}</span>
                </span>
              ))}
              .
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
