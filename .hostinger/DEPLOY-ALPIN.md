# GB Bois Alpine → replace live site root

**Preview first**, then deploy to https://gbbois.fr/ (document root).

This build is a static export of `web/` (`output: "export"`). Serve `web/out/` locally to review before any Hostinger write.

## Preview (local / tunnel)

```bash
cd web && npm run build
npx --yes serve out -l 4173
# optional: cloudflared tunnel --url http://127.0.0.1:4173
```

## Deploy (destructive — overwrites live homepage)

Only after explicit approval:

1. Auth with `HOSTINGER_API_TOKEN`
2. Upload every file from `web/out/` into `public_html/` (root), not `alpin/`
3. Or use `hosting_deploy` with domain `gbbois.fr` and path to the static export — **this replaces the whole site**
4. Verify https://gbbois.fr/ and that assets (`/_next/`, `/img/`) return 200

Previous subdirectory preview (optional keep): https://gbbois.fr/alpin/
