---
description: Instructions on how to set up the Codacy Self-hosted integration with GitHub Enterprise.
---

# GitHub Enterprise

Follow the instructions below to set up the Codacy Self-hosted integration with GitHub Enterprise:

1.  Follow the instructions on [creating a GitHub App](github-app-create.md).

2.  Edit the file `values-production.yaml` that you [used to install Codacy](../../index.md#helm-upgrade).

3.  Set `global.githubEnterprise.enabled: "true"` and define the remaining values as described below using the information obtained when you created the GitHub App:

    ```yaml
    githubEnterprise:
      enabled: "true"
      login: "true" # Show login button for GitHub Enterprise
      hostname: "github.example.com" # Hostname of your GitHub Enterprise instance
      protocol: "https" # Protocol of your GitHub Enterprise instance
      port: 443 # Port of your GitHub Enterprise instance
      disableSSL: "false" # Disable certificate validation
      isPrivateMode: "true" # Status of private mode on your GitHub Enterprise instance
      clientId: "" # GitHub App Client ID
      clientSecret: "" # GitHub App Client secret
      app:
        name: "codacy" # GitHub App name
        id: "1234" # GitHub App ID
        privateKey: "" # Contents of the .pem file without newlines or the BEGIN/END lines
    ```

4.  Apply the new configuration by performing a Helm upgrade. To do so execute the command [used to install Codacy](../../index.md#helm-upgrade):

    !!! important
        **If you're using MicroK8s** you must use the file `values-microk8s.yaml` together with the file `values-production.yaml`.
        
        To do this, uncomment the last line before running the `helm upgrade` command below.

    ```bash
    helm upgrade (...options used to install Codacy...) \
                 --version {{ extra.codacy_self_hosted_version }} \
                 --values values-production.yaml \
                 # --values values-microk8s.yaml
    ```

After this is done you will be able to use GitHub Enterprise to authenticate to Codacy.
