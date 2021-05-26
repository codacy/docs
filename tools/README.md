# Tools

This directory includes auxiliary tools to support authoring and maintaining the Codacy documentation.

Install the Python requirements before using the tools:

```bash
pip3 install -r requirements.txt
```

## check-supported-tools

Validates if the source file for the page [Supported languages and tools](https://docs.codacy.com/getting-started/supported-languages-and-tools/) mentions the tools returned by the Codacy API endpoint [listTools](https://api.codacy.com/api/api-docs#codacy-api-tools).

```text
$ ./check-supported-tools.py -h
usage: check-supported-tools.py [-h] [-v]

optional arguments:
  -h, --help     show this help message and exit
  -v, --verbose  False
```
