# Organization Jira integration for Security and risk management

!!! info "This integration is only available for Jira Cloud"

Integrate Jira with [Security and risk management](../managing-security-and-risk.md) to import your Jira issues and manage them all in one place as security items.

## Installing Jira

!!! note
    -   Before you install Jira, tag the Jira issues you wish to import with the label **security** (case-insensitive).

    -   Use an admin Jira account when you install this integration. This lets Codacy improt all issues, since the integration has the same permissions as the authorizing account.

To install Jira:

1.  Open your organization **Integrations**, page **Jira**, and click **Install Jira**. This redirects you to Atlassian's website.

    ![Security and risk management Jira installation](images/jira-integration-srm-install.png)

1.  On Atlassian's website, authorize Codacy. You're then redirected back to Codacy.

After installing, Codacy imports all open Jira issues created up to 90 days before integration.

To learn more about how the integration works, see [how Codacy manages security items](../managing-security-and-risk.md#opening-and-closing-items) and [how Codacy assigns security item severities](../managing-security-and-risk.md#item-severities-and-deadlines).

## Uninstalling Jira

To uninstall Jira, open your organization **Integrations**, page **Jira**, then click **Uninstall Jira** and confirm.

!!! important
    -   If you uninstall Jira as described above, Codacy deletes all Jira-related open items.

    -   If you uninstall Jira through the Jira website, Codacy doesn't delete any Jira items, but it won't be able to open new Jira items either.

## See also

-   [Repository Jira integration](../../repositories-configure/integrations/jira-integration.md)
