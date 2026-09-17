---
schema: 1
id: n013-quality-gate-accepted-risks
kind: quality
title: "Quality gate: accepted risks"
confidence: 0.6
status: active
source: extractor
created_by: seed
created_at: 2026-09-14T10:26:36.300Z
updated_at: 2026-09-14T10:26:36.300Z
---

# Quality gate: accepted risks

When the Verity pre-commit/pre-push gate FAILs, fix the findings — that is the
default. Use `verity waive <pattern-id> --file <path> --reason "…"` ONLY to relay
a risk a human has explicitly accepted: a named code-review finding, an ADR, or
the user saying so in this conversation. The --reason must cite that source.

Never waive on your own judgment, to get past a block, or pre-emptively. A waive
binds to the file's current bytes and voids automatically when the file changes,
and every waive is recorded in the run ledger. For a pattern-level false positive
use `verity feedback finding <run-id> <pattern-id> false_positive` instead.

_Seeded from CLAUDE.md. Edit or archive if outdated._
