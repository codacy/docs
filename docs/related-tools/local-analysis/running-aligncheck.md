---
description: Instructions on how to run aligncheck as a client-side tool on Codacy.
---

# Running aligncheck

To run aligncheck as a [client-side tool](client-side-tools.md):

<!-- NOTE
     include-markdown breaks the final list in two, use include instead. -->
{% include "../../assets/includes/client-side-tool-instructions.md" %}

1.  Download and run the [Codacy Analysis CLI](https://github.com/codacy/codacy-analysis-cli#install){: target="_blank"} on the root of the repository, specifying the tool aligncheck.

    ```bash
    codacy-analysis-cli analyze --tool aligncheck \
                                --allow-network \
                                --upload \
                                --verbose
    ```

    If you're using an account API token, you must also provide the flags `--provider`, `--username`, and `--project`. You can obtain the values for these flags from the URL of your repository dashboard on Codacy:

    ```bash
    codacy-analysis-cli analyze --provider <gh, ghe, gl, gle, bb, or bbe> \
                                --username <name of your Codacy organization> \
                                --project <name of your repository> \
                                --tool aligncheck \
                                --allow-network \
                                --upload \
                                --verbose
    ```

The Codacy Analysis CLI runs aligncheck on your repository and uploads the results to Codacy so you can use them in your workflow.
