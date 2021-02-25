# Codacy API Tokens

Codacy API Tokens allow you to authenticate when using the Codacy API. You must generate a Codacy API Token and include it in the headers of your API calls as described on the [Codacy API documentation](https://api.codacy.com/api/api-docs#authentication).

!!! warning
    **Never write API Tokens on your configuration files** and keep your API Tokens well protected, as they grant owner permissions to your Codacy repositories.

To generate a Codacy API Token, open your account, tab **Access management**, and click the button **Create API token**.

![Creating an API token](images/api-tokens.png)

To revoke access to the Codacy API, you must remove the corresponding Codacy API Token from the list. After this, all applications or services using that token to access the Codacy API will fail to authenticate and will receive the following error reply:

```text
{"error":"not found"}
```

!!! tip
    You can create multiple Codacy API Tokens. This can be useful to have a more flexible control by revoking only a specific token.

## See also

To send coverage results for your repository or to limit the API access to a repository, use a [project API Token](../repositories-configure/integrations/project-api.md).
