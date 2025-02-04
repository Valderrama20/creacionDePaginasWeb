


// crea un arr de objectos representadon productos con propiedades como nombre y precio
// Utilizando map para obtener el arreglo con solo los precios
// filtre para filtras los productos con precios mayor a 20 
// y reduce para obtener la suma total de los precios

const products = [
    { name: "Camiseta", price: 20 },
    { name: "Pantalón", price: 35 },
    { name: "Zapatos", price: 50 }
];

// Precios de los productos
const productsPrices = products.map(({ price }) => price)
console.log(productsPrices)

// Productos con precio mayor a 20
const productsFiltered = products.filter(({ price }) => price > 20)
console.log(productsFiltered)

// Suma total de los precios
const productsReduce = products.reduce((acc, { price }) => price + acc, 0)
console.log(productsReduce)




