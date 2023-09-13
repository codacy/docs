# Organization Jira integration for Security and risk management

!!! info "This integration is only available for Jira Cloud"

Integrate Jira with [Security and risk management](../managing-security-and-risk.md) to import your Jira issues and manage them all in one place as security items.

## Installing the Jira integration

!!! note
    -   Before you install the Jira integration, tag the Jira issues you wish to import with the label **security** (case-insensitive).

    -   Use an admin Jira account when you install this integration. This lets Codacy improt all issues, since the integration has the same permissions as the authorizing account.

To install the Jira integration:

1.  Open your organization **Integrations**, page **Jira**, and click **Install Jira**. This redirects you to Atlassian's website.

    ![Security and risk management Jira integration installation](images/jira-integration-srm-install.png)

1.  On Atlassian's website, authorize Codacy. You're then redirected back to Codacy.

After installing, Codacy imports all open Jira issues created up to 90 days before integration.

To learn more about how the integration works, see [how Codacy manages security items](../managing-security-and-risk.md#opening-and-closing-items) and [how Codacy assigns security item severities](../managing-security-and-risk.md#item-severities-and-deadlines).

## Uninstalling the Jira integration

To uninstall the Jira integration, open your organization **Integrations**, page **Jira**, then click **Uninstall Jira** and confirm.

!!! important
    - Uninstalling the Jira integration with the procedure described above deletes all associated open items.

    - Uninstalling the Jira integration through the Jira website doesn't delete any associated items. However, it prevents Codacy from opening new Jira-related items.

## See also

-   [Repository Jira integration](../../repositories-configure/integrations/jira-integration.md)
