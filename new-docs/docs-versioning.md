---
title: Docs versioning (Cloud + Self-hosted)
description: How the old MkDocs site handled versions and how to replicate the same behavior in Astro Starlight.
---

## How versioning worked in MkDocs

The previous documentation site implemented “versions” via the deploy pipeline, not via MkDocs itself:

- **Cloud (Latest)** was deployed at the site root: `/`
- **Self-hosted** was deployed under versioned subpaths: `/v<MAJOR>.<MINOR>/`
- The GitHub Pages branch (`gh-pages`) contained **multiple folders side-by-side** (root + version folders), and deploys used `keep_files: true` so publishing one version didn’t delete the others.

### What created the version list and dropdown

The version dropdown was custom JavaScript + CSS, and it depended on a `versions.json` file at the site root:

- `docs/assets/javascripts/version-select.js` fetches `/versions.json`
- It also fetches each version’s `/sitemap.xml` to try to keep the same page path when switching versions
- `versions.json` was managed by `mike` (a MkDocs deployment/versioning tool)

### What triggered each version

The CI pipeline deployed different “versions” based on Git branches:

- `master` → deploy “Latest” to `/`
- `release/v<MAJOR>.<MINOR>` → deploy that Self-hosted version to `/v<MAJOR>.<MINOR>/`

This is visible in `.github/workflows/mkdocs.yml` where Self-hosted deploys run `mike deploy ...` and set `MKDOCS_SELF_HOSTED=true`.

## How to achieve the same in Starlight

Starlight doesn’t include `mike`-style versioning, but you can replicate the exact behavior by building the site multiple times and deploying each build into a different subfolder on `gh-pages`.

### Recommended approach: multi-build to subfolders

Target URLs (same as today):

- **Cloud (Latest):** `/`
- **Self-hosted:** `/v<MAJOR>.<MINOR>/`

Core idea:

1. Build Starlight once for Cloud (base path `/`).
2. Build Starlight again for Self-hosted release branches using a base path of `/<version>/` (for example `/v15.0/`).
3. Deploy the output into the matching folder on `gh-pages` while keeping existing files.

In Astro, the equivalent of “serve under a subpath” is setting a base path at build time (commonly done with `base` in `astro.config.mjs`, driven by an environment variable).

### Version selector in Starlight

You have two options:

1. **Port the existing behavior**:
   - Keep a root-level `/versions.json` (generated in CI or committed)
   - Add a small selector component in `new-docs/src/components/layout/Header.astro`
   - Optionally mimic the sitemap-based “same page” switching logic
2. **Simpler selector**:
   - Keep a list of versions (Cloud + self-hosted versions)
   - Switching versions always navigates to the version homepage (no sitemap checks)

### Handling Cloud vs Self-hosted content differences

In MkDocs, `MKDOCS_SELF_HOSTED=true` was used to hide/show content.

In Starlight, keep the same concept via an environment variable at build time (for example `DOCS_VARIANT=cloud|self-hosted`) and render conditional UI/content accordingly. The exact mechanism depends on how you want to author docs:

- **Separate content trees** (cleanest): `src/content/docs-self-hosted/**` vs `src/content/docs/**` (requires some project structure changes)
- **Single tree with conditional rendering** (lighter): MDX components that show/hide blocks based on the variant

## Suggested migration plan

1. Decide whether you want to keep the existing URLs (`/` + `/vX.Y/`) or introduce a `/self-hosted/vX.Y/` namespace.
2. Implement build-time base path configuration in `new-docs/astro.config.mjs`.
3. Add a version selector component to the Starlight header.
4. Update CI to deploy:
   - `master` → root folder
   - `release/v*` → version folder
5. Decide how to maintain `versions.json` and how “same page” switching should behave.

