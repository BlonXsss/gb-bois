import Link from "next/link";
import { business } from "@/lib/business";
import { seoZonePages, type SeoZonePage } from "@/lib/seo-zones";
import { zonePath } from "@/lib/seo";
import { Reveal } from "@/components/Reveal";

export function ZonePageView({ zone }: { zone: SeoZonePage }) {
  const otherZones = seoZonePages.filter((z) => z.id !== zone.id);
  const hub = seoZonePages.find((z) => z.isHub);

  return (
    <main id="contenu">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1714] via-[#2a241c] to-[#3d3428]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,162,94,0.22),transparent_55%)]" />
        <div className="section-pad site-width relative py-14 sm:py-20 lg:py-24">
          <nav aria-label="Fil d’Ariane" className="text-sm text-white/55">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-white">
                  Accueil
                </Link>
              </li>
              <li aria-hidden>/</li>
              {hub && !zone.isHub ? (
                <>
                  <li>
                    <Link href={zonePath(hub)} className="hover:text-white">
                      Île-de-France
                    </Link>
                  </li>
                  <li aria-hidden>/</li>
                </>
              ) : null}
              <li className="text-amber-light">{zone.name}</li>
            </ol>
          </nav>

          <p className="eyebrow mt-8 !text-amber-light">Livraison {zone.code}</p>
          <h1 className="mt-3 max-w-3xl font-display text-[2rem] font-medium leading-[1.1] tracking-tightest text-white sm:text-5xl">
            {zone.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {zone.intro[0]}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={business.phoneHref} className="btn-amber">
              Appeler {business.phone}
            </a>
            <Link href="/#tarifs" className="btn-slate !bg-white/10 !text-white hover:!bg-white/16">
              Voir les tarifs
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad site-width section-y">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <Reveal>
            <div className="space-y-5">
              <p className="eyebrow">Zone desservie</p>
              <h2 className="display-title">
                Bois de chauffage sec en {zone.name}
              </h2>
              {zone.intro.slice(1).map((p) => (
                <p key={p.slice(0, 40)} className="text-[0.975rem] leading-relaxed text-muted sm:text-base">
                  {p}
                </p>
              ))}
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Bois stocké sous abri à Yèbles",
                  "Chêne, hêtre, charme, frêne",
                  "Formats 25, 33, 40, 50 cm et 1 m",
                  "Tarifs 75–85 € / stère",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-ink/8 bg-white px-4 py-3.5 text-sm text-ink"
                  >
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <aside className="rounded-[1.5rem] bg-deep p-6 text-white shadow-lift sm:p-7">
              <p className="text-[0.7rem] uppercase tracking-[0.16em] text-amber-light">
                Devis rapide
              </p>
              <p className="mt-3 font-display text-2xl tracking-tightest">
                {business.phone}
              </p>
              <p className="mt-2 text-sm text-white/65">
                {business.phoneDevisNote}. Ouverts {business.hours.toLowerCase()}.
              </p>
              <a href={business.phoneHref} className="btn-amber mt-6 w-full">
                Appeler maintenant
              </a>
              <Link
                href="/#contact"
                className="mt-3 inline-flex min-h-[44px] w-full items-center justify-center rounded-full border border-white/15 text-sm text-white/85 hover:bg-white/8"
              >
                Demande en ligne
              </Link>
              <p className="mt-6 border-t border-white/10 pt-4 text-xs leading-relaxed text-white/45">
                Livraison depuis {business.depot.address}. Remise −
                {business.nearDiscountEuros}&nbsp;€/stère à moins de{" "}
                {business.nearDiscountKm} km du dépôt.
              </p>
            </aside>
          </Reveal>
        </div>
      </section>

      {zone.isHub ? (
        <section className="section-pad site-width pb-4 sm:pb-8">
          <Reveal>
            <p className="eyebrow">Départements</p>
            <h2 className="display-title mt-3">Nos pages zones Île-de-France</h2>
            <p className="display-lead mt-3 max-w-2xl">
              Paris (75) non desservi. Livraison sur les 7 départements suivants
              depuis Yèbles.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {seoZonePages
                .filter((z) => !z.isHub)
                .map((z) => (
                  <Link
                    key={z.id}
                    href={zonePath(z)}
                    className="soft-card soft-card-interactive flex items-center justify-between gap-3 p-5"
                  >
                    <span>
                      <span className="block font-display text-2xl tracking-tightest text-ink">
                        {z.code}
                      </span>
                      <span className="mt-1 block text-sm text-muted">{z.name}</span>
                    </span>
                    <span className="text-amber">→</span>
                  </Link>
                ))}
            </div>
          </Reveal>
        </section>
      ) : (
        <section className="section-pad site-width pb-4 sm:pb-8">
          <Reveal>
            <p className="eyebrow">Communes</p>
            <h2 className="display-title mt-3">
              Principales villes livrées en {zone.name}
            </h2>
            <p className="display-lead mt-3 max-w-2xl">
              Liste non exhaustive — une commune voisine est souvent possible.
              Confirmez au devis.
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {zone.towns.map((town) => (
                <span
                  key={town}
                  className="inline-flex min-h-[40px] items-center rounded-full border border-ink/8 bg-white px-4 py-2 text-sm font-medium text-ink"
                >
                  {town}
                </span>
              ))}
            </div>
          </Reveal>
        </section>
      )}

      {zone.faqs.length ? (
        <section className="section-pad site-width section-y">
          <Reveal>
            <p className="eyebrow">FAQ</p>
            <h2 className="display-title mt-3">
              Questions fréquentes — {zone.name}
            </h2>
            <div className="mt-8 divide-y divide-ink/8 overflow-hidden rounded-[1.5rem] border border-ink/8 bg-white">
              {zone.faqs.map((f) => (
                <details key={f.q} className="group px-5 py-4 sm:px-6">
                  <summary className="cursor-pointer list-none font-display text-base tracking-tightest text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start justify-between gap-4">
                      {f.q}
                      <span className="text-amber transition group-open:rotate-45">+</span>
                    </span>
                  </summary>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>
        </section>
      ) : null}

      <section className="section-pad site-width pb-16 sm:pb-20">
        <Reveal>
          <div className="rounded-[1.5rem] border border-ink/8 bg-page/80 p-6 sm:p-8">
            <p className="eyebrow">Autres zones</p>
            <h2 className="mt-2 font-display text-2xl tracking-tightest text-ink">
              Continuer vers une autre page zone
            </h2>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {otherZones.map((z) => (
                <Link
                  key={z.id}
                  href={zonePath(z)}
                  className="inline-flex min-h-[40px] items-center rounded-full border border-ink/10 bg-white px-4 py-2 text-sm text-ink transition hover:border-amber/40"
                >
                  {z.isHub ? "Île-de-France" : `${z.code} · ${z.name}`}
                </Link>
              ))}
              <Link
                href="/#zones"
                className="inline-flex min-h-[40px] items-center rounded-full bg-deep px-4 py-2 text-sm text-white"
              >
                Toutes les zones
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
