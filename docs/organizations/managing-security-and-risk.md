# Managing security and risk

!!! info "This is a beta feature"
    This is a new Codacy feature and <span class="skip-vale">we're</span> continuing to improve it.

The **Security and Risk Management** feature helps you <span class="skip-vale">quickly</span> identify, track, and address security vulnerabilities by automatically opening time-bound, prioritized action items whenever Codacy detects Security issues in your organization repositories or in your connected Jira Cloud instance.

Under Security and Risk Management, you can find the following pages to help you monitor your security vulnerabilities:

-   [Dashboard](#dashboard)
-   [Item list](#item-list)

## Dashboard

The Security and Risk Management dashboard provides a general overview of security items, based on their status.

To access the dashboard, select an organization from the top navigation bar and select **Security and Risk** on the left navigation sidebar.

The dashboard includes five areas:

-   **Total:** all open items
-   **Due soon:** open items within 15 days of their deadline
-   **Overdue:** open items with a missed deadline
-   **Closed on time:** items closed before the deadline
-   **Closed late:** items closed after the deadline

Each of these areas displays a count of matching items and a **Review** button to access a filtered list displaying the matching items.

![Security and Risk Management dashboard](images/security-risk-management-dashboard.png)

## Item list

The Security and Risk Management item list displays a list of items, filtered by status and sorted by due date ascending.

To access the item list, access the [dashboard](#dashboard) and click the **Review** button under an area of interest, based on the desired filtering.

To open the originating issue of an item, click the **Details** column of the item of interest.

![Security and Risk Management item list](images/security-risk-management-item-list.png)

## Managing integrations

Integrations let you detect security vulnerabilities across a number of platforms and display them all as security items on the unified item list.

The following section explains how to integrate with each of the supported platforms.

=== "Codacy"

    The Codacy integration is active by default and can't be deactivated.

=== "Jira Cloud"

    To install the Jira Cloud integration:

    1.  Open your organization **Security and Risk** page and click the **Configure** button. This opens the configuration page.

    1.  On the right-hand side of the page, under the Integrations list, find the Jira entry and click the **Install** button. This redirects you to Atlassian's website.

        ![Security and Risk Management Jira integration](images/security-risk-management-integration-jira.png)

    1.  On Atlassian's website, authorize Codacy to access your Atlassian account. Once successful, you're redirected back to Codacy.

        !!! note
            Use a Jira account with admin permissions when authorizing Codacy. This lets Codacy access all issues.

        Upon installation, Codacy automatically imports all Jira tickets that were created within the 90-day period preceding the integration and tagged with the label "security" and displays them on the item list, along with items from other sources.
        
        Jira-related items are then synchronized daily with the matching Jira issues throughout their lifecycle.

    To uninstall the Jira integration:

    1.  Open your organization **Security and Risk** page and click the button **Configure** to open the configuration page.

    1.  Find the Jira entry under the Integrations area and click the **Options** button (identified by three dots), then select **Uninstall** and confirm.

## Opening and closing items

<!-- TODO Introductory paragraph with shared concepts
There was an admonition here to explain why the dashboard may be empty and how to fix it. That admonition is now under the Codacy section below, so we need an introductory sentence here to point the user to that section.

- To find issues and automatically open and close items, Codacy must detect when the underlying issues are introduced and fixed.
-->
Codacy automatically opens a security item whenever one of the configured source platforms detects a security vulnerability:

-   [Every new item is assigned a priority](#item-priorities-and-deadlines) based on the importance of the underlying vulnerability. Each priority also defines a deadline to fix the underlying vulnerability.

-   [Every new item is assigned a status](#item-statuses) based on the number of days left to fix the underlying vulnerability. As deadlines are approached, met, or missed, items transition through different statuses.

Codacy automatically closes an existing security item when the source platform stops detecting the associated security vulnerability.

The following section details when Codacy opens and closes items for each supported platform.

=== "Codacy"

    -   Codacy automatically opens a new item when it detects a new Security issue on the default branch of a repository.

    -   Codacy automatically closes an item when it stops detecting the underlying issue, when [the underlying issue is ignored](../repositories/issues.md#ignoring-and-managing-issues), or when [the tool that found the underlying issue is disabled](../repositories-configure/configuring-code-patterns.md).

    !!! note
        To make sure that Codacy detects Security issues correctly:

        -   [Enable code patterns](../repositories-configure/configuring-code-patterns.md) belonging to the Security category. These patterns are enabled by default, but may not be on custom configurations.
        -   Alternatively, [apply a coding standard](using-coding-standards.md) that includes patterns belonging to the Security category.
        -   Confirm that the latest [commits](../repositories/commits.md) to the default branches of your repositories are analyzed.

=== "Jira Cloud"

    -   Codacy automatically opens a new item when it detects a new Jira issue with a "security" label.

    -   Codacy automatically closes an item when it detects that the underlying Jira issue is marked as Closed.

    !!! note
        Codacy retrieves updates from Jira once a day. To make sure that Codacy detects Jira issues correctly, assign the "security" label when creating the issue or immediately after.

## Item statuses

The following table describes how item statuses map to deadlines:

<table>
    <thead>
        <tr>
            <th>Status category</th>
            <th>Item status</th>
            <th>Deadline</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="3">Open</td>
            <td>Overdue</td>
            <td>The deadline has been missed</td>
        </tr>
        <tr>
            <td>Due soon</td>
            <td>Fewer than 15 days to the deadline</td>
        </tr>
        <tr>
            <td>On track</td>
            <td>15 days or more to the deadline</td>
        </tr>
        <tr>
            <td rowspan="2">Closed</td>
            <td>Closed late</td>
            <td>Closed after the deadline</td>
        </tr>
        <tr>
            <td>Closed on time</td>
            <td>Closed before the deadline</td>
        </tr>
    </tbody>
</table>

## Item priorities and deadlines

The following table defines item priorities and days to fix the underlying issue, based on the importance of the issue:


| Item priority | Days to close | Codacy Security issue severity | Jira security issue priority |
|---------------|---------------|--------------------------------|------------------------------|
| Critical      | 30            | Critical                       | Blocker                      |
| High          | 60            | -                              | High                         |
| Medium        | 90            | Medium                         | Medium                       |
| Low           | 120           | Minor                          | Low and other                |

## Data retention

Codacy retains open items indefinitely and closed items for one year.

=== "Codacy"

    Deleting a repository deletes all open items belonging to that repository.

=== "Jira Cloud"

    Uninstalling the Jira integration removes any associated open items from the Security and Risk dashboard. Closed items are retained for one year.
