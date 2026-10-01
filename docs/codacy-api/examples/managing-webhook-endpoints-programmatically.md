---
description: Example of how to add, list, and delete the webhook endpoints of an organization programmatically using Codacy's API v3 endpoints createWebhookEndpoint, listWebhookEndpoints, and deleteWebhookEndpoint.
---

# Managing webhook endpoints programmatically

Instead of using the **Webhooks** page, you can add, list, and delete the [webhook endpoints](../../organizations/integrations/webhooks.md) of your organization by calling the [Codacy API](../using-the-codacy-api.md). The endpoints you create through the API are the same ones the **Webhooks** page shows.

All three operations require the [organization admin or organization manager](../../organizations/roles-and-permissions-for-organizations.md#organization-manager) role.

Substitute the placeholders in the examples below with your own values:

-   **API_KEY:** [Account API token](../api-tokens.md#account-api-tokens) used to authenticate on the Codacy API.
-   **GIT_PROVIDER:** Git provider hosting of the organization, using one of the values in the table below. For example, `gh` for GitHub Cloud.

    | Value | Git provider      |
    | ----- | ----------------- |
    | `gh`  | GitHub Cloud      |
    | `ghe` | GitHub Enterprise |
    | `gl`  | GitLab Cloud      |
    | `gle` | GitLab Enterprise |
    | `bb`  | Bitbucket Cloud   |
    | `bbe` | Bitbucket Server  |

-   **ORGANIZATION:** Name of the organization on the Git provider. For example, `my-organization`.
-   **ENDPOINT_ID:** The `id` of the webhook endpoint, which Codacy returns when you add the endpoint and when you list the endpoints.

## Adding an endpoint

Call [`createWebhookEndpoint`](https://api.codacy.com/api/api-docs#createwebhookendpoint) with the HTTPS URL that should receive the webhook deliveries:

```bash
curl -X POST 'https://api.codacy.com/api/v3/organizations/<GIT_PROVIDER>/<ORGANIZATION>/integrations/webhooks' \
     -H 'api-token: <API_KEY>' \
     -H 'Content-Type: application/json' \
     -d '{"url": "https://example.com/webhooks/codacy"}'
```

Codacy returns the signing secret once, in the response. Store it somewhere safe, because you need it to [verify deliveries](../../organizations/integrations/webhooks.md#verifying-a-delivery) and Codacy doesn't return it again:

```json
{
  "id": "80f64371-e6bc-4d9b-b022-7c873cc5e39f",
  "url": "https://example.com/webhooks/codacy",
  "createdAt": "2026-09-17T09:10:00Z",
  "secret": "3n8fVhZ2k9m1QpXeYtR7wLdCsUbGjNoA"
}
```

The request can fail with these HTTP errors:

| Status | Cause                                                                    |
| ------ | ------------------------------------------------------------------------ |
| 400    | The URL isn't `https`, or its host doesn't resolve to a public address   |
| 403    | Your organization doesn't have webhooks enabled                          |
| 409    | The organization already has 10 webhook endpoints                        |

## Listing endpoints

Call [`listWebhookEndpoints`](https://api.codacy.com/api/api-docs#listwebhookendpoints) to see the endpoints configured for your organization:

```bash
curl -X GET 'https://api.codacy.com/api/v3/organizations/<GIT_PROVIDER>/<ORGANIZATION>/integrations/webhooks' \
     -H 'api-token: <API_KEY>'
```

```json
{
  "data": [
    {
      "id": "80f64371-e6bc-4d9b-b022-7c873cc5e39f",
      "url": "https://example.com/webhooks/codacy",
      "createdAt": "2026-09-17T09:10:00Z"
    }
  ],
  "count": 1,
  "limit": 10
}
```

## Deleting an endpoint

Call [`deleteWebhookEndpoint`](https://api.codacy.com/api/api-docs#deletewebhookendpoint) with the endpoint's `id` to delete it. This has the same effect as [deleting the endpoint on the **Webhooks** page](../../organizations/integrations/webhooks.md#managing-webhook-endpoints):

```bash
curl -X DELETE 'https://api.codacy.com/api/v3/organizations/<GIT_PROVIDER>/<ORGANIZATION>/integrations/webhooks/<ENDPOINT_ID>' \
     -H 'api-token: <API_KEY>'
```

## See also

-   [Webhooks](../../organizations/integrations/webhooks.md)
