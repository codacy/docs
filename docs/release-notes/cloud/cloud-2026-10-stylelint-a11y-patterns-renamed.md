---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
---

# Stylelint accessibility patterns renamed – October 2026

We've fixed how Codacy runs the Stylelint accessibility patterns! Until now, these 12 patterns didn't check your code. Stylelint didn't recognize their names, so each one reported an issue saying the rule was unknown instead of a real finding.

To fix this, the patterns now use the `a11y_` prefix, which matches how Stylelint names them.

## What to expect

-   **The renamed patterns start disabled.** If you had any of the old patterns enabled, enable the new ones in your coding standard or in your repository's code patterns.
-   **Existing issues from the old patterns disappear.** These were the unknown rule issues, not real findings. Once you enable the renamed patterns, Codacy reports real accessibility issues on your next analysis.
-   **If you use the [Codacy configuration file](../../repositories-configure/codacy-configuration-file.md) or a local Codacy Analysis CLI setup that lists pattern IDs**, update the IDs there too. <!-- TODO: verify with TCE that local Analysis CLI configs reference these pattern IDs -->

## Renamed patterns

| Old pattern ID | New pattern ID |
|---|---|
| `content-property-no-static-value` | `a11y_content-property-no-static-value` |
| `font-size-is-readable` | `a11y_font-size-is-readable` |
| `line-height-is-vertical-rhythmed` | `a11y_line-height-is-vertical-rhythmed` |
| `media-prefers-color-scheme` | `a11y_media-prefers-color-scheme` |
| `media-prefers-reduced-motion` | `a11y_media-prefers-reduced-motion` |
| `no-display-none` | `a11y_no-display-none` |
| `no-obsolete-attribute` | `a11y_no-obsolete-attribute` |
| `no-obsolete-element` | `a11y_no-obsolete-element` |
| `no-outline-none` | `a11y_no-outline-none` |
| `no-spread-text` | `a11y_no-spread-text` |
| `no-text-align-justify` | `a11y_no-text-align-justify` |
| `selector-pseudo-class-focus` | `a11y_selector-pseudo-class-focus` |

If you have any questions or need help, please contact <mailto:support@codacy.com>.
