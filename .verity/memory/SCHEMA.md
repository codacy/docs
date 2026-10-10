# Memory Graph Schema (v1)

## Node format

Each node is a markdown file with YAML frontmatter:

```yaml
---
schema: 1
id: n001-slug
kind: decision | quality | security | intent | gotcha | pattern | domain | integration
title: "Short title (≤200 chars)"
domains: [tag1, tag2]
file_globs: ["src/auth/**"]
confidence: 0.5-1.0
status: active | archived | superseded | orphan_flagged
source: extractor | user | imported
# ... (see full schema in MEMORY-GRAPH-PRD §6.3)
---

# Title

Body content (≤8KB). Use [[node-id]] wikilinks for cross-references.
```

## Edge types

| Edge | Meaning |
|------|---------|
| related | Loose association |
| supersedes | A replaces B |
| contradicts | A and B disagree |
| caused_by | Something in B led to A |
| example_of | A is an instance of B |

## Domains

| Directory | Purpose |
|-----------|---------|
| decisions/ | Architectural choices (ADR-style) |
| quality/ | Quality patterns |
| security/ | Security constraints |
| intent/ | Intent templates |
| gotchas/ | Footguns and surprises |
| patterns/ | Code conventions |
| domain/ | Business logic concepts |
| integrations/ | External system knowledge |
| _archive/ | Superseded nodes |
