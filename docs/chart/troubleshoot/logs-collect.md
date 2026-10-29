---
description: To help troubleshoot issues, obtain the logs from your Codacy Self-hosted instance and send them to Codacy's Support.
---

# Collecting logs for Support

To help troubleshoot issues, obtain the logs from your Codacy Self-hosted instance and send them to Codacy's Support:

1.  Run the following command on a machine with network access to the Codacy cluster, replacing `<namespace>` with the namespace in which Codacy was installed:

    ```bash
    bash <(curl -fsSL https://raw.githubusercontent.com/codacy/chart/master/docs/troubleshoot/extract-codacy-logs.sh) \
        -n <namespace>
    ```

    This will download the logs of the last 7 days as an archive file with the name `codacy_logs_<timestamp>.zip`.

    !!! tip
        You can also download the script [extract-codacy-logs.sh](extract-codacy-logs.sh) to run it manually.

2.  Send the compressed logs to Codacy's support team at <mailto:support@codacy.com> for analysis.

    !!! note
        If the file is too big, please upload the file to either a cloud storage service such as [Google Drive](https://www.google.com/drive/) or to a file transfer service such as [WeTransfer](http://www.wetransfer.com/) and send us the link to the file instead.

        Alternatively, to reduce the size of the compressed archive file, retrieve logs for a smaller number of days by replacing `<days>` with a number between 1 and 7:

        ```bash
        bash <(curl -fsSL https://raw.githubusercontent.com/codacy/chart/master/docs/troubleshoot/extract-codacy-logs.sh) \
            -n <namespace> -d <days>
        ```
