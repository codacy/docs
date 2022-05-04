#!/usr/bin/env python3
import argh
import emoji
import requests

ENDPOINT_URL = "https://api.codacy.com/api/v3/tools"


def get_tool_descriptions(verbose=False):
    tools = requests.get(ENDPOINT_URL).json()["data"]
    count = 0
    for tool in tools:
        tool_name = tool["name"]
        tool_description = tool.get("description", "")
        if tool_description == "":
            count += 1
        print(f"## {tool_name}\n"
              f"{tool_description if tool_description else 'Not available'}\n\n")
    if count:
        print(f"Found {count} tools without description.")
        exit(1)
    else:
        print(emoji.emojize("All tools have a description! :party_popper:"))
        exit(0)


argh.dispatch_command(get_tool_descriptions)
