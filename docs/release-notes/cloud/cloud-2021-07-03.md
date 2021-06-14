---
rss_title: Codacy release notes RSS feed
rss_href: /feed_rss_created.xml
---

# Performing scheduled database maintenance | July 3, 2021

On July 3, 2021, starting at 08:00 UTC we'll perform scheduled database maintenance to improve the performance and scalability of Codacy Cloud.

To ensure an adequate performance level and scalability of our product, we'll be cleaning historical static code analysis data from our databases. Test coverage data or any other data or settings related to your account, organizations, and repositories won't be affected.

This operation will include around 2 hours of initial downtime, followed by 8 hours of degraded analysis performance for all users and an additional 5 hours for open source users. We expect to finish the maintenance operation at around July 3, 2021 23:00 UTC.

Our [status page](https://status.codacy.com/) will always include the most up-to-date information regarding the operational status of Codacy Cloud.

## How does this impact me?

To mitigate the impact, as part of the maintenance operation we'll re-analyze the pull requests and the last commit in the default branch of each repository according to the following retention periods:

-   6 months for **Pro and Trial plans**
-   15 days for **Open Source plans**

The following is the expected impact during the maintenance operation:

-   New commits and pull requests will either not be picked up by Codacy or take longer to analyze. If you have set Codacy as a required check to merge it will fail.

The following is the expected impact after the maintenance operation is complete:

-   Historical static code analysis information will be missing for all existing commits and pull requests, except for the ones that we re-analyze as part of the maintenance operation
-   The static code analysis information for re-analyzed commits and pull requests can be different from the original if you made changes to the tool and code pattern settings since the original commit date

## What to do if you're missing information on your repositories?

You can wait for Codacy to analyze new pushes to your repositories or manually trigger the re-analysis of any commits and pull requests to re-populate the pages.
