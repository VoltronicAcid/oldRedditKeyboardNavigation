// ==UserScript==
// @name          Old Reddit Keyboard Navigation
// @description   Navigate old.reddit.com pages using arrow keys
// @author        VoltronicAcid
// @version       0.0.3
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
    };
})();
