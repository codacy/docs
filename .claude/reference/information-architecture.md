# Information architecture decisions

Read this before proposing or evaluating a structural change. It records durable classification decisions so each new IA question doesn't get re-litigated from scratch. It is not a live map of the nav — for that, read `mkdocs.yml` per `docs-review-structure`.

## Developer tools vs. everything else

The product is a developer tool by definition, so "for developers" doesn't separate anything on its own. The test that does: **where does the reader act from?**

- **Developer tools** = surfaces you install, run, or call from outside app.codacy.com — your terminal, your IDE, your CI pipeline, your AI agent's tool-calling layer. You write config or code against them.
- **Everything else** = surfaces you interact with inside app.codacy.com — dashboards, org settings, repo configuration, account management. You click through them.

By this test, "Developer tools" holds: the API, Codacy Cloud CLI, the IDE extensions (VS Code, IntelliJ), and Codacy Guardrails. Coverage Reporter technically qualifies (it's a CLI) but stays under "Configuring your repositories" — a deliberate exclusion made when this section was proposed, not a definitional one. Revisit deliberately if it comes up again; don't assume the exclusion still holds without asking.

## Codacy AI vs. Developer tools

Both involve AI; the test is **who's calling whom**, not whether the word "AI" appears:

- **Codacy AI** = Codacy uses AI as an internal mechanism to produce something you review passively (AI-enhanced comments, Smart False Positive Triage, AI Reviewer). You're the consumer; the AI runs inside Codacy's own pipeline.
- **Developer tools, agent-facing side** = Codacy exposes a surface that *your* agent calls programmatically (Codacy MCP Server, Codacy Skills). You're the operator; Codacy is what gets called.

`organizations/ai-risk-hub.md` is neither bucket despite the name — it's governance over AI-generated code risk in the reader's own repositories, correctly filed under Organizations.

## Why Codacy Guardrails counts as a developer tool, not just an IDE extension

The nav title "(IDE Extension)" on this section describes one delivery path, not the product. `codacy-guardrails-getting-started.md`'s "How to install - Manually" section sets up the identical capability — Analysis CLI, MCP Server, AI rules — with no IDE extension involved. Guardrails passes the direction-of-consumption test on its own terms, independent of how it's installed.

Guardrails interleaves CLI setup and MCP setup as one continuous flow inside a single page, in service of one outcome. Don't split that content to file separate pieces under generic "CLIs" or "MCP" sections — the split breaks the page's `#install-cli` / `#install-mcp-server` anchors for any inbound link outside this repo (product UI, blog, support macros), and there's no config-level fix for an anchor that moves to a different page. Move the whole section as one unit; don't extract from it.

## Codacy Skills' home

**Superseded, 2026-09-09.** Codacy Skills gets its own section under "Developer tools", as a sibling of "Codacy CLIs" — not a subsection of the Codacy Cloud CLI page.

The earlier decision filed Skills under Codacy Cloud CLI on the grounds that it was "a natural-language wrapper around Codacy Cloud CLI specifically". That premise doesn't hold against [`codacy/codacy-skills`](https://github.com/codacy/codacy-skills). Six skills ship there, and only one of them wraps the Cloud CLI:

| Skill | Drives |
|---|---|
| `codacy-cloud-cli` | Codacy Cloud CLI |
| `configure-codacy-cloud` | Cloud CLI, plus the Analysis CLI for config files |
| `codacy-code-review` | Both CLIs |
| `configure-codacy` | Analysis CLI first, Cloud CLI to check the repo is on Codacy |
| `codacy-analysis-cli` | Codacy Analysis CLI only |
| `setup-coverage` | Neither — coverage tooling and CI |

Three of the six center on the Codacy Analysis CLI, which has no page anywhere under `docs/`, and two need no Cloud CLI at all. Filing all six under the Cloud CLI page misdescribes them and leaves five of the six named nowhere on the site.

Skills still passes the direction-of-consumption test for "Developer tools" — the reader's own agent is the caller — so the tab is unchanged. Only the level within it moves.

Two constraints on carrying this out:

- **Keep `#install-the-codacy-skills` alive on `codacy-cloud-cli/index.md`.** Four inbound links inside this repo point at it, and the product UI, blog, and support macros are invisible to any check here. Leave the heading and its explicit `{: id=...}` in place as a pointer to the new page rather than deleting it.
- **The Analysis CLI gap is separate work.** Documenting it would also fix "Codacy CLIs" being a plural section holding one page. Don't let it ride along with the Skills page.

Related: the standalone-page request came from marketing, which makes the *prominence* half of this a positioning call — see "A structural move can still be the wrong call for reasons outside IA" below.

## A structural move can still be the wrong call for reasons outside IA

Guardrails currently sits prominently under "Getting started" with active marketing behind it (a blog-post CTA). Relocating it into "Developer tools" is IA-correct by the test above, but it's also a visibility change for a product someone may be actively driving signups to. That's a positioning call, not a structure call — flag it to whoever owns that placement rather than deciding it here.

## See also

- [`docs-review-structure`](../skills/docs-review-structure/SKILL.md) — the general process this file's decisions feed into.
