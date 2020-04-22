window.addEventListener("DOMContentLoaded", function() {
  var VERSION = window.location.pathname.split('/')[1];
  var CLOUD_TEXT = "Cloud";
  
  function makeSelect(options, selected) {
      var select = document.createElement("select");
      select.classList.add("form-control");
  
      // Add option for Cloud at the top of the drop-down box
      select.add(new Option(CLOUD_TEXT, "/", undefined,
                            CLOUD_TEXT === selected));
  
      options.forEach(function(i) {
          var option = new Option(i.text, "/" + i.value, undefined,
                                  i.value === selected);
          select.add(option);
      });
  
      return select;
  }
  
  var xhr = new XMLHttpRequest();
  // Obtain JSON listing all available versions
  xhr.open("GET", window.location.origin + "/versions.json");
  xhr.onload = function() {
      var versions = JSON.parse(this.responseText);
  
      // Identify which is the current version
      var selfHostedVersion = versions.find(function(i) {
          return i.version === VERSION ||
                 i.aliases.includes(VERSION);
      });
      // Self-Hosted versions are listed in the JSON
      // If the version is not in the JSON, it's the Cloud
      var currentVersion = (selfHostedVersion != undefined) ?
          selfHostedVersion.version : CLOUD_TEXT;
  
      var select = makeSelect(versions.map(function(i) {
          return {text: i.title, value: i.version};
      }), currentVersion);
  
      select.addEventListener("change", function(event) {
          window.location.href = window.location.origin + this.value;
      });
  
      var container = document.createElement("div");
      container.id = "version-selector";
      container.className = "md-nav__item";
      container.appendChild(select);
  
      var sidebar = document.querySelector(".md-nav--primary > .md-nav__list");
      sidebar.parentNode.insertBefore(container, sidebar);
  };
  xhr.send();
});
