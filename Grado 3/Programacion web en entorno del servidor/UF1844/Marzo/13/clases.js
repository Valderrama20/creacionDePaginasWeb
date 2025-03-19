/*
        Script para valoracion
        Author: Jose Garcia
        version: 1.0
       */

// Crear un programa para una tienda virtual usando clases
class Product {
    constructor(name, price, stock, image) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.image = image;
    }
    info() {
        console.log(`Nombre: ${this.name}`);
        console.log(`Precio: ${this.price}`);
        console.log(`Cantidad en stock: ${this.stock}`);
    }
}

class Computer extends Product {
    constructor({ name, price, stock, marca, model, tipo, image }) {
        super(name, price, stock, image);
        this.marca = marca;
        this.model = model;
        this.tipo = tipo;
    }

    info() {
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.model}`);
    }
}

class Libro extends Product {
    constructor({ name, price, stock, author, editorial, tipo, image }) {
        super(name, price, stock, image);
        this.autor = author;
        this.editorial = editorial;
        this.tipo = tipo;
    }

    info() {
        console.log(`Autor: ${this.author}`);
        console.log(`Precio: ${this.editorial}`);
    }
}

class Accesorio extends Product {
    constructor({ name, price, stock, type, tipo, image }) {
        super(name, price, stock, image);
        this.type = type;
        this.tipo = tipo;
    }

    info() {
        console.log(`Tipo: ${this.type}`);
        console.log(`name: ${this.name}`);
    }
}

// Mapa de clases para crear los objetos
const classMap = {
    computer: Computer,
    libro: Libro,
    accesorio: Accesorio,
};

// Funcion para cargar productos desde el archivo json
async function buscarProductos() {
    try {
        // Intenta traer todos los productos
        const response = await fetch("productos.bd.json");

        // Convertir la respuesta en json
        const data = await response.json();

        // Crea un arr para guardar los datos
        const productos = data.map((producto) => {
            // Aqui buscamos si el tipo de producto existe en nuestro mapa
            const ClaseProducto = classMap[producto.tipo];
            if (!ClaseProducto)
                throw new Error(
                    `EL tipo de producto: ${producto.tipo} no existe`
                );
            return new ClaseProducto(producto);
        });
        return productos;
    } catch (error) {
        console.log(error);
        alert(error.message);
    }
}
