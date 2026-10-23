import Image from "next/image";
import { business } from "@/lib/business";
import { OrderConfigurator } from "./OrderConfigurator";

export function Hero() {
  return (
    <section id="accueil" className="section-pad mx-auto max-w-7xl pt-4">
      <div className="relative overflow-hidden rounded-[2rem] bg-deep text-white shadow-lift">
        <div className="absolute inset-0">
          <Image
            src={business.photos.hero}
            alt=""
            fill
            priority
            className="object-cover kenburns"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/35 to-deep/25" />
        </div>

        <div className="relative grid gap-10 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-12 lg:px-12 lg:pb-12 lg:pt-20">
          <div className="max-w-xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-deep/55 px-3.5 py-1.5 text-xs font-medium text-white/90 ring-1 ring-white/15 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-light" aria-hidden />
              {business.heroBadge}
            </p>
            <h1 className="font-display text-4xl font-medium leading-[1.05] tracking-tightest sm:text-5xl lg:text-[3.35rem]">
              {business.heroHeadline}
            </h1>
            <p className="mt-5 max-w-md text-base text-white/80 sm:text-lg">
              {business.heroSubtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#tarifs" className="btn-amber">
                Commander
              </a>
              <a href={business.phoneHref} className="btn-glass">
                Appeler
              </a>
              <a
                href="#contact"
                className="px-2 font-display text-sm font-medium tracking-tightest text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
              >
                Demander un devis
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/75">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15">
                <span className="text-amber-light" aria-hidden>
                  ★
                </span>
                {business.rating.value}/5 · {business.rating.count} avis
              </span>
              <span className="text-white/60">Verneuil-l&apos;Étang · dépôt Yèbles</span>
            </div>
          </div>

          <div className="text-ink">
            <OrderConfigurator />
          </div>
        </div>
      </div>
    </section>
  );
}
