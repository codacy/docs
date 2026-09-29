---
description: Configure webhook endpoints to receive a real-time HTTP notification whenever Codacy finishes analyzing a branch or a pull request in your organization.
---

# Webhooks

{%
    include-markdown "../../assets/includes/paid.md"
    start="<!--paid-feature-business-start-->"
    end="<!--paid-feature-business-end-->"
%}

Webhooks let Codacy push a real-time HTTP notification to an endpoint you control whenever Codacy finishes analyzing a branch or a pull request, instead of you having to poll the Codacy API for updates. Once you add an endpoint, Codacy posts events from every repository of your organization to it.

Adding and managing webhook endpoints currently requires calling the [Codacy API](../../codacy-api/using-the-codacy-api.md) directly, using an [account API token](../../codacy-api/api-tokens.md).

## Adding a webhook endpoint {: id="adding-a-webhook-endpoint"}

Only an organization admin or [organization manager](../roles-and-permissions-for-organizations.md#organization-manager) can add a webhook endpoint. An organization has a maximum of 10 webhook endpoints.

Call [`createWebhookEndpoint`](https://api.codacy.com/api/api-docs#createwebhookendpoint) with the HTTPS URL that should receive the webhook deliveries. Codacy only posts to `https://` URLs.

```bash
curl -X POST 'https://api.codacy.com/api/v3/organizations/gh/my-organization/integrations/webhooks' \
     -H 'api-token: <your account API token>' \
     -H 'Content-Type: application/json' \
     -d '{"url": "https://example.com/webhooks/codacy"}'
```

Codacy generates a signing secret for the new endpoint and returns it once, in the response:

```json
{
  "id": "80f64371-e6bc-4d9b-b022-7c873cc5e39f",
  "url": "https://example.com/webhooks/codacy",
  "createdAt": "2026-09-17T09:10:00Z",
  "secret": "3n8fVhZ2k9m1QpXeYtR7wLdCsUbGjNoA"
}
```

Copy and store the `secret` somewhere safe — you need it to [verify deliveries](#verifying-a-delivery), and Codacy doesn't return it again.

!!! warning
    Codacy doesn't let you retrieve or regenerate the secret of an existing endpoint. If you lose it, delete the endpoint and add it again to get a new one.

If your organization doesn't have webhooks enabled, this request fails with an HTTP 403 error. [Talk to us](https://start-chat.com/slack/codacy/rmbTzb) about upgrading.

## Managing webhook endpoints {: id="managing-webhook-endpoints"}

Call [`listWebhookEndpoints`](https://api.codacy.com/api/api-docs#listwebhookendpoints) to see the endpoints configured for your organization:

```bash
curl -X GET 'https://api.codacy.com/api/v3/organizations/gh/my-organization/integrations/webhooks' \
     -H 'api-token: <your account API token>'
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

You can't edit an existing endpoint or rotate its secret — delete the endpoint and add a new one instead. Call [`deleteWebhookEndpoint`](https://api.codacy.com/api/api-docs#deletewebhookendpoint) with the endpoint's `id`:

```bash
curl -X DELETE 'https://api.codacy.com/api/v3/organizations/gh/my-organization/integrations/webhooks/80f64371-e6bc-4d9b-b022-7c873cc5e39f' \
     -H 'api-token: <your account API token>'
```

Deleting an endpoint stops Codacy from posting to it immediately.

## Events sent to your endpoint {: id="events-sent-to-your-endpoint"}

Codacy sends the `quality.analysis.completed` event to every webhook endpoint of your organization when:

-   **A branch analysis finishes.** Codacy finished analyzing the newest commit of an enabled branch. Only the newest commit on a branch triggers a delivery, and reanalyzing that commit sends a new delivery.
-   **A pull request analysis finishes.**

Codacy sends the event regardless of the analysis outcome, not only when it succeeds. Check the body's `status` field for the outcome.

## Delivery payload {: id="delivery-payload"}

Each delivery is an HTTP `POST` request with a JSON body and these headers:

| Header | Description |
|---|---|
| `X-Codacy-Event` | The event type, always `quality.analysis.completed`. |
| `X-Codacy-Delivery` | A UUID that uniquely identifies this delivery. A reanalysis of the same commit generates a new UUID, but a retry of the same delivery reuses it — see [delivery behavior](#delivery-behavior). |
| `X-Codacy-Signature` | The [HMAC-SHA256 signature](#verifying-a-delivery) of the request body, in the form `sha256=<hex-encoded hash>`. |

The body identifies the organization, the repository, the commit, and either the branch or the pull request. It doesn't include the analysis results.

Branch analysis finished:

```json
{
  "event": "quality.analysis.completed",
  "organization": { "provider": "gh" },
  "repository": { "name": "engine" },
  "target": { "type": "branch", "value": "master" },
  "commitSha": "a1b2c3d4e5f60718293a4b5c6d7e8f9012345678",
  "status": "success",
  "timestamp": "2025-09-17T23:00:00Z"
}
```

Pull request analysis finished:

```json
{
  "event": "quality.analysis.completed",
  "organization": { "provider": "gh" },
  "repository": { "name": "engine" },
  "target": { "type": "pullRequest", "value": "464" },
  "commitSha": "a1b2c3d4e5f60718293a4b5c6d7e8f9012345678",
  "status": "success",
  "timestamp": "2025-09-17T23:00:00Z"
}
```

-   **`target.type`** is `branch` for a branch analysis or `pullRequest` for a pull request analysis. `target.value` is always a string — the branch name, or the pull request number.
-   **`organization.provider`** is the Git provider short code: `gh` for GitHub, `gl` for GitLab, or `bb` for Bitbucket.
-   **`status`** is `success`, `partial_success`, or `failure` — whether all, some, or none of the analysis tasks completed.
-   **`timestamp`** is when Codacy sent the delivery, as an ISO 8601 UTC timestamp to the second (`2025-09-17T23:00:00Z`). There's no separate timestamp header: the signature covers the whole body, so verify this field instead of a header if you need to reject stale deliveries.

Codacy doesn't include an issue list or a link to the analysis result in the payload. Use the [Codacy API](../../codacy-api/using-the-codacy-api.md) to look up the analysis details for the commit or pull request.

## Verifying a delivery {: id="verifying-a-delivery"}

Verify that a delivery came from Codacy by recomputing its signature and comparing it to the `X-Codacy-Signature` header:

1.  Compute the HMAC-SHA256 hash of the raw request body, using the endpoint's signing secret as the key.
1.  Hex-encode the hash and prefix it with `sha256=`.
1.  Compare the result to the `X-Codacy-Signature` header using a constant-time comparison, and reject the delivery if they don't match.
1.  Optionally reject a delivery whose body `timestamp` is too old, to guard against a captured delivery being replayed.

## Delivery behavior {: id="delivery-behavior"}

-   Codacy waits 10 seconds for your endpoint to respond. A `5xx` response or a timeout is retried up to 2 more times with exponential backoff, waiting about 1 second before the first retry and about 5 seconds before the second, each with random jitter. A `4xx` response drops the delivery immediately, without a retry.
-   A retry reuses the same `X-Codacy-Delivery` value as the original attempt, so treat retries with the same value as duplicates.
-   Codacy can also send more than one delivery for the same commit for other reasons, for example a reanalysis. Each of those deliveries has a distinct `X-Codacy-Delivery` value, so if you need to avoid processing the same commit twice, treat deliveries with the same `commitSha` as duplicates instead.
-   Codacy doesn't keep a delivery log or let you resend a delivery. Log deliveries on your own endpoint if you need a record of what Codacy sent.

## See also

-   [Roles and permissions for organizations](../roles-and-permissions-for-organizations.md)
-   [Using the Codacy API](../../codacy-api/using-the-codacy-api.md)
