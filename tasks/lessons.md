# Lessons Learned

## 2026-05-08 — CLI deploys overwrite GitHub deploys and cause 404s
Running `netlify deploy --prod` from the CLI overrides the last GitHub-connected deploy, even if it succeeds. If the CLI deploy somehow uploads 0 files (wrong working directory, etc.), the entire site goes 404 instantly.

**Rule:** Never run CLI deploys. All deploys go through GitHub Actions (`deploy.yml`). The `netlify.toml` with `publish = "."` locks the publish directory and prevents confusion.
