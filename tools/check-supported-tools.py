#!/usr/bin/env python3
import argh
import emoji
import requests

DOCUMENTATION_PATH = "../docs/getting-started/supported-languages-and-tools.md"
ENDPOINT_URL = "https://api.codacy.com/api/v3/tools"


def check_supported_tools():
    print("Checking if each tool is included in the documentation.\n")
    with open(DOCUMENTATION_PATH, "r") as file:
        documentation = file.read().lower()
    tools = requests.get(ENDPOINT_URL).json()["data"]
    count = 0
    for tool in tools:
        tool_name = tool["name"].split(" ")[0]
        tool_short_name = tool["shortName"]
        tool_languages = tool["languages"]
        if tool_name.lower() in documentation or tool_short_name.lower() in documentation:
            print(emoji.emojize(f":check_mark_button: {tool_name} is included "
                                f"({', '.join(map(str, tool_languages))})"))
        else:
            print(emoji.emojize(f":cross_mark: {tool_name} ISN'T included "
                                f"({', '.join(map(str, tool_languages))})"))
            count += 1
    if count:
        print(f"\nFound {count} tools that aren't included in the documentation.")
        exit(1)
    else:
        print(emoji.emojize("\nAll tools are included in the documentation! :party_popper:"))
        exit(0)


argh.dispatch_command(check_supported_tools)
