#!/usr/bin/env python3
import argh
import csv
import emoji
import requests
import xmltodict

from bs4 import BeautifulSoup
from tqdm import tqdm

SITEMAP_URL = "https://docs.codacy.com/sitemap.xml"
OUTPUT_FILE = "last-modified.csv"


def list_last_modified():
    # Parse sitemap to obtain list of page URLs
    print(f"Parsing {SITEMAP_URL}...")
    xml = requests.get(SITEMAP_URL)
    sitemap = xmltodict.parse(xml.text)
    urls = [r["loc"] for r in sitemap["urlset"]["url"]]

    # Obtain last modified date for each page
    print(f"Found {len(urls)} pages.")
    result = {}
    for url in tqdm(urls, desc="Fetching last modify dates", unit="pages"):
        html = requests.get(url)
        last_modified = \
            BeautifulSoup(html.text, "html.parser").select_one("meta[http-equiv=\"last-modified\"]").get("content")
        result[url] = last_modified

    # Write CSV file
    with open(OUTPUT_FILE, "w") as csv_file:
        csv_writer = csv.writer(csv_file)
        csv_writer.writerow(["Page", "Last modified date"])
        for page in sorted(result.items()):
            csv_writer.writerow([page[0], page[1]])
    print(emoji.emojize(f":check_mark_button: Wrote results to {OUTPUT_FILE}"))


argh.dispatch_command(list_last_modified)
