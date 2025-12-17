---
title: Troubleshooting
---

## Node

### Claude Desktop

When using NVM with Claude Desktop, NPX may not work. You should first install the MCP Server globally, and then use Node directly:

```bash
npm install -g @codacy/codacy-mcp
```

```json
{
  "mcpServers": {
    "codacy": {
      "command": "/Users/yourusername/.nvm/versions/node/vXX.X.X/bin/node",
      "args": ["/path-to/codacy-mcp/dist/index.js"],
      "env": {
        "CODACY_ACCOUNT_TOKEN": "<YOUR_TOKEN>",
        "CODACY_CLI_VERSION": "<VERSION>"
      }
    }
  }
}
```

## GitHub Copilot

### MCP Policy Requirement

If Copilot doesn't find any MCP servers or tools, you might be missing the required policy setting. If you are a member of an organization or enterprise with a Copilot Business or Copilot Enterprise plan, the "MCP servers in Copilot" policy must be enabled in order to use MCP with Copilot. This policy can be configured by organization owners in the Copilot settings.

For more information about enabling this policy, see the [GitHub documentation on MCP prerequisites](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp/extend-copilot-chat-with-mcp#prerequisites).
