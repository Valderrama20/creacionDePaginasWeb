/*
        Script para valoracion
        Author: Jose Garcia
        version: 1.0
       */
let productsArr = [];

// Funcion para mostrar los productos al usuario
function cargarProductos(products) {
    // Obtenemos el contenedor
    const gridContainer = document.getElementById("gridContainer");

    // Lo limpiamos
    gridContainer.innerHTML = "";

    // añadimos los productos al contenedor
    for (const product of products) {
        gridContainer.insertAdjacentHTML("beforeend", crearProducto(product));
    }
}

document.addEventListener("DOMContentLoaded", async (e) => {
    // Traemos todo los porductos del json (la funcion buscar productos esta dentro de clases.js)
    productsArr = await buscarProductos();

    // Cargamos los productos en la pagina
    cargarProductos(productsArr);

    // Gestionamos las estrellas
    const start = document.querySelectorAll(".star");
    start.forEach((star) => {
        star.addEventListener("click", function () {
            const value = this.getAttribute("data-value");
            const ratingContainer = this.parentElement;

            // Resetear las estrellas
            ratingContainer.querySelectorAll(".star").forEach((s) => {
                s.classList.remove("active");
            });

            // activa las estrellas una a una al hacer click
            for (let i = 0; i < value; i++) {
                ratingContainer
                    .querySelector(`.star[data-value="${i + 1}"]`)
                    .classList.add("active");
            }
        });
    });
});

function showDetails(e) {
    e.nextElementSibling.classList.toggle("ocultar");
}

function crearProducto({ name, price, stock, image }) {
    return `<div class="gridItem">
    <a href="" target="_blank">
        <img
            src="${image}"
            alt="IMagen de ejemplo"
        />
    </a>
    
    <button class="boton" onclick="showDetails(this)">Ver Mas</button>
    <div class="productDetails ocultar" >
        <span>Nombre: ${name}</span>
        <span>Precio: ${price}</span>
        <span>Stock: ${stock}</span>
    </div>
    
    <div class="rating">
        <span class="star" data-value="1">★</span>
        <span class="star" data-value="2">★</span>
        <span class="star" data-value="3">★</span>
        <span class="star" data-value="4">★</span>
        <span class="star" data-value="5">★</span>
    </div>
</div>`;
}
