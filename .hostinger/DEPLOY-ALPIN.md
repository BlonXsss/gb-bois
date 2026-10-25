# GB Bois Alpine — live at site root

**Live:** https://gbbois.fr/

Old site files were moved on the server to `public_html/_backup_old_20261025/` (web access denied via `.htaccess`). A wget mirror also sits under `backups/` locally (gitignored).

## Redeploy

```bash
cd web && npm run build
# TUS-upload web/out/* into public_html/ (override=true)
# Keep google*.html verification files and a root .htaccess
```

Do not wipe `_backup_old_20261025/` until you no longer need a rollback.
