window.addEventListener("DOMContentLoaded", function() {
    window.versionPages = {}
    var VERSION = window.location.pathname.split('/')[1];
    var VERSION_LATEST = ".";

    function removePrefix(str, prefix) {
        var hasPrefix = str.indexOf(prefix) === 0;
        return hasPrefix ? str.substr(prefix.length) : str.toString();
    };
    
    function populateVersionSitemap(version) {
        var versionPath = version === VERSION_LATEST ? "" : "/" + version;
        window.versionPages[version] = []

        var xhrSitemap = new XMLHttpRequest();
        var sitemapURL = window.location.origin + versionPath + "/sitemap.xml";
        xhrSitemap.open("GET", sitemapURL);
        xhrSitemap.onload = function() {
            var xmlLoc = this.responseXML.getElementsByTagName('loc');
            nodeText = []
    
            for (var index = 0; index < xmlLoc.length; index++) {
                var element = xmlLoc[index];
                nodeText.push(element.textContent)
            }
            var prefix = nodeText[0].slice(0,-1);
            window.versionPages[version] = nodeText.map(function(e) {
                return removePrefix(e, prefix)
            })
        }
        xhrSitemap.send()
    }

    function makeSelect(options, selected) {
        var select = document.createElement("select");
        select.classList.add("select-css");
        var deprecatedVersionsArray = new Array();
        var versionsArray = new Array();
        
        options.forEach(function(i) {
            var option = new Option(i.text, i.value, undefined,
                                    i.value === selected);       

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
            if (a.value > b.value) {
                comparison = -1;
            } else if (a.value < b.value) {
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
        // Obtain JSON listing all available versions
        xhr.open("GET", window.location.origin + "/versions.json");
        xhr.onload = function() {
            var versions = JSON.parse(this.responseText);
            callback(versions)
        };
        xhr.send();
    }
    
    function placeSelectElement(ele) {
        // Place the HTML select element in the DOM
        var container = document.createElement("div");
        container.id = "version-selector";
        container.className = "version-select-container";

        var span = document.createElement("span");
        span.innerText = 'Version'

        container.appendChild(span);
        container.appendChild(ele);
    
        var article = document.querySelector(".search-cta-top > .md-search");
        article.insertAdjacentElement("afterend", container);
    }
    
    function generateVersionSwitcher(versionJSON) {
        versionJSON.forEach(function(e) {
            populateVersionSitemap(e.version)
        })
    
        // Identify which is the current version
        var currentVersion = versionJSON.find(function(i) {
            return i.version === VERSION ||
                   i.aliases.includes(VERSION)
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
        select.addEventListener("change", function(event) {
            var currentPath = window.location.pathname;
            var targetVersionPath = this.value === VERSION_LATEST ? "" : "/" + this.value;
    
            if(currentVersion.version !== VERSION_LATEST) {
                currentPath = removePrefix(window.location.pathname, "/" + currentVersion.version)
            }
    
            if(window.versionPages[this.value].includes(currentPath)) {
                window.location.href = window.location.origin + targetVersionPath + currentPath;
            } else {
                window.location.href = window.location.origin + targetVersionPath;
            }
        });
        select.title = "For Codacy Cloud, select Latest.\nFor Codacy Self-Hosted, select the version of your Codacy installation."
      
    
        // Place the HTML select element in the DOM
        placeSelectElement(select)
    }

    fetchVersions(generateVersionSwitcher)
    // used to test without mike
    // var staticJSON = [{"version": "v1.4.0", "title": "v1.4.0", "aliases": []}, {"version": ".", "title": "Cloud", "aliases": []}];
    // generateVersionSwitcher(staticJSON)
});
