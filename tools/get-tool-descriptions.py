#!/usr/bin/env python3
import argh
import emoji
import requests

ENDPOINT_URL = "https://api.codacy.com/api/v3/tools"


def get_tool_descriptions(verbose=False):
    print("Obtaining tool descriptions.\n")
    tools = requests.get(ENDPOINT_URL).json()["data"]
    count = 0
    for tool in tools:
        tool_name = tool["name"]
        tool_description = tool.get("description", "")
        if tool_description == "":
            print(emoji.emojize(f":cross_mark: {tool_name} DOESN'T have a description"))
            count += 1
        else:
            if verbose:
                print(emoji.emojize(f":check_mark_button: {tool_name} has the description \"{tool_description}\""))
            else:
                print(emoji.emojize(f":check_mark_button: {tool_name} has a description"))
    if count:
        print(f"\nFound {count} tools without description.")
        exit(1)
    else:
        print(emoji.emojize("\nAll tools have a description! :party_popper:"))
        exit(0)


argh.dispatch_command(get_tool_descriptions)
