---
description: Configure log levels and log retention periods for your Codacy Self-hosted instance.
---

# Logging

Currently, Codacy Self-hosted supports two types of log configurations:

-   **[Log level](#configuring-the-log-level):** The severity of the messages that will be shown in logs.
-   **[Log retention period](#configuring-the-log-retention-period):** The period during which logs will be stored, before being removed by the cleanup job specified in the configuration.

The sections below provide instructions on how to configure each logging configuration.

## Configuring the log level

The log level defines the minimum severity of the events contained in the logs, and affects the necessary storage space in MinIO.

!!! important
    We recommend that you don't use a log level lower than WARN, as the logs are useful to troubleshoot any issues in your Codacy Self-hosted instance.

Codacy supports configuring the log level of the following components:

-   `codacy-api`
-   `engine`
-   `listener`
-   `worker-manager`

Follow these instructions to configure the log level: 

1.  Edit the value of `<COMPONENT>.config.logLevel` in the `values-production.yaml` file that is used to install Codacy, as shown in the example below.

    ```yaml
    worker-manager:
      replicaCount: 2
      config:
        logLevel: WARN
      resources:
        limits:
          cpu: 500m
          memory: 1000Mi
        requests:
          cpu: 200m
          memory: 200Mi
    ```

    The list of supported values for `logLevel` is shown below. Note that each level also prints the information of the levels higher than it:

    -   **DEBUG (default):** Logs detailed information on the flow through the system. **This is the most verbose level**.
    -   **INFO:** Logs interesting events such as application startup and shutdown, important events on the flow of the system, or behavior that is skipped for expected reasons.
    -   **WARN:** Logs runtime events that are unexpected, or undesirable, but not necessarily wrong such as the use of deprecated APIs.
    -   **ERROR:** Only logs runtime errors, or unexpected conditions that prevent the expected behavior from happening. **This is the least verbose level**.

1.  Apply the new configuration by performing a Helm upgrade. To do so execute the command [used to install Codacy](../index.md#helm-upgrade):

    !!! important
        **If you're using MicroK8s** you must use the file `values-microk8s.yaml` together with the file `values-production.yaml`.
        
        To do this, uncomment the last line before running the `helm upgrade` command below.

    ```bash
    helm upgrade (...options used to install Codacy...) \
                 --version {{ extra.codacy_self_hosted_version }} \
                 --values values-production.yaml \
                 # --values values-microk8s.yaml
    ```

## Configuring the log retention period

The log retention period is the number of days during which logs will be stored before being removed by the [MinIO bucket lifecycle configuration policy](https://docs.min.io/docs/minio-bucket-lifecycle-guide.html) that we provide in the template [lifecycle-police-job.yaml](https://github.com/codacy/chart/blob/master/codacy/templates/fluentd/lifecycle-police-job.yaml).

Follow these instructions to configure the log retention period:

1.  Adjust the retention period of your logs by editing the value of `fluentdoperator.expirationDays` in the `values.yaml` file, as shown in the example below.

    ```yaml
    fluentdoperator:
      enabled: true
      defaultConfigmap: codacy-fluentd-config
      bucketName: logs
      expirationDays: 7
    ```

1.  Apply the new configuration by performing a Helm upgrade. To do so execute the command [used to install Codacy](../index.md#helm-upgrade):

    !!! important
        **If you're using MicroK8s** you must use the file `values-microk8s.yaml` together with the file `values-production.yaml`.
        
        To do this, uncomment the last line before running the `helm upgrade` command below.

    ```bash
    helm upgrade (...options used to install Codacy...) \
                 --version {{ extra.codacy_self_hosted_version }} \
                 --values values-production.yaml \
                 # --values values-microk8s.yaml
    ```
