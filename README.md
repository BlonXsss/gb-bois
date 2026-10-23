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

- `robots: noindex` for confidential client preview
- Hostinger deploy pending MCP OAuth / API token
