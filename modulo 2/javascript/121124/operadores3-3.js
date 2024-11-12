// Solicita al usuario que escriba un número para realizar las operaciones. Luego,
//  aplica cada uno de los operadores especificados y muestra los resultados en la consola.

// Operadores de incremento y decremento
// Incremento
// Decremento
// Incremento por un valor específico
// Decremento por un valor específico 
// Multiplicación por un valor específico
// División por un valor específico
// Módulo por un valor específico

let number = parseInt(prompt("Ingrese un numero para las operaciones"))

console.log("Valor recibido: ", number )
console.log("Incremento = ", ++number )
console.log("Decremento = ", --number )
console.log("Incremento de valor especifico '7' = ", number += 7 )
console.log("Decremento de valor especifico '-5' = ", number -= 5)
console.log("Multiplicación por un valor especifico '7' = ", number *= 7)
console.log("División por un valor especifico '0.5' = ", number /= 0.5)
console.log("Modulo por un valor especifico '2' = ", number %= 2)

