# Project API

The Codacy API offers specific methods to manipulate repositories. To use these API methods, run local analysis, or send coverage results for your repository, you must use a project API Token generated specifically for your repository. Each project API Token is only valid for one repository.

{% include "../../assets/includes/api-token-warning.txt" %}

To generate an API token:

1.  Open your repository **Settings**, tab **Integrations**, click the button **Add integration**, and add a **Project API** integration.

1.  Click the button **Settings** for the project API integration to copy the new API Token.

    ![Project API Token](images/project-api-token.png)

To revoke an API Token, clicking the trash can icon to remove the **Project API** integration.

!!! tip
    You can create multiple Codacy API Tokens. This can be useful to have a more flexible control by revoking only a specific token.

## See also

-   [Running local analysis](../../related-tools/local-analysis/running-local-analysis.md)
-   [Client-side tools](../../related-tools/local-analysis/client-side-tools.md)
-   [Adding coverage to your repository](../../coverage-reporter/adding-coverage-to-your-repository.md)
-   To have access to all repositories, use a [Codacy API token](../../related-tools/codacy-api-tokens.md)
