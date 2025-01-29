
const frutas = ['manzana', 'banana', 'mango', 'uva', 'cereza'];

// 1. map(): Transformar las frutas a mayúscula      
// Pseudocódigo
// Recorrer cada fruta en el array.
// Convertir cada fruta a mayúsculas.
// Guardar el nuevo array con las frutas transformadas.

const frutasEnMayuscula = frutas.map((fruta) => fruta.toUpperCase());
console.log(frutasEnMayuscula);

// 2. filter(): Filtrar las frutas que tienen más de 5 letras
// Pseudocódigo
// Recorrer cada fruta del array.
// Verificar si la longitud de la fruta es mayor a 5.
// Si cumple, incluirla en el nuevo array

const frutasFiltradas = frutas.filter((fruta) => fruta.length > 5);
console.log(frutasFiltradas);

// 3. reduce(): Contar el total de letras de todas las frutas
// Pseudocódigo
// Empezar con un contador inicial en 0.
// Recorrer cada fruta del array.
// Sumar la longitud de cada fruta al contador.
// Al final, devolver el total.

const letrasTotalFrutas = frutas.reduce((acc, fruta) => acc + fruta.length, 0);
console.log(letrasTotalFrutas);