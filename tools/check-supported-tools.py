import argh
import requests

URL_DOCUMENTATION = "https://docs.codacy.com/getting-started/supported-languages-and-tools/"
URL_ENDPOINT = "https://api.codacy.com/api/v3/tools"


def check_supported_tools(verbose=False):
    print("Checking if each tool is included in the documentation:\n")
    documentation = requests.get(URL_DOCUMENTATION).text.lower()
    tools = requests.get(URL_ENDPOINT).json()["data"]
    count = 0
    for tool in tools:
        tool_name = tool["name"].split(" ")[0]
        tool_short_name = tool["shortName"]
        if tool_name.lower() in documentation or tool_short_name.lower() in documentation:
            if verbose:
                print(f"✔️  {tool_name} is included")
        else:
            print(f"❌ {tool_name} ISN'T included")
            count += 1
    if count:
        print(f"\nFound {count} tools that aren't included in the documentation.")


argh.dispatch_command(check_supported_tools)
