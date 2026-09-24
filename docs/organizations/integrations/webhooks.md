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

If your organization doesn't have access to webhooks yet, the **Webhooks** page shows an upgrade prompt instead of your endpoints. [Talk to us](https://start-chat.com/slack/codacy/rmbTzb) about upgrading.

## Adding a webhook endpoint {: id="adding-a-webhook-endpoint"}

Only an organization admin or [organization manager](../roles-and-permissions-for-organizations.md#organization-manager) can add a webhook endpoint. An organization has a maximum of 10 webhook endpoints.

To add a webhook endpoint:

1.  Open your organization **Integrations**, page **Webhooks**.
1.  Click **Add endpoint**.
1.  Enter the HTTPS URL that should receive the webhook deliveries, then save. Codacy only posts to `https://` URLs.

Codacy generates a signing secret for the new endpoint and shows it once. Copy and store the secret somewhere safe — you need it to [verify deliveries](#verifying-a-delivery), and Codacy doesn't show it again.

!!! warning
    Codacy doesn't let you view or regenerate the secret of an existing endpoint. If you lose it, delete the endpoint and add it again to get a new one.

## Managing webhook endpoints {: id="managing-webhook-endpoints"}

The **Webhooks** page lists the endpoints configured for your organization. You can't edit an existing endpoint or rotate its secret — delete the endpoint and add a new one instead.

Deleting an endpoint stops Codacy from posting to it immediately.

## Events sent to your endpoint {: id="events-sent-to-your-endpoint"}

Codacy sends the `quality.analysis.completed` event to every webhook endpoint of your organization when:

-   **A branch analysis finishes.** Codacy finished analyzing the newest commit of an enabled branch. Only the newest commit on a branch triggers a delivery, and reanalyzing that commit sends a new delivery.
-   **A pull request analysis finishes.**

## Delivery payload {: id="delivery-payload"}

Each delivery is an HTTP `POST` request with a JSON body and these headers:

| Header | Description |
|---|---|
| `X-Codacy-Event` | The event type, always `quality.analysis.completed`. |
| `X-Codacy-Delivery` | A UUID that uniquely identifies this delivery. A reanalysis of the same commit generates a new UUID. |
| `X-Codacy-Timestamp` | The time Codacy sent the delivery, as a Unix timestamp in seconds. |
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
  "timestamp": 1758150000
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
  "timestamp": 1758150000
}
```

-   **`target.type`** is `branch` for a branch analysis or `pullRequest` for a pull request analysis. `target.value` is always a string — the branch name, or the pull request number.
-   **`organization.provider`** is the Git provider short code: `gh` for GitHub, `gl` for GitLab, or `bb` for Bitbucket.
-   **`timestamp`** is a Unix timestamp in seconds, matching the `X-Codacy-Timestamp` header.

Codacy doesn't include an issue list or a link to the analysis result in the payload. Use the [Codacy API](../../codacy-api/using-the-codacy-api.md) to look up the analysis details for the commit or pull request.

## Verifying a delivery {: id="verifying-a-delivery"}

Verify that a delivery came from Codacy by recomputing its signature and comparing it to the `X-Codacy-Signature` header:

1.  Compute the HMAC-SHA256 hash of the raw request body, using the endpoint's signing secret as the key.
1.  Hex-encode the hash and prefix it with `sha256=`.
1.  Compare the result to the `X-Codacy-Signature` header using a constant-time comparison, and reject the delivery if they don't match.

## Delivery behavior {: id="delivery-behavior"}

-   Codacy waits 10 seconds for your endpoint to respond. A timeout or a non-2xx response drops the delivery — Codacy doesn't retry it.
-   Codacy can send more than one delivery for the same commit, for example after a reanalysis. Each delivery has a distinct `X-Codacy-Delivery` value, so if you need to avoid processing the same commit twice, treat deliveries with the same `commitSha` as duplicates instead.
-   Codacy doesn't keep a delivery log or let you resend a delivery. Log deliveries on your own endpoint if you need a record of what Codacy sent.

## See also

-   [Roles and permissions for organizations](../roles-and-permissions-for-organizations.md)
-   [Using the Codacy API](../../codacy-api/using-the-codacy-api.md)
