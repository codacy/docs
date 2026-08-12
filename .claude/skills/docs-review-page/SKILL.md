---
name: docs-review-page
description: Review one or more existing documentation pages and report what is wrong with them, in priority order. Triggers on requests like "review the X page", "what's wrong with Y", "is this page any good", "clean this up", "audit this section", "give me feedback on this doc". Reviews report; they do not apply changes unless asked. Carries the review rubric — readability and formatting first, then accuracy, then voice — and the rules for what makes a review finding trustworthy.
---

# Reviewing a page

A review is the investigate phase of an edit, with the diff left as a recommendation. Report findings; apply nothing unless you are asked to. If you are asked to apply them, switch to `docs-edit` for the changes so the investigation checks still run.

The value of a review is entirely in its ordering. Typos are the easiest thing to find and almost never the most important thing wrong, and a review that opens on word choice buries the finding that mattered.

## 1. Investigate

Read the page start to finish before forming any judgement. Then, for anything you intend to claim:

- **Verify it.** Open the file, run the grep, follow the link. A review is a set of assertions someone will act on.
- **Look at what the page is for.** A troubleshooting page and a concept page fail differently. Establish the type from its shape and its position in the nav before judging its structure.
- **Check the page's own contracts.** If it opens with an HTML comment listing sibling pages, check whether the most recent change to it respected that list.

## 2. The rubric, in this order

Report in this order too. Do not reorder because a later finding is more interesting.

### First: readability and formatting

An unreadable page has failed at its only job, whatever its sentences say. Work through the readability failure modes in [`.claude/reference/formatting.md`](../../reference/formatting.md) and report every one you find:

- Unbroken prose with no structural break for a scanning reader.
- A procedure written as narrative instead of numbered steps.
- The wrong container: sentences inside table cells, a list that should be a table, prose in a code block, the page's main content buried in an admonition.
- Emphasis used so widely it carries no signal.
- Heading levels that do not reflect how the content nests, or skipped levels.
- Required content hidden behind a collapsible or a tab.
- Stacked or nested admonitions, or `warning` used for something that is not a consequence.
- One `##` section that has outgrown the rest of the page combined.

For each, say what a reader loses and what the content should become instead. Be concrete: "steps 3 to 7 are a single paragraph and cannot be followed while doing them" beats "consider improving readability".

The generated "On this page" nav is a real but minor consideration — it is built from headings down to the `toc_depth` set in `mkdocs.yml`, so a long page whose headings sit below that depth gets an empty nav. Mention it after the findings above, not before.

### Second: accuracy

Spot-check the claims that would cost a reader real time if wrong, and say how you checked each one:

- Version numbers, defaults, filenames, file extensions, and CLI flags.
- Links: do they resolve, and do they point at the canonical destination.
- Steps that no longer match the product, where you can tell.
- Counts and lists that claim to be exhaustive.

Do not audit what you cannot check. Say what you could not verify rather than guessing at it.

### Third: voice and naming

Against [`.claude/reference/voice.md`](../../reference/voice.md): marketing adjectives, filler phrases, passive constructions, sentences carrying more than one idea, missing reasons behind steps, and multi-word product names cased wrong. Group these — a list of eleven wording nits is one finding, not eleven.

Do not report anything Vale already reports. It comments inline on pull requests, and duplicating it wastes the reader's attention.

## 3. Report

Two habits decide whether the review is useful.

**Separate what you verified from what you suspect**, and make the difference visible in the wording. "The link on line 47 resolves to a page that no longer documents this — I opened it" and "this link looks like it may point somewhere stale" are different claims and must not read the same.

**Check each proposed fix is actually an improvement.** This is where reviews most often do damage. Replacing a durable claim with a precise one can make the page worse: a hard number nobody will maintain, a count that merges two categories the page deliberately separated, a rewritten heading that breaks every inbound anchor. If wording is imprecise but true and stable, say so and recommend leaving it.

**Flag structural findings as out of scope, do not act on them.** Splitting a page, moving it, or reorganizing a section is an information-architecture change. Describe it, note that `docs-review-structure` covers it, and stop there.

Structure the report as: findings in rubric order, each with location, what a reader loses, and the recommended change. Then a short list of what you verified and how. Then what you could not check. If the page is in good shape, say that plainly and briefly rather than manufacturing findings to fill a report.
