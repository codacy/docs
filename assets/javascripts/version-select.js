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
        select.classList.add("form-control");
  
        options.forEach(function(i) {
            var option = new Option(i.text, i.value, undefined,
                                    i.value === selected);
            select.add(option);
        });
  
        return select;
    }
    
    function fetchVersions() {
        var xhr = new XMLHttpRequest();
        // Obtain JSON listing all available versions
        xhr.open("GET", window.location.origin + "/versions.json");
        xhr.onload = function() {
            var versions = JSON.parse(this.responseText);

            versions.forEach(function(e) {
                populateVersionSitemap(e.version)
            })
      
            // Identify which is the current version
            var currentVersion = versions.find(function(i) {
                return i.version === VERSION ||
                       i.aliases.includes(VERSION)
            });
    
            if(!currentVersion) {
                // If VERSION was not found in the parsed JSON,
                // it means that the version is the latest
                currentVersion = versions.find(function(i) {
                    return i.version === VERSION_LATEST;
                });
            }
    
            // Build the HTML select element
            var select = makeSelect(versions.map(function(i) {
                return {text: i.title, value: i.version};
            }), currentVersion.version);
            select.title = "Documentation version\n\nFor Codacy Cloud, select Latest.\nFor Codacy Self-Hosted, select the version of your Codacy installation."
      
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
      
            // Place the HTML select element in the DOM
            var container = document.createElement("div");
            container.id = "version-selector";
            container.className = "md-nav__item";
            container.appendChild(select);
      
            var search = document.querySelector(".search-cta-top > .md-search");
            search.insertAdjacentElement("afterend", container);
        };
        xhr.send();
    }

    fetchVersions()
});
