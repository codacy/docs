window.intercomSettings = {
    app_id: "a53cb793563c5f92959598bf8b22fe8f01ec3199",
    hide_default_launcher: false
};

// We pre-filled your app ID in the widget URL: 'https://widget.intercom.io/widget/a53cb793563c5f92959598bf8b22fe8f01ec3199'
(function () { var w = window; var ic = w.Intercom; if (typeof ic === "function") { ic('reattach_activator'); ic('update', w.intercomSettings); } else { var d = document; var i = function () { i.c(arguments); }; i.q = []; i.c = function (args) { i.q.push(args); }; w.Intercom = i; var l = function () { var s = d.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = 'https://widget.intercom.io/widget/a53cb793563c5f92959598bf8b22fe8f01ec3199'; var x = d.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x); }; if (w.attachEvent) { w.attachEvent('onload', l); } else { w.addEventListener('load', l, false); } } })();

document.addEventListener("DOMContentLoaded", function() {
    show_toc_left();
});

function show_toc_left(){
    document.querySelectorAll('.md-nav .md-nav--secondary')[0].setAttribute("style", "display: block; overflow: visible; color: #7d7f8e9c")
    document.querySelectorAll('.md-nav .md-nav--secondary label')[0].remove()
    document.querySelectorAll('.md-sidebar.md-sidebar--secondary')[0].remove()
}
