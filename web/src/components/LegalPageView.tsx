import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export type LegalNavId = "mentions" | "confidentialite";

const legalNav: { id: LegalNavId; href: string; label: string }[] = [
  { id: "mentions", href: "/mentions-legales/", label: "Mentions légales" },
  {
    id: "confidentialite",
    href: "/politique-confidentialite/",
    label: "Confidentialité",
  },
];

export function LegalPageView({
  title,
  intro,
  active,
  children,
}: {
  title: string;
  intro: string;
  active: LegalNavId;
  children: ReactNode;
}) {
  return (
    <main id="contenu">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1714] via-[#2a241c] to-[#3d3428]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,162,94,0.22),transparent_55%)]" />
        <div className="section-pad site-width relative py-10 sm:py-14 lg:py-16">
          <nav aria-label="Fil d’Ariane" className="text-sm text-white/55">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-white">
                  Accueil
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-amber-light">{title}</li>
            </ol>
          </nav>
          <p className="eyebrow mt-6 !text-amber-light sm:mt-8">Informations légales</p>
          <h1 className="mt-3 max-w-3xl font-display text-[1.85rem] font-medium leading-[1.1] tracking-tightest text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-white/70 sm:mt-5 sm:text-lg">
            {intro}
          </p>
        </div>
      </section>

      <section className="section-pad site-width py-8 sm:py-10">
        <nav
          aria-label="Pages d’information légale"
          className="flex flex-wrap gap-2 border-b border-ink/8 pb-6"
        >
          {legalNav.map((item) => {
            const isActive = item.id === active;
            return (
              <Link
                key={item.id}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive
                    ? "inline-flex min-h-[40px] items-center rounded-full bg-deep px-4 py-2 text-sm text-white"
                    : "inline-flex min-h-[40px] items-center rounded-full border border-ink/10 bg-white px-4 py-2 text-sm text-ink transition hover:border-amber/40"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Reveal>
          <article className="legal-prose mx-auto mt-8 max-w-3xl space-y-8 pb-14 sm:mt-10 sm:pb-16">
            {children}
          </article>
        </Reveal>
      </section>
    </main>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-xl tracking-tightest text-ink sm:text-2xl">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted sm:text-[0.975rem]">
        {children}
      </div>
    </section>
  );
}

export function LegalAddress({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-2xl border border-ink/8 bg-white/90 px-4 py-3.5 text-ink shadow-soft sm:px-5">
      {children}
    </p>
  );
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
