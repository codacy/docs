---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
---

# Changes to GitHub integration settings – March 2026

!!! info "These changes apply only to GitHub"

We are making two changes to the GitHub integration settings over the coming weeks. Both are handled automatically - you don't need to take any action.

-   [**Coverage summary moving to Pull request review**](#coverage-summary) — the Coverage summary setting is being removed; coverage data will soon be included in the Pull request review comment.
-   [**AI-enhanced comments (Beta) being deprecated for GitHub**](#ai-enhanced-comments) — AI-enhanced comments are being replaced by the AI Reviewer on March 16, 2026.

## Coverage summary moving to Pull request review {: id="coverage-summary"}

Codacy is consolidating coverage data into the Pull request review comment so that you get a complete picture of your code quality changes in a single place, without the need for a separate comment.

In the coming weeks, Codacy will migrate all repositories and organizations that have **Coverage summary** enabled to **Pull request review**. On that date, the Coverage summary setting will be removed.

### What to expect

-   Coverage changes will appear alongside quality metrics in the Codacy Analysis Summary PR comment.
-   The Coverage summary setting will be removed.
-   The AI Reviewer is **not** automatically enabled as part of this migration.

### What do you need to do?

Nothing. Codacy will handle the migration automatically for any repository or organization that had Coverage summary enabled. If you didn't have this setting on, this won't affect you.

## AI-enhanced comments (Beta) being deprecated on March 16, 2026 {: id="ai-enhanced-comments"}

Codacy is deprecating the AI-enhanced comments (Beta) feature in favour of the AI Reviewer, which provides a more accurate, comprehensive, and streamlined experience for identifying and addressing issues.

On March 16, 2026, Codacy will migrate all repositories and organizations that have **AI-enhanced comments** enabled to the AI Reviewer and remove the setting.

!!! NOTE
    If your organization has specific legal requirements around AI features that would not be in accordance with this change, AI-enhanced comments setting will simply be disabled. If your comfortable with it, the AI reviewer can be enabled by your team at any time. For more information, contact your account manager or contact <support@codacy.com>.

### What to expect

-   The AI-enhanced comments (Beta) setting will be removed on March 16, 2026.
-   If you had AI-enhanced comments enabled at repository or organization level, those will be migrated to the AI Reviewer accordingly.
-   The AI Reviewer defaults to **manual** mode, so your team won't receive unexpected reviews.

### What do you need to do?

Nothing. Codacy will handle the migration automatically. If you have any further questions, contact <support@codacy.com>.

## See also

-   [GitHub integration](../../repositories-configure/integrations/github-integration.md)
-   [AI Reviewer](../../codacy-ai/codacy-ai.md#pr-reviewer)
