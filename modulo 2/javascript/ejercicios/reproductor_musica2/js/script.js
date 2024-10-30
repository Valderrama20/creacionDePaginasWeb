const songs = [
  {
    title: "Believer",
    file: "mp3/believer.mp3",
    cover: "img/believer.webp",
  },
  {
    title: "Forever",
    file: "mp3/forever.mp3",
    cover: "img/forever.webp",
  },
  {
    title: "Adventure of a lifetime",
    file: "mp3/adventure-of-a-lifetime.mp3",
    cover: "img/coldplay.jpg",
  },
];

let currentSongIndex = 0;

const audioPlayer = document.getElementById("audioPlayer");
const playPauseButton = document.getElementById("playPause");
const songTitle = document.getElementById("songTitle");
const cover2 = document.getElementById("cover");

// funcion para cargar la cancion

function loadSong(index) {
  const { title, file, cover } = songs[index];

  audioPlayer.src = file;
  songTitle.textContent = title;
  cover2.src = cover;

  audioPlayer.load();
}
// Funcion pausa y play

function playPauseSong() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseButton.textContent = "\u23F8\ufe0e";
    cover2.className = "playing";
  } else {
    audioPlayer.pause();
    playPauseButton.textContent = "\u23F5\ufe0e";
    cover2.className = "";
  }
}

// Funcion siguiente cancion

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  audioPlayer.play();
  playPauseButton.textContent = "\u23F8\ufe0e";
}

// Funcion cancion anterior

function prevSong() {
  currentSongIndex = (currentSongIndex - 1) % songs.length;
  loadSong(currentSongIndex);
  audioPlayer.play();
  playPauseButton.textContent = "\u23F8\ufe0e";
}

// Funcion del volumen

function setVolume(value) {
  audioPlayer.volume = value;
}

// Cancion de inicio

loadSong(currentSongIndex);
