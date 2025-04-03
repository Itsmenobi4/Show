document.addEventListener("DOMContentLoaded", () => {
    const filmLinks = document.querySelectorAll("#filmList a");

    filmLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const videoFile = link.getAttribute("data-video");
            localStorage.setItem("selectedVideo", videoFile);
            window.location.href = "player.html";
        });
    });

    const videoPlayer = document.getElementById("videoPlayer");
    if (videoPlayer) {
        const selectedVideo = localStorage.getItem("selectedVideo") || "video1.mp4";
        videoPlayer.src = selectedVideo;
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");

    if (searchInput) {
        const films = [
            { title: "Film 1", url: "detail.html" },
            { title: "Film 2", url: "detail.html" },
            { title: "Film 3", url: "detail.html" }
        ];

        searchInput.addEventListener("input", () => {
            const query = searchInput.value.toLowerCase();
            searchResults.innerHTML = "";

            if (query) {
                const filteredFilms = films.filter(film => film.title.toLowerCase().includes(query));
                filteredFilms.forEach(film => {
                    const filmElement = document.createElement("a");
                    filmElement.href = film.url;
                    filmElement.classList.add("block", "bg-red-600", "p-4", "rounded-lg", "text-center", "mt-2");
                    filmElement.textContent = film.title;
                    searchResults.appendChild(filmElement);
                });
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const filmTitle = localStorage.getItem("filmTitle");
    const filmVideo = localStorage.getItem("filmVideo");

    if (document.getElementById("filmTitle")) {
        document.getElementById("filmTitle").textContent = filmTitle || "Judul Tidak Ditemukan";
    }

    if (document.getElementById("videoSource")) {
        document.getElementById("videoSource").src = filmVideo;
        document.getElementById("videoPlayer").load();
    }
});
