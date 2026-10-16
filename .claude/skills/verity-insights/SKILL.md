# /verity-insights — Project quality insights and Standard evolution

Surface metrics from accumulated run data and manage Standard evolution suggestions.

## Metrics overview

Gather data from multiple sources to give the user a quality health report:

```bash
# Knowledge base size — active lessons or memory nodes
curl -s -H "Authorization: Bearer $VERITY_TOKEN" \
  "$(verity config service-url)/compound/lessons" | jq '.total_active'

# Memory graph stats (if graph enabled)
curl -s -H "Authorization: Bearer $VERITY_TOKEN" \
  "$(verity config service-url)/compound/memory/nodes" | jq '.total'

# Run trends — use verity status for a quick summary
verity status

# Pending suggestions — Standard evolution candidates
curl -s -H "Authorization: Bearer $VERITY_TOKEN" \
  "$(verity config service-url)/compound/standard-suggestions" | jq '.suggestions | length'
```

### What to surface

1. **Pattern signal/noise**: patterns with high FP rates (candidates for retirement or severity lowering)
2. **High-value patterns**: patterns with high TP rates (proving their worth)
3. **Active suppressions**: count of per-finding false-positive suppressions
4. **Knowledge base size**: lesson/node count by kind, recent additions
5. **Score trends**: quality and security scores over the last 10 runs
6. **Finding recurrence**: how often the same finding_key reappears (should decrease over time)
7. **Lesson injection rate**: % of recent runs where ≥1 lesson/node was injected

## Standard evolution suggestions

The system analyzes accumulated telemetry and suggests Standard changes:

### View pending suggestions

```bash
curl -s -H "Authorization: Bearer $VERITY_TOKEN" \
  "$(verity config service-url)/compound/standard-suggestions" | jq '.suggestions[]'
```

Suggestion kinds:
- **retire_pattern**: Pattern had 90+ runs with zero findings — not earning its place
- **lower_severity**: Pattern has >50% false-positive rate — too noisy at current severity
- **sharpen**: Pattern has >80% true-positive rate over 50+ findings — consider raising severity
- **add_exclusion**: Pattern dismissed ≥3 times for same file pattern — add file-scope exclusion
- **promote_lesson**: High-confidence lesson cited ≥5 times — promote to custom Standard pattern

### Approve a suggestion

Approving creates a new Standard version automatically:

```bash
curl -s -X POST -H "Authorization: Bearer $VERITY_TOKEN" \
  "$(verity config service-url)/compound/standard-suggestions/<suggestion-id>/approve"
```

### Reject a suggestion

Rejected suggestions won't resurface for 30 days:

```bash
curl -s -X POST -H "Authorization: Bearer $VERITY_TOKEN" \
  "$(verity config service-url)/compound/standard-suggestions/<suggestion-id>/reject"
```

### Generate suggestions manually

Normally runs weekly. To trigger manually:

```bash
curl -s -X POST -H "Authorization: Bearer $VERITY_TOKEN" \
  "$(verity config service-url)/compound/generate-suggestions"
```

## How evolution works

1. **Observe**: Every run accumulates pattern telemetry (signal vs noise) and finding feedback
2. **Aggregate**: Weekly job reads telemetry + feedback → produces evolution candidates
3. **Review**: User sees suggestions with evidence (run counts, FP rates, citation counts)
4. **Apply**: Approved suggestions become a new Standard version (immutable, rollback-safe)
5. **No autonomous changes** in v1 — every suggestion requires human approval

## Recording an accepted-risk disposition (unblocking a guard deadlock)

When the pre-commit/pre-push guard blocks on a finding that humans have already
adjudicated the other way (a reviewer finding, an ADR, phase exit criteria),
record the disposition with:

```bash
verity waive <pattern-id> --file <path> --reason "per reviewer finding 5 — no code change needed"
```

What this does — and deliberately does not do:

- Marks the open statement `waived` with your reason; the next guard/analyze run
  on the **same file bytes** no longer blocks on it, and the disposition is
  visible in the run report.
- **It voids automatically when the file changes** — a waive is an assertion
  about specific bytes, never a standing mute. Edit the file and the finding is
  reconsidered fresh.
- The reason is mandatory (≥ 20 chars) and should name the human decision it
  traces to. At most 3 statements are waived per invocation.
- `verity feedback finding <run-id> <pattern-id> false_positive` remains the
  right tool for *pattern-level* feedback (it feeds suppression/evolution);
  `verity waive` is the *per-site, accepted-risk* path that unblocks a push.
