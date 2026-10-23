"use client";

import { business } from "@/lib/business";
import { useOrder } from "@/lib/order-context";
import { QtyControl } from "./QtyControl";

export function OrderConfigurator({
  variant = "hero",
}: {
  variant?: "hero" | "inline";
}) {
  const { lengthId, length, setLengthId, total, formatEuro, m3Approx, qty } =
    useOrder();

  return (
    <div
      className={
        variant === "hero"
          ? "glass w-full rounded-[1.75rem] p-5 shadow-lift sm:p-6"
          : "soft-card p-5 sm:p-6"
      }
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        <div>
          <p className="font-display text-lg font-medium tracking-tightest text-ink">
            Composer ma commande
          </p>
          <p className="mt-1 text-sm text-muted">Prix livré dans nos zones</p>
        </div>
        <span className="chip shrink-0">Prix livré</span>
      </div>

      <div
        className="mb-5 grid grid-cols-3 gap-2 rounded-full bg-page p-1"
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
              className={`rounded-full px-2 py-2.5 font-display text-sm font-medium tracking-tightest transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber ${
                active
                  ? "bg-white text-ink shadow-soft"
                  : "text-muted hover:text-ink"
              }`}
            >
              {opt.cm}
              <span className="ml-0.5 text-xs font-sans font-normal">cm</span>
            </button>
          );
        })}
      </div>

      <div className="mb-4 flex items-end justify-between gap-3">
        <div>
          <p className="font-display text-sm tracking-tightest text-muted">
            {length.popular ? "Le plus choisi" : length.label}
          </p>
          <p className="font-display text-2xl font-medium tracking-tightest text-ink">
            {formatEuro(length.pricePerStere)}
            <span className="ml-1 text-sm font-sans font-normal text-muted">
              {business.priceUnitSuffix}
            </span>
          </p>
        </div>
        <QtyControl label={business.unitLabelPlural} />
      </div>

      <div className="mb-5 flex items-baseline justify-between border-t border-ink/5 pt-4">
        <span className="text-sm text-muted">Total</span>
        <div className="text-right">
          <p className="font-display text-3xl font-medium tracking-tightest text-ink">
            {formatEuro(total)}
          </p>
          <p className="text-xs text-muted">
            {qty} {business.unitLabelPlural} · ≈ {m3Approx.toLocaleString("fr-FR")} m³
            en vrac
          </p>
        </div>
      </div>

      <a href="#contact" className="btn-slate w-full">
        Commander ce volume
      </a>
    </div>
  );
}
