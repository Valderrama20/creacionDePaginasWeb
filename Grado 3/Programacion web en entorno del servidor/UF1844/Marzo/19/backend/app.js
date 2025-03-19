import express, { json } from "express";
import cors from "cors";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

const app = express();
const PORT = 3000;

//////////// Middlewares ////////////
app.use(express.json()); // Convertimos el json a un formato legible
app.use(cors()); // Permitimos las peticiones de todas las url

// Cargarmos los archivos estaticos desde la carpeta public
app.use(express.static("public"));

// Conexion con la db

const connectionDB = open({
    filename: "./database/database.db",
    driver: sqlite3.Database,
});

// inicializar la conexion con la db

async function initializeDatabase() {
    const db = await connectionDB;

    // Crea la base de datos "products" en caso de que no exista
    await db.exec(`
        CREATE TABLE IF NOT EXISTS products (
        id    INTEGER  PRIMARY KEY AUTOINCREMENT,
        name  TEXT     NOT NULL,
        price REAL     NOT NULL
        )
        `);

    // Insertar los datos iniciales si la tabla esta vacia
    const allProducts = await db.all("SELECT * FROM products");
    if (!allProducts.length) {
        await db.run(
            `INSERT INTO products (name, price) VALUES ("camiseta", 20)`
        );
        await db.run(
            `INSERT INTO products (name, price) VALUES ("pantalon", 30)`
        );
        await db.run(`INSERT INTO products (name, price) VALUES ("reloj", 10)`);

        console.log("Datos Iniciales subidos a la db");
    }
}

// Inicializamos la bd
initializeDatabase();

//////////////// RUTAS //////////////////

// Ruta para obtener todos los productos
app.get("/productos", async (req, res) => {
    const db = await connectionDB;
    const products = await db.all(`SELECT * FROM products`);
    res.json({ products });
});

// Ruta para obtener un producto por id
app.get("/productos/:id", async (req, res) => {
    const { id } = req.params;
    const db = await connectionDB;
    const product = db.get(`SELECT * FROM products WHERE id= ?`, id);
    if (product) res.json({ product });
    else
        res.status(404).json({
            message: `El producto con id: ${id}. No existe`,
        });
});

// Ruta para  finalizar la compra
app.post("/finalizar-compra", (req, res) => {
    const carrito = req.body;
    console.log("Carrito recibido:", carrito);
    // Funcion para simular el procesamiento de pago
    const total = carrito.reduce((acc, product) => acc + product.price, 0);
    res.json({ message: `Compra finalizada. Total:${total} €` });
});

// Inicializamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor andando en http://localhost:${PORT}`);
});
