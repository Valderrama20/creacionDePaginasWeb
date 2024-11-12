
// Number: Representa valores numéricos (entero, decimal, negativo)
let numero = 66; 
let numeroDecimal = 1.5
let numeroNegativo = -25
console.log("El número entero es: ", numero);
console.log("El número decimal es: ", numeroDecimal);
console.log("El número negativo es: ", numeroNegativo);

// String: Representa datos de texto
let name = "Jose"; 
let lastName = "Garcia"; 
console.log("El String 1 es: ", name);
console.log("El String 2 es: ", lastName);

// Boolean: Representa un valor lógico (true o false)
let boolean = true
let boolean2 = false
console.log("El Boolean verdadero es: ", boolean);
console.log("El Boolean falso es: ", boolean2);

// Undefined: Representa un valor no definido
let indefinido
console.log("El valor no definido es: ", indefinido);

// Object: Representa un objeto con propiedades
let user = { name: "Pepe", age: 34, isAdmin: true, city: "Vigo" }
console.log("El objecto es: ", user)

// Array: Representa una colección ordenada de valores
let fruits = ["mango","banana","melon","fresa"]
console.log("La coleccion ordenada es: ", fruits)

// Function: Representa una función reutilizable
function saludar(name){
 return `Hola ${name}`
}
console.log("Esta es la funcion reutilizable:",saludar("jose"))

// Date: Representa una fecha y hora específicas
let date = new Date()
console.log("Hora y fecha especifica:", date)