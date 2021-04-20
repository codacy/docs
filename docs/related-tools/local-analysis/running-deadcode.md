---
description: Instructions on how to run deadcode as a client-side tool on Codacy.
---

# Running deadcode

To run deadcode as a [client-side tool](client-side-tools.md):

{% include "../../assets/includes/client-side-tool-instructions.txt" %}

1.  Download and run the [Codacy Analysis CLI](https://github.com/codacy/codacy-analysis-cli#install){: target="_blank"} on the root of the repository, specifying the tool deadcode.

    ```bash
    codacy-analysis-cli analyze --tool deadcode \
                                --allow-network \
                                --upload \
                                --verbose
    ```

The Codacy Analysis CLI runs deadcode on your repository and uploads the results to Codacy so you can use them in your workflow.
