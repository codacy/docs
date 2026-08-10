# Troubleshooting

## Codacy CLI

### Diagnosing local analysis issues

Whenever local analysis or Guardrails scanning isn't behaving as expected, the standalone [Codacy Analysis CLI](codacy-guardrails-getting-started.md#install-cli) can tell you the state of your setup: your authentication status, your system information, and every analysis tool it knows about, along with whether each one is installed locally.

The IDE extension bundles its own copy of the analyzer and doesn't put the `codacy-analysis` command on your `PATH`, so install the CLI first:

```bash
npm i -g @codacy/analysis-cli
codacy-analysis info
```

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
        "CODACY_ACCOUNT_TOKEN": "<YOUR_TOKEN>"
      }
    }
  }
}
```

## GitHub Copilot

### MCP Policy Requirement

If Copilot doesn't find any MCP servers or tools, you might be missing the required policy setting. If you are a member of an organization or enterprise with a Copilot Business or Copilot Enterprise plan, the "MCP servers in Copilot" policy must be enabled in order to use MCP with Copilot. This policy can be configured by organization owners in the Copilot settings.

For more information about enabling this policy, see the [GitHub documentation on MCP prerequisites](https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp/extend-copilot-chat-with-mcp#prerequisites).
