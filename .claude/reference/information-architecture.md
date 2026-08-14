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

Skills is a natural-language wrapper around Codacy Cloud CLI specifically, not general-purpose agent access to all of Codacy — the CLI's own page already frames it that way ("Pair it with Codacy Skills to interact with your Codacy data in plain language"). It belongs under Codacy Cloud CLI, not in a standalone agent-tools section.

## A structural move can still be the wrong call for reasons outside IA

Guardrails currently sits prominently under "Getting started" with active marketing behind it (a blog-post CTA). Relocating it into "Developer tools" is IA-correct by the test above, but it's also a visibility change for a product someone may be actively driving signups to. That's a positioning call, not a structure call — flag it to whoever owns that placement rather than deciding it here.

## See also

- [`docs-review-structure`](../skills/docs-review-structure/SKILL.md) — the general process this file's decisions feed into.
