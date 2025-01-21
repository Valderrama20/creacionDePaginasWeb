let sliderIndex = 0;

//  Selecciono todas las elemetos con una clase

let sliders = document.querySelectorAll(".mySlider");
let dots = document.querySelectorAll(".dot");

// control para avanzar y retroceder las diapositivas
function plusSlider(n) {
  sliderIndex = (sliderIndex + n + sliders.length) % sliders.length;
  mostrarSlider(sliderIndex);
}

// control para seleccionar la diapositiva especifica con los botones

function currentSlider(n) {
  sliderIndex = n;
  mostrarSlider(sliderIndex);
}

// Ocultar y mostrar los elemetos del carrusel

function mostrarSlider(i) {
  sliders.forEach((element, index) => {
    let isActive = i === index;
    element.style.display = isActive ? "flex" : "none";
  });
}

mostrarSlider(sliderIndex);
