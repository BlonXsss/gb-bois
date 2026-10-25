"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { business } from "@/lib/business";

const links = [
  { href: "#accueil", label: "Accueil" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#services", label: "Services" },
  { href: "#zones", label: "Zones" },
  { href: "#galerie", label: "Galerie" },
  { href: "#apropos", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

function LogoMark({ size = 64 }: { size?: number }) {
  return (
    <span
      className="relative shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-ink/8"
      style={{ width: size, height: size }}
    >
      <Image
        src={business.logo}
        alt=""
        fill
        className="object-contain p-[2px]"
        sizes={`${size}px`}
        priority
      />
    </span>
  );
}

export function TopBar() {
  return (
    <div className="bg-deep text-white/90">
      <div className="section-pad site-width flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5 py-2.5 text-xs sm:text-sm">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <a
            href={business.phoneHref}
            className="min-h-[44px] inline-flex items-center font-medium tracking-wide hover:text-white"
          >
            {business.phone}
          </a>
          <span className="hidden text-white/35 sm:inline" aria-hidden>
            ·
          </span>
          <a
            href={business.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-[44px] items-center text-white/72 hover:text-white sm:inline-flex"
          >
            WhatsApp
          </a>
        </div>
        <p className="max-w-[58%] truncate text-right text-white/65 sm:max-w-none">
          Dépôt Yèbles · Livraison{" "}
          <span className="text-white/88">{business.deliveryLine}</span>
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
      <div className="section-pad site-width sticky top-[max(1rem,env(safe-area-inset-top))] z-50 mt-1 sm:mt-2 sm:top-6">
        <header
          className={`header-pill flex items-center justify-between gap-3 rounded-full px-2.5 py-1.5 shadow-soft sm:px-4 sm:py-2 ${
            scrolled
              ? "glass border border-white/60"
              : "border border-white/40 bg-white/88 backdrop-blur-md"
          }`}
        >
          <a
            href="#accueil"
            className="flex min-h-[48px] items-center gap-2.5 pl-0.5"
          >
            <LogoMark />
            <span className="font-display text-[0.95rem] font-medium tracking-tightest text-ink sm:text-base">
              {business.brand}
              <span className="ml-1 text-amber">77</span>
            </span>
          </a>

          <nav
            className="hidden items-center gap-0.5 xl:flex"
            aria-label="Principal"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3.5 py-2.5 text-sm font-medium text-muted transition hover:bg-page/80 hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={business.phoneHref}
              className="btn-amber !min-h-[44px] !px-4 !py-2.5 hidden sm:inline-flex"
            >
              Appeler · devis
            </a>
            <button
              type="button"
              className="btn-slate !min-h-[44px] !px-4 !py-2.5 xl:hidden"
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
          style={{ paddingTop: "env(safe-area-inset-top)" }}
        >
          <div className="flex items-center justify-between px-5 py-4">
            <span className="flex items-center gap-2.5 font-display text-lg tracking-tightest">
              <LogoMark size={56} />
              {business.brand}
              <span className="text-amber-light">77</span>
            </span>
            <button
              type="button"
              className="min-h-[48px] rounded-full border border-white/20 px-5 py-2.5 text-sm"
              onClick={() => setOpen(false)}
            >
              Fermer
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center gap-1 px-6">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[56px] items-baseline gap-4 border-b border-white/10 py-4 font-display text-[1.85rem] tracking-tightest sm:text-3xl"
              >
                <span className="w-7 text-sm text-white/35">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {l.label}
              </a>
            ))}
          </nav>
          <div
            className="grid gap-3 p-6 safe-bottom"
            style={{ paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))" }}
          >
            <a href={business.phoneHref} className="btn-amber w-full">
              Appeler · {business.phone}
            </a>
            <a
              href={business.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass w-full text-center"
            >
              WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
