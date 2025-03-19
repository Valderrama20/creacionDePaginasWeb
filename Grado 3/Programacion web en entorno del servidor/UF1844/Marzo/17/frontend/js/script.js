// Funcion para cargar productos de la api
async function getAllProducts() {
    try {
        // Intenta traer todos los productos
        const response = await fetch("http://localhost:3000/products");

        // Convertir la respuesta en json y retornamos los productos
        return (await response.json()).products;
    } catch (error) {
        alert(error.message);
        return null;
    }
}

// Funcion para crear las cartas de los productos
function crearProducto({ id, name }) {
    return `<div class="gridItem" id="${id}">
        <img
            src="https://placehold.co/600x400?text=${name}"
            alt="IMagen de ejemplo"
        />
    <button class="boton" onclick="addProductToCart(${id})">Agregar Producto</button>
</div>`;
}

// Cargar productos en la pagina
function cargarProductos(products) {
    const productsContainer = document.getElementById("productsContainer");
    productsContainer.innerHTML = "";

    for (const product of products) {
        productsContainer.insertAdjacentHTML(
            "beforeend",
            crearProducto(product)
        );
    }
}

// funcion para orquestar todas las funciones al inicializar la pagina
document.addEventListener("DOMContentLoaded", async () => {
    const allProducts = await getAllProducts();
    if (!allProducts) return;
    cargarProductos(allProducts);
});
