---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
---

# Renaming Stylelint-a11y patterns – October 2026

We've fixed a problem with how Codacy ran the patterns that come from the [stylelint-a11y](https://github.com/YozhikM/stylelint-a11y) plugin in Stylelint. As part of the fix, these patterns now have new names that start with the `a11y_` prefix.

**What happened:**

* Stylelint expects plugin rules to be identified by their plugin's prefix. For example, the plugin's `no-display-none` rule has to be referenced as `a11y/no-display-none`.
* Codacy listed these patterns without the prefix, so Stylelint didn't recognize them, and they couldn't correctly report accessibility issues in your code.
* Adding the `a11y_` prefix to the pattern names lets Codacy load the plugin and run these checks as intended.

**What changes for you:**

* The old patterns have been replaced by new ones with the `a11y_` prefix. The checks themselves haven't changed, only the names.
* Issues reported by the old patterns will no longer appear in your dashboard - they used to show something "Unknown rule..."
* The new patterns are **not enabled automatically**. To keep checking issues from these patterns, you need to enable them in your repositories or Coding Standards.

**Renamed patterns:**

| Previous pattern | New pattern |
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

**To get started:**

1. Go to your repository settings in Codacy, or to your coding standard if you use one.
2. Open the Stylelint tool and search for patterns starting with `Stylelint_a11y_`.
3. Enable the patterns you'd like to enforce.

If you use your own Stylelint configuration file, nothing changes for you: keep referencing these rules as `a11y/<rule-name>` and add `stylelint-a11y` to your `plugins`.

Refer to our [documentation](https://github.com/codacy/codacy-stylelint) for more details.


If you have any questions or need help, please contact <mailto:support@codacy.com>.