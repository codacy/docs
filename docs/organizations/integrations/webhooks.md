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

## Adding a webhook endpoint {: id="adding-a-webhook-endpoint"}

Only an organization admin or [organization manager](../roles-and-permissions-for-organizations.md#organization-manager) can add a webhook endpoint. An organization has a maximum of 10 webhook endpoints.

To add a webhook endpoint:

1.  Open your organization **Integrations**, page **Webhooks** (listed under **Developer tools**).
1.  Click **Add endpoint**.
1.  Enter the HTTPS URL that should receive the webhook deliveries in **Payload URL**, then click **Add endpoint**. Codacy only posts to `https://` URLs that are reachable from the public internet, and rejects a host that doesn't resolve or that resolves to a private or local network address. If you receive events from more than one organization, [include the organization in the URL](#receiving-events-from-more-than-one-organization).

Codacy generates a signing secret for the new endpoint and shows it once, in a card above the list of endpoints. Click the copy button to copy the secret and store it somewhere safe — you need it to [verify deliveries](#verifying-a-delivery), and Codacy doesn't show it again. **Dismiss** stays disabled until you copy the secret.

!!! warning
    Codacy doesn't let you view or regenerate the secret of an existing endpoint. If you lose it, delete the endpoint and add it again to get a new one.

To test your endpoint and see a first delivery, reanalyze a commit on an enabled branch.

If your organization doesn't have access to webhooks yet, the **Webhooks** page shows an upgrade prompt instead. [Talk to us](https://start-chat.com/slack/codacy/rmbTzb) about upgrading. If your organization loses access later, Codacy stops sending deliveries but keeps your endpoints, and they resume with the same signing secrets when access returns.

## Managing webhook endpoints {: id="managing-webhook-endpoints"}

The **Webhooks** page lists the endpoints configured for your organization.

You can't edit an existing endpoint or rotate its secret — delete the endpoint and add a new one instead. To delete an endpoint, click the **Delete** icon on its row and confirm. Deleting an endpoint stops Codacy from posting to it immediately and destroys its signing secret.

Once the organization reaches 10 endpoints, **Add endpoint** is disabled. Delete an endpoint to add another one.

## Managing endpoints with the API {: id="managing-endpoints-with-the-api"}

You can also add, list, and delete webhook endpoints by calling the [Codacy API](../../codacy-api/using-the-codacy-api.md) with an [account API token](../../codacy-api/api-tokens.md). The endpoints you create through the API are the same ones the **Webhooks** page shows. All three operations require the organization admin or [organization manager](../roles-and-permissions-for-organizations.md#organization-manager) role.

Call [`createWebhookEndpoint`](https://api.codacy.com/api/api-docs#createwebhookendpoint) with the HTTPS URL that should receive the webhook deliveries:

```bash
curl -X POST 'https://api.codacy.com/api/v3/organizations/gh/my-organization/integrations/webhooks' \
     -H 'api-token: <your account API token>' \
     -H 'Content-Type: application/json' \
     -d '{"url": "https://example.com/webhooks/codacy"}'
```

Codacy returns the signing secret once, in the response:

```json
{
  "id": "80f64371-e6bc-4d9b-b022-7c873cc5e39f",
  "url": "https://example.com/webhooks/codacy",
  "createdAt": "2026-09-17T09:10:00Z",
  "secret": "3n8fVhZ2k9m1QpXeYtR7wLdCsUbGjNoA"
}
```

The request fails with an HTTP 400 error if the URL isn't `https` or its host doesn't resolve to a public address, with an HTTP 409 error if the organization already has 10 endpoints, and with an HTTP 403 error if your organization doesn't have webhooks enabled.

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

Call [`deleteWebhookEndpoint`](https://api.codacy.com/api/api-docs#deletewebhookendpoint) with the endpoint's `id` to delete it:

```bash
curl -X DELETE 'https://api.codacy.com/api/v3/organizations/gh/my-organization/integrations/webhooks/80f64371-e6bc-4d9b-b022-7c873cc5e39f' \
     -H 'api-token: <your account API token>'
```

## Events sent to your endpoint {: id="events-sent-to-your-endpoint"}

Codacy sends the `quality.analysis.completed` event to every webhook endpoint of your organization when:

-   **A branch analysis finishes.** Codacy finished analyzing a commit on an enabled branch. Codacy sends one delivery for each enabled branch that contains the commit, and reanalyzing a commit sends a new delivery. The commit isn't always the latest one on that branch: an analysis of a commit on `master` is also sent for every other enabled branch that contains it, such as a feature branch created from it.
-   **A pull request analysis finishes.** Codacy sends a new delivery each time the pull request is analyzed again, for example after new commits.

Codacy sends the event regardless of the analysis outcome, not only when it succeeds. Check the body's `status` field for the outcome.

Codacy sends one copy of each event to every webhook endpoint of your organization, and there's no way to filter by repository or branch.

## Delivery payload {: id="delivery-payload"}

Each delivery is an HTTP `POST` request with a JSON body and these headers:

| Header | Description |
|---|---|
| `X-Codacy-Event` | The event type, always `quality.analysis.completed`. |
| `X-Codacy-Delivery` | A UUID that uniquely identifies this delivery. A reanalysis of the same commit generates a new UUID, but a retry of the same delivery reuses it — see [delivery behavior](#delivery-behavior). |
| `X-Codacy-Signature` | The [HMAC-SHA256 signature](#verifying-a-delivery) of the request body, in the form `sha256=<hex-encoded hash>`. |

The body identifies the repository, the commit, and either the branch or the pull request. It doesn't identify your organization or include the analysis results.

Branch analysis finished:

```json
{
  "event": "quality.analysis.completed",
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
  "repository": { "name": "engine" },
  "target": { "type": "pullRequest", "value": "464" },
  "commitSha": "a1b2c3d4e5f60718293a4b5c6d7e8f9012345678",
  "status": "success",
  "timestamp": "2025-09-17T23:00:00Z"
}
```

-   **`target.type`** is `branch` for a branch analysis or `pullRequest` for a pull request analysis. `target.value` is always a string — the branch name, or the pull request number.
-   **`status`** is `success`, `partial_success`, or `failure` — whether all, some, or none of the analysis tasks completed. With `partial_success`, Codacy has results only for the tasks that completed, so issue counts and metrics can be lower than a full analysis would report. The payload doesn't say which tasks failed, so check the analysis in Codacy before you rely on its results. The `status` belongs to one analysis, so the branch and pull request deliveries for the same commit can differ.
-   **`timestamp`** is when the analysis finished, as an ISO 8601 UTC timestamp to the second (`2025-09-17T23:00:00Z`). A retry sends the same value as the original attempt. There's no separate timestamp header: the signature covers the whole body, so verify this field instead of a header if you need to reject stale deliveries.

Codacy doesn't include an issue list or a link to the analysis result in the payload. Use the [Codacy API](../../codacy-api/using-the-codacy-api.md) to look up the analysis details for the commit or pull request, for example [`listPullRequestIssues`](https://api.codacy.com/api/api-docs#listpullrequestissues) or [`listCommitDeltaIssues`](https://api.codacy.com/api/api-docs#listcommitdeltaissues). The payload doesn't include your organization or its Git provider, so keep both with your endpoint settings to make these calls. If you have more than one organization, see [receiving events from more than one organization](#receiving-events-from-more-than-one-organization).

## Verifying a delivery {: id="verifying-a-delivery"}

Verify that a delivery came from Codacy by recomputing its signature and comparing it to the `X-Codacy-Signature` header:

1.  Compute the HMAC-SHA256 hash of the raw request body, using the endpoint's signing secret as the key. Use the secret exactly as Codacy shows it, and don't Base64-decode it. Use the body exactly as received, and don't parse and re-serialize the JSON first.
1.  Hex-encode the hash in lowercase and prefix it with `sha256=`.
1.  Compare the result to the `X-Codacy-Signature` header using a constant-time comparison, and reject the delivery if they don't match.
1.  Optionally reject a delivery whose body `timestamp` is too old, to guard against a captured delivery being replayed. Allow for retries and delays, because the `timestamp` is when the analysis finished, not when the delivery arrived.

## Receiving events from more than one organization {: id="receiving-events-from-more-than-one-organization"}

The payload doesn't include the organization or its Git provider. Each webhook endpoint belongs to one organization, so you tell organizations apart by the endpoint. If you have a single organization, you don't need to do anything.

If you receive events from more than one organization, choose one of these options. You can't edit the URL of an existing endpoint, so decide before you add the endpoints.

-   **Give each organization its own URL.** Add the organization to the path of the **Payload URL**, for example `https://example.com/webhooks/codacy/my-organization`. Your server reads the organization from the request URL and verifies the signature with that organization's secret. Use this option when you can, because you check one secret for each delivery. Don't skip the signature check: the URL isn't part of the signed body, so only the signature proves that the delivery came from Codacy.
-   **Use one URL for all organizations and match the signature.** Every endpoint has its own signing secret. Compute the signature of the delivery with the secret of each of your endpoints. The secret that produces the value in `X-Codacy-Signature` tells you which organization sent it. Reject the delivery if none of them match.

Don't use `repository.name` or `commitSha` to identify the organization. Different organizations can have repositories with the same name, and the same commit can exist in several repositories.

Once you know the organization, use its Git provider and name to look up the analysis with the [Codacy API](../../codacy-api/using-the-codacy-api.md). Store both next to the secret when you add the endpoint.

## Delivery behavior {: id="delivery-behavior"}

-   Codacy waits a limited time for your endpoint to respond, so reply with a `2xx` status right away and process the delivery afterward. If your endpoint answers with a `5xx` status, doesn't answer in time, or can't be reached, Codacy retries the delivery up to 2 more times. Any other response that isn't `2xx` drops the delivery immediately, without a retry. That includes `4xx` responses such as `429`, and redirects, which Codacy doesn't follow. If your endpoint is overloaded, respond with `503` rather than `429` to get a retry.
-   A retry reuses the same `X-Codacy-Delivery` value as the original attempt, so ignore a delivery whose `X-Codacy-Delivery` value you already processed.
-   Codacy can send more than one delivery for the same commit. A commit on several enabled branches sends one delivery for each branch, and a reanalysis sends a new delivery with a new `X-Codacy-Delivery` value. Deliveries that match on `repository.name`, `target.type`, `target.value`, `commitSha`, and `timestamp` are duplicates. To keep only the latest result for a commit, match on the first four and keep the delivery with the latest `timestamp`. `commitSha` alone isn't enough, because the same commit can arrive for more than one branch or pull request. If you share one URL between organizations, add the organization to the match.
-   Codacy resolves the host of your endpoint before every delivery. If the host doesn't resolve, or resolves to a private or local network address, Codacy drops the delivery without a retry.
-   Codacy doesn't guarantee delivery. Retries happen within seconds of each other, so Codacy drops deliveries sent while your endpoint is down for longer than that. Codacy keeps no delivery log and doesn't let you resend a delivery. Log deliveries on your own endpoint if you need a record of what Codacy sent, and check the Codacy API periodically for analyses you didn't receive.
-   Deliveries can arrive out of order, for example when a retry delays one of them. Use `timestamp` to order deliveries for the same repository.

## See also

-   [Roles and permissions for organizations](../roles-and-permissions-for-organizations.md)
-   [Using the Codacy API](../../codacy-api/using-the-codacy-api.md)
