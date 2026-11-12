"use client";

import { useEffect, useState } from "react";
import { useOrder } from "@/lib/order-context";
import { business } from "@/lib/business";

export function QtyControl({
  label,
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  const { qty, inc, dec } = useOrder();
  const [pop, setPop] = useState(false);

  useEffect(() => {
    setPop(true);
    const t = setTimeout(() => setPop(false), 280);
    return () => clearTimeout(t);
  }, [qty]);

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <button
        type="button"
        onClick={dec}
        disabled={qty <= business.minOrderSteres}
        aria-label="Diminuer la quantité"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-page text-lg font-medium text-ink transition hover:bg-white disabled:opacity-40"
      >
        −
      </button>
      <span
        className={`min-w-[3.75rem] text-center font-display text-2xl font-medium tracking-tightest tabular-nums ${pop ? "qty-pop" : ""}`}
        aria-live="polite"
      >
        {qty}
        {label ? (
          <span className="ml-1 text-sm font-sans font-normal text-muted">
            {label}
          </span>
        ) : null}
      </span>
      <button
        type="button"
        onClick={inc}
        disabled={qty >= business.maxOrderSteres}
        aria-label="Augmenter la quantité"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-page text-lg font-medium text-ink transition hover:bg-white disabled:opacity-40"
      >
        +
      </button>
    </div>
  );
}
