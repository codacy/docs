# /verity-feedback — Send feedback

## General feedback

If the user provided a message (e.g., `/verity-feedback the analysis is too slow`), use their **exact words** as the message. Do NOT rephrase, expand, add context, or editorialize. Send exactly what they typed, nothing more.

If they just typed `/verity-feedback` with no message, ask: "What feedback would you like to share?"

```bash
verity feedback message "<their exact message>"
```

On success: "Thanks, feedback sent!"
On error: "Couldn't send feedback right now. Your message: [repeat it so it's not lost]."

## Per-finding feedback

If the user wants to mark a specific finding (e.g., a false positive from a recent analysis run), use the finding sub-command.

Ask for the required info if not provided:
- **run-id**: from the most recent analysis run (check `verity status` or the run output)
- **pattern-id**: the Standard pattern that produced the finding (e.g., `no-hardcoded-secrets`, `file_length`)
- **action**: one of `false_positive`, `acknowledged`, `will_fix_later`, `wrong_severity`, `useful`

```bash
verity feedback finding <run-id> <pattern-id> <action> "optional note"
```

Optional flags:
- `--file <path>` — the file the finding applies to
- `--line <n>` — the line number

Example: marking a test file's fake JWT as a false positive:
```bash
verity feedback finding run-20260420-abc1 no-hardcoded-secrets false_positive "Fake JWT used in tests" --file src/auth/tokens.test.ts --line 42
```

On success: report whether auto-suppression is now active (requires ≥2 independent dismissals for the same pattern+file pattern).
On error: show the error message.
