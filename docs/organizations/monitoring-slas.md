[//]: # (TODO remove comments)

[//]: # (*** Concepts ***)

# Monitoring SLAs

[//]: # (WIP - some notes)
An SLA, short for service-level agreement, defines the amount of time required to respond to an incoming task having a defined priority.
Codacy lets you define and monitor SLAs associated with Codacy issues.
An SLA is represented by a priority label associated with a deadline to close a newly open item.
Define an SLA to monitor...
An item is a task to be closed within the deadline defined by the matching SLA.

[//]: # (*** Tasks ***)

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

    The dashboard contains five tiles, each linking to a filtered item list:

    -   **Total**: all open items<!-- TODO confirm if we're listing all items or all open items -->
    -   **Due soon**: open items with an approaching SLA deadline of 15 days or less<!-- TODO confirm -->
    -   **Overdue**: open items with a missed SLA deadline
    -   **Closed on time**: items closed before the SLA deadline, over the past 12 months
    -   **Closed late**: items closed after the SLA deadline, over the past 12 months
    
    ![Adding a repository](images/monitoring-slas-placeholder.png)

1.  Click the relevant tile to display the corresponding filtered item list.

1.  To update or further refine the list by priority or status, use the selectors at the top of the list.

    ![Adding a repository](images/monitoring-slas-placeholder.png)

[//]: # (*** Reference ***)
## Item status

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