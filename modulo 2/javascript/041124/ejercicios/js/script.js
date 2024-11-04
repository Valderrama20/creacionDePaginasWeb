// Codigo del carrusel

const images = ["img/img1.jpg", "img/img2.jpg", "img/img3.png"];

let currentIndex = 0;

// funcion para ver las img en un tiempo determinado

// function showNextIndex() {
//   currentIndex = (currentIndex + 1) % images.length;
//   document.getElementById("carruselImg").src = images[currentIndex];
// }

// setInterval(showNextIndex, 3000);

const container = document.getElementById("container");

function generarColorAleatorio() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

container.addEventListener("click", () => {
  container.style.backgroundColor = generarColorAleatorio();
});

// efecto especial al hacer click cambiar de color
