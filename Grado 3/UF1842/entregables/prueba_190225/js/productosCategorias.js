let categoriaSelecionada = "Aguas";

const contenedorCategorias = document.getElementById("categorias");
const contenedorProductos = document.getElementById("productos");

// Funcion para crear un boton. esta funcion tanto paras las categorias como los productos

function crearBoton(clase = "", datos, callback) {
  const boton = document.createElement("button");
  const imagen = document.createElement("img");
  const span = document.createElement("span");

  imagen.src = datos.imagen;
  imagen.alt = datos.alt;

  span.textContent = datos.nombre;
  boton.addEventListener("click", () => callback(datos));

  boton.classList.add(clase);
  boton.append(imagen, span);
  console.log(boton);
  return boton;
}

function cargarProductos() {
  contenedorProductos.textContent = "";
  const productos = datos[categoriaSelecionada].productos;

  const botonesProductos = productos.map((producto) =>
    crearBoton("botonProducto", producto, seleccionarProducto)
  );
  contenedorProductos.append(...botonesProductos);
}

function seleccionarProducto({ precio, nombre }) {
  let unidadesInput = document.getElementById("unidades");
  let precioInput = document.getElementById("precio");
  let numeroProductoInput = document.getElementById("numeroProducto");
  unidadesInput.value = 1;
  precioInput.value = precio;
  numeroProductoInput.value = nombre;
}

function seleccionarCategoria(datos) {
  categoriaSelecionada = datos.nombre;
  cargarProductos();
}

const botonesCategoria = Object.entries(datos).map(([nombre, categoria]) =>
  crearBoton("botonCategoria", categoria, seleccionarCategoria)
);

contenedorCategorias.append(...botonesCategoria);

window.onload = cargarProductos();
