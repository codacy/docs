---
description: Instructions on how to trigger DAST/App using the API.
---

# Trigger Dynamic Application Security Testing (DAST) scans

Thanks to the new app scanning capabilities available on the Security and risk management dashboard, it's now possible to automate application scanning via Codacy's API. This means that, with little effort, you'll be able to trigger app scanning on demand every time you deploy a new version of your app.

!!! important
    **App scanning is a business feature.** If you are a Codacy Pro customer, contact our customer success team to access a short trial.

    **Check your [permissions](../../organizations/roles-and-permissions-for-organizations.md).** Only git provider admins and organization managers will be able to create new targets and trigger scans (in app and via the API).


## Creating targets

Before the automation process itself, you need to create a target. Targets are individual configurations that define what Codacy will scan, including the target URL, its type (API or web application), and other fields like OpenAPI specification and optional authentication details for API targets.

Targets only need to be created once. Note that **target URLs are immutable** — if you need to change the URL, definition, or authentication, you'll need to delete the target and create a new one.

To create a target, use the following API request:

```bash
curl -X POST https://app.codacy.com/api/v3/organizations/{GIT_PROVIDER}/{ORGANIZATION}/dast/targets \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -H "api-token: {API_KEY}" \
  -d '{
        "url": {TARGET_URL},
        "targetType": {TARGET_TYPE},
        "apiDefinitionUrl": {API_DEFINITION_URL},
        "apiAuthHeaders": {
          "{HEADER_NAME}": "{HEADER_VALUE}"
        }
      }'
```

Replace the placeholders with your own values:

| Field | Required | Description |
|-------|----------|-------------|
| **API_KEY** | true | [Account API token](../api-tokens.md#account-api-tokens) used to authenticate on the Codacy API |
| **GIT_PROVIDER** | true | Git provider hosting of the organization, using one of the values in the table below. <br/>**Options:** `gh` (GitHub Cloud), `ghe`(GitHub Enterprise), `gl` (Gitlab Cloud), `gle` (Gitlab Enterprise), `bb` (Bitbucket Cloud), `bbe` (Bitbucket Server) | 
| **ORGANIZATION** | true | Name of the organization on the Git provider. You must have admin permissions over the organization on the Git provider.<br/>For example, `codacy` |
| **TARGET_URL** | true | URL of the Web app or API that will be scanned. <br/>Must start with `http://` or `https://`|
| **TARGET_TYPE** | false | Type of target to be scanned <br/> **Options:** `webapp` (default), `openapi` or `graphql`|
| **API_DEFINITION_URL** | false * | The URL to a publicly accessible OpenAPI specification.<br/>*** Required for OpenAPI targets**|
| **HEADER_NAME** | false | Name of the authentication header. <br/>For example, `Authentication`|
| **HEADER_VALUE** | false | Value of the authentication header. <br/>For example, a token or API key|

Once you create the target you'll get the target `id` as a response. You will use it to trigger DAST scans in the next section.

!!! important
    Currently we only support one authentication header. If you need more, please let us know via support.

## Trigger DAST analysis scans

Once your targets are created you can trigger an analysis by calling the '[Analyze DAST target](https://api.codacy.com/api/api-docs#analyzedasttarget)' endpoint.

```bash
curl -X POST https://app.codacy.com/api/v3/organizations/{GIT_PROVIDER}/{ORGANIZATION}/dast/targets/{DAST_TARGET_ID}/analyze \
  -H "Accept: application/json" \
  -H "api-token: {API_KEY}"
```

Replace the placeholders with your own values:

-   **API_KEY:** [Account API token](../api-tokens.md#account-api-tokens) used to authenticate on the Codacy API.
-   **GIT_PROVIDER:** Git provider hosting of the organization (check the table on the example above). For example, `gh` for GitHub Cloud.
-   **ORGANIZATION:** Name of the organization on the Git provider. For example, `codacy`. You must have admin permissions over the organization on the Git provider.
-   **DAST_TARGET_ID:** Identifier of a DAST target to analyze (obtained in the [previous section](./triggering-dast-scans.md#creating-targets). For example, `457`. You must have admin permissions over the organization on the Git provider.

Scans occur asynchronously. To monitor an ongoing scan you can use the [target management page in Codacy](../../organizations/managing-security-and-risk.md#app-scanning). Once completed, you can access all scan results by navigating to the **Security dashboard**, selecting the **Findings tab** and filtering by **Scan types > DAST/App scanning**.