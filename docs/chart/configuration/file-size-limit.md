---
description: Change the maximum size of the files that Codacy Self-hosted analyzes.
---

# File size limit

By default, Codacy Self-hosted [ignores files larger than 150 KB](../../faq/troubleshooting/why-is-my-file-over-150-kb-missing.md), as Codacy Cloud does. On Codacy Self-hosted you can change the limit, since you decide the resources your instance has.

To change the file size limit:

1.  Edit the value of `global.workerManager.workers.config.analysis.maxFileSizeBytes` in the `values-production.yaml` file that you used to install Codacy:

    ```yaml
    global:
      workerManager:
        workers:
          config:
            analysis:
              maxFileSizeBytes: 150000
    ```

1.  Apply the new configuration by performing a Helm upgrade. To do so execute the command [used to install Codacy](../index.md#helm-upgrade), with the version of Codacy Self-hosted you have installed:

    !!! important
        **If you're using MicroK8s** you must use the file `values-microk8s.yaml` together with the file `values-production.yaml`.

        To do this, uncomment the last line before running the `helm upgrade` command below.

    {% set command %}
    ```bash
    helm upgrade (...options used to install Codacy...) \
                 --version {version} \
                 --values values-production.yaml \
                 # --values values-microk8s.yaml
    ```
    {% endset %}
    {{ self_hosted_tabs(command, indent=4) }}
