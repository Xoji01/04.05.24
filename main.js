let musics = [
    {
        id: 1,
        name: "Superman",
        artist: "Eminem",
        image: "./public/img/eminemsu.jpg",
        url: "./assets/Superman.mp3",
    },
    {
        id: 2,
        name: "Goosebumps",
        artist: "Travis Scott",
        image: "./public/img/travis.jpg",
        url: "./assets/goosebumps.mp3",
    },
    {
        id: 3,
        name: "afterhours",
        artist: "The Weeknd",
        image: "./public/img/after.jpg",
        url: "./assets/AfterHours.mp3",
    },
    {
        id: 4,
        name: "The Weeknd",
        artist: "The Weeknd",
        image: "./public/img/the_weeknd.webp",
        url: "./assets/TheWeeknd.mp3",
    },
    {
        id: 5,
        name: "Где ты теперь",
        artist: "Hamalli & Navai",
        image: "./public/img/artworks-loOiHcRbf07SdOeA-Uwbmsw-t500x500.jpg",
        url: "./assets/Где_ты_теперь_и_с_кем.mp3",
    },
];

const audioPlayer = document.getElementById("audioPlayer");
const musicTitle = document.getElementById("music-title");
const musicImage = document.getElementById("music-image");
const playlist = document.querySelector(".playlist");
const btnPause = document.getElementById("pause");
const btnPlay = document.getElementById("play");
const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");

let currentMusicIndex = 0;

musics.forEach((music, index) => {
    const listItem = document.createElement("div");
    listItem.textContent = music.name;
    listItem.addEventListener("click", () => {
        currentMusicIndex = index;
        playMusic(currentMusicIndex);
    });
    playlist.appendChild(listItem);
});

playMusic(currentMusicIndex);

function playMusic(index) {
    const music = musics[index];
    audioPlayer.src = music.url;
    musicTitle.textContent = `${music.name} - ${music.artist}`;
    musicImage.src = music.image;
    audioPlayer.play();
}

const toggleButton = document.getElementById("toggle");

function togglePlay() {
	if (audioPlayer.paused) {
		audioPlayer.play();
		toggleButton.textContent = "⏸️";
	} else {
		audioPlayer.pause();
		toggleButton.textContent = "▶️";
	}
}

toggleButton.addEventListener("click", togglePlay);

btnNext.addEventListener("click", () => {
    currentMusicIndex = (currentMusicIndex + 1) % musics.length;
    playMusic(currentMusicIndex);
});

btnPrev.addEventListener("click", () => {
    currentMusicIndex = (currentMusicIndex - 1 + musics.length) % musics.length;
    playMusic(currentMusicIndex);
});
