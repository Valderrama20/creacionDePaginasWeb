// Escribe un programa que reciba un numero y un operador
// para realizar la operacion correspondiente

// declarar variables con los numeros
// declarar una variable que me de el resultado
// declarar una variable con el operador
// aplicar operacion
// devolver resultado

let x = 10, y = 20, resultado, operador = "*"

switch (operador) {
    case "+":
        resultado = x + y;
        break;
    case "-":
        resultado = x - y;
        break;
    case "*":
        resultado = x * y;
        break;
    case "/":
        resultado = x / y;
        break;
    default:
        console.log("Operador no valido")

}

console.log(`Resultado: ${resultado}`)

