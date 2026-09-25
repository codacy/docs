# VERITY.md — Quality Gate

> This project uses [Verity](https://verity.md) to enforce quality and security standards on AI-generated code.

**Project:** docs
**Standard:** v1

## Quality Dimensions
- Comprehensibility (file length, complexity, naming)
- Modularity (separation of concerns, shallow abstractions)
- Type Safety (this repo has no type checker; AI review substitutes for one on `theme/hooks/*.py` and `tools/*.py`)
- Test Adequacy (no unit test suite; `mkdocs build --strict`, `htmltest`, `vale`, and `markdownlint` are the actual safety net)

## Security Patterns
- No hardcoded secrets (CWE-798)
- Input sanitization (CWE-20)
- Parameterized queries (CWE-89)
- Dependency verification (CWE-1395)
- No unsafe deserialization (CWE-502)
- Access control checks (CWE-639)
- Config file integrity (CWE-15)

## Project-Specific Patterns
Synthesized from `docs/CLAUDE.md`'s hard rules and silent-failure mechanics:
- New/renamed pages register `nav:` and `redirect_maps` entries in `mkdocs.yml`
- No invented steps, UI labels, endpoints, or behaviors — mark unconfirmed specifics with `<!-- TODO: verify ... -->`
- No marketing adjectives or filler language
- Self-hosted-specific claims are checked against `extra.codacy_self_hosted_version`
- Images carry alt text; new nav icon names exist under `theme/assets/vendor/ionicons/svg/`

## How It Works
Every time the coding agent stops, the Verity hook:
1. Runs static analysis via @codacy/analysis-cli (ESLint9, Ruff, shellcheck, Trivy)
2. Sends results + code to the Verity service
3. Gemini independently reviews the code
4. Returns PASS / WARN / FAIL with actionable findings
