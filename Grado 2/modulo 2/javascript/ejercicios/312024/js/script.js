// Lista de canciones

const songs = [
  {
    title: "Cancion 1",
    url: "mp3/forever.mp3",
    cover: "img/forever.webp",
  },
  {
    title: "Cancion 1",
    url: "mp3/forever.mp3",
    cover: "img/forever.webp",
  },
  {
    title: "Cancion 3",
    url: "mp3/believer.mp3",
    cover: "img/believer.webp",
  },
];

// variables de control del sistema

let currentSongIndex = 0;
let isPlaying = false;

// -------- Teoria
// DOM (Document Object Model) - interfaz de programacion que permite manipular los elementos
// de un documento HTML mediante javaScript

// Elementos DOW
const playListElement = document.getElementById("playList");
const audioPLayer = document.getElementById("audioPlayer");
const coverImage = document.getElementById("cover");
const songTitleElement = document.getElementById("songTitle");
const bars = document.querySelectorAll("bar");
const progressBar = document.getElementById("progressBar");
const currentTimeElement = document.getElementById("currentTime");
const totalTimeElement = document.getElementById("totalTime");
const volumeSlider = document.getElementById("volumeSlider");

// audio

// Teoria
// API: Aplicaciones complejas de programacion, crear funciones complejas volviendolas simples

const audioContext = new window.AudioContext();
const analyser = audioContext.createAnalyser();
const source = audioContext.createMediaElementSource(audioPLayer);

source.connect(analyser);
analyser.connect(audioContext.destination);
analyser.fftSize = 64;

const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

function playSong(index) {
  // Actualiza el índice de la canción actual
  currentSongIndex = index;
  const selectedSong = songs[currentSongIndex];

  // Configura la fuente de audio y la portada de la canción
  audioPlayer.src = selectedSong.url;
  coverImage.src = selectedSong.cover;
  songTitleElement.textContent = selectedSong.title;

  // Reproduce la canción y actualiza el estado
  audioPlayer.play();
  isPlaying = true;
}

// Cargar la playlist

function loadPlayList() {
  songs.forEach((song, index) => {
    const songElement = document.createElement("li");
    songElement.classList.add("songItem"); // asegura que haya una clase "songItem"

    const songTitle = document.createElement("span");
    songTitle.classList.add("songTitle");
    songTitle.textContent = song.title;

    songElement.appendChild(songTitle);
    songElement.onclick = () => playSong(index);
    playListElement.appendChild(songElement);
  });
}

loadPlayList();
