---
schema: 1
id: n006-pick-the-workflow-first
kind: domain
title: "Pick the workflow first"
confidence: 0.6
status: active
source: extractor
created_by: seed
created_at: 2026-09-14T10:26:36.300Z
updated_at: 2026-09-14T10:26:36.300Z
---

# Pick the workflow first

| The request | Skill |
|---|---|
| Change wording, steps, or facts on a page that already exists | `docs-edit` |
| Add a page that does not exist yet | `docs-write` |
| Announce a change that shipped | `docs-release-note` |
| "Review this page", "what's wrong with", "clean this up" | `docs-review-page` |
| Where a page belongs, nav placement, splitting or merging sections | `docs-review-structure` |
| CSS, Jinja partials, design tokens, layout, rendering | `docs-review-theme` |

Editing an existing page is the most common request by a wide margin. Confirm that against the current state of the repo rather than trusting this sentence — pages modified versus pages added, over the last 200 commits, with release notes excluded because they have their own workflow:

```bash
git log --diff-filter=M --name-only --pretty=format: -n 200 -- docs/ | grep '\.md$' | grep -vc 'release-notes/'
git log --diff-filter=A --name-only --pretty=format: -n 200 -- docs/ | grep '\.md$' | grep -vc 'release-notes/'
```

If a request spans two workflows, run the one whose *risk* is higher. Adding a page and rearranging the section it lands in is a structure task, not a writing task.

_Seeded from CLAUDE.md. Edit or archive if outdated._
