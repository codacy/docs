---
name: docs-self-hosted-version
description: Document a new Codacy Self-hosted release, or a change to which Self-hosted versions are supported. Triggers on requests like "Self-hosted vX shipped", "new chart version", "document what changed in vX", "drop support for vN", "raise the Self-hosted support floor". A release touches the release note, the version data file, and sometimes the Self-hosted section pages. The data file row is what every version table and tab on the site reads, so leaving it out leaves the whole site one version behind with no warning.
---

# Documenting a Codacy Self-hosted version

The site has one unversioned Self-hosted section, `docs/chart/`. Every release of the [Codacy Self-hosted chart](https://github.com/codacy/chart), major, minor, or patch, is documented on `master`. Never create a `release/v*` branch or a `/vX.Y/` documentation version.

Before starting, read the "Codacy Self-hosted versions" section of [`.claude/reference/formatting.md`](../../reference/formatting.md) and the Self-hosted section of [`.claude/reference/information-architecture.md`](../../reference/information-architecture.md).

## 1. Investigate

**Confirm it's released, not only tagged.** A version is released when it's in the Helm repository the install steps use. GitHub releases aren't a reliable signal: some versions have none. If the version isn't in the Helm repository, say so and stop: whether to document it is a decision for a human.

```bash
# Lists the published versions of the codacy chart. Other charts in the index reuse version numbers, so don't grep the raw file.
curl -s https://charts.codacy.com/stable/index.yaml \
  | python3 -c "import sys, yaml; print(*[e['version'] for e in yaml.safe_load(sys.stdin)['entries']['codacy']])"
```

**Diff the chart against the previous version.** The previous version is the top row of `data/self-hosted-versions.yml`.

```bash
gh api repos/codacy/chart/compare/<previous>...<X.Y.Z> --jq '.files[].filename'
```

Read what changed in:

- **`codacy/requirements.lock`:** the component versions. If no component changed, the release has no product changes, and the "What's available" page stays as it is.
- **`codacy-tools-sh` in that file:** the tools bundle. If its version didn't change, the tool list is the same as in the previous release note. If it changed, the tool versions come from that `codacy-tools-sh` release. If you can't read it, ask the chart owners and mark the list `<!-- TODO: verify -->`; never copy the list from Codacy Cloud.
- **`codacy/values*.yaml`:** changed defaults. A default a reader set by hand may need an upgrade step.
- **`.circleci/config.yml`:** the Kubernetes and MicroK8s versions the install jobs run on. The header of `data/self-hosted-versions.yml` says which source wins for each field when they disagree.

**Read the most recent Self-hosted release note** in `docs/release-notes/self-hosted/`. It shows the current shape: upgrade steps, tool versions, closing line.

## 2. Change

1.  **The release note.** Follow [`docs-release-note`](../docs-release-note/SKILL.md), including its three edits. For a Self-hosted note:
    -   Link the version to its chart release on GitHub, as the previous note does.
    -   Link to pages as relative links (`../../chart/maintenance/upgrade.md`), never to `docs.codacy.com/vX.Y/`.
    -   The Codacy Analysis CLI and Codacy Coverage Reporter versions in the upgrade steps match the new data row.

2.  **A row at the top of `data/self-hosted-versions.yml`.** Set every field; the build fails on a missing one. Above the row, add a comment for any value whose sources disagree, and say which one you followed and why. Mark anything you couldn't confirm `TODO: verify`.

3.  **The Self-hosted section pages,** for behavior the chart diff changes: a new value, a changed install or upgrade step. A value that differs by version goes through the macros, never typed into the page. Pages that show the latest version (the `helm upgrade --version` commands, the values-file links) read `self_hosted_latest` and follow the new row on their own. Check that the files they link to exist at the new tag:

    ```bash
    grep -rhoE 'raw\.githubusercontent\.com/codacy/chart/\{\{ self_hosted_latest\.version \}\}/[^)]+' docs/chart/ | sort -u
    gh api "repos/codacy/chart/contents/<path>?ref=<X.Y.Z>" --jq .path
    ```

4.  **`docs/chart/whats-available-on-codacy-self-hosted.md`,** only if the release changes what Self-hosted has. Usually it doesn't; say which in the handoff.

Nothing else holds the version: there's no variable to bump in `mkdocs.yml`.

## Raising the support floor

The floor is a support decision, not a docs one. Do it only once the chart owners have confirmed it, and name who confirmed it in the pull request.

Delete the rows below the new floor in `data/self-hosted-versions.yml`. The version tables, version tabs, and `self_hosted_oldest` follow on their own. Keep the release notes of the dropped versions: they're history, and other notes link to them.

## 3. Verify

```bash
mkdocs build --strict

# Prints nothing
git grep -nE 'docs\.codacy\.com/v[0-9]+\.[0-9]+' -- docs/

# Self-hosted mentions outside the Self-hosted section and release notes
git grep -il 'self-hosted' -- docs/ ':!docs/chart/' ':!docs/release-notes/' ':!docs/assets/images/'
```

Every file the last command lists needs a reason, following `information-architecture.md`: a Cloud page doesn't describe Self-hosted. Compare the list with `master` and explain any new entry.

Open `site/chart/index.html#supported-versions` and check that the new row is first.

## Handoff

Name every file you changed, the chart compare range you read, and each `TODO: verify` marker with who can answer it. Say whether the "What's available" page changed, and why. Nothing is committed or pushed unless you were asked to.
