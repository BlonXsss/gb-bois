# GB Bois 77 — Démo Alpin (Next.js)

One-page marketing site cloning the **Alpin** visual system from [eurlbardhi.fr/alpin](https://eurlbardhi.fr/alpin/), fed by `web/src/lib/business.ts`.

## Run

```bash
cd web
npm install
npm run dev
# or production:
npm run build && PORT=43123 npm start
```

Open http://127.0.0.1:43123/

## Swap brand

Edit only `web/src/lib/business.ts` — UI reads that config.

## Notes

- SEO zone landings restored (`/bois-de-chauffage-*-77|78|91…` + Île-de-France) with indexable metadata, sitemap and JSON-LD
- Hostinger deploy pending MCP OAuth / API token
