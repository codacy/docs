# Container scanning

Container Scanning is a technique to scan your container image's dependencies for known vulnerabilities. The **Security and risk management > Container scanning** page allows you to set up scans that run automatically every night, and surface actionable security findings as new vulnerabilities get discovered.

## How our container image scanning Works

The security tool analyzes your uploaded SBOM (Software Bill of Materials) files to find vulnerabilities in your container images. An SBOM of a container lists all the dependencies included in the image, which in turn allows the scanner to search for known vulnerabilities (CVEs).

### High-level flow

1. Image SBOMs are received either via CI/CD integration or manual upload
2. The image dependencies are scanned against Trivy's vulnerability databases
3. Results appear in the UI after processing

### Scan frequency

1. Proactive scans run automatically once per day
2. Scans are executed every night (UTC) and the findings are updated automatically

No manual action is required to trigger scans after the initial setup.

## Container scanning setup

You can set up container scanning in one of two ways: by connecting your CI/CD pipeline or by manually uploading your image SBOM. Once configured, your image dependencies are scanned daily and results will appear in the Image card list.

### CI/CD integration
You must authenticate the Codacy CLI so your pipeline can securely send your image SBOM to Codacy. 

![Security and risk management import container SBOM in CICD](images/security-risk-management-container-upload-cicd.png)

In order to do that, you need to:

1. Get the API token and set up the environment variable as shown in the UI;
2. Install and run Codacy CLI in your pipeline to upload results.

When CI/CD is configured:

- Images pushed through your pipeline are automatically detected
- New tags are picked up as they are published
- Scans are scheduled automatically

This is the recommended setup for continuous coverage.

### Manual upload
You can also manually upload your container's Software Bill of Materials (SBOM) in CycloneDX or SPDX format.

![Security and risk management manually import container SBOM](images/security-risk-management-container-upload-manually.png)

To manually upload an image SBOM, you need to:

1. Add the image name;
2. Add the image tag;
3. Upload your SBOM file (environment and repository fields are optional).

!!! note
    You can use the [Codacy CLI v2](https://github.com/codacy/codacy-cli-v2) to generate and upload your SBOM file to Codacy.
   


## Image card list

The Image card list provides an overview of all container images and the most recent tag pushed for each image.

![Security and risk management container images](images/security-risk-management-container-image-card-list.png)

For each image, you can see:

- Image name
- The most recent tag pushed for this image
- Options and entry point to check all image tags.

By clicking the card for a specific image, you will see a list of all tags for that image.

![Security and risk management container image tags](images/security-risk-management-container-tag-list.png)

For the image tags, the list is sorted by latest uploaded, and the information includes:

- Tag used
- Environment (optional field)
- Last analysis: Date of the last scan for that tag
- Button to delete that image tag

Once a tag is scanned, you can click on the `check findings` link to access the findings page filtered by the respective results.

!!! important
    Findings are tied to specific image tags. To resolve a finding, "bump" the tag to a newer version if a fixed version exists (if not, a downgrade or an alternative image may be required). 
    For dynamic tags such as `latest`, Codacy will automatically close findings that are no longer present in the current analysis. If you use static tags, you will need to delete tags that are no longer used, as we have a limit of 1000 tags per organization.

## Deleting container image files from Codacy

![Security and risk management delete container SBOM](images/security-risk-management-container-delete-image.png)

What happens when you delete an image:

- The image is permanently removed
- All associated image tags are deleted
- Scan history and results for that image are removed

!!! important
    This action cannot be undone.
    You can also delete a specific tag inside an image card.

## No results yet

If there is no last analysis date for an image tag, it means that the SBOM file was received but the scan has not been completed yet. The most likely scenario is that an analysis hasn't been executed yet.

!!! note
    Remember that scans run nightly (UTC). If you just uploaded the SBOM file, but need results immediately, consider using our [Codacy CLI v2](https://github.com/codacy/codacy-cli-v2) to run a local analysis to scan for any issues.
