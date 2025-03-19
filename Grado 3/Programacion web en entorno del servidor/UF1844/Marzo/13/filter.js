/*
        Script para valoracion
        Author: Jose Garcia
        version: 1.0
       */

const searchInput = document.getElementById("buscador");

searchInput.addEventListener("keydown", async (event) => {
    // Si la tecla presionada es Enter, hacemos la busqueda
    if (event.key === "Enter") {
        // Obtenemos el valor del input
        const inputValue = searchInput.value.toLowerCase();

        // Traemos todo los productos para hacer la busqueda
        const products = await buscarProductos();

        // filtramos los productos por nombre
        const filterProducts = products.filter((product) =>
            product.name.toLowerCase().includes(inputValue)
        );

        // Recargamos las pagina con los productos
        cargarProductos(filterProducts);
    }
});

const categorySelect = document.getElementById("filtro-categoria");

categorySelect.addEventListener("change", async (e) => {
    // Obtenemos la categoria seleccionado
    const typeValue = e.target.value;

    // Traemos todo los productos para hacer la busqueda
    let products = await buscarProductos();

    // Creamos una variable para los productos filtrados por tipo
    let filterProducts = products;

    // filtramos los productos por tipo si el tipo seleccionado no es "todos"
    if (typeValue !== "todos") {
        filterProducts = products.filter(
            (product) => product.tipo === typeValue
        );
    }

    // Recargamos las pagina con los productos
    cargarProductos(filterProducts);
});
