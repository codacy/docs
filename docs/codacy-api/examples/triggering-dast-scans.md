---
description: Instructions on how to trigger DAST/App using the API.
---

# Trigger Dynamic Application Security Testing (DAST) scans

Thanks to the new app scanning capabilities available on the Security and risk management dashboard, it's now possible to automate application scanning via Codacy's API. This means that, with little effort, you'll be able to trigger app scanning on demand every time you deploy a new version of your app.

!!! important
    App scanning is a business feature. If you are a Codacy Pro customer, contact our customer success team to access a short trial.
    Check your [permissions](../../organizations/roles-and-permissions-for-organizations.md). Only git provider admins and organization managers will be able to create new targets and trigger scans (in app and via the API).
    Get your API key. All the methods below require you to authenticate via your [account's API token](../api-tokens.md#account-api-tokens).

## Creating targets

Before the automation process itself, you need to create a target. Targets are single units that contain all the configurations of your scan, in this case the URL (and later on other configurations, like authentication details and OpenAPI definition).
Targets only need to be defined once. The target's URL is immutable, so, if you need to change it, you'll need to delete the target and create a new one.

To create a target:

```bash
curl -X POST https://app.codacy.com/api/v3/organizations/{GIT_PROVIDER}/{ORGANIZATION}/dast/targets \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -H "api-token: {API_KEY}" \
  -d '{"url": "https://api.domain.com/v1"}'
```

Replace the placeholders with your own values:

-   **API_KEY:** [Account API token](../api-tokens.md#account-api-tokens) used to authenticate on the Codacy API.
-   **GIT_PROVIDER:** Git provider hosting of the organization, using one of the values in the table below. For example, `gh` for GitHub Cloud.

    | Value | Git provider      |
    |-------|-------------------|
    | `gh`  | GitHub Cloud      |
    | `ghe` | GitHub Enterprise |
    | `gl`  | GitLab Cloud      |
    | `gle` | GitLab Enterprise |
    | `bb`  | Bitbucket Cloud   |
    | `bbe` | Bitbucket Server  |

-   **ORGANIZATION:** Name of the organization on the Git provider. For example, `codacy`. You must have admin permissions over the organization on the Git provider.

Once you create the target you'll get the 'Target Id' as a response. That id will be used to trigger DAST scans in the next section.

## Trigger DAST analysis scans

Once your targets are created you can trigger an analysis by calling the '[Analyze DAST target](https://api.codacy.com/api/api-docs#analyzedasttarget)' endpoint.

```bash
curl -X POST https://app.codacy.com/api/v3/organizations/{GIT_PROVIDER}/{ORGANIZATION}/dast/targets/{DAST_TARGET_ID}/analyze \
  -H "Accept: application/json" \
  -H "api-token: {API_KEY}"
```

Replace the placeholders with your own values:

-   **API_KEY:** [Account API token](../api-tokens.md#account-api-tokens) used to authenticate on the Codacy API.
-   **GIT_PROVIDER:** Git provider hosting of the organization, using one of the values in the table below. For example, `gh` for GitHub Cloud.

    | Value | Git provider      |
    |-------|-------------------|
    | `gh`  | GitHub Cloud      |
    | `ghe` | GitHub Enterprise |
    | `gl`  | GitLab Cloud      |
    | `gle` | GitLab Enterprise |
    | `bb`  | Bitbucket Cloud   |
    | `bbe` | Bitbucket Server  |

-   **ORGANIZATION:** Name of the organization on the Git provider. For example, `codacy`. You must have admin permissions over the organization on the Git provider.
**DAST_TARGET_ID:** Identifier of a DAST target to analyze (obtained in the [previous section](./triggering-dast-scans.md#creating-targets). For example, `457`. You must have admin permissions over the organization on the Git provider.

Scans occur asynchronously. To monitor an ongoing scan you can use the [target management page in Codacy](../../organizations/managing-security-and-risk.md#app-scanning). Once completed, you can access all scan results by navigating to the **Security dashboard**, selecting the **Findings tab** and filtering by **Scan types > DAST/App scanning**.