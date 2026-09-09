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

## Why Codacy Guardrails counts as a developer tool

Guardrails passes the direction-of-consumption test on its own terms, whatever its delivery path. Its manual install sets up the same capability — Analysis CLI, MCP Server, AI rules — with no IDE extension involved, so don't refile it as an IDE integration on the strength of one install path.

Its setup content is one continuous flow inside a single page. Don't split it to file pieces under generic "CLIs" or "MCP" sections: that breaks the page's `#install-cli` and `#install-mcp-server` anchors for inbound links outside this repo, and an anchor that moves to another page has no config-level fix. Move the section as a unit; don't extract from it.

## Codacy Skills' home

Codacy Skills is its own section under "Developer tools", a sibling of "Codacy CLIs" — not a subsection of any single tool's page.

Skills is a set, not a feature of one tool: some members drive the Codacy Cloud CLI, some the Codacy Analysis CLI, some both, and some neither. Nesting the set under one of its members misdescribes the rest. The tab itself was never in question — Skills passes the direction-of-consumption test above, since the reader's own agent is the caller.

## A structural move can still be the wrong call for reasons outside IA

Where a section sits sets how visible it is, and a product with marketing driving signups to it may be placed for that reason rather than for IA. When a move is IA-correct but changes prominence, flag it to whoever owns the placement instead of deciding it here.

## See also

- [`docs-review-structure`](../skills/docs-review-structure/SKILL.md) — the general process this file's decisions feed into.
