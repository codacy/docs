---
description: Instructions on how to run aligncheck as a client-side tool on Codacy.
---

# Running aligncheck

To run aligncheck as a [client-side tool](client-side-tools.md):

{% include "../../assets/includes/client-side-tool-instructions.txt" %}

1.  Download and run the [Codacy Analysis CLI](https://github.com/codacy/codacy-analysis-cli#install){: target="_blank"} on the root of the repository, specifying the tool aligncheck.

    ```bash
    codacy-analysis-cli analyze --tool aligncheck \
                                --allow-network \
                                --upload \
                                --verbose
    ```

The Codacy Analysis CLI runs aligncheck on your repository and uploads the results to Codacy so you can use them in your workflow.
