import express from "express";
import cors from "cors";

const app = express();

/////////////// Middlewares //////////////////////

app.use(cors()); // Permitimos peticiones desde cualquier url
app.use(express.json()); // Transformamos el json a un formato legible

/////////////// DB //////////////////////

const db = [
    { id: 1, name: "Camiseta", price: 19.99 },
    { id: 2, name: "Pantalón", price: 34.99 },
    { id: 3, name: "Zapatos", price: 59.99 },
];

/////////////// Rutas //////////////////////

// Ruta para traer todos los productos
app.get("/products", (req, res) => {
    // Simulamos peticion a la bd
    const products = db;

    // Responde con todos los productos
    res.status(200).json({ products });
});

// Ruta para traer solo un producto por id
app.get("/products/:id", (req, res) => {
    // Obtenemos los parametros de la url
    const { id } = req.params;

    // Simulamos peticion a la bd y buscamos un solo producto por id
    const product = db.find((product) => product.id === Number(id));

    // Si no se encuntra el producto, retornamos un error
    if (!product) {
        res.status(404).json({ message: "Producto no econtrado" });
        return;
    }

    // Si se ecuntra el producto, se retorna
    res.status(200).json({ product });
});

// Ruta para finalizar la compra
app.post("/finalizar-compra", (req, res) => {
    const { carrito } = req.body;

    // Si no se envia el carrito o el carrito no tiene productos
    // se retorna un error
    if (!carrito || !carrito.length) {
        res.status(404).json({ message: "El carrito debe tener productos" });
        return;
    }

    // Calculamos el total de la compra
    const totalCompra = carrito
        .reduce((acc, { price, unidades }) => acc + price * unidades, 0)
        .toFixed(2);

    // si todo esta bien, se envia un mensaje de exito y el total.
    res.json({
        message: `Compra realizada con exito. Total: ${totalCompra} €`,
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor andando en http://localhost:${PORT}`);
});
