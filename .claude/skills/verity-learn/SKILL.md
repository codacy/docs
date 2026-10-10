# /verity-learn — View and manage project knowledge

Project knowledge is durable insights extracted from analysis runs — decisions, patterns, gotchas, and conventions. When the memory graph is enabled (`memory_graph_enabled`), this skill delegates to the graph. Otherwise, it uses flat lessons.

## Graph mode (memory_graph_enabled = true)

When the memory graph is active, `/verity-learn` delegates to `/verity-memory`. Use these commands:

- **List nodes**: `ls .verity/memory/*/` or see `/verity-memory list`
- **Show a node**: `cat .verity/memory/<domain>/<slug>.md` or see `/verity-memory show <node_id>`
- **Walk the graph**: see `/verity-memory walk --files <files>`
- **Add knowledge**: see `/verity-memory add <kind> "<title>"`

For full documentation, use `/verity-memory`.

## Flat mode (memory_graph_enabled = false, default for existing projects)

### List lessons

```bash
curl -s -H "Authorization: Bearer $VERITY_TOKEN" \
  "$(verity config service-url)/compound/lessons" | jq '.lessons[] | {id, kind, title, confidence}'
```

### Add a lesson (user-authored)

```bash
curl -s -X POST -H "Authorization: Bearer $VERITY_TOKEN" \
  -H "Content-Type: application/json" \
  "$(verity config service-url)/compound/lessons" \
  -d '{
    "kind": "gotcha",
    "title": "RLS policies and cleanup cron are coupled",
    "body": "Changing RLS policies without updating the cleanup cron will break retention.",
    "file_globs": ["server/supabase/migrations/**"]
  }'
```

Valid kinds: `bug_pattern`, `architectural_decision`, `gotcha`, `preferred_convention`, `false_positive_rule`, `intent_template`.

### Archive a lesson

```bash
curl -s -X PATCH -H "Authorization: Bearer $VERITY_TOKEN" \
  -H "Content-Type: application/json" \
  "$(verity config service-url)/compound/lessons/<lesson-id>" \
  -d '{"status": "archived"}'
```

### Trigger extraction

```bash
curl -s -X POST -H "Authorization: Bearer $VERITY_TOKEN" \
  -H "Content-Type: application/json" \
  "$(verity config service-url)/compound/extract" \
  -d '{"task_id": "<task-uuid>"}'
```

## How it works

1. **Extraction**: When a task closes or reaches 5 runs, an LLM extracts 0-3 durable knowledge items.
2. **Injection**: On each analysis run, the most relevant knowledge is scored and injected into the reviewer prompt.
3. **Compounding**: Knowledge that proves useful gets higher confidence. Unused knowledge is eventually archived.
