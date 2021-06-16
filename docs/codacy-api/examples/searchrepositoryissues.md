---
description: Example of how to obtain information about issues in a repository programmatically using the Codacy API endpoint searchRepositoryIssues.
---

# Obtaining current issues in repositories

To obtain information about the current issues in your repositories in a flexible way, use the Codacy API endpoint [searchRepositoryIssues](https://app.codacy.com/api/api-docs#searchrepositoryissues){: target="_blank"}.

For example, you may want to generate a report that includes only issues that belong to specific categories (such as security issues), or that have a minimum severity level.

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
