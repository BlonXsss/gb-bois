"use client";

import Image from "next/image";
import { useState } from "react";
import { business } from "@/lib/business";
import { useOrder } from "@/lib/order-context";
import { QtyControl } from "./QtyControl";
import { Reveal } from "./Reveal";

function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-deep text-amber-light">
      {children}
    </span>
  );
}

export function Reassurance() {
  const icons = [
    <path key="1" d="M12 3v18M5 10l7-7 7 7" stroke="currentColor" strokeWidth="1.6" fill="none" />,
    <circle key="2" cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.6" fill="none" />,
    <path key="3" d="M4 20V9l8-5 8 5v11" stroke="currentColor" strokeWidth="1.6" fill="none" />,
    <path key="4" d="M5 12h14M12 5v14" stroke="currentColor" strokeWidth="1.6" />,
  ];
  return (
    <section className="section-pad mx-auto max-w-7xl py-12">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {business.reassurances.map((r, i) => (
          <Reveal key={r.title}>
            <article className="soft-card h-full p-6">
              <IconBox>
                <svg width="20" height="20" viewBox="0 0 24 24">
                  {icons[i]}
                </svg>
              </IconBox>
              <h3 className="font-display text-lg font-medium tracking-tightest">
                {r.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{r.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Pricing() {
  const {
    lengthId,
    setLengthId,
    qty,
    formatEuro,
    m3Approx,
    setQty,
    nearDepot,
    setNearDepot,
    unitPrice,
    total,
  } = useOrder();

  return (
    <section id="tarifs" className="section-pad mx-auto max-w-7xl py-8 sm:py-14">
      <Reveal>
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-amber">
            Tarifs
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tightest text-ink sm:text-4xl">
            Cinq longueurs. Prix au stère, livré.
          </h2>
          <p className="mt-3 text-muted">
            {business.minOrderNote} Remise −{business.nearDiscountEuros} €/stère
            si votre adresse est à moins de {business.nearDiscountKm} km du dépôt
            de Yèbles (sauf bois 1 m).
          </p>
        </div>
      </Reveal>

      <div className="mb-8 flex justify-center">
        <div
          className="inline-grid grid-cols-2 gap-1 rounded-full bg-white p-1 shadow-soft"
          role="group"
          aria-label="Tarif de proximité"
        >
          <button
            type="button"
            aria-pressed={!nearDepot}
            onClick={() => setNearDepot(false)}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber ${
              !nearDepot ? "bg-ink text-white" : "text-muted hover:text-ink"
            }`}
          >
            Tarif standard
          </button>
          <button
            type="button"
            aria-pressed={nearDepot}
            onClick={() => setNearDepot(true)}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber ${
              nearDepot ? "bg-ink text-white" : "text-muted hover:text-ink"
            }`}
          >
            Proximité Yèbles (−{business.nearDiscountEuros} €)
          </button>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {business.lengths.map((opt) => {
          const active = opt.id === lengthId;
          const price = nearDepot ? opt.priceNearPerStere : opt.pricePerStere;
          const lineTotal = price * qty;
          return (
            <Reveal key={opt.id}>
              <article
                className={`soft-card relative flex h-full flex-col p-5 ${
                  opt.popular ? "ring-2 ring-amber" : ""
                }`}
              >
                {opt.popular ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-light to-amber px-3 py-1 text-xs font-medium text-ink shadow-amber">
                    Le plus choisi
                  </span>
                ) : null}
                <h3 className="font-display text-xl font-medium tracking-tightest">
                  {opt.label}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted">{opt.useCase}</p>
                <p className="mt-4 font-display text-2xl font-medium tracking-tightest">
                  {formatEuro(price)}
                  <span className="ml-1 text-sm font-sans font-normal text-muted">
                    {business.priceUnitSuffix}
                  </span>
                </p>
                {nearDepot && opt.priceNearPerStere < opt.pricePerStere ? (
                  <p className="text-xs text-muted line-through">
                    {formatEuro(opt.pricePerStere)}
                  </p>
                ) : (
                  <p className="mt-1 text-xs text-muted">TTC · par stère</p>
                )}

                <div className="mt-5 flex flex-col gap-3">
                  <button
                    type="button"
                    aria-pressed={active}
                    onClick={() => {
                      setLengthId(opt.id);
                      setQty(qty);
                    }}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber ${
                      active
                        ? "bg-ink text-white"
                        : "bg-page text-ink hover:bg-ink/5"
                    }`}
                  >
                    Choisir
                  </button>
                  {active ? <QtyControl /> : null}
                </div>

                {active ? (
                  <div className="mt-4 border-t border-ink/5 pt-4">
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm text-muted">Total</span>
                      <span className="font-display text-xl tracking-tightest">
                        {formatEuro(total)}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-muted">
                      {qty} {business.unitLabelPlural} · {formatEuro(unitPrice)}
                      /st · ≈ {m3Approx.toLocaleString("fr-FR")} m³
                    </p>
                    <a href="#contact" className="btn-amber mt-4 w-full">
                      Commander
                    </a>
                  </div>
                ) : (
                  <p className="mt-4 text-sm text-muted">
                    {qty} st. : {formatEuro(lineTotal)}
                  </p>
                )}
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export function VolumeCalculator() {
  const [steres, setSteres] = useState<number>(business.minOrderSteres);
  const [lengthId, setLengthId] = useState(
    business.lengths.find((l) => l.popular)?.id ?? business.lengths[0].id
  );
  const length =
    business.lengths.find((l) => l.id === lengthId) ?? business.lengths[0];
  const m3 = Number((steres * length.m3PerStere).toFixed(1));

  return (
    <section className="section-pad mx-auto max-w-7xl py-8">
      <Reveal>
        <div className="soft-card overflow-hidden lg:grid lg:grid-cols-2">
          <div className="border-b border-ink/5 p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-amber">
              Convertisseur
            </p>
            <h2 className="mt-3 font-display text-2xl font-medium tracking-tightest sm:text-3xl">
              Un stère, c’est 1 m³ de bûches d’un mètre bien rangées.
            </h2>
            <p className="mt-3 text-sm text-muted">
              Recoupé plus court et livré en vrac, le même bois forme un tas plus
              petit. Réglez vos stères, choisissez la longueur : voici le volume
              du tas.
            </p>

            <label className="mt-8 block text-sm font-medium text-ink">
              Vos stères
              <input
                type="range"
                min={1}
                max={20}
                value={steres}
                onChange={(e) => setSteres(Number(e.target.value))}
                className="mt-3 w-full accent-amber"
              />
              <span className="mt-2 block font-display text-3xl tracking-tightest">
                {steres}
              </span>
            </label>

            <p className="mt-6 text-sm font-medium text-ink">Format des bûches</p>
            <div className="mt-3 flex flex-wrap gap-2" role="group">
              {business.lengths.map((opt) => {
                const active = opt.id === lengthId;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setLengthId(opt.id)}
                    className={`rounded-full px-4 py-2 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber ${
                      active
                        ? "bg-ink text-white"
                        : "bg-page text-muted hover:text-ink"
                    }`}
                  >
                    {opt.label}{" "}
                    <span className="opacity-70">
                      {opt.m3PerStere.toLocaleString("fr-FR")} m³ / stère
                    </span>
                    {active ? " ✓" : ""}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-deep p-6 text-white sm:p-8">
            <p className="text-sm text-white/60">Volume en vrac</p>
            <p className="mt-2 font-display text-5xl font-medium tracking-tightest text-amber-light">
              ~{m3.toLocaleString("fr-FR")} m³
            </p>
            <p className="mt-3 text-white/75">
              de bois en vrac pour {steres} stères en {length.label}.
            </p>

            <h3 className="mt-10 font-display text-lg tracking-tightest">
              Vos {steres} stères, format par format
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {business.lengths.map((opt) => (
                <li
                  key={opt.id}
                  className="flex items-start justify-between gap-3 border-b border-white/10 pb-3"
                >
                  <span>
                    <strong className="font-medium text-white">{opt.label}</strong>
                    {opt.id === lengthId ? (
                      <span className="ml-2 text-amber-light">format choisi</span>
                    ) : null}
                  </span>
                  <span className="text-white/70">
                    ~{(steres * opt.m3PerStere).toFixed(1).replace(".", ",")} m³
                    en vrac
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function SpeciesGrid() {
  return (
    <section id="essences" className="section-pad mx-auto max-w-7xl py-12">
      <Reveal>
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-amber">
            Essences
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tightest sm:text-4xl">
            Quatre feuillus durs, rien d’autre.
          </h2>
          <p className="mt-3 text-muted">
            Chêne, charme, frêne, hêtre. La part de chaque essence suit les
            arrivages.
          </p>
        </div>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {business.species.map((s) => (
          <Reveal key={s.name}>
            <article className="soft-card overflow-hidden p-5">
              <div className="mb-4 flex items-start justify-between">
                <div className="relative h-20 w-20">
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    className="object-contain"
                    sizes="80px"
                  />
                </div>
                <span className="h-3 w-3 rounded-full ring-2 ring-amber ring-offset-2" />
              </div>
              <h3 className="font-display text-xl font-medium tracking-tightest">
                {s.name}
              </h3>
              <p className="text-xs italic text-muted">{s.latin}</p>
              <p className="mt-3 text-sm text-muted">{s.blurb}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Zones() {
  return (
    <section id="zones" className="section-pad mx-auto max-w-7xl py-8">
      <Reveal>
        <div className="rounded-[2rem] bg-deep px-5 py-10 text-white sm:px-8 sm:py-14">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="font-display text-3xl font-medium tracking-tightest sm:text-4xl">
              Livraison en {business.region}
            </h2>
            <p className="mt-3 text-white/70">
              Communes principales à titre d’exemple. Une commune voisine ? On
              confirme au devis.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {business.zones.map((z) => (
              <article key={z.code} className="soft-card p-5 text-ink">
                <span className="inline-flex rounded-full bg-ink px-3 py-1 font-display text-sm tracking-tightest text-white">
                  {z.code}
                </span>
                <h3 className="mt-3 font-display text-xl font-medium tracking-tightest">
                  {z.name}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {z.towns.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Gallery() {
  return (
    <section id="galerie" className="section-pad mx-auto max-w-7xl py-12">
      <Reveal>
        <h2 className="mb-8 font-display text-3xl font-medium tracking-tightest sm:text-4xl">
          Galerie
        </h2>
      </Reveal>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {business.photos.gallery.map((g) => (
          <Reveal key={g.src} className="mb-4 break-inside-avoid">
            <figure className="relative overflow-hidden rounded-[1.5rem]">
              <Image
                src={g.src}
                alt={g.caption}
                width={800}
                height={600}
                className="h-auto w-full object-cover"
              />
              <figcaption className="absolute bottom-3 left-3 right-3">
                <span className="glass inline-flex rounded-full px-3 py-1.5 text-xs font-medium text-ink">
                  {g.caption}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="apropos" className="section-pad mx-auto max-w-7xl py-12">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem]">
            <Image
              src={business.photos.about}
              alt="Bois de chauffage"
              width={900}
              height={1100}
              className="h-full min-h-[420px] w-full object-cover"
            />
            <div className="absolute inset-x-4 bottom-4">
              <div className="glass grid grid-cols-2 gap-2 rounded-3xl p-4 text-center sm:grid-cols-4">
                {business.about.stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-xl font-medium tracking-tightest text-ink sm:text-2xl">
                      {s.value}
                    </p>
                    <p className="text-[11px] text-muted sm:text-xs">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-amber">
              {business.brand}
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tightest sm:text-4xl">
              {business.about.title}
            </h2>
            {business.about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 text-muted leading-relaxed">
                {p}
              </p>
            ))}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="chip">{business.siege.address}</span>
              <span className="chip">{business.hours}</span>
              <span className="chip">
                ★ {business.rating.value} ({business.rating.count})
              </span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={business.phoneHref} className="btn-amber">
                {business.phone}
              </a>
              <a
                href={business.depot.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-slate"
              >
                Voir le dépôt
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="section-pad mx-auto max-w-7xl py-10">
      <Reveal>
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-amber">
            Comment ça marche
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tightest sm:text-4xl">
            Quatre étapes jusqu’à votre foyer
          </h2>
        </div>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {business.process.map((p) => (
          <Reveal key={p.step}>
            <article className="soft-card h-full p-6">
              <p className="font-display text-sm tracking-tightest text-amber">
                {p.step}
              </p>
              <h3 className="mt-2 font-display text-xl font-medium tracking-tightest">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{p.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="section-pad mx-auto max-w-7xl py-10">
      <Reveal>
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-amber">
            Services
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tightest sm:text-4xl">
            Bois, élagage & abattage
          </h2>
          <p className="mt-3 text-muted">
            Au-delà du bois de chauffage, GB Bois intervient en Seine-et-Marne
            pour l’entretien forestier et paysager.
          </p>
        </div>
      </Reveal>
      <div className="grid gap-4 lg:grid-cols-3">
        {business.services.map((s) => (
          <Reveal key={s.title}>
            <article className="soft-card h-full p-6">
              <h3 className="font-display text-xl font-medium tracking-tightest">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.text}</p>
              <a
                href={business.phoneHref}
                className="mt-5 inline-block text-sm font-medium text-amber hover:underline"
              >
                Demander un devis →
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Extras() {
  const item = business.extras[0];
  return (
    <section className="section-pad mx-auto max-w-7xl py-8">
      <Reveal>
        <div className="soft-card grid overflow-hidden lg:grid-cols-2">
          <div className="relative min-h-[240px]">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-amber">
              Accessoire
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tightest">
              {item.title}
            </h2>
            <p className="mt-2 font-display text-2xl tracking-tightest text-ink">
              {item.price} €{" "}
              <span className="text-base font-sans font-normal text-muted">
                {item.unit}
              </span>
            </p>
            <p className="mt-4 text-muted">{item.blurb}</p>
            <a href="#contact" className="btn-amber mt-6 w-fit">
              En ajouter à ma commande
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Locations() {
  return (
    <section id="adresses" className="section-pad mx-auto max-w-7xl py-10">
      <Reveal>
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-amber">
            Adresses
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tightest sm:text-4xl">
            Siège & dépôt
          </h2>
        </div>
      </Reveal>
      <div className="grid gap-5 lg:grid-cols-2">
        {[business.siege, business.depot].map((place) => (
          <Reveal key={place.label}>
            <article className="soft-card overflow-hidden">
              <div className="aspect-[16/10] w-full bg-page">
                <iframe
                  title={place.label}
                  src={place.mapsEmbed}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-medium tracking-tightest">
                  {place.label}
                </h3>
                <p className="mt-2 text-sm text-muted">{place.address}</p>
                <a
                  href={place.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-medium text-amber hover:underline"
                >
                  Itinéraire Google Maps →
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section-pad mx-auto max-w-7xl py-8">
      <Reveal>
        <div className="soft-card overflow-hidden p-2 sm:p-4">
          <div className="px-4 pb-2 pt-4 sm:px-6">
            <h2 className="font-display text-3xl font-medium tracking-tightest">
              Questions fréquentes
            </h2>
          </div>
          <div className="divide-y divide-ink/5">
            {business.faq.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className="px-4 sm:px-6">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="font-display text-base font-medium tracking-tightest sm:text-lg">
                      {item.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-page text-lg transition ${isOpen ? "rotate-45" : ""}`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  {isOpen ? (
                    <p className="pb-5 text-sm leading-relaxed text-muted">
                      {item.a}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function MidCta() {
  return (
    <section className="section-pad mx-auto max-w-7xl py-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem]">
          <Image
            src={business.photos.midCta}
            alt=""
            width={1400}
            height={560}
            className="h-[360px] w-full object-cover sm:h-[420px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep/85 via-deep/55 to-deep/25" />
          <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12">
            <h2 className="max-w-lg font-display text-3xl font-medium tracking-tightest text-white sm:text-4xl">
              {business.midCta.title}
            </h2>
            <p className="mt-3 max-w-md text-white/80">{business.midCta.text}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="btn-amber">
                Demander un devis
              </a>
              <a href={business.phoneHref} className="btn-glass">
                Appeler
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Contact() {
  const { length, qty, total, formatEuro, nearDepot } = useOrder();
  const [status, setStatus] = useState("");

  return (
    <section id="contact" className="section-pad mx-auto max-w-7xl py-12">
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <div className="space-y-4">
            <h2 className="font-display text-3xl font-medium tracking-tightest sm:text-4xl">
              Contactez GB Bois
            </h2>
            <p className="text-muted">
              Devis gratuit · Seine-et-Marne & Île-de-France. Longueur et volume
              repris automatiquement.
            </p>
            <a
              href={business.phoneHref}
              className="soft-card block p-5 hover:shadow-lift"
            >
              <p className="text-xs uppercase tracking-[0.14em] text-muted">
                Téléphone
              </p>
              <p className="mt-2 font-display text-xl tracking-tightest">
                {business.phone}
              </p>
            </a>
            <a
              href={business.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="soft-card block p-5 hover:shadow-lift"
            >
              <p className="text-xs uppercase tracking-[0.14em] text-muted">
                WhatsApp
              </p>
              <p className="mt-2 font-display text-xl tracking-tightest">
                Écrire sur WhatsApp
              </p>
            </a>
            <a
              href={business.emailHref}
              className="soft-card block p-5 hover:shadow-lift"
            >
              <p className="text-xs uppercase tracking-[0.14em] text-muted">
                Email
              </p>
              <p className="mt-2 break-all font-display text-lg tracking-tightest">
                {business.email}
              </p>
            </a>
            <div className="soft-card p-5">
              <p className="text-xs uppercase tracking-[0.14em] text-muted">
                Votre sélection
              </p>
              <p className="mt-2 font-display text-lg tracking-tightest">
                {length.label} · {qty} {business.unitLabelPlural}
                {nearDepot ? " · proximité Yèbles" : ""}
              </p>
              <p className="font-display text-2xl tracking-tightest text-amber">
                {formatEuro(total)}
              </p>
              <p className="mt-2 text-xs text-muted">{business.depot.address}</p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <form
            className="soft-card grid gap-4 p-6 sm:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              setStatus(
                "Merci — votre demande est enregistrée (démo, non envoyée)."
              );
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm">
                Nom
                <input
                  required
                  name="nom"
                  className="mt-1.5 w-full rounded-2xl border border-ink/10 bg-page px-4 py-3 outline-none focus:ring-2 focus:ring-amber"
                />
              </label>
              <label className="text-sm">
                Prénom
                <input
                  required
                  name="prenom"
                  className="mt-1.5 w-full rounded-2xl border border-ink/10 bg-page px-4 py-3 outline-none focus:ring-2 focus:ring-amber"
                />
              </label>
            </div>
            <label className="text-sm">
              Commune / code postal
              <input
                required
                name="commune"
                className="mt-1.5 w-full rounded-2xl border border-ink/10 bg-page px-4 py-3 outline-none focus:ring-2 focus:ring-amber"
              />
            </label>
            <label className="text-sm">
              Téléphone
              <input
                required
                type="tel"
                name="tel"
                className="mt-1.5 w-full rounded-2xl border border-ink/10 bg-page px-4 py-3 outline-none focus:ring-2 focus:ring-amber"
              />
            </label>
            <label className="text-sm">
              Email
              <input
                required
                type="email"
                name="email"
                className="mt-1.5 w-full rounded-2xl border border-ink/10 bg-page px-4 py-3 outline-none focus:ring-2 focus:ring-amber"
              />
            </label>
            <label className="text-sm">
              Message
              <textarea
                name="message"
                rows={4}
                className="mt-1.5 w-full rounded-2xl border border-ink/10 bg-page px-4 py-3 outline-none focus:ring-2 focus:ring-amber"
                defaultValue={`Je souhaite ${qty} ${business.unitLabelPlural} en ${length.label}.`}
              />
            </label>
            <input type="hidden" name="length" value={length.label} />
            <input type="hidden" name="qty" value={qty} />
            <button type="submit" className="btn-amber mt-2 w-full sm:w-auto">
              Envoyer la demande · {formatEuro(total)}
            </button>
            {status ? (
              <p className="text-sm text-green-700" role="status">
                {status}
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export function StickyOrderBar() {
  const { length, qty, total, formatEuro } = useOrder();
  return (
    <div className="fixed inset-x-3 bottom-3 z-50 sm:hidden">
      <div className="glass flex items-center justify-between gap-3 rounded-full px-4 py-3 shadow-lift">
        <div className="min-w-0">
          <p className="truncate font-display text-sm tracking-tightest">
            {length.label} · {qty} {business.unitLabelPlural}
          </p>
          <p className="text-xs text-muted">{formatEuro(total)}</p>
        </div>
        <a href="#contact" className="btn-amber shrink-0 !px-4 !py-2">
          Commander
        </a>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-8 bg-deep text-white">
      <div className="section-pad mx-auto grid max-w-7xl gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl tracking-tightest">
            {business.brand}{" "}
            <span className="text-amber-light">77</span>
          </p>
          <p className="mt-3 text-sm text-white/60">{business.tagline}</p>
          <p className="mt-4 text-xs text-white/40">{business.footerNote}</p>
          <p className="mt-1 text-xs text-white/40">
            SIRET {business.siret} · TVA {business.tva}
          </p>
        </div>
        <div>
          <p className="font-display text-sm tracking-tightest text-white/50">
            Navigation
          </p>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>
              <a href="#tarifs" className="hover:text-white">
                Tarifs
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#zones" className="hover:text-white">
                Zones
              </a>
            </li>
            <li>
              <a href="#adresses" className="hover:text-white">
                Adresses
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-display text-sm tracking-tightest text-white/50">
            Contact
          </p>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>
              <a href={business.phoneHref}>{business.phone}</a>
            </li>
            <li>
              <a href={business.emailHref}>{business.email}</a>
            </li>
            <li>{business.siege.address}</li>
            <li>{business.depot.address}</li>
            <li>{business.hours}</li>
          </ul>
        </div>
        <div>
          <p className="font-display text-sm tracking-tightest text-white/50">
            Légal
          </p>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>
              <a href="#" className="hover:text-white">
                Mentions légales
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Politique de confidentialité
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} {business.legalName}
      </div>
    </footer>
  );
}
