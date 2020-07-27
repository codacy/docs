# How do I add multiple repositories?

If you have many repositories on your Git provider that you want to add to Codacy, manually adding each repository is a time consuming process.

Instead, you can run a script that uses the Codacy API to add all repositories in batch.

## Example

```bash
!/bin/bash
# Add all repositories from a Github Organization to Codacy
GITHUB_AUTH_TOKEN="<Replace Me>"
GITHUB_ORG_NAME="<Replace Me>"
CODACY_API_TOKEN="<Replace Me>"
for repo in $(curl -s -H "Authorization: Bearer $GITHUB_AUTH_TOKEN" "https://api.github.com/orgs/$GITHUB_ORG_NAME/repos" | jq -r '.[] | .full_name'); do
     echo "Adding $repo to Codacy" 
     curl -d '{"provider":"gh", "repositoryFullPath":"'$repo'"}' \
          -H "Content-Type: application/json" \
          -H "api-token: $CODACY_API_TOKEN" \
          -X POST "https://app.codacy.com/api/v3/repositories"
     echo # Echo a newline for readability
done
```
