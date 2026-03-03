---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
---

# Changes to GitHub integration settings – March 2026

!!! info "These changes apply only to GitHub"

We are making two changes to the GitHub integration settings over the coming weeks. Both are handled automatically - you don't need to take any action.

-   [**AI-enhanced comments (Beta) being deprecated for GitHub**](#ai-enhanced-comments) — AI-enhanced comments are being replaced by the [AI Reviewer](../../codacy-ai/codacy-ai.md#pr-reviewer) on March 17, 2026.
-   [**Coverage summary moving to Pull request review**](#coverage-summary) — the Coverage summary setting is being removed; coverage data will soon be included in the Pull request review comment.

## AI-enhanced comments (Beta) being deprecated on March 17, 2026 {: id="ai-enhanced-comments"}

Codacy is deprecating the AI-enhanced comments (Beta) feature in favour of the [AI Reviewer](../../codacy-ai/codacy-ai.md#ai-reviewer), which provides a more accurate, comprehensive, and context-aware experience for identifying and addressing issues.

On March 17, 2026, Codacy will migrate all repositories and organizations that have **AI-enhanced comments** enabled to the [AI Reviewer](../../codacy-ai/codacy-ai.md#ai-reviewer) and remove the setting.


!!! note
    Organizations with contractual restrictions on AI providers or content analysis scope will not be automatically migrated to the AI Reviewer. For these organizations, AI-enhanced comments will simply be disabled. The AI Reviewer can be enabled at any time from your [integration settings](../../repositories-configure/integrations/github-integration.md#ai-reviewer). For more information, contact your account manager or <support@codacy.com>.

### What to expect

-   On March 17, 2026, the AI-enhanced comments setting will be removed and any repository or organization where it is enabled will be migrated to the AI Reviewer.
-   Repositories where AI-enhanced comments are not enabled will not have the AI Reviewer enabled automatically.
-   The AI Reviewer defaults to **manual** mode, so your team won't receive unexpected reviews.

### What do you need to do?

Nothing is required. Codacy will handle the migration automatically.

If you prefer, you can enable the AI Reviewer now in your organization and repository integration settings. If you enable it before March 17, 2026, we recommend manually disabling **AI-enhanced comments** at the same time to avoid duplicate comments on Pull Requests.

If you have any further questions, contact <support@codacy.com>.

### Why this change

-   The [AI Reviewer](../../codacy-ai/codacy-ai.md#pr-reviewer) uses broader context from source code and PR metadata (and Jira tickets, if enabled), which improves accuracy and reduces noise.
-   You can guide reviews with custom instructions using a `review.md` file in your repository.
-   You can trigger reviews on demand from Pull Requests using the **Run review** button.

## Coverage summary moving to Pull request review {: id="coverage-summary"}

Codacy is consolidating coverage data into the Pull request review comment so that you get a complete picture of your code quality and security changes in a single place, without the need for a separate comment.

In the coming weeks, Codacy will migrate all repositories and organizations that have **Coverage summary** enabled to **Pull request review**. On that date, the Coverage summary setting will be removed.

### What to expect

-   Coverage changes will appear alongside quality and security metrics in the Codacy Analysis Summary PR comment.
-   The Coverage summary setting will be removed.
-   The AI Reviewer is **not** automatically enabled as part of this migration.

### What do you need to do?

Nothing. Codacy will handle the migration automatically for any repository or organization that had Coverage summary enabled. If you didn't have this setting on, this won't affect you.

## See also

-   [GitHub integration](../../repositories-configure/integrations/github-integration.md)
-   [AI Reviewer](../../codacy-ai/codacy-ai.md#pr-reviewer)
