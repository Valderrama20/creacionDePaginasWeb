// Solicita al usuario que inserte dos números para cada operación matemática y luego muestra el resultado en la consola.

// Operadores básicos// Suma   -----> let numero1 = parseInt(prompt("Inserta el primer número para sumar:"));
// Resta
// Multiplicación
// División
// Módulo  ( es el resto que hay en una división.)

//  SUMA

let numberOneSuma = parseInt(prompt("Ingrese el primer numero para Sumar"))
let numberTwoSuma = parseInt(prompt("Ingrese el segundo numero para Sumar"))

console.log("la suma es: ", (numberOneSuma + numberTwoSuma))

// RESTA

let numberOneRestar = parseInt(prompt("Ingrese el primer numero para Restar"))
let numberTwoRestar = parseInt(prompt("Ingrese el segundo numero para Restar"))

console.log("La Resta es: ", (numberOneSuma - numberTwoSuma))

// MULTIPLICACION

let numberOneMult = parseInt(prompt("Ingrese el primer numero para Multiplicar"))
let numberTwoMult = parseInt(prompt("Ingrese el segundo numero para Multiplicar"))

console.log("La Multiplicacion es: ", (numberOneMult * numberTwoMult))

// DIVISION

let numberOneDiv = parseInt(prompt("Ingrese el primer numero para Dividir"))
let numberTwoDiv = parseInt(prompt("Ingrese el segundo numero para Dividir"))

console.log("La Divicion es: ", (numberOneMult / numberTwoMult))

// MODULO

let numberOneMod = parseInt(prompt("Ingrese el primer numero para calcular el resto"))
let numberTwoMod = parseInt(prompt("Ingrese el segundo numero para calcular el resto"))

console.log("El Resto es: ", (numberOneMod % numberTwoMod))

