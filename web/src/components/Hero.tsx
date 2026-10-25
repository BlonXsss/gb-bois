import Image from "next/image";
import { business } from "@/lib/business";
import { OrderConfigurator } from "./OrderConfigurator";

export function Hero() {
  return (
    <section id="accueil" className="section-pad site-width pt-3 sm:pt-4">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-deep text-white shadow-lift sm:rounded-[2rem]">
        <div className="absolute inset-0">
          <Image
            src={business.photos.hero}
            alt=""
            fill
            priority
            className="object-cover object-[center_35%] kenburns"
            sizes="(max-width: 1280px) 100vw, 1536px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/55 to-deep/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-deep/55 via-transparent to-transparent" />
        </div>

        <div className="relative grid gap-8 px-5 py-10 sm:gap-10 sm:px-8 sm:py-14 lg:grid-cols-[1.12fr_0.88fr] lg:items-end lg:gap-12 lg:px-12 lg:pb-12 lg:pt-[5.5rem]">
          <div className="max-w-xl hero-copy">
            <p className="font-display text-[clamp(2.35rem,7vw,3.65rem)] font-medium leading-[0.95] tracking-tightest text-white">
              {business.brand}
              <span className="ml-2 text-amber-light">77</span>
            </p>
            <h1 className="mt-4 max-w-[18ch] font-display text-[clamp(1.55rem,3.8vw,2.35rem)] font-medium leading-[1.12] tracking-tightest text-white/95">
              {business.heroHeadline}
            </h1>
            <p className="mt-4 max-w-md text-[0.975rem] leading-relaxed text-white/78 sm:mt-5 sm:text-lg sm:leading-relaxed">
              {business.heroSubtitle}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8">
              <a href="#tarifs" className="btn-amber min-w-[9.5rem]">
                Commander
              </a>
              <a href={business.phoneHref} className="btn-glass min-w-[9.5rem]">
                Appeler
              </a>
              <a
                href="#contact"
                className="min-h-[48px] inline-flex items-center px-1 font-display text-sm font-medium tracking-tightest text-white/90 underline decoration-white/35 underline-offset-[6px] transition hover:decoration-white"
              >
                Demander un devis
              </a>
            </div>
            <p className="mt-6 text-sm text-white/68 hero-copy-delay">
              <span className="text-amber-light" aria-hidden>
                ★
              </span>{" "}
              {business.rating.value} · {business.rating.count} avis
              <span className="mx-2 text-white/30" aria-hidden>
                ·
              </span>
              Verneuil-l&apos;Étang · dépôt Yèbles
            </p>
          </div>

          <div className="text-ink hero-copy-delay">
            <OrderConfigurator />
          </div>
        </div>
      </div>
    </section>
  );
}
