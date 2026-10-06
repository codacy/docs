---
description: Configure webhook endpoints to receive a real-time HTTP notification whenever Codacy finishes the quality analysis of a branch or a pull request in your organization.
---

# Webhooks

{%
    include-markdown "../../assets/includes/paid.md"
    start="<!--paid-feature-business-start-->"
    end="<!--paid-feature-business-end-->"
%}

Webhooks let Codacy push a real-time HTTP notification to an endpoint you control whenever Codacy finishes the quality analysis of a branch or a pull request, instead of you having to poll the Codacy API for updates. Once you add an endpoint, Codacy posts events from every repository of your organization to it.

## Adding a webhook endpoint {: id="adding-a-webhook-endpoint"}

Only an organization admin or [organization manager](../roles-and-permissions-for-organizations.md#organization-manager) can add a webhook endpoint. An organization has a maximum of 10 webhook endpoints.

The URL must use `https://` and be reachable from the public internet. Codacy rejects a host that doesn't resolve or that resolves to a private or local network address. If you receive events from more than one organization, see [how to tell them apart](#receiving-events-from-more-than-one-organization).

To add a webhook endpoint:

1.  Open your organization **Integrations**, page **Webhooks** (listed under **Developer tools**).
1.  Click **Add endpoint**.
1.  In the dialog, enter the URL that should receive the webhook deliveries in **Payload URL**, then click **Add endpoint**.
1.  Click the copy button on the card above the list of endpoints to copy the signing secret, and store it somewhere safe. Codacy generates a secret for each new endpoint and shows it once. You need it to [verify deliveries](#verifying-a-delivery). **Dismiss** stays disabled until you copy the secret.
1.  To test your endpoint and see a first delivery, reanalyze a commit on an enabled branch.

!!! warning
    If you lose the secret, [delete the endpoint](#managing-webhook-endpoints) and add it again to get a new one.

If your organization doesn't have access to webhooks yet, the **Webhooks** page shows an upgrade prompt instead. [Talk to us](https://start-chat.com/slack/codacy/rmbTzb) about upgrading.

## Managing webhook endpoints {: id="managing-webhook-endpoints"}

The **Webhooks** page lists the endpoints configured for your organization.

You can't edit an existing endpoint or rotate its secret. Delete the endpoint and add a new one instead. To delete an endpoint, click the **Delete** icon on its row and confirm. Deleting an endpoint stops Codacy from posting to it immediately and destroys its signing secret.

Once the organization reaches 10 endpoints, **Add endpoint** is disabled. Delete an endpoint to add another one.

If your organization loses access to webhooks later, Codacy stops sending deliveries but keeps your endpoints, and they resume with the same signing secrets when access returns.

!!! tip
    You can also add, list, and delete webhook endpoints [using the Codacy API](../../codacy-api/examples/managing-webhook-endpoints-programmatically.md). The endpoints you create through the API are the same ones the **Webhooks** page shows.

## Events sent to your endpoint {: id="events-sent-to-your-endpoint"}

Codacy sends the `quality.analysis.completed` event to every webhook endpoint of your organization when:

-   **A branch analysis finishes.** Codacy finished analyzing a commit on an enabled branch. Codacy sends one delivery for each enabled branch that contains the commit, and reanalyzing a commit sends a new delivery. The commit isn't always the latest one on that branch: an analysis of a commit on `master` is also sent for every other enabled branch that contains it, such as a feature branch created from it.
-   **A pull request analysis finishes.** Codacy sends a new delivery each time the pull request is analyzed again, for example after new commits.

Codacy sends the event regardless of the analysis outcome, not only when it succeeds. Check the body's `status` field for the outcome.

Codacy sends one copy of each event to every webhook endpoint of your organization, and there's no way to filter by repository or branch.

## What the event doesn't cover {: id="what-the-event-doesnt-cover"}

`quality.analysis.completed` reports the outcome of Codacy's quality analysis, including SAST and SCA. SCA runs send their own deliveries, see [delivery behavior](#delivery-behavior). The event doesn't report the outcome of:

-   **Coverage analysis.** Codacy processes the coverage data you upload apart from the quality analysis, so the event doesn't tell you whether Codacy received or processed coverage for a commit, and `status` doesn't reflect it. Codacy doesn't send a webhook event for coverage analysis yet.
-   **DAST and container scanning.**

To check whether Codacy received the coverage data for a pull request, call [`getPullRequestCoverageReports`](https://api.codacy.com/api/api-docs#getpullrequestcoveragereports). See [identifying commits without coverage data](../../codacy-api/examples/identifying-commits-without-coverage-data.md) for an example.

## Delivery payload {: id="delivery-payload"}

Each delivery is an HTTP `POST` request with a JSON body and these headers:

| Header | Description |
|---|---|
| `X-Codacy-Event` | The event type, always `quality.analysis.completed`. |
| `X-Codacy-Delivery` | A UUID that uniquely identifies this delivery. A retry of the same delivery reuses it. See [delivery behavior](#delivery-behavior). |
| `X-Codacy-Signature` | The [HMAC-SHA256 signature](#verifying-a-delivery) of the request body, in the form `sha256=<hex-encoded hash>`. |

The body identifies the organization, the repository, the commit, and either the branch or the pull request. It doesn't include the analysis results.

Branch analysis finished:

```json
{
  "event": "quality.analysis.completed",
  "repository": { "name": "engine" },
  "organization": { "id": 123456 },
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
  "organization": { "id": 123456 },
  "target": { "type": "pullRequest", "value": "464" },
  "commitSha": "a1b2c3d4e5f60718293a4b5c6d7e8f9012345678",
  "status": "success",
  "timestamp": "2025-09-17T23:00:00Z"
}
```

-   **`organization.id`** is the Codacy ID of the organization the delivery belongs to, as a JSON number. The payload doesn't include the organization name or its Git provider. To look them up, see [receiving events from more than one organization](#receiving-events-from-more-than-one-organization).
-   **`target.type`** is `branch` for a branch analysis or `pullRequest` for a pull request analysis. `target.value` is always a string: the branch name or the pull request number.
-   **`status`** is `success`, `partial_success`, or `failure`, depending on whether all, some, or none of the analysis tools completed. With `partial_success`, Codacy reports results only from the tools that completed, so issue counts and metrics can be lower than a full analysis would report. A single failed tool is enough to cause it, while `failure` needs every tool to fail. The payload doesn't say which tool failed. If you keep seeing `partial_success`, click **View logs** on the [pull request](../../repositories/pull-requests.md#viewing-analysis-logs) or [commit](../../repositories/commits.md#viewing-analysis-logs) page to find out. The `status` belongs to one analysis, so the branch and pull request deliveries for the same commit can differ.
-   **`timestamp`** is when the analysis finished, as an ISO 8601 UTC timestamp to the second (`2025-09-17T23:00:00Z`). A retry sends the same value as the original attempt. There's no separate timestamp header: the signature covers the whole body, so verify this field instead of a header if you need to reject stale deliveries.

Codacy doesn't include an issue list or a link to the analysis result in the payload. Use the [Codacy API](../../codacy-api/using-the-codacy-api.md) to look up the analysis details for the commit or pull request, for example [`listPullRequestIssues`](https://api.codacy.com/api/api-docs#listpullrequestissues) or [`listCommitDeltaIssues`](https://api.codacy.com/api/api-docs#listcommitdeltaissues). These endpoints identify an organization by its Git provider and name, not by the `organization.id` in the payload, so [keep a lookup from the ID to both](#receiving-events-from-more-than-one-organization).

## Verifying a delivery {: id="verifying-a-delivery"}

Verify that a delivery came from Codacy by recomputing its signature and comparing it to the `X-Codacy-Signature` header:

1.  Compute the HMAC-SHA256 hash of the raw request body, using the endpoint's signing secret as the key. Use the secret exactly as Codacy shows it, and don't Base64-decode it. Use the body exactly as received, and don't parse and re-serialize the JSON first.
1.  Hex-encode the hash in lowercase and prefix it with `sha256=`.
1.  Compare the result to the `X-Codacy-Signature` header using a constant-time comparison, and reject the delivery if they don't match.
1.  Optionally reject a delivery whose body `timestamp` is too old, to guard against a captured delivery being replayed. Allow for retries and delays, because the `timestamp` is when the analysis finished, not when the delivery arrived.

## Receiving events from more than one organization {: id="receiving-events-from-more-than-one-organization"}

Each delivery carries the Codacy ID of its organization in `organization.id`, so you can send the events of several organizations to the same URL and tell them apart when they arrive. If you have a single organization, you don't need to do anything.

The ID alone isn't enough to handle a delivery. You also need the signing secret to verify it, and the organization's Git provider and name to look up the analysis with the [Codacy API](../../codacy-api/using-the-codacy-api.md). Keep a dictionary that maps each organization ID to those three values:

```json
{
  "123456": { "provider": "gh", "name": "my-organization", "secret": "<signing secret>" }
}
```

If you need help mapping the IDs, call [`listUserOrganizations`](https://api.codacy.com/api/api-docs#listuserorganizations) with an [account API token](../../codacy-api/api-tokens.md#account-api-tokens). It returns each organization's `identifier` (the `organization.id` in the payload), `provider`, and `name`. The signing secret comes from the endpoint, and Codacy shows it only once when you [add the endpoint](#adding-a-webhook-endpoint).

When a delivery arrives:

1.  Read `organization.id` from the body and look it up in the dictionary. Reject the delivery if the ID isn't there.
1.  [Verify the signature](#verifying-a-delivery) with the secret from that entry, and reject the delivery if it doesn't match. The ID only selects the secret, so don't trust it or any other field until the signature matches.
1.  Use the `provider` and `name` from the entry to call the Codacy API.

## Delivery behavior {: id="delivery-behavior"}

Codacy waits a limited time for your endpoint to respond, so reply with a `2xx` status right away and process the delivery afterward. If your endpoint answers with a `5xx` status, doesn't answer in time, or can't be reached, Codacy retries the delivery up to 2 more times. Any other response that isn't `2xx` drops the delivery immediately, without a retry. That includes `4xx` responses such as `429`, and redirects, which Codacy doesn't follow. If your endpoint is overloaded, respond with `503` rather than `429` to get a retry.

Codacy can send more than one delivery for the same commit. Use this table to tell why you received another one:

| Why you received another delivery | How to recognize it | What to do |
|---|---|---|
| Your endpoint failed and Codacy retried | Same `X-Codacy-Delivery` | Ignore it if you already processed that ID |
| The commit is on more than one enabled branch, or also belongs to a pull request | Same `commitSha`, different `target.value` or `target.type` | Not duplicates. Use `target` to tell them apart |
| The commit was reanalyzed | New `X-Codacy-Delivery` and a later `timestamp`, same `repository.name`, `target`, and `commitSha` | Keep the delivery with the latest `timestamp` |
| SCA ran on the commit | Same as a reanalysis. Nothing in the payload says the delivery comes from SCA | If your organization uses SCA, see the note below before you keep only the latest delivery |

Deliveries that match on `repository.name`, `target.type`, `target.value`, `commitSha`, and `timestamp` are duplicates. To keep only the latest result for a commit, match on the first four and keep the delivery with the latest `timestamp`. Don't match on `commitSha` alone. If you share one URL between organizations, include `organization.id` in the match.

!!! important
    If your organization uses SCA, review how your integration handles several deliveries for the same commit before you rely on webhook data. Besides the analysis of a commit, Codacy runs SCA on the head commit of the main branch of each repository with SCA enabled, and that run sends its own `quality.analysis.completed` delivery for the commit. The `status` of that delivery reflects only the SCA run, and nothing in the payload tells it apart from a reanalysis. If you keep the delivery with the latest `timestamp`, the SCA delivery can replace the result of the quality analysis. Use the [Codacy API](../../codacy-api/using-the-codacy-api.md) to look up the analysis results when the difference matters.

-   Codacy resolves the host of your endpoint before every delivery. If the host doesn't resolve, or resolves to a private or local network address, Codacy drops the delivery without a retry.
-   Codacy drops a delivery that still fails after the last retry, and doesn't support delivery logs or resending deliveries yet. You can log deliveries on your own endpoint if you need a record, and use the Codacy API to get info from past analysis.
-   Deliveries can arrive out of order, for example when a retry delays one of them. Use `timestamp` to order deliveries for the same repository.

## See also

-   [Roles and permissions for organizations](../roles-and-permissions-for-organizations.md)
-   [Managing webhook endpoints programmatically](../../codacy-api/examples/managing-webhook-endpoints-programmatically.md)
-   [Using the Codacy API](../../codacy-api/using-the-codacy-api.md)
