# /verity-status — Show Verity quality status

You are showing the current Verity quality status for this project. This gives a quick overview of project health without running a new analysis.

---

## Step 1: Check configuration

Verify `verity` CLI is available: `which verity`. If not: "Re-run the Verity installer."

---

## Step 2: Fetch and display status

Run:
```bash
verity status --history
```

This fetches the project memory context (standard info, last run, trends, pending items) and recent run history, then displays a formatted summary.

**If the service is unreachable**: the CLI falls back to showing local data with an offline note.

**If not configured**: the CLI prints "Verity is not configured for this project. Run /verity-setup."

---

## Step 3: Interpret for the user

After showing the raw status output, provide a brief interpretation:

- If **declining trend**: "Quality is trending down. Consider running `/verity-analyze` to identify issues."
- If **pending items exist**: "There are N pending items to address."
- If **no runs**: "No analyses recorded yet. The hook will run automatically on your next stop, or use `/verity-analyze`."
- If **PASS with improving trend**: "Project quality is good and improving."

---

## For JSON output (programmatic use)

```bash
verity status --history --json
```

Returns structured JSON with `memory` and `runs` fields.

To see *why* a specific run passed or failed, run `verity run <run-id>` (add `--json` for machine-readable findings). Run IDs come from `verity status --history`.
