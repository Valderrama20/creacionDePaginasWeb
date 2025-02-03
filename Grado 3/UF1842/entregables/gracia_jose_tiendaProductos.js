// Simularemos la gestión de un inventario, incluyendo calcular el valor total de los productos y filtrar productos en oferta.

const productos = [
    { id: 1, nombre: "Camiseta", precio: 20, stock: 50, oferta: false },
    { id: 2, nombre: "Pantalón", precio: 40, stock: 30, oferta: true },
    { id: 3, nombre: "Zapatillas", precio: 60, stock: 20, oferta: true },
    { id: 4, nombre: "Gorra", precio: 15, stock: 100, oferta: false }
];

// utilizamos el metodo reduce para calcular el precio total del stock
// destructuramos el objecto de producto para acceder a precio y stock
// multiplicamos precio x stock y lo sumamos al acumulador

const totalProductos = productos.reduce((acc, { precio, stock }) => acc + (precio * stock), 0)
console.log(totalProductos)

//filtramos y verificamos que productos estan en oferta

const productosOferta = productos.filter(({oferta}) => oferta )
console.log(productosOferta)
