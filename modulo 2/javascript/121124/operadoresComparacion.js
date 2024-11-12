// Solicita al usuario que inserte dos valores para utilizar en los operadores de
//  comparación. Luego, aplica cada uno de los operadores y muestra los resultados en la consola.

// Genera dos variables con "parseFloat" y en el prompt se solicite los números

// Operador ==
// Operador ===
// Operador !=
// Operador !==
// Operador >
// Operador >=
// Operador <=


let numberOne =  parseFloat(prompt("Ingresa el primer numero para comparar"))
let numberTwo =  parseFloat(prompt("Ingresa el segundo numero para comparar"))

console.log(`Valores recibidos: ${numberOne} y ${numberTwo}`)
console.log("Comparando con '==' = ",(numberOne == numberTwo))
console.log("Comparando con '===' = ",(numberOne === numberTwo))
console.log("Comparando con '!=' = ",(numberOne != numberTwo))
console.log("Comparando con '!==' = ",(numberOne !== numberTwo))
console.log("Comparando con '>' = ",(numberOne > numberTwo))
console.log("Comparando con '>=' = ",(numberOne >= numberTwo))
console.log("Comparando con '<=' = ",(numberOne <= numberTwo))

