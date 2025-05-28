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

That's expected if you're using VSCode. In VSCode, when AI updates the files, before clicking Continue when prompted to run **codacy_cli_analyze** you need to click **Keep** to actually keep the changes on your disk. If you don't do this, the agent will run the Codacy analysis,s and it will analyse the old code without these changes, leading to wrong or old results.

But if you're using, for example, Cursor or even VScode Insiders, they will save it automatically, so you don't need to do anything.