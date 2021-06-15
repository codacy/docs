---
description: Example of how to obtain information about issues in a repository programmatically using the Codacy API endpoint searchRepositoryIssues.
---

# searchRepositoryIssues

## Example

```bash
export CODACY_API_TOKEN="<your account API token>"

curl -X POST "https://app.codacy.com/api/v3/analysis/organizations/gh/codacy/repositories/codacy-metrics-rubocop/issues/search" \
     -H "api-token: $CODACY_API_TOKEN" \
     -H "Content-Type: application/json" \
     -d '{
            "levels": [
                "Error",
                "Warning",
                "Info"
            ],
            "categories": [
                "Security"
            ]
        }' \
| jq -r ".data[] | [.patternInfo.id, .patternInfo.level, .filePath, .commitInfo.timestamp] | @csv"
```

Output:

```text
"BundlerAudit_Insecure Dependency","Error","Gemfile.lock","2019-10-17T14:09:24Z"
[...]
```
