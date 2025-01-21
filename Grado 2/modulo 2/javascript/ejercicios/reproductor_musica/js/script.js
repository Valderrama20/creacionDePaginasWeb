// Canciones
const canciones = [
  {
    title: "cancion 1",
    caratula: "img/believer.webp",
    song: "mp3/believer.mp3",
  },
  {
    title: "cancion 2",
    caratula: "img/forever.webp",
    song: "mp3/forever.mp3",
  },
  {
    title: "cancion 3",
    caratula: "img/believer.webp",
    song: "adventure-of-a-lifetime.mp3",
  },
];

// Seleccion de canciones
let cancionActual = 0;

const oirMusica = document.getElementById("audioPlay");
const pausarIniciar = document.getElementById("playPause");
const songTitle = document.getElementById("songTitle");
const caratulaImg = document.getElementById("cover");

// Funcion carga de canciones

function chargeSongs(inicio) {
  const { caratula, song, title } = canciones[inicio];

  oirMusica.src = song;
  songTitle.textContent = title;
  caratulaImg.src = caratula;

  oirMusica.load();
}

// funcion pausar canciones

function playPauseSong() {
  if (oirMusica.paused) {
    chargeSongs(cancionActual);
    oirMusica.play();
    pausarIniciar.innerHTML = "&#x23f8;";
  } else {
    oirMusica.pause();
    pausarIniciar.innerHTML = "&#X23EF;";
  }
}

// funcion siguiente cancion

function nextSong() {
  cancionActual = (cancionActual + 1) % canciones.length;
  chargeSongs(cancionActual);
  oirMusica.play();
  pausarIniciar.innerHTML = "&#X23EF";
}
// Cancion anterior

function prevSong() {
  cancionActual = (cancionActual - 1 + canciones.length) % canciones.length;
  chargeSongs(cancionActual);
  oirMusica.play();
  pausarIniciar.innerHTML = "&#X23EF";
}
