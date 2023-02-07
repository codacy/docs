// TODO delete the following line
var testData =[{"version": "v10.0", "title": "Self-hosted v10.0", "aliases": []}, {"version": "v9.0", "title": "Self-hosted v9.0", "aliases": []}, {"version": "v8.1", "title": "Self-hosted v8.1", "aliases": []}, {"version": "v8.0", "title": "Self-hosted v8.0", "aliases": []}, {"version": "v7.0", "title": "Self-hosted v7.0", "aliases": []}, {"version": "v6.0", "title": "Self-hosted v6.0", "aliases": []}, {"version": "v5.1", "title": "Self-hosted v5.1", "aliases": []}, {"version": "v5.0", "title": "Self-hosted v5.0", "aliases": []}, {"version": "v4.4", "title": "Self-hosted v4.4", "aliases": []}, {"version": "v4.3", "title": "Self-hosted v4.3", "aliases": []}, {"version": "v4.2", "title": "Self-hosted v4.2", "aliases": []}, {"version": "v4.1", "title": "Self-hosted v4.1", "aliases": []}, {"version": "v4.0", "title": "Self-hosted v4.0", "aliases": []}, {"version": "v3.5", "title": "Self-hosted v3.5", "aliases": []}, {"version": "v3.4", "title": "Self-hosted v3.4", "aliases": []}, {"version": "v3.3", "title": "Self-hosted v3.3", "aliases": []}, {"version": "v3.2", "title": "Self-hosted v3.2", "aliases": []}, {"version": "v3.1", "title": "Self-hosted v3.1", "aliases": []}, {"version": "v3.0", "title": "Self-hosted v3.0", "aliases": []}, {"version": "v2.2", "title": "Self-hosted v2.2", "aliases": []}, {"version": "v2.1", "title": "Self-hosted v2.1", "aliases": []}, {"version": "v2.0.387-deprecated", "title": "Self-hosted v2.0.387 (Deprecated)", "aliases": []}, {"version": "v2.0", "title": "Self-hosted v2.0", "aliases": []}, {"version": "v1.5", "title": "Self-hosted v1.5", "aliases": []}, {"version": "v1.4", "title": "Self-hosted v1.4", "aliases": []}, {"version": "v1.3", "title": "Self-hosted v1.3", "aliases": []}, {"version": "v1.2", "title": "Self-hosted v1.2", "aliases": []}, {"version": "v1.1", "title": "Self-hosted v1.1", "aliases": []}, {"version": "v1.0", "title": "Self-hosted v1.0", "aliases": []}, {"version": "latest", "title": "Cloud (Latest)", "aliases": []}]
window.addEventListener("DOMContentLoaded", function() {
    window.versionPages = {};
    var VERSION = window.location.pathname.split("/")[1];
    var VERSION_LATEST = "latest";

    function removePrefix(str, prefix) {
        var hasPrefix = str.indexOf(prefix) === 0;
        return hasPrefix ? str.substr(prefix.length) : str.toString();
    }

    function populateVersionSitemap(version) {
        var versionPath = version === VERSION_LATEST ? "" : "/" + version;
        window.versionPages[version] = [];

        var xhrSitemap = new XMLHttpRequest();
        var sitemapURL = window.location.origin + versionPath + "/sitemap.xml";
        xhrSitemap.open("GET", sitemapURL);
        xhrSitemap.onload = function() {
            var xmlLoc = this.responseXML.getElementsByTagName("loc");
            var nodeText = [];
    
            for (var index = 0; index < xmlLoc.length; index++) {
                var element = xmlLoc[index];
                nodeText.push(element.textContent);
            }
            var prefix = nodeText[0].slice(0,-1);
            window.versionPages[version] = nodeText.map(function(e) {
                return removePrefix(e, prefix);
            });
        };
        xhrSitemap.send();
    }

    function makeSelect(options, selected) {
        var select = document.createElement("select");
        select.classList.add("select-css");
        var deprecatedVersionsArray = new Array();
        var versionsArray = new Array();

        // Used to decorate options with a numeric sort order
        function decorateWithSortOrder(option) {
            // Option version, formatted as major.minor.patch (e.g. 1.1.0)
            var optionVersion = option.value.match(/[\d.]+/);
            optionVersion = optionVersion ? optionVersion[0] : '';

            // We split over an array for further processing.
            var optionVersionArray = optionVersion.split('.').map(function (v) {
                return parseInt(v, 10);
            });

            if(!optionVersionArray.length)
            {
                // If there is no version, we send this option to the bottom.
                option.__sortOrder = 0;
                return;
            }

            // Some versions only include major.minor, (e.g. 1.1). This normalizes them to 3 numbers.
            if(optionVersionArray.length === 2)
            {
                optionVersionArray.push(0);
            }

            // We multiply each version number by powers of 1000:
            //  major: millions (1000 ^ 2)
            //  minor: thousands (1000 ^ 1)
            //  patch: one (1000 ^ 0)
            // This way, we can sum them and obtain a unique sort order for each version.
            // E.g. 1.1.0 becomes 11000000, 2.5.123 becomes 2500123

            var versionArrayLength = optionVersionArray.length;
            var sortOrder = optionVersionArray.reduce(function (acc, cur, i) {
                acc += cur * Math.pow(1000, versionArrayLength - i - 1);
                return acc;
            }, 0)

            option.__sortOrder = sortOrder;
        }

        options.forEach(function(i) {
            var option = new Option(i.text, i.value, void(0),
                                    i.value === selected);

            decorateWithSortOrder(option);

            if(i.text.includes("Latest"))
            {
                // Ensure the Latest option is the first one
                select.add(option, 0);
            }
            else if(i.text.includes("Deprecated"))
            {
                // Group deprecated versions
                deprecatedVersionsArray.push(option);
            }
            else
            {
                // Group supported versions
                versionsArray.push(option);
            }
        });

        // Used to order versions from latest to oldest
        function compare(a, b) {
            return parseInt(b.__sortOrder) - parseInt(a.__sortOrder);
        }

        // Add supported versions
        versionsArray.sort(compare);
        versionsArray.forEach(function(i) {
            select.add(i);
        });

        // Finally, add deprecated versions to ensure they appear last
        deprecatedVersionsArray.sort(compare);
        deprecatedVersionsArray.forEach(function(i) {
            select.add(i);
        });

        return select;
    }

    function fetchVersions(callback) {
        var xhr = new XMLHttpRequest();
        // Obtain JSON listing all available versions
        xhr.open("GET", window.location.origin + "/versions.json");
        xhr.onload = function() {
            if (this.status === 404) {
                // Use mock JSON as fallback
                var staticJSON = [{"version": "latest", "title": "Cloud (Latest)", "aliases": []}];
                callback(staticJSON)
            } else {
                callback(JSON.parse(this.responseText));
            }
        };
        xhr.send();
    }

    function placeSelectElement(ele) {
        // Place the HTML select element in the DOM
        var container = document.createElement("div");
        container.id = "version-selector";
        container.className = "version-select-container";

        var span = document.createElement("span");
        span.innerText = "Version";

        container.appendChild(span);
        container.appendChild(ele);

        var article = document.querySelector(".search-cta-top > .md-search");
        article.insertAdjacentElement("afterend", container);
    }

    function generateVersionSwitcher(versionJSON) {
        // TODO delete the following line
        versionJSON = testData;
        versionJSON.forEach(function(e) {
            populateVersionSitemap(e.version);
        });

        // Identify which is the current version
        var currentVersion = versionJSON.find(function(i) {
            return i.version === VERSION ||
                   i.aliases.includes(VERSION);
        });

        if(!currentVersion) {
            // If VERSION was not found in the parsed JSON,
            // it means that the version is the latest
            currentVersion = versionJSON.find(function(i) {
                return i.version === VERSION_LATEST;
            });
        }

        // Build the HTML select element
        var select = makeSelect(versionJSON.map(function(i) {
            return {text: i.title, value: i.version};
        }), currentVersion.version);

        // Navigate to the selected version
        select.addEventListener("change", function() {
            var currentPath = window.location.pathname;
            var targetVersionPath = this.value === VERSION_LATEST ? "" : "/" + this.value;

            if(currentVersion.version !== VERSION_LATEST) {
                currentPath = removePrefix(window.location.pathname, "/" + currentVersion.version);
            }

            if(window.versionPages[this.value].includes(currentPath)) {
                window.location.href = window.location.origin + targetVersionPath + currentPath;
            } else {
                window.location.href = window.location.origin + targetVersionPath;
            }
        });
        select.title = "For Codacy Cloud, select Latest.\nFor Codacy Self-Hosted, select the version of your Codacy installation.";


        // Place the HTML select element in the DOM
        placeSelectElement(select);
    }

    fetchVersions(generateVersionSwitcher);
});
