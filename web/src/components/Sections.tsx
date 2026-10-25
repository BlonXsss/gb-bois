"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
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
    <section className="section-pad site-width section-y">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {business.reassurances.map((r, i) => (
          <Reveal key={r.title} className={`reveal-delay-${(i % 3) + 1}`}>
            <article className="h-full rounded-[1.75rem] bg-white/80 p-6 sm:p-7">
              <IconBox>
                <svg width="20" height="20" viewBox="0 0 24 24">
                  {icons[i]}
                </svg>
              </IconBox>
              <h3 className="font-display text-lg font-medium tracking-tightest sm:text-xl">
                {r.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{r.text}</p>
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
    <section id="tarifs" className="section-pad site-width section-y">
      <Reveal>
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="eyebrow">Tarifs</p>
          <h2 className="display-title mt-3">
            Cinq longueurs. Prix au stère, livré.
          </h2>
          <p className="display-lead mt-4">
            {business.minOrderNote} Remise −{business.nearDiscountEuros} €/stère
            si votre adresse est à moins de {business.nearDiscountKm} km du dépôt
            de Yèbles (sauf bois 1 m).
          </p>
        </div>
      </Reveal>

      <div className="mb-9 flex justify-center">
        <div
          className="inline-grid w-full max-w-md grid-cols-2 gap-1 rounded-[1.25rem] bg-white/90 p-1 shadow-soft sm:w-auto sm:max-w-none"
          role="group"
          aria-label="Tarif de proximité"
        >
          <button
            type="button"
            aria-pressed={!nearDepot}
            onClick={() => setNearDepot(false)}
            className={`min-h-[48px] rounded-[1.05rem] px-4 py-2.5 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber sm:px-5 ${
              !nearDepot ? "bg-ink text-white" : "text-muted hover:text-ink"
            }`}
          >
            Tarif standard
          </button>
          <button
            type="button"
            aria-pressed={nearDepot}
            onClick={() => setNearDepot(true)}
            className={`min-h-[48px] rounded-[1.05rem] px-4 py-2.5 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber sm:px-5 ${
              nearDepot ? "bg-ink text-white" : "text-muted hover:text-ink"
            }`}
          >
            Proximité (−{business.nearDiscountEuros} €)
          </button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-5">
        {business.lengths.map((opt) => {
          const active = opt.id === lengthId;
          const price = nearDepot ? opt.priceNearPerStere : opt.pricePerStere;
          const lineTotal = price * qty;
          return (
            <Reveal key={opt.id}>
              <article
                className={`relative flex h-full flex-col rounded-[1.75rem] bg-white p-5 transition duration-300 sm:p-6 ${
                  active ? "shadow-lift ring-1 ring-ink/10" : "shadow-soft"
                } ${opt.popular && !active ? "ring-1 ring-amber/55" : ""}`}
              >
                {opt.popular ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-light to-amber px-3 py-1 text-[11px] font-medium tracking-wide text-ink">
                    Le plus choisi
                  </span>
                ) : null}
                <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-[1.25rem] bg-page">
                  <Image
                    src={opt.image}
                    alt={`Bois de chauffage ${opt.label}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1280px) 50vw, 20vw"
                  />
                </div>
                <h3 className="font-display text-xl font-medium tracking-tightest">
                  {opt.label}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
                  {opt.useCase}
                </p>
                <p className="mt-5 font-display text-[1.65rem] font-medium tracking-tightest">
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
                    className={`min-h-[44px] rounded-full px-4 py-2.5 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber ${
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
                  <div className="mt-5 border-t border-ink/5 pt-4">
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
    <section className="section-pad site-width section-y">
      <Reveal>
        <div className="overflow-hidden rounded-[1.75rem] bg-white shadow-soft lg:grid lg:grid-cols-2">
          <div className="border-b border-ink/5 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
            <p className="eyebrow">Convertisseur</p>
            <h2 className="mt-3 font-display text-[1.65rem] font-medium tracking-tightest sm:text-3xl">
              Un stère, c’est 1 m³ de bûches d’un mètre bien rangées.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[0.975rem]">
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
                className="mt-4 w-full accent-amber"
              />
              <span className="mt-3 block font-display text-3xl tracking-tightest sm:text-4xl">
                {steres}
              </span>
            </label>

            <p className="mt-7 text-sm font-medium text-ink">Format des bûches</p>
            <div className="mt-3 flex flex-wrap gap-2" role="group">
              {business.lengths.map((opt) => {
                const active = opt.id === lengthId;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setLengthId(opt.id)}
                    className={`min-h-[44px] rounded-full px-4 py-2.5 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber ${
                      active
                        ? "bg-ink text-white"
                        : "bg-page text-muted hover:text-ink"
                    }`}
                  >
                    {opt.label}{" "}
                    <span className="opacity-70">
                      {opt.m3PerStere.toLocaleString("fr-FR")} m³ / stère
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-deep p-6 text-white sm:p-8 lg:p-10">
            <p className="text-sm text-white/55">Volume en vrac</p>
            <p className="mt-2 font-display text-[2.75rem] font-medium tracking-tightest text-amber-light sm:text-5xl">
              ~{m3.toLocaleString("fr-FR")} m³
            </p>
            <p className="mt-3 text-white/72">
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
                  <span className="text-white/68">
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
    <section id="essences" className="section-pad site-width section-y">
      <Reveal>
        <div className="mb-10 max-w-2xl sm:mb-12">
          <p className="eyebrow">Essences</p>
          <h2 className="display-title mt-3">
            Quatre feuillus durs, rien d’autre.
          </h2>
          <p className="display-lead mt-4">
            Chêne, charme, frêne, hêtre. La part de chaque essence suit les
            arrivages.
          </p>
        </div>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {business.species.map((s, i) => (
          <Reveal key={s.name} className={`reveal-delay-${(i % 3) + 1}`}>
            <article className="overflow-hidden rounded-[1.75rem] bg-white/90 p-5 sm:p-6">
              <div className="mb-5 relative h-[5.5rem] w-[5.5rem]">
                <Image
                  src={s.image}
                  alt={s.name}
                  fill
                  className="object-contain"
                  sizes="88px"
                />
              </div>
              <h3 className="font-display text-xl font-medium tracking-tightest">
                {s.name}
              </h3>
              <p className="mt-1 text-xs italic text-muted">{s.latin}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.blurb}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Zones() {
  const [active, setActive] = useState(business.zones[0].code);
  const zone = business.zones.find((z) => z.code === active) ?? business.zones[0];

  return (
    <section id="zones" className="section-pad site-width section-y">
      <Reveal>
        <div className="overflow-hidden rounded-[1.75rem] border border-ink/8 bg-white shadow-soft sm:rounded-[2rem]">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="bg-deep px-5 py-10 text-white sm:px-8 sm:py-12 lg:px-10">
              <p className="eyebrow !text-amber-light">Zones de livraison</p>
              <h2 className="mt-3 font-display text-[1.85rem] font-medium tracking-tightest sm:text-4xl">
                Livraison en {business.region}
              </h2>
              <p className="mt-4 max-w-md text-[0.975rem] leading-relaxed text-white/68 sm:text-base">
                Départ dépôt Yèbles. Choisissez votre département — les communes
                listées sont des exemples. Une commune voisine ? On confirme au
                devis.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {business.zones.map((z) => {
                  const on = z.code === active;
                  return (
                    <button
                      key={z.code}
                      type="button"
                      onClick={() => setActive(z.code)}
                      className={`min-h-[44px] rounded-full px-4 py-2 font-display text-sm tracking-tightest transition ${
                        on
                          ? "bg-amber-light text-ink shadow-amber"
                          : "bg-white/10 text-white/85 hover:bg-white/18"
                      }`}
                      aria-pressed={on}
                    >
                      {z.code}
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/8 px-4 py-3.5">
                  <p className="text-[0.7rem] uppercase tracking-[0.16em] text-white/45">
                    Remise proximité
                  </p>
                  <p className="mt-1 font-display text-lg tracking-tightest text-amber-light">
                    −{business.nearDiscountEuros}&nbsp;€ / stère
                  </p>
                  <p className="mt-1 text-sm text-white/55">
                    &lt; {business.nearDiscountKm} km de Yèbles
                  </p>
                </div>
                <div className="rounded-2xl bg-white/8 px-4 py-3.5">
                  <p className="text-[0.7rem] uppercase tracking-[0.16em] text-white/45">
                    Confirmer
                  </p>
                  <a
                    href={business.phoneHref}
                    className="mt-1 inline-flex min-h-[40px] items-center font-display text-lg tracking-tightest text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
                  >
                    {business.phone}
                  </a>
                  <p className="mt-1 text-sm text-white/55">
                    Devis zone en ~5 min
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between px-5 py-10 sm:px-8 sm:py-12 lg:px-10">
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-5xl font-medium tracking-tightest text-ink sm:text-6xl">
                    {zone.code}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-medium tracking-tightest text-ink">
                      {zone.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted">
                      {zone.towns.length} communes d’exemple
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-2.5">
                  {zone.towns.map((t) => (
                    <span
                      key={t}
                      className="inline-flex min-h-[40px] items-center rounded-full border border-ink/8 bg-page px-4 py-2 text-sm font-medium text-ink"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <p className="mt-10 border-t border-ink/8 pt-6 text-sm leading-relaxed text-muted">
                {business.deliveryLine} · livraison depuis{" "}
                <span className="text-ink">{business.depot.address}</span>
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Gallery() {
  const slides = business.photos.gallery;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [perView, setPerView] = useState(1);
  const count = slides.length;
  const maxIndex = Math.max(0, count - perView);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerView(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    setIndex((i) => Math.min(i, Math.max(0, count - perView)));
  }, [perView, count]);

  const go = useCallback(
    (dir: 1 | -1) => {
      setIndex((i) => {
        const next = i + dir;
        if (next < 0) return maxIndex;
        if (next > maxIndex) return 0;
        return next;
      });
    },
    [maxIndex]
  );

  useEffect(() => {
    if (paused || count <= perView) return;
    const id = window.setInterval(() => go(1), 4200);
    return () => window.clearInterval(id);
  }, [paused, count, perView, go]);

  const stepPct = 100 / perView;

  return (
    <section id="galerie" className="section-pad site-width section-y">
      <Reveal>
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Galerie</p>
            <h2 className="display-title mt-3">Le bois, tel qu’il est stocké</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Images précédentes"
              onClick={() => go(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white text-ink shadow-soft transition hover:border-ink/20"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M15 6l-6 6 6 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Images suivantes"
              onClick={() => go(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white text-ink shadow-soft transition hover:border-ink/20"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M9 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${index * stepPct}%)` }}
            >
              {slides.map((g) => (
                <figure
                  key={g.src}
                  className="img-zoom relative shrink-0 overflow-hidden rounded-[1.5rem] bg-deep/5 px-1.5 sm:px-2"
                  style={{ width: `${stepPct}%` }}
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.35rem] sm:aspect-[3/4]">
                    <Image
                      src={g.src}
                      alt={g.caption}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep/75 via-transparent to-transparent" />
                    <figcaption className="absolute inset-x-0 bottom-0 px-4 pb-4 pt-12">
                      <span className="font-display text-base tracking-tightest text-white sm:text-lg">
                        {g.caption}
                      </span>
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center gap-1.5 sm:mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Position ${i + 1}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === index
                    ? "w-7 bg-amber"
                    : "w-2.5 bg-ink/15 hover:bg-ink/30"
                }`}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function About() {
  return (
    <section id="apropos" className="section-pad site-width section-y">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <div className="img-zoom relative overflow-hidden rounded-[1.75rem] sm:rounded-[2rem]">
            <Image
              src={business.photos.about}
              alt="Bois de chauffage"
              width={900}
              height={1100}
              className="h-full min-h-[380px] w-full object-cover sm:min-h-[420px]"
            />
            <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4">
              <div className="glass grid grid-cols-2 gap-2 rounded-[1.35rem] p-3.5 text-center sm:grid-cols-4 sm:p-4">
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
            <p className="eyebrow">{business.brand}</p>
            <h2 className="display-title mt-3">{business.about.title}</h2>
            {business.about.paragraphs.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="mt-4 text-[0.975rem] leading-relaxed text-muted sm:text-base"
              >
                {p}
              </p>
            ))}
            <div className="mt-7 flex flex-wrap gap-2">
              <span className="chip">{business.siege.address}</span>
              <span className="chip">{business.hours}</span>
              <span className="chip">
                ★ {business.rating.value} · {business.rating.count} avis
              </span>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
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
    <section className="section-pad site-width section-y">
      <Reveal>
        <div className="mb-8 max-w-2xl sm:mb-10">
          <p className="eyebrow">Comment ça marche</p>
          <h2 className="display-title mt-3">
            Quatre étapes jusqu’à votre foyer
          </h2>
        </div>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {business.process.map((p, i) => (
          <Reveal key={p.step} className={`reveal-delay-${(i % 3) + 1}`}>
            <article className="h-full rounded-[1.75rem] bg-white/85 p-6 sm:p-7">
              <p className="font-display text-sm tracking-tightest text-amber">
                {p.step}
              </p>
              <h3 className="mt-3 font-display text-xl font-medium tracking-tightest">
                {p.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{p.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="section-pad site-width section-y">
      <Reveal>
        <div className="mb-8 max-w-2xl sm:mb-10">
          <p className="eyebrow">Services</p>
          <h2 className="display-title mt-3">Bois, élagage & abattage</h2>
          <p className="display-lead mt-4">
            Au-delà du bois de chauffage, GB Bois intervient en Seine-et-Marne
            pour l’entretien forestier et paysager.
          </p>
        </div>
      </Reveal>
      <div className="grid gap-4 lg:grid-cols-3 lg:gap-5">
        {business.services.map((s) => (
          <Reveal key={s.title}>
            <article className="h-full rounded-[1.75rem] bg-white/90 p-6 sm:p-7">
              <h3 className="font-display text-xl font-medium tracking-tightest sm:text-[1.35rem]">
                {s.title}
              </h3>
              <p className="mt-3.5 text-sm leading-relaxed text-muted">{s.text}</p>
              <a
                href={business.phoneHref}
                className="mt-6 inline-flex min-h-[44px] items-center text-sm font-medium text-amber hover:underline"
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
    <section className="section-pad site-width section-y">
      <Reveal>
        <div className="grid overflow-hidden rounded-[1.75rem] bg-white shadow-soft lg:grid-cols-2">
          <div className="relative flex min-h-[240px] items-center justify-center bg-page/80 px-8 py-10 sm:min-h-[280px] sm:px-12">
            <div className="relative h-[180px] w-[180px] sm:h-[220px] sm:w-[220px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain drop-shadow-sm"
                sizes="220px"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
            <p className="eyebrow">Accessoire</p>
            <h2 className="mt-3 font-display text-[1.75rem] font-medium tracking-tightest sm:text-3xl">
              {item.title}
            </h2>
            <p className="mt-3 font-display text-2xl tracking-tightest text-ink">
              {item.price} €{" "}
              <span className="text-base font-sans font-normal text-muted">
                {item.unit}
              </span>
            </p>
            <p className="mt-4 text-[0.975rem] leading-relaxed text-muted">
              {item.blurb}
            </p>
            <a href="#contact" className="btn-amber mt-7 w-fit">
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
    <section id="adresses" className="section-pad site-width section-y">
      <Reveal>
        <div className="mb-8 max-w-2xl sm:mb-10">
          <p className="eyebrow">Adresses</p>
          <h2 className="display-title mt-3">Siège & dépôt</h2>
        </div>
      </Reveal>
      <div className="grid gap-5 lg:grid-cols-2">
        {[business.siege, business.depot].map((place) => (
          <Reveal key={place.label}>
            <article className="overflow-hidden rounded-[1.75rem] bg-white shadow-soft">
              <div className="aspect-[16/10] w-full bg-page">
                <iframe
                  title={place.label}
                  src={place.mapsEmbed}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-display text-xl font-medium tracking-tightest">
                  {place.label}
                </h3>
                <p className="mt-2 text-sm text-muted">{place.address}</p>
                <a
                  href={place.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-[44px] items-center text-sm font-medium text-amber hover:underline"
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
    <section id="faq" className="section-pad site-width section-y">
      <Reveal>
        <div className="overflow-hidden rounded-[1.75rem] bg-white p-2 shadow-soft sm:p-4">
          <div className="px-4 pb-2 pt-5 sm:px-6 sm:pt-6">
            <p className="eyebrow">FAQ</p>
            <h2 className="display-title mt-3">Questions fréquentes</h2>
          </div>
          <div className="divide-y divide-ink/5">
            {business.faq.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className="px-4 sm:px-6">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber sm:py-6"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="font-display text-[1.05rem] font-medium tracking-tightest sm:text-lg">
                      {item.q}
                    </span>
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-page text-lg transition duration-300 ${isOpen ? "rotate-45" : ""}`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  {isOpen ? (
                    <p className="pb-5 text-sm leading-relaxed text-muted sm:pb-6">
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
    <section className="section-pad site-width section-y">
      <Reveal>
        <div className="img-zoom relative overflow-hidden rounded-[1.75rem] sm:rounded-[2rem]">
          <Image
            src={business.photos.midCta}
            alt=""
            width={1400}
            height={560}
            className="h-[340px] w-full object-cover sm:h-[420px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep/88 via-deep/55 to-deep/20" />
          <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 lg:px-14">
            <h2 className="max-w-lg font-display text-[1.75rem] font-medium tracking-tightest text-white sm:text-4xl">
              {business.midCta.title}
            </h2>
            <p className="mt-4 max-w-md text-[0.975rem] leading-relaxed text-white sm:text-base">
              {business.midCta.text}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={business.phoneHref} className="btn-amber">
                Appeler — devis ~5 min
              </a>
              <a href={business.emailHref} className="btn-glass">
                Devis email · 24 h
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
    <section id="contact" className="section-pad site-width section-y">
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
        <Reveal>
          <div className="space-y-5">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="display-title">Contactez GB Bois</h2>
              <p className="display-lead mt-3">
                Pour un devis rapide, appelez-nous. Par email, réponse sous 24 h.
              </p>
            </div>

            <a
              href={business.phoneHref}
              className="group relative block overflow-hidden rounded-[1.75rem] bg-deep p-6 text-white shadow-lift transition duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:p-7"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,162,94,0.28),transparent_55%)]" />
              <div className="relative flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-light text-ink transition duration-300 group-hover:scale-105">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M6.6 10.8c1.4 2.7 3.9 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11.4 21 3 12.6 3 2.7c0-.6.4-1 1-1H7c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.2 1.1l-2.8 2.2z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-amber-light">
                    Téléphone — le plus rapide
                  </p>
                  <p className="mt-2 font-display text-2xl tracking-tightest sm:text-[1.85rem]">
                    {business.phone}
                  </p>
                  <p className="mt-2 text-sm text-white/70">
                    {business.phoneDevisNote}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-amber-light transition group-hover:gap-2.5">
                    Appeler maintenant
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={business.emailHref}
                className="soft-card soft-card-interactive flex gap-3 p-4 sm:p-5"
              >
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-page text-ink">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path
                      d="M4 6h16v12H4V6zm0 0l8 7 8-7"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block text-[0.7rem] uppercase tracking-[0.16em] text-muted">
                    Email · 24 h
                  </span>
                  <span className="mt-1 block font-display text-[0.95rem] tracking-tightest text-ink">
                    Écrire par email
                  </span>
                  <span className="mt-1 block text-xs text-muted">
                    Réponse sous 24 h
                  </span>
                </span>
              </a>

              <a
                href={business.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="soft-card soft-card-interactive flex gap-3 p-4 sm:p-5"
              >
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/12 text-[#128C7E]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.76.46 3.48 1.34 5L2 22l5.25-1.38a9.86 9.86 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.79 14.18c-.24.68-1.4 1.25-1.93 1.33-.49.07-1.12.1-1.81-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.93-4.36-.14-.19-1.15-1.53-1.15-2.92 0-1.39.73-2.07.99-2.36.26-.29.57-.36.76-.36h.55c.18 0 .42-.07.65.5.24.58.81 2 .88 2.14.07.14.12.31.02.5-.1.19-.14.31-.28.48-.14.17-.3.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.44.12.6-.07.16-.19.7-.82.89-1.1.19-.28.38-.23.64-.14.26.1 1.66.78 1.95.93.28.14.47.21.54.33.07.12.07.68-.17 1.36z" />
                  </svg>
                </span>
                <span>
                  <span className="block text-[0.7rem] uppercase tracking-[0.16em] text-muted">
                    WhatsApp
                  </span>
                  <span className="mt-1 block font-display text-[0.95rem] tracking-tightest text-ink">
                    Écrire maintenant
                  </span>
                  <span className="mt-1 block text-xs text-muted">
                    Message direct
                  </span>
                </span>
              </a>
            </div>

            <div className="flex items-center gap-3 rounded-[1.35rem] border border-ink/8 bg-white/80 px-4 py-3.5 backdrop-blur-sm sm:px-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-page text-ink">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </span>
              <div>
                <p className="font-display text-base tracking-tightest text-ink">
                  {business.hours}
                </p>
                <p className="text-sm text-muted">
                  Appels et devis acceptés pendant ces horaires
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[1.75rem] border border-amber/30 bg-gradient-to-br from-amber-light/40 via-white to-white p-5 shadow-[0_10px_30px_-18px_rgba(80,55,20,0.35)] sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[0.7rem] uppercase tracking-[0.16em] text-amber">
                    Votre sélection
                  </p>
                  <p className="mt-2 font-display text-xl tracking-tightest text-ink">
                    {length.label} · {qty} {business.unitLabelPlural}
                  </p>
                  {nearDepot ? (
                    <p className="mt-1 text-sm text-muted">Proximité Yèbles (−3 €)</p>
                  ) : null}
                </div>
                <p className="font-display text-2xl tracking-tightest text-amber sm:text-3xl">
                  {formatEuro(total)}
                </p>
              </div>
              <p className="mt-4 flex items-center gap-2 border-t border-ink/8 pt-3 text-xs text-muted">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0 text-amber">
                  <path d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.6" />
                </svg>
                Livraison depuis {business.depot.address}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <form
            className="soft-card grid gap-4 p-6 sm:gap-5 sm:p-8"
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
                  className="mt-2 w-full rounded-2xl border border-ink/10 bg-page px-4 py-3.5 outline-none focus:ring-2 focus:ring-amber"
                />
              </label>
              <label className="text-sm">
                Prénom
                <input
                  required
                  name="prenom"
                  className="mt-2 w-full rounded-2xl border border-ink/10 bg-page px-4 py-3.5 outline-none focus:ring-2 focus:ring-amber"
                />
              </label>
            </div>
            <label className="text-sm">
              Commune / code postal
              <input
                required
                name="commune"
                className="mt-2 w-full rounded-2xl border border-ink/10 bg-page px-4 py-3.5 outline-none focus:ring-2 focus:ring-amber"
              />
            </label>
            <label className="text-sm">
              Téléphone
              <input
                required
                type="tel"
                name="tel"
                className="mt-2 w-full rounded-2xl border border-ink/10 bg-page px-4 py-3.5 outline-none focus:ring-2 focus:ring-amber"
              />
            </label>
            <label className="text-sm">
              Email
              <input
                required
                type="email"
                name="email"
                className="mt-2 w-full rounded-2xl border border-ink/10 bg-page px-4 py-3.5 outline-none focus:ring-2 focus:ring-amber"
              />
            </label>
            <label className="text-sm">
              Message
              <textarea
                name="message"
                rows={4}
                className="mt-2 w-full rounded-2xl border border-ink/10 bg-page px-4 py-3.5 outline-none focus:ring-2 focus:ring-amber"
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
    <div
      className="fixed inset-x-3 z-50 sm:hidden"
      style={{ bottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="glass flex items-center justify-between gap-3 rounded-full px-3.5 py-2.5 shadow-lift">
        <div className="min-w-0 pl-1">
          <p className="truncate font-display text-sm tracking-tightest">
            {length.label} · {qty} {business.unitLabelPlural}
          </p>
          <p className="text-xs text-muted">{formatEuro(total)}</p>
        </div>
        <a
          href="#contact"
          className="btn-amber shrink-0 !min-h-[44px] !px-4 !py-2.5"
        >
          Commander
        </a>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-4 bg-deep text-white sm:mt-8">
      <div className="section-pad site-width grid gap-10 py-12 sm:grid-cols-2 sm:py-16 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl tracking-tightest sm:text-2xl">
            {business.brand}{" "}
            <span className="text-amber-light">77</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/58">
            {business.tagline}
          </p>
          <p className="mt-5 text-xs text-white/38">{business.footerNote}</p>
          <p className="mt-1 text-xs text-white/38">
            SIRET {business.siret} · TVA {business.tva}
          </p>
        </div>
        <div>
          <p className="font-display text-sm tracking-tightest text-white/45">
            Navigation
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/78">
            <li>
              <a href="#tarifs" className="inline-flex min-h-[40px] items-center hover:text-white">
                Tarifs
              </a>
            </li>
            <li>
              <a href="#services" className="inline-flex min-h-[40px] items-center hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#zones" className="inline-flex min-h-[40px] items-center hover:text-white">
                Zones
              </a>
            </li>
            <li>
              <a href="#adresses" className="inline-flex min-h-[40px] items-center hover:text-white">
                Adresses
              </a>
            </li>
            <li>
              <a href="#contact" className="inline-flex min-h-[40px] items-center hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-display text-sm tracking-tightest text-white/45">
            Contact
          </p>
          <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-white/78">
            <li>
              <a href={business.phoneHref} className="inline-flex min-h-[40px] items-center">
                {business.phone}
              </a>
            </li>
            <li>
              <a href={business.emailHref} className="break-all">
                {business.email}
              </a>
            </li>
            <li>{business.siege.address}</li>
            <li>{business.depot.address}</li>
            <li>{business.hours}</li>
          </ul>
        </div>
        <div>
          <p className="font-display text-sm tracking-tightest text-white/45">
            Légal
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-white/78">
            <li>
              <a href="#" className="inline-flex min-h-[40px] items-center hover:text-white">
                Mentions légales
              </a>
            </li>
            <li>
              <a href="#" className="inline-flex min-h-[40px] items-center hover:text-white">
                Politique de confidentialité
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/38 safe-bottom">
        <p>
          © {new Date().getFullYear()} {business.legalName}
        </p>
        <p className="mt-2">
          Website created by{" "}
          <a
            href="https://proagency.online"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/55 underline-offset-2 transition hover:text-amber-light hover:underline"
          >
            proagency.online
          </a>
        </p>
      </div>
    </footer>
  );
}
