#!/usr/bin/env python3
import argh
import emoji
import requests

from string import Template

DOCUMENTATION_PATH = "../docs/repositories/security-monitor.md"
ENDPOINT_URL_TOOLS = "https://api.codacy.com/api/v3/tools"
ENDPOINT_URL_CODE_PATTERNS = Template("https://api.codacy.com/api/v3/tools/${toolUuid}/patterns")


def check_security_tools():
    print("Checking if each tool that detects security issues is included in the documentation:\n")
    with open(DOCUMENTATION_PATH, "r") as file:
        documentation = file.read().lower()
    tools = requests.get(ENDPOINT_URL_TOOLS).json()["data"]
    count = 0
    for tool in tools:
        tool_name = tool["name"].split(" ")[0]
        tool_short_name = tool["shortName"]
        tool_languages = tool["languages"]
        code_patterns = requests.get(ENDPOINT_URL_CODE_PATTERNS.substitute(toolUuid=tool["uuid"])).json()["data"]
        for code_pattern in code_patterns:
            if code_pattern["category"] == "Security":
                if tool_name.lower() in documentation or tool_short_name.lower() in documentation:
                    print(emoji.emojize(f":check_mark_button: {tool_name} is included "
                                        f"({', '.join(map(str, tool_languages))})"))
                else:
                    print(emoji.emojize(f":cross_mark: {tool_name} ISN'T included "
                                        f"({', '.join(map(str, tool_languages))})"))
                    count += 1
                break
    if count:
        print(f"\nFound {count} tools that aren't included in the documentation.")


argh.dispatch_command(check_security_tools)
