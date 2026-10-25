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
        <div className="section-pad site-width relative py-10 sm:py-16 lg:py-20">
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

          <p className="eyebrow mt-6 !text-amber-light sm:mt-8">Livraison {zone.code}</p>
          <h1 className="mt-3 max-w-3xl font-display text-[1.85rem] font-medium leading-[1.1] tracking-tightest text-white sm:text-5xl">
            {zone.h1}
          </h1>
          <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-white/70 sm:mt-5 sm:text-lg">
            {zone.intro[0]}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
            <a href={business.phoneHref} className="btn-amber">
              Appeler {business.phone}
            </a>
            <Link
              href="/#tarifs"
              className="btn-slate !bg-white/10 !text-white hover:!bg-white/16"
            >
              Voir les tarifs
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad site-width section-y">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <Reveal>
            <div className="space-y-4">
              <p className="eyebrow">Zone desservie</p>
              <h2 className="display-title">
                Bois de chauffage sec en {zone.name}
              </h2>
              {zone.body.slice(1, 4).map((p) => (
                <p
                  key={p.slice(0, 48)}
                  className="text-sm leading-relaxed text-muted sm:text-[0.975rem]"
                >
                  {p}
                </p>
              ))}
              <ul className="mt-4 grid grid-cols-2 gap-2 sm:gap-3">
                {[
                  "Stocké sous abri à Yèbles",
                  "Chêne, hêtre, charme, frêne",
                  "25 · 33 · 40 · 50 cm · 1 m",
                  "Tarifs 75–85 € / stère",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 rounded-2xl border border-ink/8 bg-white px-3 py-3 text-xs text-ink sm:gap-3 sm:px-4 sm:py-3.5 sm:text-sm"
                  >
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <aside className="rounded-[1.5rem] bg-deep p-5 text-white shadow-lift sm:p-7">
              <p className="text-[0.7rem] uppercase tracking-[0.16em] text-amber-light">
                Devis rapide
              </p>
              <p className="mt-3 font-display text-2xl tracking-tightest">
                {business.phone}
              </p>
              <p className="mt-2 text-sm text-white/65">
                {business.phoneDevisNote}. Ouverts {business.hours.toLowerCase()}.
              </p>
              <a href={business.phoneHref} className="btn-amber mt-5 w-full sm:mt-6">
                Appeler maintenant
              </a>
              <Link
                href="/#contact"
                className="mt-3 inline-flex min-h-[44px] w-full items-center justify-center rounded-full border border-white/15 text-sm text-white/85 hover:bg-white/8"
              >
                Demande en ligne
              </Link>
              <p className="mt-5 border-t border-white/10 pt-4 text-xs leading-relaxed text-white/45">
                Livraison depuis {business.depot.address}. Remise −
                {business.nearDiscountEuros}&nbsp;€/stère &lt; {business.nearDiscountKm}{" "}
                km (sauf 1 m).
              </p>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="section-pad site-width pb-8 sm:pb-10">
        <Reveal>
          <h2 className="font-display text-2xl tracking-tightest text-ink">
            Tarifs au stère — {zone.name}
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            Mêmes prix catalogue partout. Remise proximité −{business.nearDiscountEuros}{" "}
            €/stère sous {business.nearDiscountKm} km de Yèbles (sauf 1 m).
          </p>
          <div className="mt-5 overflow-hidden rounded-[1.25rem] border border-ink/8 bg-white">
            <div className="grid grid-cols-3 gap-px bg-ink/8 text-center text-xs font-medium uppercase tracking-wider text-muted sm:grid-cols-5 sm:text-[0.7rem]">
              {business.lengths.map((l) => (
                <div key={l.id} className="bg-page px-2 py-3 sm:px-3">
                  <p className="font-display text-sm tracking-tightest text-ink sm:text-base">
                    {l.label}
                  </p>
                  <p className="mt-1 text-ink">{l.pricePerStere} €</p>
                  <p className="mt-0.5 text-[0.65rem] normal-case tracking-normal">
                    prox. {l.priceNearPerStere} €
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {zone.sections.map((section) => (
        <section
          key={section.heading}
          className="section-pad site-width pb-8 sm:pb-10"
        >
          <Reveal>
            <h2 className="font-display text-xl tracking-tightest text-ink sm:text-2xl">
              {section.heading}
            </h2>
            <div className="mt-3 max-w-3xl space-y-3 text-sm leading-relaxed text-muted sm:text-[0.975rem]">
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </Reveal>
        </section>
      ))}

      {zone.isHub ? (
        <section className="section-pad site-width pb-8 sm:pb-10">
          <Reveal>
            <p className="eyebrow">Départements</p>
            <h2 className="display-title mt-3">Pages zones Île-de-France</h2>
            <p className="display-lead mt-3 max-w-2xl">
              Paris (75) non desservi. Livraison 77 · 78 · 91 · 92 · 93 · 94 · 95
              depuis Yèbles.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4">
              {seoZonePages
                .filter((z) => !z.isHub)
                .map((z) => (
                  <Link
                    key={z.id}
                    href={zonePath(z)}
                    className="soft-card soft-card-interactive flex items-center justify-between gap-2 p-3.5 sm:p-5"
                  >
                    <span>
                      <span className="block font-display text-xl tracking-tightest text-ink sm:text-2xl">
                        {z.code}
                      </span>
                      <span className="mt-0.5 block text-xs text-muted sm:text-sm">
                        {z.name}
                      </span>
                    </span>
                    <span className="text-amber">→</span>
                  </Link>
                ))}
            </div>
          </Reveal>
        </section>
      ) : (
        <section className="section-pad site-width pb-8 sm:pb-10">
          <Reveal>
            <p className="eyebrow">Communes</p>
            <h2 className="display-title mt-3">
              Villes livrées en {zone.name}
            </h2>
            <p className="display-lead mt-2 max-w-2xl">
              Liste d’exemples — confirmez votre commune au devis.
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5 sm:mt-6 sm:gap-2">
              {zone.towns.map((town) => (
                <span
                  key={town}
                  className="inline-flex min-h-[36px] items-center rounded-full border border-ink/8 bg-white px-3 py-1.5 text-xs font-medium text-ink sm:min-h-[40px] sm:px-4 sm:py-2 sm:text-sm"
                >
                  {town}
                </span>
              ))}
            </div>
          </Reveal>
        </section>
      )}

      {zone.body.length > 4 ? (
        <section className="section-pad site-width pb-8 sm:pb-10">
          <Reveal>
            <h2 className="font-display text-xl tracking-tightest text-ink sm:text-2xl">
              Informations pratiques — {zone.name}
            </h2>
            <div className="mt-3 max-w-3xl space-y-3 text-sm leading-relaxed text-muted sm:text-[0.975rem]">
              {zone.body.slice(4).map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </Reveal>
        </section>
      ) : null}

      {zone.faqs.length ? (
        <section className="section-pad site-width section-y">
          <Reveal>
            <p className="eyebrow">FAQ</p>
            <h2 className="display-title mt-3">
              Questions — bois de chauffage {zone.name}
            </h2>
            <div className="mt-6 divide-y divide-ink/8 overflow-hidden rounded-[1.35rem] border border-ink/8 bg-white sm:mt-8 sm:rounded-[1.5rem]">
              {zone.faqs.map((f) => (
                <details key={f.q} className="group px-4 py-3.5 sm:px-6 sm:py-4">
                  <summary className="cursor-pointer list-none font-display text-[0.95rem] tracking-tightest text-ink marker:content-none [&::-webkit-details-marker]:hidden sm:text-base">
                    <span className="flex items-start justify-between gap-3">
                      {f.q}
                      <span className="text-amber transition group-open:rotate-45">+</span>
                    </span>
                  </summary>
                  <p className="mt-2.5 max-w-3xl text-sm leading-relaxed text-muted">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>
        </section>
      ) : null}

      <section className="section-pad site-width pb-14 sm:pb-16">
        <Reveal>
          <div className="rounded-[1.35rem] border border-ink/8 bg-page/80 p-5 sm:rounded-[1.5rem] sm:p-8">
            <p className="eyebrow">Autres zones</p>
            <h2 className="mt-2 font-display text-xl tracking-tightest text-ink sm:text-2xl">
              Continuer vers une autre page
            </h2>
            <div className="mt-4 flex flex-wrap gap-2 sm:mt-5 sm:gap-2.5">
              {otherZones.map((z) => (
                <Link
                  key={z.id}
                  href={zonePath(z)}
                  className="inline-flex min-h-[40px] items-center rounded-full border border-ink/10 bg-white px-3.5 py-2 text-xs text-ink transition hover:border-amber/40 sm:px-4 sm:text-sm"
                >
                  {z.isHub ? "Île-de-France" : `${z.code} · ${z.name}`}
                </Link>
              ))}
              <Link
                href="/#zones"
                className="inline-flex min-h-[40px] items-center rounded-full bg-deep px-3.5 py-2 text-xs text-white sm:px-4 sm:text-sm"
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
