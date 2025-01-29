// Función para calcular el valor total del stock de productos
const calcularTotal = (productos) => {
    return productos.reduce((acc, { precio, stock }) => acc + (precio * stock), 0);
};

// Función para filtrar productos en oferta
const filtrarProductosEnOferta = (productos) => {
    return productos.filter(({ oferta }) => oferta);
};

const productos = [
    { id: 1, nombre: "Camiseta", precio: 20, stock: 50, oferta: false },
    { id: 2, nombre: "Pantalón", precio: 40, stock: 30, oferta: true },
    { id: 3, nombre: "Zapatillas", precio: 60, stock: 20, oferta: true },
    { id: 4, nombre: "Gorra", precio: 15, stock: 100, oferta: false }
];

const totalProductos = calcularTotal(productos);
console.log(`Valor total del stock: $${totalProductos.toFixed(2)}`);

const productosOferta = filtrarProductosEnOferta(productos);
console.log("Productos en oferta:", productosOferta);
