"use client";

import { useEffect, useState } from "react";
import { business } from "@/lib/business";

const links = [
  { href: "#accueil", label: "Accueil" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#zones", label: "Zones" },
  { href: "#galerie", label: "Galerie" },
  { href: "#apropos", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

function LogoMark() {
  return (
    <span
      className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-amber-light"
      aria-hidden
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 18L12 5l8 13H4z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="M8 18h8" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    </span>
  );
}

export function TopBar() {
  return (
    <div className="bg-deep text-white/90">
      <div className="section-pad mx-auto flex max-w-7xl items-center justify-between gap-4 py-2 text-xs sm:text-sm">
        <a href={business.phoneHref} className="font-medium hover:text-white">
          {business.phone}
        </a>
        <p className="truncate text-right text-white/70">
          Livraison <span className="text-white/90">{business.deliveryLine}</span>
        </p>
      </div>
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="section-pad sticky top-3 z-50 mx-auto max-w-7xl">
        <header
          className={`flex items-center justify-between gap-3 rounded-full px-3 py-2.5 shadow-soft transition sm:px-4 ${
            scrolled ? "glass" : "bg-white/90"
          }`}
        >
          <a href="#accueil" className="flex items-center gap-2.5 pl-1">
            <LogoMark />
            <span className="font-display text-sm font-medium tracking-tightest text-ink sm:text-base">
              {business.brand}
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-muted transition hover:bg-page hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href={business.phoneHref} className="btn-amber hidden sm:inline-flex">
              Appeler
            </a>
            <button
              type="button"
              className="btn-slate lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
            >
              Menu
            </button>
          </div>
        </header>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[70] flex flex-col bg-deep text-white"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
        >
          <div className="flex items-center justify-between px-5 py-4">
            <span className="font-display text-lg tracking-tightest">
              {business.brand}
            </span>
            <button
              type="button"
              className="rounded-full border border-white/20 px-4 py-2 text-sm"
              onClick={() => setOpen(false)}
            >
              Fermer
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center gap-2 px-6">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 border-b border-white/10 py-4 font-display text-3xl tracking-tightest"
              >
                <span className="text-sm text-white/40">0{i + 1}</span>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="p-6">
            <a href={business.phoneHref} className="btn-amber w-full">
              Appeler · {business.phone}
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
