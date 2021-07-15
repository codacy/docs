---
description: Enable static IP addresses for your Codacy organization so that you can allowlist Codacy Cloud on your Git provider.
---

# How do I allowlist Codacy on my Git provider?

{%
    include-markdown "../../assets/includes/paid.md"
    start="<!--start-paid-feature-->"
    end="<!--end-paid-feature-->"
%}

If you require an additional layer of security and control on your Git provider, you can configure an allowlist containing the specific IP addresses that are able to access your Git repositories and resources.

To allowlist Codacy Cloud on your Git provider:

1.  Send an email to <span class="skip-vale">[success@codacy.com](mailto:support@codacy.com?subject=Enabling static IP addresses)</span> or directly to your CSM asking us to enable static IP addresses for your organization.

    !!! note
        Enabling static IPs for an organization is a paid feature. See the [Codacy pricing page](https://www.codacy.com/pricing#qa-full-comparison){: target="_blank"} for more information.

1.  After receiving a confirmation that static IP addresses are active for your Codacy Cloud organization, add the following IP addresses to the allowlist on your Git provider:

    -   34.254.123.99
    -   18.203.76.9

    The following are the instructions on how to allow IP addresses to access resources on each Git provider:

    -   **GitHub Cloud**: [Managing allowed IP addresses for your organization](https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization)
    -   **GitLab Cloud**: [Restrict group access by IP address](https://docs.gitlab.com/ee/user/group/#restrict-group-access-by-ip-address)
    -   **Bitbucket Cloud**: [Allowlisting IP addresses](https://support.atlassian.com/bitbucket-cloud/docs/control-access-to-your-private-content/#Allowlisting-IP-addresses)
