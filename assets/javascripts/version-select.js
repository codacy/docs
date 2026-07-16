function initializeVersionSelector() {
    var selector = document.querySelector("#version-selector");
    if (!selector || selector.dataset.versionSelectorBound === "true") {
        return;
    }
    selector.dataset.versionSelectorBound = "true";
    var selectorScrollPosition;
    var preserveScrollPosition = function() {
        if (!selectorScrollPosition) {
            return;
        }
        window.scrollTo(selectorScrollPosition.left, selectorScrollPosition.top);
    };
    selector.addEventListener("pointerdown", function() {
        selectorScrollPosition = { left: window.scrollX, top: window.scrollY };
    });
    selector.addEventListener("focus", function() {
        window.requestAnimationFrame(preserveScrollPosition);
    });
    selector.addEventListener("blur", function() {
        selectorScrollPosition = undefined;
    });
    window.versionPages = {};
    var VERSION = window.location.pathname.split("/")[1];
    var VERSION_LATEST = "latest";

    function removePrefix(str, prefix) {
        var hasPrefix = str.indexOf(prefix) === 0;
        return hasPrefix ? str.substr(prefix.length) : str.toString();
    }

    function populateVersionSitemap(version) {
        if (window.versionPages[version]) {
            return Promise.resolve();
        }
        var versionPath = version === VERSION_LATEST ? "" : "/" + version;
        window.versionPages[version] = [];

        return new Promise(function(resolve) {
            var xhrSitemap = new XMLHttpRequest();
            var sitemapURL = window.location.origin + versionPath + "/sitemap.xml";
            xhrSitemap.open("GET", sitemapURL);
            xhrSitemap.onload = function() {
                var xmlLoc = this.responseXML && this.responseXML.getElementsByTagName("loc");
                var nodeText = [];

                if (this.status >= 200 && this.status < 300 && xmlLoc) {
                    for (var index = 0; index < xmlLoc.length; index++) {
                        nodeText.push(xmlLoc[index].textContent);
                    }
                }

                if (nodeText.length) {
                    const prefix = nodeText[0].slice(0, -1);
                    window.versionPages[version] = nodeText.map(function(e) {
                        return removePrefix(e, prefix);
                    });
                }
                resolve();
            };
            xhrSitemap.onerror = resolve;
            xhrSitemap.ontimeout = resolve;
            xhrSitemap.timeout = 10000;
            xhrSitemap.send();
        });
    }

    function makeSelect(options, selected) {
        var select = document.createElement("select");
        select.classList.add("select-css");
        var deprecatedVersionsArray = new Array();
        var versionsArray = new Array();

        // Used to decorate options with a sort order.
        function decorateWithSortOrder(option) {
            if(!option) {
                return;
            }

            if(!(option.value && option.value.match))
            {
                option.__sortOrder = '0';
                return;
            }

            // We isolate the version number, e.g. 1.1.0
            var versionNumber = option.value.match(/[\d.]+/);

            if(!versionNumber)
            {
                option.__sortOrder = '0';
                return;
            }

            var versionNumberArray = versionNumber[0].split('.');

            // Some versions only include major.minor, (e.g. ['1', '1']).
            // This normalizes them to 3 numbers: ['1', '1', '0'].
            while(versionNumberArray.length < 3)
            {
                versionNumberArray.push('0');
            }

            // https://stackoverflow.com/questions/40201533/sort-version-dotted-number-strings-in-javascript
            option.__sortOrder = versionNumberArray.map(function (v) {
                return +v + 10000;
            }).join('.');
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
            let comparison = 0;
            if (a.__sortOrder > b.__sortOrder) {
                comparison = -1;
            } else if (a.__sortOrder < b.__sortOrder) {
                comparison = 1;
            }
            return comparison;
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
        var fallback = function() {
            callback([{ "version": "latest", "title": "Cloud (Latest)", "aliases": [] }]);
        };
        // Obtain JSON listing all available versions
        xhr.open("GET", window.location.origin + "/versions.json");
        xhr.onload = function() {
            if (this.status < 200 || this.status >= 300) {
                fallback();
                return;
            }
            try {
                const versions = JSON.parse(this.responseText);
                if (!Array.isArray(versions) || !versions.length) {
                    fallback();
                    return;
                }
                callback(versions);
            } catch {
                fallback();
            }
        };
        xhr.onerror = fallback;
        xhr.ontimeout = fallback;
        xhr.timeout = 10000;
        xhr.send();
    }

    function generateVersionSwitcher(versionJSON) {
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
        var generatedSelect = makeSelect(versionJSON.map(function(i) {
            return {text: i.title, value: i.version};
        }), currentVersion.version);
        selector.replaceChildren.apply(selector, Array.prototype.slice.call(generatedSelect.options));
        var select = selector;
        select.disabled = false;

        // Navigate to the selected version
        select.addEventListener("change", function() {
            var targetVersion = this.value;
            var currentPath = window.location.pathname;
            var targetVersionPath = targetVersion === VERSION_LATEST ? "" : "/" + targetVersion;

            if(currentVersion.version !== VERSION_LATEST) {
                currentPath = removePrefix(window.location.pathname, "/" + currentVersion.version);
            }

            select.disabled = true;
            populateVersionSitemap(targetVersion).then(function() {
                if(window.versionPages[targetVersion].includes(currentPath)) {
                    window.location.href = window.location.origin + targetVersionPath + currentPath;
                } else {
                    window.location.href = window.location.origin + targetVersionPath;
                }
            });
        });
        select.title = "For Codacy Cloud, select Latest.\nFor Codacy Self-Hosted, select the version of your Codacy installation.";

    }

    fetchVersions(generateVersionSwitcher);
}

if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(initializeVersionSelector);
} else {
    window.addEventListener("DOMContentLoaded", initializeVersionSelector);
}
