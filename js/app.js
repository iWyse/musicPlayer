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
    let albums = [ {
        albumTitle: "HybridTheory",
        artist: "Linkin Park",
        tracks: [ {
            title: "A Place for My Head",
            src: "Hybrid Theory/A Place for My Head.mp3"
        }, {
            title: "By Myself",
            src: "Hybrid Theory/By Myself.mp3"
        }, {
            title: "Crawling",
            src: "Hybrid Theory/Crawling.mp3"
        }, {
            title: "Cure for the Itch",
            src: "Hybrid Theory/Cure for the Itch.mp3"
        }, {
            title: "Forgotten",
            src: "Hybrid Theory/Forgotten.mp3"
        }, {
            title: "High Voltage",
            src: "Hybrid Theory/High Voltage.mp3"
        }, {
            title: "In the End",
            src: "Hybrid Theory/In the End.mp3"
        }, {
            title: "My December",
            src: "Hybrid Theory/My December.mp3"
        }, {
            title: "One Step Closer",
            src: "Hybrid Theory/One Step Closer.mp3"
        }, {
            title: "Papercut",
            src: "Hybrid Theory/Papercut.mp3"
        }, {
            title: "Points of Authority",
            src: "Hybrid Theory/Points of Authority.mp3"
        }, {
            title: "Pushing Me Away",
            src: "Hybrid Theory/Pushing Me Away.mp3"
        }, {
            title: "Runaway",
            src: "Hybrid Theory/Crawling.mp3"
        }, {
            title: "With You",
            src: "Hybrid Theory/With You.mp3"
        } ]
    }, {
        albumTitle: "OneMoreLight",
        artist: "Linkin Park",
        tracks: [ {
            title: "Battle Symphony",
            src: "One More Light/Battle Symphony.mp3"
        }, {
            title: "Halfway Right",
            src: "One More Light/Halfway Right.mp3"
        }, {
            title: "Heavy",
            src: "One More Light/Heavy.mp3"
        }, {
            title: "Invisible",
            src: "One More Light/Invisible.mp3"
        }, {
            title: "Nobody Can Save Me",
            src: "One More Light/Nobody Can Save Me.mp3"
        }, {
            title: "One More Light",
            src: "One More Light/One More Light.mp3"
        }, {
            title: "Sharp Edges",
            src: "One More Light/Sharp Edges.mp3"
        }, {
            title: "Sorry for Now",
            src: "One More Light/Sorry for Now.mp3"
        }, {
            title: "Talking to Myself",
            src: "One More Light/Talking to Myself.mp3"
        } ]
    }, {
        albumTitle: "Meteora",
        artist: "Linkin Park",
        tracks: [ {
            title: "Breaking the Habit",
            src: "Meteora/Breaking the Habit.mp3"
        }, {
            title: "Dont Stay",
            src: "Meteora/Dont Stay.mp3"
        }, {
            title: "Easier to Run",
            src: "Meteora/Easier to Run.mp3"
        }, {
            title: "Faint",
            src: "Meteora/Faint.mp3"
        }, {
            title: "Figure",
            src: "Meteora/Figure.mp3"
        }, {
            title: "Foreword",
            src: "Meteora/Foreword.mp3"
        }, {
            title: "From the Inside",
            src: "Meteora/From the Inside.mp3"
        }, {
            title: "Hit the Floor",
            src: "Meteora/Hit the Floor.mp3"
        }, {
            title: "Lying from You",
            src: "Meteora/Lying from You.mp3"
        }, {
            title: "Nobody-s Listening",
            src: "Meteora/Nobody-s Listening.mp3"
        }, {
            title: "Numb",
            src: "Meteora/Numb.mp3"
        }, {
            title: "Session",
            src: "Meteora/Session.mp3"
        }, {
            title: "Somewhere I Belong",
            src: "Meteora/Somewhere I Belong.mp3"
        } ]
    }, {
        albumTitle: "Bandana",
        artist: "Big Baby Tape & Kizaru",
        tracks: [ {
            title: "99 Problems",
            src: "Bandana/99 Problems.mp3"
        }, {
            title: "Andrew Story",
            src: "Bandana/Andrew Story.mp3"
        }, {
            title: "Bandana",
            src: "Bandana/Bandana.mp3"
        }, {
            title: "Big Tymers",
            src: "Bandana/Big Tymers.mp3"
        }, {
            title: "Bon Voyage",
            src: "Bandana/Bon Voyage.mp3"
        }, {
            title: "Dirt",
            src: "Bandana/Dirt.mp3"
        }, {
            title: "Errbody Sleeping",
            src: "Bandana/Errbody Sleeping.mp3"
        }, {
            title: "Ladidadida",
            src: "Bandana/Ladidadida.mp3"
        }, {
            title: "Mama Makusa",
            src: "Bandana/Mama Makusa.mp3"
        }, {
            title: "Million",
            src: "Bandana/Million.mp3"
        }, {
            title: "Nights Crazy",
            src: "Bandana/Nights Crazy.mp3"
        }, {
            title: "Rider Or Die",
            src: "Bandana/Rider Or Die.mp3"
        }, {
            title: "Slip Slide",
            src: "Bandana/Slip Slide.mp3"
        }, {
            title: "So Icy Nihao",
            src: "Bandana/So Icy Nihao.mp3"
        } ]
    }, {
        albumTitle: "DontSmile",
        artist: "Billie Eilish",
        tracks: [ {
            title: "Bellyache",
            src: "Dont smile at me/Bellyache.mp3"
        }, {
            title: "Copycat",
            src: "Dont smile at me/Copycat.mp3"
        }, {
            title: "Hostage",
            src: "Dont smile at me/Hostage.mp3"
        }, {
            title: "I dont wanna be",
            src: "Dont smile at me/I dont wanna be.mp3"
        }, {
            title: "My boy",
            src: "Dont smile at me/My boy.mp3"
        }, {
            title: "Ocean eyes",
            src: "Dont smile at me/Ocean eyes.mp3"
        }, {
            title: "Party favor",
            src: "Dont smile at me/Party favor.mp3"
        }, {
            title: "Vince Staples",
            src: "Dont smile at me/Vince Staples.mp3"
        }, {
            title: "Watch",
            src: "Dont smile at me/Watch.mp3"
        } ]
    }, {
        albumTitle: "HappierThanEver",
        artist: "Billie Eilish",
        tracks: [ {
            title: "Bossa Nova",
            src: "Happier Than Ever/Bossa Nova.mp3"
        }, {
            title: "Everybody Dies",
            src: "Happier Than Ever/Everybody Dies.mp3"
        }, {
            title: "Getting Older",
            src: "Happier Than Ever/Getting Older.mp3"
        }, {
            title: "Goldwing",
            src: "Happier Than Ever/Goldwing.mp3"
        }, {
            title: "Halleys Comet",
            src: "Happier Than Ever/Halleys Comet.mp3"
        }, {
            title: "Happier Than Ever",
            src: "Happier Than Ever/Happier Than Ever.mp3"
        }, {
            title: "I Didnt Change My Number",
            src: "Happier Than Ever/I Didnt Change My Number.mp3"
        }, {
            title: "Lost Cause",
            src: "Happier Than Ever/Lost Cause.mp3"
        }, {
            title: "Male Fantasy",
            src: "Happier Than Ever/Male Fantasy.mp3"
        }, {
            title: "My future",
            src: "Happier Than Ever/My future.mp3"
        }, {
            title: "Nda",
            src: "Happier Than Ever/Nda.mp3"
        }, {
            title: "Not My Responsibility",
            src: "Happier Than Ever/Not My Responsibility.mp3"
        }, {
            title: "OverHeated",
            src: "Happier Than Ever/OverHeated.mp3"
        }, {
            title: "Oxytocin",
            src: "Happier Than Ever/Oxytocin.mp3"
        }, {
            title: "Therefore I Am",
            src: "Happier Than Ever/Therefore I Am.mp3"
        }, {
            title: "Your Power",
            src: "Happier Than Ever/Your Power.mp3"
        } ]
    }, {
        albumTitle: "WhenWeAllFall",
        artist: "Billie Eilish",
        tracks: [ {
            title: "All the good girls go to hell",
            src: "When We All Fall/All the good girls go to hell.mp3"
        }, {
            title: "Bad guy",
            src: "When We All Fall/Bad guy.mp3"
        }, {
            title: "Bury a friend",
            src: "When We All Fall/Bury a friend.mp3"
        }, {
            title: "Eight",
            src: "When We All Fall/Eight.mp3"
        }, {
            title: "Goodbye",
            src: "When We All Fall/Goodbye.mp3"
        }, {
            title: "I love you",
            src: "When We All Fall/I love you.mp3"
        }, {
            title: "Ilomilo",
            src: "When We All Fall/Ilomilo.mp3"
        }, {
            title: "You should see me in a crown",
            src: "When We All Fall/You should see me in a crown.mp3"
        }, {
            title: "Listen before i go",
            src: "When We All Fall/Listen before i go.mp3"
        }, {
            title: "My strange addiction",
            src: "When We All Fall/My strange addiction.mp3"
        }, {
            title: "When the party-s over",
            src: "When We All Fall/When the party-s over.mp3"
        }, {
            title: "Wish you were gay",
            src: "When We All Fall/Wish you were gay.mp3"
        }, {
            title: "Xanny",
            src: "When We All Fall/Xanny.mp3"
        } ]
    }, {
        albumTitle: "ColoringForAdults",
        artist: "Монеточка",
        tracks: [ {
            title: "90",
            src: "Coloring For Adults/90.mp3"
        }, {
            title: "Запорожец",
            src: "Coloring For Adults/Запорожец.mp3"
        }, {
            title: "Каждый раз",
            src: "Coloring For Adults/Каждый раз.mp3"
        }, {
            title: "Кумушки",
            src: "Coloring For Adults/Кумушки.mp3"
        }, {
            title: "Нет монет",
            src: "Coloring For Adults/Нет монет.mp3"
        }, {
            title: "Нимфоманка",
            src: "Coloring For Adults/Нимфоманка.mp3"
        }, {
            title: "Ночной ларек",
            src: "Coloring For Adults/Ночной ларек.mp3"
        }, {
            title: "Пост-пост",
            src: "Coloring For Adults/Пост-пост.mp3"
        }, {
            title: "Русский ковчег",
            src: "Coloring For Adults/Русский ковчег.mp3"
        }, {
            title: "Твое имя",
            src: "Coloring For Adults/Твое имя.mp3"
        } ]
    } ];
    const actualTitle = document.querySelector(".album-info__title");
    const actualArtist = document.querySelector(".album-info__subtitle");
    const playlist = document.querySelector(".playlist");
    document.querySelectorAll(".albums-item").forEach((function(showTargetAlbum) {
        showTargetAlbum.addEventListener("click", (e => {
            showTargetAlbum.classList.add("isActive");
            let albumName = showTargetAlbum.dataset.album;
            document.querySelector(".active-album__image").setAttribute("src", `img/albums/${albumName}.jpg`);
            //! Рендер треков
                        let index = albums.findIndex((el => el.albumTitle === albumName));
            createPlaylist(albums[index].tracks, albums[index].artist);
            actualTitle.innerText = showTargetAlbum.querySelector(".albums-item__title").innerText;
            actualArtist.innerText = showTargetAlbum.querySelector(".albums-item__artist").innerText;
        }));
        function createPlaylist(targetAlbum, artist) {
            playlist.innerHTML = "";
            for (let i = 0; i < targetAlbum.length; i++) {
                let trackContainer = document.createElement("div");
                trackContainer.classList.add("track");
                let trackName = document.createElement("p");
                trackName.classList.add("track-name");
                trackName.innerText = targetAlbum[i].title;
                let trackArtist = document.createElement("p");
                trackArtist.classList.add("track-artist");
                trackArtist.innerText = artist;
                let mainTrack = document.createElement("audio");
                mainTrack.classList.add("main-track");
                mainTrack.setAttribute("src", `files/${targetAlbum[i].src}`);
                trackContainer.append(mainTrack, trackName, trackArtist);
                playlist.append(trackContainer);
                trackContainer.addEventListener("click", (() => {
                    mainTrack.play();
                }));
            }
        }
    }));
    window["FLS"] = true;
    isWebp();
})();