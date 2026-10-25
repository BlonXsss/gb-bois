"use client";

import { business } from "@/lib/business";
import { useOrder } from "@/lib/order-context";
import { QtyControl } from "./QtyControl";

export function OrderConfigurator() {
  const {
    lengthId,
    length,
    setLengthId,
    total,
    unitPrice,
    formatEuro,
    m3Approx,
    qty,
    nearDepot,
    setNearDepot,
  } = useOrder();

  return (
    <div className="glass w-full rounded-[1.65rem] p-5 shadow-lift sm:rounded-[1.75rem] sm:p-6">
      <div className="mb-5">
        <p className="font-display text-lg font-medium tracking-tightest text-ink sm:text-xl">
          Composer ma commande
        </p>
        <p className="mt-1.5 text-sm text-muted">Prix au stère · livré IDF</p>
      </div>

      <div
        className="mb-4 grid grid-cols-2 gap-1 rounded-[1.15rem] bg-page/90 p-1"
        role="group"
        aria-label="Tarif de proximité"
      >
        <button
          type="button"
          aria-pressed={!nearDepot}
          onClick={() => setNearDepot(false)}
          className={`min-h-[44px] rounded-[1rem] px-3 py-2.5 text-xs font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber sm:text-sm ${
            !nearDepot ? "bg-white text-ink shadow-soft" : "text-muted"
          }`}
        >
          Tarif standard
        </button>
        <button
          type="button"
          aria-pressed={nearDepot}
          onClick={() => setNearDepot(true)}
          className={`min-h-[44px] rounded-[1rem] px-3 py-2.5 text-xs font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber sm:text-sm ${
            nearDepot ? "bg-white text-ink shadow-soft" : "text-muted"
          }`}
        >
          −{business.nearDiscountEuros} € &lt; {business.nearDiscountKm} km
        </button>
      </div>

      <div
        className="mb-5 flex gap-1 overflow-x-auto rounded-[1.15rem] bg-page/90 p-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="group"
        aria-label="Longueur des bûches"
      >
        {business.lengths.map((opt) => {
          const active = opt.id === lengthId;
          return (
            <button
              key={opt.id}
              type="button"
              aria-pressed={active}
              onClick={() => setLengthId(opt.id)}
              className={`min-h-[44px] shrink-0 rounded-[1rem] px-3.5 py-2.5 font-display text-sm font-medium tracking-tightest transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber ${
                active
                  ? "bg-white text-ink shadow-soft"
                  : "text-muted hover:text-ink"
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      <div className="mb-5 flex items-end justify-between gap-3">
        <div>
          <p className="font-display text-sm tracking-tightest text-muted">
            {length.popular ? "Le plus choisi · " : ""}
            {length.label}
            {nearDepot && length.priceNearPerStere < length.pricePerStere
              ? " · proximité"
              : ""}
          </p>
          <p className="mt-0.5 font-display text-[1.65rem] font-medium tracking-tightest text-ink sm:text-3xl">
            {formatEuro(unitPrice)}
            <span className="ml-1 text-sm font-sans font-normal text-muted">
              {business.priceUnitSuffix}
            </span>
          </p>
          {nearDepot && length.priceNearPerStere < length.pricePerStere ? (
            <p className="text-xs text-muted line-through">
              {formatEuro(length.pricePerStere)}
            </p>
          ) : null}
        </div>
        <QtyControl label={business.unitLabelPlural} />
      </div>

      <div className="mb-5 flex items-baseline justify-between border-t border-ink/6 pt-4">
        <span className="text-sm text-muted">Total</span>
        <div className="text-right">
          <p className="font-display text-[1.85rem] font-medium tracking-tightest text-ink sm:text-3xl">
            {formatEuro(total)}
          </p>
          <p className="mt-0.5 text-xs text-muted">
            {qty} {business.unitLabelPlural} · ≈{" "}
            {m3Approx.toLocaleString("fr-FR")} m³ en vrac
          </p>
        </div>
      </div>

      <a href="#contact" className="btn-slate w-full">
        Commander ce volume
      </a>
      <p className="mt-3.5 text-center text-[11px] leading-snug text-muted sm:text-xs">
        {business.minOrderNote}
      </p>
    </div>
  );
}
