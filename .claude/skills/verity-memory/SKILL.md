# /verity-memory — Manage the project knowledge graph

The memory graph is a collection of markdown nodes at `.verity/memory/` organized into 8 domains. Each node has YAML frontmatter with typed edges that form a graph. The graph is the project's accumulated knowledge — decisions, patterns, gotchas, security constraints, and more.

## Commands

### List nodes

```bash
# List all active nodes
curl -s -H "Authorization: Bearer $VERITY_TOKEN" \
  "$(verity config service-url)/compound/memory/nodes" | jq '.nodes[] | {node_id, kind, title, confidence}'

# Filter by kind
curl -s -H "Authorization: Bearer $VERITY_TOKEN" \
  "$(verity config service-url)/compound/memory/nodes?kind=security" | jq '.nodes[]'
```

Or browse locally: `ls .verity/memory/*/`

### Show a node

```bash
curl -s -H "Authorization: Bearer $VERITY_TOKEN" \
  "$(verity config service-url)/compound/memory/nodes/<node_id>" | jq '.'
```

Or read directly: `cat .verity/memory/decisions/<slug>.md`

### Walk the graph

Find related knowledge by seeding from files you're working on:

```bash
curl -s -X POST -H "Authorization: Bearer $VERITY_TOKEN" \
  -H "Content-Type: application/json" \
  "$(verity config service-url)/compound/memory/walk" \
  -d '{"seed_files": ["src/auth/tokens.ts"], "max_hops": 2, "budget_tokens": 2000}'
```

### Add a node (user-authored)

User-authored nodes get `confidence: 1.0` and are never auto-archived:

```bash
curl -s -X POST -H "Authorization: Bearer $VERITY_TOKEN" \
  -H "Content-Type: application/json" \
  "$(verity config service-url)/compound/memory/nodes" \
  -d '{
    "kind": "gotcha",
    "title": "RLS policies and cleanup cron are coupled",
    "body": "Changing RLS policies without updating the cleanup cron will break retention.",
    "file_globs": ["server/supabase/migrations/**"],
    "domains": ["security", "database"]
  }'
```

Valid kinds: `decision`, `quality`, `security`, `intent`, `gotcha`, `pattern`, `domain`, `integration`.

Or create the markdown file directly at `.verity/memory/<domain>/<slug>.md` with proper frontmatter (see `.verity/memory/SCHEMA.md` for the template).

### Edit a node

Edit the markdown file directly at `.verity/memory/<domain>/<slug>.md`. Changes sync to the cloud on the next analysis run. User edits are always preserved (repo wins for `source: user`).

### Archive a node

```bash
curl -s -X PATCH -H "Authorization: Bearer $VERITY_TOKEN" \
  -H "Content-Type: application/json" \
  "$(verity config service-url)/compound/memory/nodes/<node_id>" \
  -d '{"status": "archived"}'
```

### Search nodes

Use full-text search via the list endpoint, or `grep -r "keyword" .verity/memory/` locally.

### Run lint

Check for orphan nodes, stale knowledge, missing backlinks, and contradictions:

```bash
curl -s -X POST -H "Authorization: Bearer $VERITY_TOKEN" \
  "$(verity config service-url)/compound/memory/lint"
```

Results appear in `.verity/memory/log.md` after the next sync.

## How the graph works

1. **Extraction**: When tasks close or reach 5 runs, an LLM extracts 0-3 knowledge nodes with typed edges.
2. **Sync**: On every analysis run, the CLI sends a manifest of local files. The server returns new nodes as `memory_writes[]` that the CLI applies locally.
3. **Injection**: The reviewer prompt receives a graph-walk neighborhood (2 hops from changed files, budget-capped at 2000 tokens).
4. **Linking**: Nodes connect opportunistically via shared file_globs, keyword overlap, and shared evidence runs.
5. **Lint**: Weekly checks for orphans, stale nodes, contradictions, and missing backlinks.

## Domains

| Directory | Purpose |
|-----------|---------|
| `decisions/` | Architectural choices (WHY is it this way?) |
| `quality/` | Quality patterns (WHAT does "good" mean here?) |
| `security/` | Security constraints (WHAT must be protected?) |
| `intent/` | Intent templates (WHAT does the user expect?) |
| `gotchas/` | Footguns and surprises (WHAT will trip you up?) |
| `patterns/` | Code conventions (HOW should it be done?) |
| `domain/` | Business logic concepts (WHAT does this mean?) |
| `integrations/` | External system knowledge (WHAT's around us?) |

## Obsidian compatibility

The `.verity/memory/` directory is designed to open directly in Obsidian, Foam, or Logseq. Nodes use `[[wikilink]]` syntax for cross-references.
