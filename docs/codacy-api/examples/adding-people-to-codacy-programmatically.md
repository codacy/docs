---
description: Example of how to add people programmatically using Codacy's API v3 endpoint addPeopleToOrganization.
---

# Adding people to Codacy programmatically

There are scenarios where manually adding people on the Codacy UI is inconvenient or time-consuming. For example, you're adding many people to Codacy, such as when initially onboarding all developers within a team.

To add people programmatically, use the Codacy API endpoint [addPeopleToOrganization](https://app.codacy.com/api/api-docs#addpeopletoorganization) by performing an HTTP POST request to `/people`, specifying a list of email addresses in the body of the request:

```bash
curl -X POST https://app.codacy.com/api/v3/organizations/<GIT_PROVIDER>/<ORGANIZATION>/people \
  -H 'Content-Type: application/json' \
  -H 'api-token: <API_KEY>' \
  -d '["<EMAIL#1>", "<EMAIL#2>"]'
```

Substitute the placeholders with your own values:

-   **API_KEY:** [Account API token](../api-tokens.md#account-api-tokens) used to authenticate on the Codacy API.
-   **GIT_PROVIDER:** Git provider hosting of the organization, using one of the values in the table below. For example, `gh` for GitHub Cloud.

    | Value | Git provider      |
    | ----- | ----------------- |
    | `gh`  | GitHub Cloud      |
    | `ghe` | GitHub Enterprise |
    | `gl`  | GitLab Cloud      |
    | `gle` | GitLab Enterprise |
    | `bb`  | Bitbucket Cloud   |
    | `bbe` | Bitbucket Server  |

-   **ORGANIZATION:** Name of the organization on the Git provider. For example, `codacy`. You must have admin permissions over the organization on the Git provider.

-   **EMAIL#1...N:** Email addresses of the people to be added. For example, `no-reply@codacy.com`.

## Example: Adding people from a file containing emails

We provide an example Bash script that adds all emails in a text file to Codacy. We suggest that you adapt the script to your specific scenario.

The example script:

1.  Defines the [account API token](../api-tokens.md#account-api-tokens) used to authenticate on the Codacy API.
1.  Defines the path and filename of the file containing the email addresses list.
1.  Uses `awk` and `sed` to read the email addresses list from a file.
1.  Calls the endpoint [addPeopleToOrganization](https://app.codacy.com/api/api-docs#addpeopletoorganization) to add a list of email addresses to Codacy.

```bash
CODACY_API_TOKEN="<your account API token>"
GIT_PROVIDER="<your Git provider>" # gh, ghe, gl, gle, bb, or bbe
ORGANIZATION="<your organization name>"
FILENAME="emails.txt"

EMAILS=`awk -vORS=, '{if(length($1)>0) printf("\"%s\",", $1)}' $FILENAME | sed 's/,$//'`

curl -X POST "https://app.codacy.com/api/v3/organizations/$GIT_PROVIDER/$ORGANIZATION/people" \
     -H 'Content-Type: application/json' \
     -H "api-token: $CODACY_API_TOKEN" \
     -d "[$EMAILS]"
```

Expected format of the file containing the email addresses list:

```bash
$ cat emails.txt
email1@codacy.com
email2@codacy.com
email3@codacy.com

email4@codacy.com
```

## See also

-   [Adding people to your organization](../../organizations/managing-people.md#adding-people)
