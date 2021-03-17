# Codacy API tokens

Codacy API tokens allow you to authenticate when using the Codacy API. You must generate a Codacy API token and include it in the headers of your API calls as described on the [Codacy API documentation](https://api.codacy.com/api/api-docs#authentication).

The Codacy API offers specific methods to manipulate repositories. To use these API methods, run local analysis, or send coverage results for your repository, you must use a project API token generated specifically for your repository. Each project API token is only valid for one repository.

To send coverage results for your repository or to limit the API access to a repository, use a [project API token](#).

{% include "../assets/includes/api-token-warning.txt" %}

## Account API tokens

To generate a Codacy API token, open your account, tab **Access management**, and click the button **Create API token**.

![Creating an API token](images/api-tokens.png)

To revoke access to the Codacy API, you must remove the corresponding Codacy API token from the list. After this, all applications or services using that token to access the Codacy API will fail to authenticate and will receive the following error reply:

```text
{"error":"not found"}
```

!!! tip
    You can create multiple Codacy API tokens. This can be useful to have a more flexible control by revoking only a specific token.

## Project API tokens

To generate an API token:

1.  Open your repository **Settings**, tab **Integrations**, click the button **Add integration**, and add a **Project API** integration.

1.  Click the button **Settings** for the project API integration to copy the new API token.

    ![Project API token](images/project-api-token.png)

To revoke an API token, clicking the trash can icon to remove the **Project API** integration.

!!! tip
    You can create multiple Codacy API tokens. This can be useful to have a more flexible control by revoking only a specific token.

## See also

-   [Running local analysis](../related-tools/local-analysis/running-local-analysis.md)
-   [Client-side tools](local-analysis/client-side-tools.md)
-   [Adding coverage to your repository](../coverage-reporter/index.md)
-   To have access to all repositories, use a [Codacy API token](../related-tools/codacy-api-tokens.md)

