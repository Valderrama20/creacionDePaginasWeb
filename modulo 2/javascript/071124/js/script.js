// Logica de acciones

// Definir los productos

const productos = [
  {
    referencia: 1,
    nombre: "Producto A",
    precio: 100,
  },
  {
    referencia: 2,
    nombre: "Producto B",
    precio: 20,
  },
  {
    referencia: 3,
    nombre: "Producto C",
    precio: 80,
  },
];

// Mostrar los productosen la web

// Las funciones ejecutan las acciones de forma habitual o segun convenga de forma independiente

// Escribir una funcion que recoja los datos del array de productos

const contenedorProducto = document.getElementById("producto");

(() => {
  productos.forEach(({ referencia, nombre, precio }) => {
    const productoDiv = document.createElement("div");
    productoDiv.innerHTML = `<h3> ${nombre} </h3>
                             <p> Precio: ${precio} </p>
                             <button onclick="agregarAlCarrito(${referencia})"> Agregar Producto </button>`;
    contenedorProducto.appendChild(productoDiv);
  });
})();

// funcion para el boton que permite añadir el carrito

// crear la funcion para el carrito
// Cunando el usuario hace click "agregar al carrito" se activa una funcion
// creamos una constante con un "array" con cada prodcuto

const carrito = [];

const agregarAlCarrito = (referencia) => {
  const producto = productos.find(
    (producto) => producto.referencia === referencia
  );
  carrito.push(producto);
  actualizarCarrito();
};

// Aqui estamos buscando un producto por su referencia y la agregamos al carrito

// Mostrar en el carrito el precio y calcular el total

const itemsCarrito = document.getElementById("itemsCarrito");
const sumaTotal = document.getElementById("sumaTotal");

// Que actualizar el contenido del carrito en la pagina y coloque el total de la suma

const actualizarCarrito = () => {
  let total = 0;
  itemsCarrito.innerHTML = "";
  //   colocar en una lista los productos seleccionados de agregar al carrito
  carrito.forEach(({ nombre, precio }) => {
    const itemLi = document.createElement("li");
    itemLi.textContent = `${nombre} - ${precio}`;
    // Muestra el contenido en el interior del carrito
    itemsCarrito.appendChild(itemLi);
    // llama a la variable total y le asigna el valor del precio
    total += precio;
  });

  sumaTotal.textContent = total;
};

const botonPagar = document.getElementById("pagar");

botonPagar.addEventListener("click", () => {
  if (carrito.length > 0) {
    alert("Compra realizada con exito");
    carrito.length = 0; // vacia el carrito
    actualizarCarrito();
  } else {
    alert("carrito vacio");
  }
});
