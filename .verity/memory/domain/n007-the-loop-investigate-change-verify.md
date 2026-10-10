---
schema: 1
id: n007-the-loop-investigate-change-verify
kind: domain
title: "The loop: investigate, change, verify"
confidence: 0.6
status: active
source: extractor
created_by: seed
created_at: 2026-09-14T10:26:36.300Z
updated_at: 2026-09-14T10:26:36.300Z
---

# The loop: investigate, change, verify

Every workflow in this repo is the same three phases. Skills differ only in what each phase contains.

**Investigate.** Read the whole artifact, not the fragment named in the request — a page's later paragraphs routinely contradict an edit made to its opening. Then find out what else the change reaches: shared includes, sibling pages held in lockstep, inbound anchor links, `mkdocs.yml`. Confirm every fact you are about to write against a source that is not your own memory. Investigation is not a formality here; the failure this repo produces most often is a correct-looking change made in the wrong place.

**Change.** Make the smallest diff that does the job. Match the conventions of the file you are in, including where they differ from the rules in these instructions — a half-converted page is worse than a consistent old one. Where a specific cannot be confirmed, write `<!-- TODO: verify ... -->` in the exact spot the specific belongs and keep going; a scaffold with honest gaps is useful, an invented button label is not.

**Verify.** Run the checks, read your own diff back, and report both what passed and what you could not run. Prefer running a check to trusting any claim in these files about what that check catches. Never describe a check as passing unless it ran.

_Seeded from CLAUDE.md. Edit or archive if outdated._
