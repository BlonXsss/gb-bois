# Alpine demo → /alpin only (keep main GB Bois site)

**Live:** https://gbbois.fr/alpin/

Upload ONLY `deploy-alpin/alpin/` into document root as `alpin/`.
Do not use full-root `hosting_deploy` (that overwrites the live site).

`web/next.config.ts` sets `basePath` / `assetPrefix` to `/alpin` so assets resolve under the subdirectory.

After auth (`HOSTINGER_API_TOKEN` or OAuth):
1. `hosting_websites_list` → `gbbois.fr` (`u936672062`)
2. `POST /api/hosting/v1/files/upload-urls` with `{ username, domain }`
3. TUS POST+PATCH each file to `{url}/alpin/<rel>?override=true` (`X-Auth`, `X-Auth-Rest`; fix Location with `/rest` prefix if needed)
4. Verify https://gbbois.fr/alpin/ — main site root must stay unchanged
