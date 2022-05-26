#!/usr/bin/env python3
import argh
import emoji
import requests

DOCUMENTATION_PATH = "../docs/getting-started/supported-languages-and-tools.md"
ENDPOINT_URL = "https://api.codacy.com/api/v3/tools"
IGNORED_TOOL_UUIDS = ["647dddc1-17c4-4840-acea-4c2c2bbecb45",  # Codacy Scalameta Pro
                      "34225275-f79e-4b85-8126-c7512c987c0d",  # Pylint 1.9 (legacy)
                      "cf05f3aa-fd23-4586-8cce-5368917ec3e5"]  # ESLint 7 (deprecated)


def check_supported_tools():
    print("Checking if each tool is included in the documentation.\n")
    with open(DOCUMENTATION_PATH, "r") as file:
        documentation = file.read().lower()
    tools = requests.get(ENDPOINT_URL).json()["data"]
    count = 0
    for tool in tools:
        if tool["uuid"] in IGNORED_TOOL_UUIDS:
            continue
        tool_name = tool["name"]
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
