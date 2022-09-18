(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const playlistTracks = document.querySelector(".playlist");
    playlistTracks.addEventListener("click", (e => {
        if (e.target.classList.contains("playlist-track")) {
            e.target.classList.toggle("track--pause");
            if (!document.querySelector(".track-active")) {
                const animWrapper = document.createElement("div");
                animWrapper.classList.add("track-active");
                for (let i = 1; i <= 4; i++) {
                    let span = document.createElement("span");
                    animWrapper.append(span);
                }
                e.target.append(animWrapper);
            }
        }
    }));
    window["FLS"] = true;
    isWebp();
})();