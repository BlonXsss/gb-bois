import { business } from "@/lib/business";

type Variant = "callout" | "strip" | "compact" | "dark" | "panel";

const note = business.deliveryFeeNote;

/**
 * Shared delivery-fee reminder (≥ 65 km from Yèbles).
 * Reuses business.deliveryFeeNote — do not invent € amounts.
 */
export function DeliveryFeeNote({
  variant = "callout",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  if (variant === "compact") {
    return (
      <p
        className={`text-xs font-medium leading-snug text-amber sm:text-[0.8rem] ${className}`}
      >
        {note}
      </p>
    );
  }

  if (variant === "dark") {
    return (
      <p
        className={`flex items-start gap-2 text-sm font-medium leading-snug text-amber-light ${className}`}
      >
        <TruckIcon className="mt-0.5 shrink-0 text-amber-light" />
        <span>{note}</span>
      </p>
    );
  }

  if (variant === "panel") {
    return (
      <div
        className={`rounded-2xl border border-amber/35 bg-amber-light/15 px-3.5 py-3 sm:px-4 ${className}`}
        role="note"
      >
        <p className="flex items-start gap-2.5 text-sm font-medium leading-snug text-ink">
          <TruckIcon className="mt-0.5 shrink-0 text-amber" />
          <span>{note}</span>
        </p>
      </div>
    );
  }

  if (variant === "strip") {
    return (
      <div
        className={`flex items-start gap-2.5 border-l-[3px] border-amber bg-amber-light/20 px-3.5 py-3 text-left sm:px-4 sm:py-3.5 ${className}`}
        role="note"
      >
        <TruckIcon className="mt-0.5 shrink-0 text-amber" />
        <p className="text-sm font-medium leading-snug text-ink sm:text-[0.95rem]">
          {note}
        </p>
      </div>
    );
  }

  // callout — strongest treatment for Tarifs / conversion blocks
  return (
    <div
      className={`mx-auto flex max-w-xl items-start gap-3 rounded-[1.25rem] border border-amber/40 bg-gradient-to-br from-amber-light/35 via-amber-light/15 to-white px-4 py-3.5 text-left shadow-[0_8px_24px_-16px_rgba(80,55,20,0.35)] sm:gap-3.5 sm:px-5 sm:py-4 ${className}`}
      role="note"
    >
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber/15 text-amber">
        <TruckIcon />
      </span>
      <div className="min-w-0">
        <p className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-amber">
          Livraison
        </p>
        <p className="mt-1 text-sm font-medium leading-snug text-ink sm:text-[0.95rem]">
          {note}
        </p>
      </div>
    </div>
  );
}

function TruckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M3 7h11v10H3V7zm11 3h4l3 3v4h-7V10z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="7" cy="18.5" r="1.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="18.5" r="1.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
