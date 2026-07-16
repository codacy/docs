var searchReturnTarget;
var tocScrollCleanup;
var footerWidgetObserver;

// Lift the floating support widget (Zendesk) above the footer once the footer
// scrolls into view, so it never overlaps the footer links. Purely additive:
// it toggles a flag on <html> that CSS reacts to, and is a no-op when no widget
// is present or IntersectionObserver is unavailable.
function observeFooterForWidget() {
    var root = document.documentElement;
    if (footerWidgetObserver) {
        footerWidgetObserver.disconnect();
        footerWidgetObserver = undefined;
    }
    root.removeAttribute("data-docs-footer-visible");

    var footer = document.querySelector("[data-docs-footer]");
    if (!footer || typeof IntersectionObserver === "undefined") {
        return;
    }

    footerWidgetObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                root.setAttribute("data-docs-footer-visible", "true");
            } else {
                root.removeAttribute("data-docs-footer-visible");
            }
        });
    });
    footerWidgetObserver.observe(footer);
}

function openSearch(opener) {
    var searchToggle = document.querySelector("#__search");
    var trigger = opener || document.querySelector("[data-search-trigger]");
    var drawerToggle = document.querySelector("#__drawer");
    if (!searchToggle) {
        return;
    }

    if (!searchToggle.checked) {
        if (drawerToggle && drawerToggle.checked) {
            drawerToggle.click();
        }
        searchToggle.click();
    }

    if (trigger) {
        searchReturnTarget = trigger;
        trigger.setAttribute("aria-expanded", "true");
    }

    window.setTimeout(function () {
        var input = document.querySelector(".md-search__input");
        if (input) {
            // preventScroll: focusing the input inside the fixed search overlay
            // must not nudge the page scroll position.
            input.focus({ preventScroll: true });
        }
    }, 0);
}

function closeSearch() {
    var searchToggle = document.querySelector("#__search");

    if (searchToggle && searchToggle.checked) {
        searchToggle.click();
    }
}

function getVisibleFocusableElements(container) {
    if (!container) {
        return [];
    }

    return Array.from(container.querySelectorAll("*")).filter(function (element) {
        return element.tabIndex >= 0 && element.offsetParent !== null;
    });
}

function initializeDocsTheme() {
    document.querySelectorAll("[data-copyright-year]").forEach(function (element) {
        element.textContent = String(new Date().getFullYear());
    });

    if (tocScrollCleanup) {
        tocScrollCleanup();
        tocScrollCleanup = undefined;
    }

    var trigger = document.querySelector("[data-search-trigger]");
    var searchTriggers = document.querySelectorAll("[data-search-trigger]");
    var shortcut = document.querySelector("[data-search-shortcut]");
    // Prefer the modern userAgentData.platform; fall back to the (deprecated)
    // navigator.platform and finally the user agent string for older browsers.
    var platform = (navigator.userAgentData && navigator.userAgentData.platform) ||
        navigator.platform || navigator.userAgent || "";
    if (shortcut && !/Mac|iPhone|iPad|iPod/i.test(platform)) {
        shortcut.textContent = "Ctrl K";
    }
    // The header search trigger persists across navigation.instant page loads,
    // so bind each trigger once; otherwise every navigation stacks another
    // handler on the same element.
    searchTriggers.forEach(function (searchTrigger) {
        if (searchTrigger.dataset.docsSearchTriggerInitialized) {
            return;
        }
        searchTrigger.dataset.docsSearchTriggerInitialized = "true";
        searchTrigger.addEventListener("click", function (event) {
            event.preventDefault();
            openSearch(searchTrigger);
        });
        searchTrigger.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openSearch(searchTrigger);
            }
        });
    });

    var drawerToggle = document.querySelector("#__drawer");
    var drawerTrigger = document.querySelector("[data-drawer-trigger]");
    var drawer = document.querySelector(".md-sidebar--primary");
    if (drawer) {
        drawer.id = "docs-navigation";
    }
    // With navigation.instant, Material keeps the header and drawer mounted
    // while emitting document$ for each page. Only bind these persistent
    // controls once; otherwise every navigation adds another click handler
    // and a hamburger tap toggles the checkbox an even number of times.
    if (drawerToggle && drawerTrigger && drawer && !drawerTrigger.dataset.docsDrawerInitialized) {
        drawerTrigger.dataset.docsDrawerInitialized = "true";
        let suppressDrawerKeyboardClick = false;
        drawerTrigger.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                suppressDrawerKeyboardClick = true;
                drawerToggle.click();
                window.setTimeout(function () {
                    suppressDrawerKeyboardClick = false;
                }, 250);
            }
        });
        drawerTrigger.addEventListener("click", function (event) {
            event.preventDefault();
            if (suppressDrawerKeyboardClick && event.detail === 0) {
                return;
            }
            drawerToggle.click();
        });
        drawerToggle.addEventListener("change", function () {
            drawerTrigger.setAttribute("aria-expanded", String(drawerToggle.checked));
            drawerTrigger.setAttribute("aria-label", drawerToggle.checked ? "Close navigation" : "Open navigation");
            document.querySelectorAll(".md-content, .md-sidebar--secondary, footer").forEach(function (element) {
                element.toggleAttribute("inert", drawerToggle.checked);
            });

            if (drawerToggle.checked) {
                window.setTimeout(function () {
                    var firstLink = drawer.querySelector(".md-nav__list a[href]");
                    if (firstLink) {
                        firstLink.focus();
                    }
                }, 0);
            } else {
                drawerTrigger.focus();
            }
        });
    }

    var breadcrumb = document.querySelector(".md-path");
    if (breadcrumb) {
        breadcrumb.setAttribute("aria-label", "Breadcrumb");
    }

    document.querySelectorAll(".md-nav--primary a.md-nav__link--active[href]").forEach(function (link) {
        if (new URL(link.href, window.location.href).pathname === window.location.pathname) {
            link.setAttribute("aria-current", "page");
        }
    });

    var pageOutline = document.querySelector(".md-sidebar--secondary .md-nav--secondary");
    if (pageOutline && !pageOutline.querySelector("a[href]")) {
        pageOutline.hidden = true;
    }

    var searchToggle = document.querySelector("#__search");
    if (searchToggle && trigger && !searchToggle.dataset.docsSearchToggleInitialized) {
        searchToggle.dataset.docsSearchToggleInitialized = "true";
        searchToggle.addEventListener("change", function () {
            searchTriggers.forEach(function (searchTrigger) {
                searchTrigger.setAttribute("aria-expanded", String(searchToggle.checked));
            });

            document.querySelectorAll(".md-main, footer").forEach(function (element) {
                element.toggleAttribute("inert", searchToggle.checked);
            });

            if (!searchToggle.checked) {
                (searchReturnTarget || trigger).focus();
            }
        });
    }

    var searchInput = document.querySelector(".md-search__input");
    if (searchInput && !searchInput.dataset.docsSearchInputInitialized) {
        searchInput.dataset.docsSearchInputInitialized = "true";
        searchInput.addEventListener("input", function (event) {
            // Material listens for keyup. Mirroring input events also covers
            // paste, autofill, and browser automation without duplicating
            // queries because Material de-duplicates unchanged values.
            if (event.isComposing) {
                return;
            }
            searchInput.dispatchEvent(new Event("keyup", { bubbles: true }));
        });
        searchInput.addEventListener("compositionend", function () {
            searchInput.dispatchEvent(new Event("keyup", { bubbles: true }));
        });
    }

    document.querySelectorAll(".md-typeset table").forEach(function (table) {
        if (table.classList.contains("highlighttable") || table.closest(".highlight, .md-typeset__scrollwrap") || table.parentElement.classList.contains("docs-table-scroll")) {
            return;
        }

        var wrapper = document.createElement("div");
        wrapper.className = "docs-table-scroll";
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
    });

    // Material's legacy scroll spy activates a heading only once it clears the
    // header. The outline is more useful when it reflects the reading position,
    // so activate the latest heading that has crossed 40% of the viewport.
    const tocLinks = Array.from(document.querySelectorAll(".md-sidebar--secondary .md-nav__link")).filter(function (link) {
        var target = new URL(link.href, window.location.href);
        return target.pathname === window.location.pathname && target.hash;
    });
    if (tocLinks.length) {
        // Material keeps its own active-link state. Mark the custom scroll spy
        // as authoritative so the theme can suppress Material's stale state
        // when the two updates occur in different animation frames.
        document.documentElement.classList.add("docs-toc-scrollspy");

        const updateTableOfContents = function () {
            const threshold = window.innerHeight * 0.4;
            let activeLink = tocLinks[0];

            tocLinks.forEach(function (link) {
                var id = decodeURIComponent(link.hash.slice(1));
                var heading = id ? document.getElementById(id) : null;
                if (heading && heading.getBoundingClientRect().top <= threshold) {
                    activeLink = link;
                }
            });

            tocLinks.forEach(function (link) {
                link.classList.toggle("docs-toc-active", link === activeLink);
            });
        };

        let tocFrame;
        const onTocScroll = function () {
            window.cancelAnimationFrame(tocFrame);
            tocFrame = window.requestAnimationFrame(updateTableOfContents);
        };
        window.addEventListener("scroll", onTocScroll, { passive: true });
        window.addEventListener("resize", updateTableOfContents);
        tocScrollCleanup = function () {
            window.cancelAnimationFrame(tocFrame);
            window.removeEventListener("scroll", onTocScroll);
            window.removeEventListener("resize", updateTableOfContents);
            document.documentElement.classList.remove("docs-toc-scrollspy");
        };
        window.setTimeout(updateTableOfContents, 0);
    }

    // Frame block screenshots the way Mintlify does. Only images that stand
    // alone in their own paragraph and are wide enough to be a screenshot get a
    // border/rounded corners — inline badges, emoji, and card icons are left
    // untouched by the size threshold and the empty-paragraph requirement.
    document.querySelectorAll(".md-typeset img").forEach(function (img) {
        if (img.closest(".tc-icon, table")) {
            return;
        }

        var paragraph = img.closest("p");
        var declaredWidth = Number(img.getAttribute("width")) || 0;
        var frame = function () {
            var intrinsicWidth = img.naturalWidth || declaredWidth;
            if (intrinsicWidth && intrinsicWidth < 280) {
                return;
            }
            img.classList.add("docs-image");
            if (paragraph && paragraph.textContent.trim() === "" && paragraph.querySelectorAll("img").length === 1) {
                paragraph.classList.add("docs-image-block");
            }
        };

        if (declaredWidth >= 280 || (img.complete && img.naturalWidth)) {
            frame();
        } else {
            img.addEventListener("load", frame, { once: true });
        }
    });

    observeFooterForWidget();
}

if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(initializeDocsTheme);
} else {
    window.addEventListener("DOMContentLoaded", initializeDocsTheme);
}

window.addEventListener("keydown", function (event) {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        const target = event.target;
        if (target && (target.matches("input, textarea, select") || target.isContentEditable)) {
            return;
        }
        event.preventDefault();
        openSearch();
    }

    if (event.key === "Escape") {
        closeSearch();
        const drawerToggle = document.querySelector("#__drawer");
        if (drawerToggle && drawerToggle.checked) {
            drawerToggle.click();
        }
    }

    const searchToggle = document.querySelector("#__search");
    if (event.key === "Tab" && searchToggle && searchToggle.checked) {
        const dialog = document.querySelector("#docs-search");
        const focusable = getVisibleFocusableElements(dialog);
        if (focusable.length) {
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        }
    }

    if (event.key === "Tab") {
        const drawerToggle = document.querySelector("#__drawer");
        if (drawerToggle && drawerToggle.checked) {
            const drawer = document.querySelector("#docs-navigation");
            const drawerFocusable = getVisibleFocusableElements(drawer);
            if (drawerFocusable.length) {
                const drawerFirst = drawerFocusable[0];
                const drawerLast = drawerFocusable[drawerFocusable.length - 1];
                if (event.shiftKey && document.activeElement === drawerFirst) {
                    event.preventDefault();
                    drawerLast.focus();
                } else if (!event.shiftKey && document.activeElement === drawerLast) {
                    event.preventDefault();
                    drawerFirst.focus();
                }
            }
        }
    }
}, true);
