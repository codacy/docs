---
description: Example of how to create new project API tokens for all repositories in an organization using the Codacy API endpoint createRepositoryApiToken.
---


# Creating project API tokens programmatically

To create new [project API tokens](../api-tokens.md) programmatically for your Codacy repositories, use the Codacy API endpoint [createRepositoryApiToken](https://app.codacy.com/api/api-docs#createRepositoryApiToken){: target="_blank"}.

For example, if you're [setting up coverage](../../coverage-reporter/index.md) for all your repositories and prefer not to use a single account API token that grants the same permissions as an administrator, you need to create an individual project API token for each repository.

## Example: Creating project API tokens for all repositories in an organization

<!--TODO: Finish up script to include placeholders for user inputs -->

```bash
#!/bin/bash

repositories=$(curl -sX GET "https://app.codacy.com/api/v3/organizations/gh/codacy-docs/repositories" \
                    -H "api-token: $CODACY_API_TOKEN" \
               | jq -r ".data[] | .name")
count=$(echo "$repositories" | wc -l)

read -p "Create project tokens for $count repositories? (y/n) " choice
if [ "$choice" = "y" ]; then
	echo "$repositories" | while read repository; do
		echo -n "$repository;"
		curl -sX POST "https://app.codacy.com/api/v3/organizations/gh/codacy-docs/repositories/$repository/tokens" \
	         -H "api-token: $CODACY_API_TOKEN" \
	   	| jq -r ".data | .token"
	done
else
	echo "No changes made.";
fi
```