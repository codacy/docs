---
description: Instructions on how to set up Codacy Self-hosted to send emails using your SMTP server.
---

# SMTP server

Follow the instructions below to set up Codacy Self-hosted to send emails using your SMTP server:

1.  Edit the file `values-production.yaml` that you [used to install Codacy](../../index.md#helm-upgrade).

2.  Set `global.email.enabled: "true"` and define the remaining values with the credentials for your SMTP server:

    ```yaml
    email:
      enabled: "true"
      replyTo: "notifications@mycompany.com" # Reply-to field on sent emails
      smtp:
        protocol: "smtp" # SMTP protocol to use, either smtps or smtp
        hostname: "smtp.example.com" # Hostname of your SMTP server
        # username: "" # Optional username to authenticate on your SMTP server
        # password: "" # Optional password to authenticate on your SMTP server
        # port: 25 # Optional port of your SMTP server, the default is 25
    ```

3.  Apply the new configuration by performing a Helm upgrade. To do so execute the command [used to install Codacy](../../index.md#helm-upgrade):

    !!! important
        **If you're using MicroK8s** you must use the file `values-microk8s.yaml` together with the file `values-production.yaml`.
        
        To do this, uncomment the last line before running the `helm upgrade` command below.

    {% set helm_upgrade %}
    helm upgrade (...options used to install Codacy...) \
                 --version {version} \
                 --values values-production.yaml \
                 # --values values-microk8s.yaml
    {% endset %}
    {{ self_hosted_tabs(helm_upgrade, code="bash", indent=4) }}

After this is done you will be able to:

-   Invite new users via email
-   Receive commit and pull request email notifications
