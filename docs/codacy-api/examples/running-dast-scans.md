---
description: Instructions on how to run DAST/App using the API.
---

# Run DAST/App scans

Thanks to the new app scanning capabilities available on the Security and Risk Management dashboard, it's now possible to automate application scanning via the API. This means that, with little effort, you'll be able to run ZAP on demand every time you deploy a new version of your app or your APIs.

!!! important
    App scanning is a business feature. If you are a Codacy Pro customer, contact our customer success team to access a short trial.
    Check your permissions. Only git provider admins and organization managers will be able to Create new targets and run scans (in app and via the API).
    Get your API key. All the methods below require you to authenticate via your account's API token.

## Creating targets

Before the automation process itself, you need to create a target. Targets are single units that contain all the configurations of your scan, in this case the URL (and later on other configurations, like authentication, scan type or open API definition).
Targets only need to be defined once. The target's URL is immutable, so, if you need to change it, you'll need to delete it and create a new target.

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

Once you create the target you'll get the TargetId as a response. That Id will be used later to trigger DAST scans.

## Running DAST analysis scans

Once your targets are created you can trigger an analysis by running the POST /dast/targets/{dastTargetId}/analyze method.

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
-   **DAST_TARGET_ID:** Identifier of a DAST target to analyze (obtained from the POST endpoint used to create a target or GET endpoint used to get a list of targets). For example, `457`. You must have admin permissions over the organization on the Git provider.

Scans will be asynchronous to your deployment pipeline and the results will be posted within the SRM dashboard within the findings tab.

## Examples to Run scans on Deployment

!!! note
    The examples below trigger scans on deployment which may analyze, not the latest, but the previous version of the application. To run DAST post deployment you may explore options such as:

GitHub Action:

```bash
name: DAST Scan with Codacy

on:
  # Trigger on deployment or push to main branch
  deployment:
    branches: [ main ]
  # Allow manual trigger
  workflow_dispatch:

jobs:
  dast-scan:
    runs-on: ubuntu-latest
    steps:
      - name: Run DAST scan
        env:
          CODACY_API_TOKEN: "${CODACY_API_TOKEN}"
          PROVIDER: "gh" # Github in Codacy
          ORG_NAME: "${REPOSITORY_OWNER}" # Gets repo organization
          TARGET_ID: "12590" # Replace with your target ID
        run: |
          curl -X POST "https://app.codacy.com/api/v3/organizations/${PROVIDER}/${ORG_NAME}/dast/targets/${TARGET_ID}/analyze" \
            -H "Accept: application/json" \
            -H "api-token: ${CODACY_API_TOKEN}"
```

CircleCI:

```bash
version: 2.1
jobs:
  dast-scan:
    docker:
      - image: cimg/base:2021.04
    steps:
      - checkout
      - run:
          name: Run DAST Analysis
          command: |
            curl -X POST "https://app.codacy.com/api/v3/organizations/${PROVIDER}/${ORG_NAME}/dast/targets/${TARGET_ID}/analyze" \
              -H "Accept: application/json" \
              -H "api-token: ${CODACY_API_TOKEN}"

workflows:
  version: 2
  deploy-and-scan:
    jobs:
      # Your deployment job here
      - dast-scan:
          requires:
            # Require your deployment job to finish first
            - deploy
          context:
            - codacy-credentials # Store your secrets in a context
```

GitLab CI/CD:

```bash
stages:
  - deploy
  - security

dast_scan:
  stage: security
  image: alpine:latest
  variables:
    PROVIDER: "gitlab"
    ORG_NAME: "${CI_PROJECT_NAMESPACE}"
    TARGET_ID: "12590" # Replace with your target ID
  script:
    - apk add --no-cache curl
    - |
      curl -X POST "https://app.codacy.com/api/v3/organizations/${PROVIDER}/${ORG_NAME}/dast/targets/${TARGET_ID}/analyze" \
        -H "Accept: application/json" \
        -H "api-token: ${CODACY_API_TOKEN}"
  # Run after deployment
  needs:
    - deploy
```

Jenkins:

```bash
pipeline {
    agent any

    environment {
        PROVIDER = 'github' // or your git provider
        ORG_NAME = 'your-organization'
        TARGET_ID = '12590' // Replace with your target ID
    }

    stages {
        // Your deployment stage here

        stage('DAST Scan') {
            steps {
                // Use credentials from Jenkins credentials store
                withCredentials([string(credentialsId: 'codacy-api-token', variable: 'CODACY_API_TOKEN')]) {
                    sh '''
                        curl -X POST "https://app.codacy.com/api/v3/organizations/${PROVIDER}/${ORG_NAME}/dast/targets/${TARGET_ID}/analyze" \
                          -H "Accept: application/json" \
                          -H "api-token: ${CODACY_API_TOKEN}"
                    '''
                }
            }
        }
    }
}
```