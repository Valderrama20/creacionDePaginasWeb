// crear un scrip con operadores matematicos (aritmeticos)

console.log("Suma 999 + 1 = ", 999 + 1)
console.log("Resta 255 - 789 = ", 255 - 789)
console.log("Division 100 / 10 = ", 100 / 10)
console.log("Multiplicacion 100 * 600 = ", 100 * 600)
console.log("Modulo de 100 % 2 = ", 100 % 2)
console.log("Elevado de 100 ** 8 = ", 100 ** 8)

// Manipular cadenas y convertir datos

let numberOne = "10", numberTwo = "20", multiplicacion

multiplicacion = Number(numberOne) * Number(numberTwo)

console.log(`Resultado de ${numberOne} * ${numberTwo} = ${multiplicacion}`)


// Funciones

function realizarOperaciones(num1, num2) {
    return {
        suma: num1 + num2,
        resta: num1 - num2,
        multiplicacion: num1 * num2,
        division: num2 !== 0 ? num1 / num2 : "Error, division por 0 ",
        modulo: num2 !== 0 ? num1 / num2 : "Error, division por 0 ",
        elevado: num1 ** num2
    };
} 

console.log(realizarOperaciones(25 , 10))