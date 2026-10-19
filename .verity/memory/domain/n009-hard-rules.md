---
schema: 1
id: n009-hard-rules
kind: domain
title: "Hard rules"
confidence: 0.6
status: active
source: extractor
created_by: seed
created_at: 2026-09-14T10:26:36.300Z
updated_at: 2026-09-14T10:26:36.300Z
---

# Hard rules

- **Do not invent a step, UI label, endpoint, filename, or behavior.** Confirm it in the code, in existing docs, or from the person asking. Otherwise mark it `<!-- TODO: verify ... -->` and list every marker when you hand off.
- **Do not claim a check passed without running it.** If you could not run one, name it and say why in a sentence at handoff. Silence reads as success, and that is how a broken build ships with a confident summary. "Follows the guidelines" is not a substitute for naming what you actually verified.
- **Do not commit or push unless you were asked to.** Leave the work in the tree and describe it. Someone else opens the pull request.
- **Do not apply an information-architecture change on your own initiative.** Moving pages between sections, renaming a nav section, or splitting a page changes what readers can find. Write up the proposal and stop there to get human approval — the person you're working with has reviewed the specific proposal and explicitly confirms applying it, in which case apply exactly what was written up.
- **Do not skip alt text, `nav:` registration, or redirects.** These are the failures that break the site without warning anyone.
- **Do not suppress a linter warning** without an inline sentence saying why. A suppression should read as an obvious false positive to whoever finds it next.
- **Do not write marketing adjectives or filler.** "Powerful", "seamless", "robust", "effortless", "it's worth noting that", "in order to", "simply", "just". Show the product working instead of grading it.
- **Do not widen the diff past the request.** Opportunistic reflowing, renaming, and prose improvement hide the real change from the reviewer, and the reviewer is the point. Mention what else you spotted; do not fix it in the same pass.

A direct instruction from the person you are working with outranks items 2–4. Say which rule it conflicts with, in one sentence, then do what was asked — they may know something these files do not. Item 1 is n

_Seeded from CLAUDE.md. Edit or archive if outdated._
