# Troubleshooting

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

## Analysis

### AI made some changes in my files, but it's still showing old results

If you're using **Visual Studio Code**, this behavior is expected. When AI makes changes to your files, you must click **Keep** to confirm and save those changes to disk before clicking **Continue** to run **codacy_cli_analyze**. If you skip this step, the agent will run the Codacy CLI with the previous version of your code, which can result in outdated or incorrect analysis results.

In contrast, editors like Cursor or Visual Studio Code Insiders handle this automatically—changes are saved without requiring manual confirmation, ensuring the latest code is analyzed correctly.