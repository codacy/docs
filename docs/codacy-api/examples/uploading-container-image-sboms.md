---
description: Instructions on how to upload container image SBOMs to Codacy using the API, and how to list and delete image tags.
---

# Uploading container image SBOMs to Codacy

Codacy scans your container images for known vulnerabilities from an SBOM (Software Bill of Materials) that you upload. If your pipeline already produces an SBOM, or you generate one with a tool other than the [Codacy CLI v2](https://github.com/codacy/codacy-cli-v2), you can upload it directly through the API and monitor the results as findings under [Container scanning](../../security/container-scanning.md).

Before you automate this, read [how tagging affects your findings](../../security/container-scanning.md#how-tagging-affects-your-findings). The tag you upload to decides whether Codacy keeps one set of findings for the image or starts a new set with every release, and it is the choice that is hardest to reverse.

## Uploading an SBOM to Codacy

1.  Generate an SBOM of your container image in CycloneDX or SPDX format, using the tool of your choice.

1.  Upload it to Codacy using the API endpoint [<span class="skip-vale">uploadImageSbom</span>](https://app.codacy.com/api/api-docs#uploadimagesbom):

    ```bash
    curl -X POST https://app.codacy.com/api/v3/organizations/<GIT_PROVIDER>/<ORGANIZATION>/image-sboms \
      -H 'api-token: <API_KEY>' \
      -H 'Content-Type: multipart/form-data' \
      -F 'sbom=@<SBOM_PATH>' \
      -F 'imageName=<IMAGE_NAME>' \
      -F 'tag=<TAG>'
    ```

    A successful upload returns `204 No Content`. The image is scanned on the next nightly run, not immediately.

Replace the placeholders with your own values:

-   **API_KEY:** [Account API token](../api-tokens.md#account-api-tokens) used to authenticate on the Codacy API.
-   **GIT_PROVIDER:** Git provider hosting the organization, using one of the values in the table below. For example, `gh` for GitHub Cloud.

    | Value | Git provider    |
    |-------|-----------------|
    | `gh`  | GitHub Cloud    |
    | `gl`  | GitLab Cloud    |
    | `bb`  | Bitbucket Cloud |

-   **ORGANIZATION:** Name of the organization on the Git provider. For example, `codacy`.
-   **SBOM_PATH:** Path to the file containing the SBOM.
-   **IMAGE_NAME:** Name of the container image, without a tag. For example, `myapp`.
-   **TAG:** Tag to record the findings against. For example, `prod` or `1.4.2`.

The form also accepts two optional fields:

-   **repositoryName:** Repository to associate the image with, so findings link back to it.
-   **environment:** Environment where the image is deployed, such as `production`. It appears in the tag list.

!!! important
    The tag you send in the `tag` field must match the tag recorded inside the SBOM, or the upload is rejected with `400 Bad Request` and the message `SBOM tag mismatch: expected <x>, found <y>`. Tools differ in where they write the image reference: Trivy writes the full `name:tag` into the component name inside the SBOM, while some other generators write the name and the tag in different fields. Check what your generator produces before scripting this.

## Listing the image tags you have uploaded

To retrieve the tags Codacy holds for an image, use the endpoint [<span class="skip-vale">listImageTags</span>](https://app.codacy.com/api/api-docs#listimagetags):

```bash
curl -X GET 'https://app.codacy.com/api/v3/organizations/<GIT_PROVIDER>/<ORGANIZATION>/images/<IMAGE_NAME>/tags?limit=100' \
  -H 'api-token: <API_KEY>' \
  -H 'Accept: application/json'
```

The endpoint returns at most 100 tags per request and paginates with a cursor. See [using pagination](../using-the-codacy-api.md#using-pagination) to retrieve the remaining pages.

## Deleting an image tag

Your organization can hold 1,000 image tags in total. Once you reach that limit, Codacy stops accepting image tags it has not seen before, so a pipeline that uploads a new tag on every release stops being scanned. To make room, delete the tags for releases you no longer support using [<span class="skip-vale">deleteImageTag</span>](https://app.codacy.com/api/api-docs#deleteimagetag):

```bash
curl -X DELETE https://app.codacy.com/api/v3/organizations/<GIT_PROVIDER>/<ORGANIZATION>/image-sboms/<IMAGE_NAME>/tags/<TAG> \
  -H 'api-token: <API_KEY>'
```

Deleting a tag removes its scan history and findings. To delete an image and all its tags at once, call the same endpoint without the `/tags/<TAG>` segment.

!!! important
    When your organization is at the limit, the upload fails with the message `Organization has reached the maximum limit of 1000 image SBOMs`. The tags you already have keep being scanned every day, so nothing else reports the problem. Match on the message rather than the status code, which is being made more specific.

## Example: uploading an SBOM from your pipeline

Use this example Bash script to upload an image SBOM to Codacy. This example can be adapted to fit your specific needs.

The example script:

1.  Defines the [API token](../api-tokens.md#account-api-tokens) used to authenticate on the Codacy API.
1.  Defines the image name and the tag to record the findings against.
1.  Calls the endpoint [<span class="skip-vale">uploadImageSbom</span>](https://app.codacy.com/api/api-docs#uploadimagesbom) to upload the SBOM.

```bash
CODACY_API_TOKEN="<your API token>"
GIT_PROVIDER="<your Git provider>" # e.g., gh for GitHub
ORGANIZATION_NAME="<your organization name>"
IMAGE_NAME="<your image name>"     # e.g., myapp
IMAGE_TAG="prod"                   # one tag, reused every release
SBOM_FILE_PATH="sbom.cyclonedx.json"

curl -X POST "https://app.codacy.com/api/v3/organizations/$GIT_PROVIDER/$ORGANIZATION_NAME/image-sboms" \
     -H "api-token: $CODACY_API_TOKEN" \
     -H "Content-Type: multipart/form-data" \
     -F "sbom=@$SBOM_FILE_PATH" \
     -F "imageName=$IMAGE_NAME" \
     -F "tag=$IMAGE_TAG" \
     -F "environment=production"
```

To record a separate set of findings per release, set `IMAGE_TAG` to the version your pipeline built instead, and delete the tags you no longer support so you stay under your organization limit.
