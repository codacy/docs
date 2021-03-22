# Using the Codacy API

The Codacy API allows you to programmatically retrieve and analyze data from Codacy and perform a few configuration changes.

Codacy supports two API versions but use API v3 whenever possible since it's the version with active development:

-   **[API v3](https://api.codacy.com/api/api-docs)**: the new endpoints allow you to access and manipulate the following resources, among others:

    -   [Analysis](https://api.dev.codacy.org/api/api-docs#codacy-api-analysis) details, issue and ignored issue details, repository quality settings
    -   [Account](https://api.dev.codacy.org/api/api-docs#codacy-api-account) details and API token management
    -   [Organization](https://api.dev.codacy.org/api/api-docs#codacy-api-organization) details and join request management
    -   [People](https://api.dev.codacy.org/api/api-docs#codacy-api-people) management
    -   [Repository](https://api.dev.codacy.org/api/api-docs#codacy-api-repository) management and file details
    -   [Tool](https://api.dev.codacy.org/api/api-docs#codacy-api-tools) and code pattern details

-   **[API v2](https://api.codacy.com/swagger)**: the legacy endpoints allow you to access and manipulate the following resources:

    -   [Commit](https://api.codacy.com/swagger#codacy-api-commit) code quality details and deltas
    -   [Project](https://api.codacy.com/swagger#codacy-api-project) details and configurations, file code quality and issue details
