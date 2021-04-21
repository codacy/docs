---
description: Create an account API token to authorize access to all the repositories that you have access to, or a project API token to authorize access only to a specific repository.
---

# API tokens

The Codacy API tokens allow you to:

-   [Authenticate when using the Codacy API](using-the-codacy-api.md#authenticating-requests-to-the-codacy-api)

-   [Upload coverage data](../coverage-reporter/index.md) or [upload the results of running local analysis](../related-tools/local-analysis/running-local-analysis.md) to Codacy

Codacy provides two types of API tokens:

-   **Account API tokens** are defined at the Codacy user account level. Each account API token authorizes access to the same organizations and repositories as the owner of the account.

-   **Project API tokens** are defined on individual repositories. Each project API token only authorizes access to the corresponding repository.

The sections below provide detailed instructions on how to generate and revoke API tokens.

{% include-markdown "../assets/includes/api-token-warning.md" %}

## Generating and revoking account API tokens  {: id="account-api-tokens"}

To generate an account API token:

1.  Open your account, tab **Access management**.

1.  Click the button **Create API token**:

![Creating an API token](images/codacy-api-tokens-account.png)

To revoke an account API token, click the cross next to the token. After this, all applications or services using that token to access the Codacy API will fail to authenticate and will receive the reply `{"error":"not found"}`.

!!! tip
    You can create multiple account API tokens. This can be useful to have a more flexible control by revoking only a specific token.

## Generating and revoking project API tokens {: id="project-api-tokens"}

To generate a project API token:

1.  Open your repository **Settings**, tab **Integrations**.

1.  Click the button **Add integration** and add a **Project API** integration.

1.  Click the button **Settings** on the **Project API** integration and copy the project API token.

    ![Project API token](images/codacy-api-tokens-project.png)

To revoke a project API token, click the trash can icon for the corresponding **Project API** integration. After this, all applications or services using that token to access the Codacy API will fail to authenticate and will receive the reply `{"error":"not found"}`.

!!! tip
    You can create multiple project API tokens. This can be useful to have a more flexible control by revoking only a specific token.

## See also

-   [Adding coverage to your repository](../coverage-reporter/index.md)
-   [Running local analysis](../related-tools/local-analysis/running-local-analysis.md)
-   [Client-side tools](../related-tools/local-analysis/client-side-tools.md)

