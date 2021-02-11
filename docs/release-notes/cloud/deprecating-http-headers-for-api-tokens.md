# Deprecating HTTP headers for API tokens | April 1, 2020

On April 1st, 2020 we're deprecating the following HTTP headers used to authenticate to the [Codacy API](https://api.codacy.com/swagger) using either an API token or project token:

-   `api_token`
-   `project_token`

From this date onward, use the following HTTP headers instead:

-   `api-token`
-   `project-token`

## How does this change impact me?

We will support the new and old HTTP headers simultaneously for some time. However, we intend to drop the support for the old HTTP headers in the future.

As such, to avoid downtime in your operations, we recommend that you do the following **as soon as possible**:

-   Update the [Codacy Coverage Reporter](https://github.com/codacy/codacy-coverage-reporter) to version 7.6.6 or later
-   Update the [Codacy Analysis CLI](https://github.com/codacy/codacy-analysis-cli) to version 3.0.0 or later
-   If you have any custom tools or scripts that integrate with the Codacy API, update them to use the new HTTP headers.

## Background information

By default, [NGINX silently drops HTTP headers containing underscores](https://www.nginx.com/resources/wiki/start/topics/tutorials/config_pitfalls/#missing-disappearing-http-headers). With the old HTTP headers, this would require an extra configuration step during the Codacy installation process.

We decided to avoid this extra complexity by changing to the new HTTP headers that don't include underscores.
