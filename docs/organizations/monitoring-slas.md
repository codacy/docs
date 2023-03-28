# Monitoring SLAs <!-- *** Concepts *** -->

An SLA, short for service-level agreement, defines the expected time to resolve an action item with a defined priority.

You define an SLA by linking a Codacy issue category and severity to an SLA priority. After you define an SLA, a new SLA action item is automatically created every time Codacy detects a corresponding issue on the most recent commit of the <!-- TODO confirm -->default branch, .

<!-- *** Tasks *** -->
## Setting up an SLA

To set up an SLA for your organization:

1.  Open your organization **SLA monitor** page.

    ![Adding a repository](images/monitoring-slas-placeholder.png)

1.  Click the button **Settings** at the top right-hand corner of the page. This opens the settings modal window.

    The settings modal window contains four tabs, one for each priority level.

1.  Click the **Add** button in the relevant priority tab to create a new SLA for that priority.

1.  Select a combination of Codacy issue category and severity that you want to link to the priority and confirm.

## Monitoring SLA items

To list and monitor SLA items:

1.  Open your organization **SLA monitor** page to display the SLA dashboard.

    The dashboard contains five panes. Each pane contains the total count of matching items and a button to access the respective filtered item list:

    -   **Total**: all open items<!-- TODO confirm if we're listing all items or all open items -->
    -   **Due soon**: open items within 15 days of missing their SLA deadline<!-- TODO confirm -->
    -   **Overdue**: open items with a missed SLA deadline
    -   **Closed on time**: items closed before the SLA deadline, over the past 12 months
    -   **Closed late**: items closed after the SLA deadline, over the past 12 months

    ![Adding a repository](images/monitoring-slas-placeholder.png)

1.  Click the **Review** button in the relevant pane to access the corresponding filtered item list.

1.  To further filter the list by priority or status, use the selectors above the list.

    ![Adding a repository](images/monitoring-slas-placeholder.png)

<!-- *** Reference *** -->
## Item status

<!--
- When an item is open (Codacy)
- When an item is closed (Codacy)
- A table defining item statuses and their meaning:
  - An item is open
    - On track
    - Due Soon
    - Overdue
  - An item is closed
    - Completed on-time
    - Completed late

- For Codacy items:
  - A new item is open if a new Codacy issue is detected on the most recent analyzed commit
  - An item is closed if the related Codacy issue is not detected on the most recent analyzed commit
-->