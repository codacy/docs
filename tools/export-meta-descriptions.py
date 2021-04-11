import argh
from bs4 import BeautifulSoup
import urllib.parse

import os
import re

SITE_URL = r"https://docs\.codacy\.com"


def parse_sitemap(sitemap_path):
    if not os.path.isfile(sitemap_path):
        print("Can't open sitemap file.")
        return 1

    with open(sitemap_path) as f:
        soup = BeautifulSoup(f.read(), features="lxml")
    return soup


def read_descriptions(sitemap, sitemap_root):
    pages = {}
    for loc in sitemap.find_all("loc"):
        # Transform URLs in local file names
        page_path = re.sub(SITE_URL + r"/(.*)",
                           r"\1index.html",
                           urllib.parse.unquote(loc.text))
        with open(sitemap_root + "/" + page_path) as page_file:
            sitemap = BeautifulSoup(page_file, features="lxml")
            meta_element = sitemap.select_one("meta[name=\"description\"]")
            if meta_element:
                pages[page_path] = meta_element.get("content")
            else:
                pages[page_path] = "[No description found]"
    return pages


def write_csv(data, output_file):
    with open(output_file, "w") as f:
        for key in data.keys():
            f.write(f"{key}\t{data[key]}\n")


def main(sitemap_path, output_path="descriptions.csv"):
    sitemap = parse_sitemap(sitemap_path)
    sitemap_root = os.path.dirname(sitemap_path)
    pages = read_descriptions(sitemap, sitemap_root)
    write_csv(pages, output_path)


argh.dispatch_command(main)
