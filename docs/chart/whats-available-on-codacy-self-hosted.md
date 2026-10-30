---
description: The Codacy features and tools available on Codacy Self-hosted v10.0 and later, where they differ from Codacy Cloud, and what's only on Codacy Cloud.
---

# What's available on Codacy Self-hosted

Codacy Self-hosted has the same features in every supported version, from v{{ self_hosted_oldest.version }} to v{{ self_hosted_latest.version }}. Later versions add support for newer Kubernetes and PostgreSQL versions and update the bundled tools. To check the versions each release supports, see [Supported versions](index.md#supported-versions).

The rest of the documentation describes Codacy Cloud. Use this page to find out which of those pages apply to your Codacy Self-hosted instance.

## Available on Codacy Self-hosted {: id="available"}

These pages apply to Codacy Self-hosted:

-   **Repositories:** the [repository dashboard](../repositories/repository-dashboard.md), [Commits](../repositories/commits.md), [Files](../repositories/files.md), [Issues](../repositories/issues.md), [Coverage](../repositories/coverage.md), and [Pull requests](../repositories/pull-requests.md)
-   **Repository configuration:** [code patterns](../repositories-configure/configuring-code-patterns.md), [branches](../repositories-configure/managing-branches.md), [ignored files](../repositories-configure/ignoring-files.md), [submodules](../repositories-configure/using-submodules.md), and the [Codacy configuration file](../repositories-configure/codacy-configuration-file.md)
-   **Coverage:** [Codacy Coverage Reporter](../coverage-reporter/index.md)
-   **Local analysis:** [client-side tools](../repositories-configure/local-analysis/client-side-tools.md) and the [Codacy Analysis CLI](../codacy-analysis-cli/index.md)
-   **Organizations:** the [organization overview](../organizations/reporting/organization-overview.md), [managing repositories](../organizations/managing-repositories.md), [managing people](../organizations/managing-people.md), [coding standards](../organizations/using-coding-standards.md), and [roles and permissions](../organizations/roles-and-permissions-for-organizations.md)
-   **Codacy API:** [using the Codacy API](../codacy-api/using-the-codacy-api.md) and [API tokens](../codacy-api/api-tokens.md)

Use the tool versions that match your Codacy Self-hosted version:

{{ self_hosted_table("analysis_cli", "coverage_reporter") }}

## Different on Codacy Self-hosted {: id="different"}

Some features work differently on Codacy Self-hosted:

-   **Quality settings:** quality gates and quality goals are on one page, [Adjusting quality settings](using-codacy/adjusting-quality-settings.md), instead of the separate pages for [quality gates](../repositories-configure/adjusting-quality-gates.md) and [quality goals](../repositories-configure/adjusting-quality-goals.md).
-   **File extensions:** instead of [Languages](../repositories-configure/languages.md), see [Configuring file extensions](using-codacy/configuring-file-extensions.md).
-   **Integrations:** [Jira](using-codacy/jira-integration.md), [Slack](using-codacy/slack-integration.md), and [webhooks](using-codacy/webhook-notifications.md) are set up for each repository, not for the organization.
-   **Security:** each repository has a [Security Monitor](using-codacy/security-monitor.md). Codacy Self-hosted doesn't include [Security and risk management](../security/index.md).

## Only on Codacy Cloud {: id="cloud-only"}

These features aren't available on Codacy Self-hosted:

-   **Security:** [Security and risk management](../security/index.md), including [findings](../security/findings.md), [reports](../security/reports.md), [dependencies](../security/dependencies.md), [app scanning](../security/app-scanning.md), and [container scanning](../security/container-scanning.md)
-   **Codacy AI:** [Codacy AI](../codacy-ai/codacy-ai.md) and the [AI risk hub](../organizations/ai-risk-hub.md)
-   **Developer tools:** [Codacy Guardrails](../codacy-guardrails/codacy-guardrails-getting-started.md), the [Visual Studio Code](../getting-started/integrating-codacy-with-visual-studio-code.md) and [IntelliJ](../getting-started/integrating-codacy-with-intellij-ides.md) extensions, the [Codacy Cloud CLI](../codacy-cloud-cli/index.md), [Codacy CLI v2](https://github.com/codacy/codacy-cli-v2), which connects only to Codacy Cloud, and [Codacy Skills](../codacy-skills/index.md)
-   **Organizations:** [gate policies](../organizations/using-gate-policies.md), [segments](../organizations/segments.md), [audit logs](../organizations/audit-logs-for-organizations.md), [Issues metrics](../organizations/reporting/issues-metrics.md), [Codacy usage](../organizations/reporting/codacy-usage.md), organization-level [Jira](../organizations/integrations/jira-integration.md), [Slack](../organizations/integrations/slack-integration.md), and [webhooks](../organizations/integrations/webhooks.md), and [default Git provider settings](../organizations/integrations/default-git-provider-integration-settings.md)
-   **Your account:** [user session management](../account/user-session-management.md)
-   **Enterprise Cloud:** [GitHub Enterprise Cloud](../enterprise-cloud/github-enterprise-cloud.md)
-   **Tools:** Trivy, Opengrep, Lizard, Ruff, Biome, SQLFluff, and jscpd. The [supported languages and tools](../getting-started/supported-languages-and-tools.md) page lists every tool on Codacy Cloud. To check the tools and tool versions your Codacy Self-hosted version ships, see its [release note](../release-notes/index.md#self-hosted).

## See also

-   [Installing Codacy Self-hosted](index.md)
-   [Upgrading Codacy](maintenance/upgrade.md)
