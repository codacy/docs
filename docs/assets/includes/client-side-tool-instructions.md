1.  Enable **Run analysis on your build server** in your repository **Settings**, tab **General**, **Repository analysis**.

    This setting enables Codacy to wait for the results of the local analysis before resuming the analysis of your commits.

    ![Run analysis through build server](./images/run-analysis-through-build-server.png)

1.  Set up an API token to authenticate on Codacy:

    -   **If you're setting up one repository**, [obtain a project API token](../../codacy-api/api-tokens.md#project-api-tokens) and set the following environment variable to specify your project API token:

        ```bash
        export CODACY_PROJECT_TOKEN=<your project API token>
        ```

    -   **If you're setting up multiple repositories**, [obtain an account API Token](../../codacy-api/api-tokens.md#account-api-tokens) and set the following environment variable to specify the account API token:

        ```bash
        export CODACY_API_TOKEN=<your account API token>
        ```

    {% include-markdown "api-token-warning.md" %}

1.  **If you're using Codacy Self-hosted** set the following environment variable to specify your Codacy instance URL:

    ```bash
    export CODACY_API_BASE_URL=<your Codacy instance URL>
    ```
