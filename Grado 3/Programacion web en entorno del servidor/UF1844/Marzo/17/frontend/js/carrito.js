const shopCart = [];

// Funcion para actualizar el carrito de compras
const updateCart = (product) => {
    for (const productCart of shopCart) {
        // Recorremos el arr y verificamos si ya esta agregado el producto

        if (productCart.id === product.id) {
            // En caso de que ya este agrega se suma uno a sus unidades y corta la ejecucion
            productCart.unidades += 1;
            return;
        }
    }
    // Si el producto no existe en el carrito, se agrega
    shopCart.push({ ...product, unidades: 1 });
};

// Funcion para crear un producto para la tabla del carrito
const createProductOfCart = ({ name, price, unidades }) => {
    return `<tr>
                <td>${name}</td>
                <td>${price}</td>
                <td>${unidades}</td>
            </tr>`;
};

// Funcion para mostrar los productos del carrito al cliente
const showCart = (cart) => {
    // Buscamos el contenedor del carrito
    const bodyCart = document.getElementById("tableCartBody");

    // Limpiamos el carrito
    bodyCart.innerHTML = "";

    // Recorremos el carrito y agregamos cada producto a la tabla
    for (const productCart of cart) {
        // insertAdjacentHTML, me agrega un elemento htlm en un lugar especifico del contenedor
        bodyCart.insertAdjacentHTML(
            "beforeend",
            createProductOfCart(productCart)
        );
    }
};

// Funcion para obtener el producto pòr id
const getProductById = async (id) => {
    // Busca el producto indicado en la db
    const response = await fetch(`http://localhost:3000/products/${id}`);

    //Transforma en un objecto legible y retorna la informacion del producto
    return (await response.json()).product;
};

// Funcion principal la cual orquesta la agregacion de productos
const addProductToCart = async (id) => {
    try {
        // Busca el producto en la db
        const product = await getProductById(id);

        // Actualiza el carrito
        updateCart(product);

        // Muestra el carrito actualizado
        showCart(shopCart);
    } catch (error) {
        alert(error.message);
    }
    console.log(shopCart);
};

// Funcion para realizar la compra.
const buyCart = async () => {
    try {
        const response = await fetch(`http://localhost:3000/finalizar-compra`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ carrito: shopCart }),
        });

        const data = await response.json();

        alert(data.message);
    } catch (error) {
        console.error(error.message);
    }
};
