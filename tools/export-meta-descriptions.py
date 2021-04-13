#!/usr/bin/env python3

import argh
from bs4 import BeautifulSoup
from tqdm import tqdm

import os
import re
import logging
from urllib.parse import unquote

SITE_URL = r"https://docs\.codacy\.com"

logging.basicConfig(format="%(message)s", level=logging.INFO)


def parse_sitemap(sitemap_path):
    if not os.path.isfile(sitemap_path):
        print("Can't open sitemap file")
        return 1

    logging.info(f"Reading {sitemap_path}")
    with open(sitemap_path) as f:
        soup = BeautifulSoup(f.read(), features="lxml")
    logging.info(f"Sitemap references {len(soup.find_all('loc'))} pages")
    return soup


def read_descriptions(sitemap, sitemap_root):
    pages = {}
    logging.info("Reading meta descriptions from pages:")
    for loc in tqdm(sitemap.find_all("loc")):
        # Transform URLs in local file names
        page_path = re.sub(SITE_URL + r"/(.*)",
                           r"\1index.html",
                           unquote(loc.text))
        with open(sitemap_root + "/" + page_path) as page_file:
            sitemap = BeautifulSoup(page_file, features="lxml")
            meta_element = sitemap.select_one("meta[name=\"description\"]")
            if meta_element:
                pages[page_path] = meta_element.get("content")
            else:
                pages[page_path] = "[No description found]"
    return pages


def write_csv(data, output_file):
    logging.info(f"Writing {output_file}")
    with open(output_file, "w") as f:
        for key in data.keys():
            f.write(f"{key}\t{data[key]}\n")


def main(sitemap_path: "Path of a local sitemap.xml file.",
         output_path: "Path of the output CSV file." ="descriptions.csv"):
    """Exports meta descriptions from all pages referenced in a local sitemap.xml file to a CSV file."""
    sitemap = parse_sitemap(sitemap_path)
    sitemap_root = os.path.dirname(sitemap_path)
    pages = read_descriptions(sitemap, sitemap_root)
    write_csv(pages, output_path)


if __name__ == '__main__':
    argh.dispatch_command(main)
