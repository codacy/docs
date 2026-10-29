# Troubleshooting Codacy Self-hosted

This page includes information to help you troubleshoot issues that you may come across while installing, configuring, and operating Codacy Self-hosted.

If the information provided on this page isn't enough to solve your issue, contact <mailto:support@codacy.com> providing:

-   The description of the issue
-   All the information that you were able to obtain while following these troubleshooting instructions
-   The [collected logs](logs-collect.md) of your Codacy instance
-   The version of your Codacy instance

    {%
        include-markdown "../assets/includes/self-hosted-version.txt"
    %}
    

## Git provider integrations

The following sections help you troubleshoot the integration of Codacy with your Git provider.

### GitHub Cloud and GitHub Enterprise authentication {: id="github"}

#### 404 error

While trying to authenticate on GitHub you get the following error message:

![Invalid client id](images/github-invalid-client-id.png)

This might mean that there is a mismatch in the Client ID that Codacy is using to authenticate on GitHub.

To solve this issue:

1.  Make sure that the value of `clientId` in your `values-production.yaml` file is the same as the Client ID of the [GitHub App that you created](../configuration/integrations/github-app-create.md)
2.  If the values were different, update your configuration and re-execute the `helm upgrade` command as described for [GitHub Cloud](../configuration/integrations/github-cloud.md) or [GitHub Enterprise](../configuration/integrations/github-enterprise.md)

If the error persists:

1.  Take note of the parameter `client_id` in the URL of the GitHub error page (for example, `Iv1.0000000000000000`)
2.  Check if the value of the parameter matches the value of the Client ID of your GitHub App

### GitLab Cloud and GitLab Enterprise authentication {: id="gitlab"}

#### Invalid redirect URI

While trying to authenticate on GitLab you get the following error message:

![Invalid redirect URI](images/gitlab-invalid-redirect-uri.png)

This might mean that the redirect URIs are not correct in the GitLab application that Codacy is using to authenticate on GitLab.

To solve this issue:

1.  Open the GitLab application that you created on [GitLab Cloud](../configuration/integrations/gitlab-cloud.md#create-application) or [GitLab Enterprise](../configuration/integrations/gitlab-enterprise.md#create-application)
2.  Make sure that all the redirect URIs have the correct protocol for the Codacy instance endpoints, either `http://` or `https://`
3.  Make sure that all the redirect URIs have the full path with the correct case, since the field is case-sensitive

If the error persists:

1.  Take note of the parameter `redirect_uri` in the URL of the GitLab error page (for example, `https%3A%2F%2Fcodacy.example.com%2Flogin%2FGitLab` or `https%3A%2F%2Fcodacy.example.com%2Flogin%2FGitLabEnterprise`)
2.  Decode the value of the parameter using a tool such as [urldecoder.com](https://www.urldecoder.org/) (for example, `https://codacy.example.com/login/GitLab` or `https://codacy.example.com/login/GitLabEnterprise`)
3.  Check if the decoded value matches one of the redirect URIs of your GitLab application

#### Unknown client

While trying to authenticate on GitLab you get the following error message:

![Invalid application id](images/gitlab-invalid-application-id.png)

This might mean that there is a mismatch in the Application ID that Codacy is using to authenticate on GitLab.

To solve this issue:

1.  Make sure that the value of `clientId` in your `values-production.yaml` file is the same as the Application ID of the [GitLab Cloud](../configuration/integrations/gitlab-cloud.md#create-application) or [GitLab Enterprise](../configuration/integrations/gitlab-enterprise.md#create-application) application that you created
2.  If the values were different, update your configuration and re-execute the `helm upgrade` command as described for [GitLab Cloud](../configuration/integrations/gitlab-cloud.md#configure) or [GitLab Enterprise](../configuration/integrations/gitlab-enterprise.md#configure)

If the error persists:

1.  Take note of the parameter `client_id` in the URL of the GitLab error page (for example, `cca35a2a1f9b9b516ac927d82947bd5149b0e57e922c9e5564ac092ea16a3ccd`)
2.  Check if the value of the parameter matches the value of the Application ID of your GitLab application

### Bitbucket Cloud authentication {: id="bitbucket-cloud"}

#### Invalid client_id

While trying to authenticate on Bitbucket Cloud you get the following error message:

![Invalid client_id](images/bitbucket-invalid-client-id.png)

This might mean that there is a mismatch in the OAuth consumer Client ID that Codacy is using to authenticate on Bitbucket Cloud.

To solve this issue:

1.  Make sure that the value of `key` in your `values-production.yaml` file is the same as the Key of the [Bitbucket OAuth consumer that you created](../configuration/integrations/bitbucket-cloud.md#create-oauth)
2.  If the values were different, update your configuration and re-execute the `helm upgrade` command as described for [Bitbucket Cloud](../configuration/integrations/bitbucket-cloud.md#configure)

If the error persists:

1.  Take note of the parameter `client_id` in the URL of the Bitbucket Cloud error page (for example, `r8QJDkkxj8unYfg4Bd`)
2.  Check if the value of the parameter matches the value of the Client ID of your Bitbucket OAuth consumer

## Accessing the RabbitMQ dashboard

We use RabbitMQ for the internal message queue between our components.

If you need to access the RabbitMQ dashboard:

1.  Create a `port-forward` from the `rabbitmq` pod to your local machine, replacing `<namespace>` with the namespace in which Codacy was installed:

    ```bash
    kubectl port-forward codacy-rabbitmq-ha-0 15672:15672 --namespace=<namespace>
    ```

    !!! important
        **If you're using MicroK8s** use `microk8s.kubectl` instead of `kubectl`.

2.  Access the RabbitMQ dashboard on the address `localhost:15672`, and log in with the configured RabbitMQ credentials.

    The default RabbitMQ credentials are the following:

    -   **Username:** `rabbitmq-codacy`
    -   **Password:** `rabbitmq-codacy`

## Missing new tools

If the **Code patterns** page of your repositories doesn't list a new tool that was included in a new Codacy version, force the list of available tools to refresh by running the following command on any `codacy-engine-*` pod:

```bash
curl -X POST localhost:9000/api/v1/engine/initialize
```

## Upgrade failed: cannot patch "codacy-minio"

If you download and use an updated `values-production.yaml` file while upgrading to [Codacy Self-hosted 9.0.0](https://docs.codacy.com/release-notes/self-hosted/self-hosted-v9.0.0/), you'll get the following error:

> Error: UPGRADE FAILED: cannot patch "codacy-minio" with kind PersistentVolumeClaim: persistentvolumeclaims "codacy-minio" is forbidden: only dynamically provisioned pvc can be resized and the storageclass that provisions the pvc must support resize

This happens because [we updated the MinIO PVC size](https://github.com/codacy/chart/commit/40a158f8b6f62a6f90387060b86fe1dd8d008ed5). As a workaround, you can either:

-   Reset the PVC size back to the original value of 20Gi on your `values.yaml` file:

    ```yaml
    minio:
      fullnameOverride: codacy-minio
      persistence:
        size: 20Gi
    ```

-   [Uninstall your current version of Codacy](../maintenance/uninstall.md) and reinstall Codacy Self-hosted 9.0.0 directly. Your data won't be impacted by the uninstall since it's stored on the database.
