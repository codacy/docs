---
description: Instructions on how to upgrade Codacy Self-hosted to the latest stable version.
---

# Upgrading Codacy

To upgrade Codacy Self-hosted to the latest stable version:

1.  [Check the release notes](https://docs.codacy.com/release-notes/#self-hosted) for all Codacy Self-hosted versions between your current version and the most recent version for breaking changes and follow the instructions provided carefully.

    !!! warning
        Failing to follow the steps to deal with breaking changes can cause the upgrade to fail or cause problems while Codacy is running.

        **In particular, [Codacy Self-hosted v5.0.0](https://docs.codacy.com/release-notes/self-hosted/self-hosted-v5.0.0/) drops the support for legacy manual organizations**.

    {%
        include-markdown "../assets/includes/self-hosted-version.txt"
    %}

1.  Store all your currently defined configuration values in a file:

    ```bash
    helm get values codacy \
                    --namespace codacy \
                    --output yaml > codacy.yaml

    ```

    !!! note
        If you installed Codacy on a Kubernetes namespace different from `codacy`, make sure that you adjust the namespace when executing the commands in this page.

1.  Review the values stored in the file `codacy.yaml`, making any changes if necessary.

1.  Perform the upgrade using the values stored in the file:

    ```bash
    helm repo update
    helm upgrade codacy codacy-stable/codacy \
                 --version {{ extra.codacy_self_hosted_version }} \
                 --namespace codacy \
                 --values codacy.yaml
    ```

1.  Update your Codacy command-line tools to the versions with the Git tag `self-hosted-{{ extra.codacy_self_hosted_version }}`:

    -   [Codacy Analysis CLI](https://github.com/codacy/codacy-analysis-cli/releases/tag/self-hosted-{{ extra.codacy_self_hosted_version }})
    -   [Codacy Coverage Reporter](https://github.com/codacy/codacy-coverage-reporter/releases/tag/self-hosted-{{ extra.codacy_self_hosted_version }})
