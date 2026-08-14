# Voice, tone, and naming

The source for how sentences in `docs/` sound. Voice is the cheapest thing for a human reviewer to fix, so it ranks below formatting and accuracy — but the rules below are specific enough to follow on the first pass, which makes fixing them unnecessary.

The brand description that governs this is a paragraph of adjectives. Adjectives are not executable, so each one below is translated into a behavior with a pair of examples.

> Quick to the point. Youthful, but never childish. Open and contemporary, yet warm and approachable. Solution-driven, but always human and relatable. Cheerful, relaxed, and confident — never jokesters. Amicable and easygoing, but more than a buddy — mentors and advisers. High-standard, elegant, and knowledgeable, but never niche or incomprehensible. Effortlessly cool, without saying so. Caring, but assertive. Open and inviting. Emotional, yet grounded and secure.

## 1. Mentor, not buddy

Give the reason behind an instruction, briefly. A buddy says what to click; a mentor says why it matters. This is the single behavior that most distinguishes a good page here from a merely correct one.

- **Do:** "Sign up with a Git provider such as GitHub, GitLab, or Bitbucket. This links your Codacy user with your Git provider user, making it easier to add repositories to Codacy and invite your teammates." The second sentence is the reason.
- **Don't:** "Sign up with a Git provider." Complete, and gives the reader nothing to anchor the step to.

One sentence of context per step is the ceiling. Mentor, not lecturer.

## 2. One idea per sentence

If a sentence needs two or more commas to stay upright, it is two sentences.

- **Do:** "Codacy organizations let you automatically import your Git provider organizations, repositories, and team members into Codacy with a few clicks."
- **Don't:** "Codacy organizations, which are a core part of how the platform works, let you import things like your Git provider organizations and also repositories, as well as team members, automatically, which saves you time."

## 3. Active voice, second person

Address the reader directly and put the actor in front of the verb.

- **Do:** "Click **Add provider**."
- **Don't:** "The **Add provider** button should be clicked."

## 4. Confident and relaxed, never a jokester

Cheerful is not playful. No puns, no exclamation-mark enthusiasm, no jokes about the product or about the reader's predicament. Energy comes from directness, not from performing a tone.

- **Do:** "Deleting an organization on Codacy completely removes the configurations and all data related to the organization and its repositories from Codacy."
- **Don't:** "Heads up — hitting delete here is a big deal, so don't go wild!"

## 5. Show the product working; never grade it

Describe what something does and let the reader form the impression. No marketing adjectives about Codacy or any feature, and no editorializing about how easy or useful something is.

- **Do:** "Codacy applies your rules during analysis once you set it up."
- **Don't:** "Codacy's powerful new integration makes analysis effortless."

## 6. Knowledgeable, never incomprehensible

Assume a capable reader who has not seen this specific feature. Define Codacy-specific jargon the first time a page uses it, in place.

- **Do:** "Endpoints that return lists containing a potentially large number of results use cursor-based pagination to return the results in small batches." Names the mechanism, then says what it does.
- **Don't:** "Use cursor pagination as usual."

## 7. Caring, but assertive

Warmth is context and a real fallback — troubleshooting pages end by naming a way to get help, not with a shrug. Assertiveness is stating consequences without hedging, especially inside `warning` and `important` blocks.

- **Do:** "If you're using Codacy Self-hosted you must use your own Codacy instance domain name in the API URLs."
- **Don't:** "You may want to think about possibly using your own domain name if that applies to your situation."

## Contractions

Fine in explanatory prose. Avoid in instructions and in anything stating a consequence: "do not" reads as a rule, "don't" reads as advice.

## The one deliberate exception: release notes

Release notes use a chattier, first-person voice, and are allowed the exclamation mark and the contraction that rules 4 and 7 rule out elsewhere: "We've upgraded how ShellCheck works on Codacy! While you previously had to configure ShellCheck analysis directly through the Codacy UI, you can now manage your settings using a configuration file."

This is intentional, not drift. Release notes are read as short announcements rather than as instructional content. Both directions are regressions: do not import that voice into how-to, concept, reference, or troubleshooting pages, and do not flatten a release note into the neutral instructional voice.

## Naming

The repo's linter vocabulary — `.github/styles/config/vocabularies/Codacy/accept.txt` — is the source of truth for third-party tool and integration spellings (ESLint, RuboCop, ShellCheck, and the rest). Read it rather than guessing, and rather than duplicating it here.

That vocabulary catches single-word casing drift. It does not catch multi-word product names, which pass silently however they are cased. Those are on you:

| Write | Not |
|---|---|
| Codacy Cloud | Codacy cloud |
| Codacy Self-hosted | Codacy self-hosted, Codacy Self Hosted |
| Codacy Guardrails | Codacy guardrails |
| Codacy Cloud CLI | Codacy cloud CLI, Codacy Cloud cli |
| Codacy Analysis CLI | Codacy analysis CLI |
| Codacy AI | Codacy ai |
| Codacy API | Codacy Api |

For any name not listed, follow the spelling used in the `nav:` and `extra.sidebar_icons` entries in `mkdocs.yml` — those are the canonical section names. Two traps worth knowing:

- **Codacy Cloud CLI (`codacy`) and Codacy Analysis CLI (`codacy-analysis`) are different tools.** Establish which one a page means before naming it.
- **GitHub Enterprise Cloud is GitHub's product, not Codacy's.** Write it in full on first mention; Codacy's support for it is a different subject from the product itself.

Use the vocabulary the product UI and the reader use, not the internal engineering term for the same thing.

## Words to cut

- **Marketing adjectives:** powerful, seamless, robust, cutting-edge, effortless, best-in-class, game-changing.
- **Filler:** "it's worth noting that", "please note that", "in order to" (use "to"), "simply", "just".
- **Editorializing:** "this is a powerful feature", "this makes things much easier". If it is true, the instructions will show it.
