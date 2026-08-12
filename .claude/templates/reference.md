<!--
REFERENCE TEMPLATE (API/CLI-style)
Reference example: docs/codacy-api/using-the-codacy-api.md
Use for: documenting a set of endpoints, commands, or parameters someone looks up rather than reads start-to-end.
No frontmatter by default — the reference example has none, and the meta-descriptions
plugin auto-generates one from the first paragraph. Only add an explicit
`description:` frontmatter field (as its own --- block above the title) if that
auto-generated summary would make bad SEO copy.
Delete these comments before saving the real page. Formatting rules: .claude/reference/formatting.md. Voice: .claude/reference/voice.md.
-->
# <Page title, e.g. "Using the Codacy API">

<!-- Short intro: what this covers and the one thing the reader needs before using it (auth, install, etc.). -->

## <Capability or endpoint group, e.g. "Authenticating requests">

<!-- Explain the mechanism, then show it: -->

```bash
<command or curl example>
```

<!-- If there's a JSON response or config shape, show it in its own fenced block with a language tag. -->

## <Next capability or endpoint group>

<!--
Self-hosted vs Cloud differences belong in an !!! important admonition, not scattered inline:
!!! important
    **If you're using Codacy Self-hosted** ...
-->
