// ==UserScript==
// @name          Old Reddit Keyboard Navigation
// @description   Navigate old.reddit.com pages using arrow keys
// @author        VoltronicAcid
// @version       0.1
// @homepageURL   https://github.com/VoltronicAcid/oldRedditKeyboardNavigation
// @supportURL    https://github.com/VoltronicAcid/oldRedditKeyboardNavigation/issues
// @icon          https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @match         https://*reddit.com/*
// @run-at        document-idle 
// ==/UserScript==

(() => {
    "use strict";

    const prevButton = document.querySelector("a[rel='nofollow prev']");
    const nextButton = document.querySelector("a[rel='nofollow next']");

    document.onkeydown = ({ key }) => {
        if (key === "ArrowLeft" && prevButton) document.location = prevButton.href;

        if (key === "ArrowRight" && nextButton) document.location = nextButton.href;

        if (key === "]") {
            const previews = Array.from(document.querySelectorAll("div.gallery-preview"));

            if (previews.filter(div => div.style.display === "").length) {
                const selected = previews.filter(div => div.style.display === "")[0];
                if (selected.nextElementSibling) {
                    selected.style.display = "none";
                    selected.nextElementSibling.style.display = "";
                }
            }
        }

        if (key === "[") {
            const previews = Array.from(document.querySelectorAll("div.gallery-preview"));

            if (previews.filter(div => div.style.display === "").length) {
                const selected = previews.filter(div => div.style.display === "")[0];
                if (selected.previousElementSibling && selected.previousElementSibling.className === "gallery-preview") {
                    selected.style.display = "none";
                    selected.previousElementSibling.style.display = "";
                }
            }
        }
    };
})();
