# Tools

This folder includes the auxiliary tools below to support authoring and maintaining the Codacy documentation.

## export-meta-descriptions

Exports the meta descriptions from all pages referenced in a local `sitemap.xml` file to a CSV file.

```text
$ python3 export-meta-descriptions.py -h
usage: export-meta-descriptions.py [-h] [-o OUTPUT_PATH] sitemap-path

Exports meta descriptions from all pages referenced in a local sitemap.xml file to a CSV file.

positional arguments:
  sitemap-path          Path of a local sitemap.xml file.

optional arguments:
  -h, --help            show this help message and exit
  -o OUTPUT_PATH, --output-path OUTPUT_PATH
                        Path of the output CSV file. (default:
                        'descriptions.csv')
```
