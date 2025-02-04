// Control de flujo

// -- Ejecutar instrucciones ordenadas (secuenciales)
// -- tomo decisiones (condicionales)
// -- Repetir los bloques de codigos (bucles)

// Receta de cocina
// 1. Reviso si tengo los ingredientes. corto (secuencia)
// 2. si falta algun ingrediente decido si puede sustituirlos o no (condicional)
// 3. revuelvo la mezcla a veces (bucle)


/* 
pseudocodigo ---- ordenar, decidir y repetir

Saber si el usuario es mayor de edad o no


inicio
leer la edad del usuario

si edad es mayor a 18 entonces:
    Eres mayor de edada
si no
    Eres menor de edad
fin

*/

/* Estructura secuencial

vida diaria

1.Nos levantamos de la cama
2.Cepillarse los dientes
3.desayuno

*/

// Estructura secuencial (area del rectangulo)

let base = 5;
let altura = 10;
let area = base * altura;

console.log("El area delo rectangulo es: " + area)

// 1. Solicitar dos numeros al usuario
// 2. Calcula la suma de los dos numeros
// 3. Muestra el resultado en la consola

// let num1 = parseInt(prompt("Introduce un numero: "))
// let num2 = parseInt(prompt("Introduce un segundo numero: "))
// let suma = num1 * num2

// console.log("La suma de los numero es: " + suma)


// Condicionales = tomar decisiones

/* Dependiendo de una condicion se ejecuta un bloque de codigo u otro
 -- estructura basica
 
 if (condicion) {
  // codigo que se ejecuta si la condicion es verdadera

 }
 else if (Otra condicion) {
  // codigo que se ejecuta si la primera es falsa y esta es verdadera
 } 
  else {
  // Se ejecuta si ninguna de las condiciones anteriores son sverdadera
  }

*/

// let numero = parseInt(prompt("introduce un numero: "))

// if (numero > 0) console.log("EL numero es positivo");
// else if (numero < 0) console.log("EL numero es Negativo");
// else console.log("EL numero es cero");


// Programa que determine si un año es bisiesto

// let year = parseInt(prompt("indroduce un año"))

// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     console.log("Este es un año bisiesto");
// }
// else {
//     console.log("este es un año comun y corriente");
// }

// Forma corta

// console.log((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
//     ? "Este es un año bisiesto"
//     : "este es un año comun y corriente");

/*
--- Bucle
 Permite repetir un bloque de codigo miestras de cumpla la condicion
*/

// for permite iteraciones controladas

// for(let i = 1; i <= 5; i++) {
//     console.log("Numero: " + i)

// }


// While condicion antes de ejecutar el codigo

// let i = 1;

// while(i <= 5){
//     console.log(i)
//     i++
// }


// do... while Siempre ejecuta el codigo al menos una vez


// let i = 0;

// do {
//     console.log("numero: " + i);
//     i++;
// } while (i <= 5);

// Tabla de multiplicar del numero que ingrese el usuario

// const table = 8 // parseInt(prompt("Ingresar el numero de la tabla"))


// let i = 1

// while(i <= 10){
//     console.log(`${table} x ${i} = ${table * i}`);
//     i++
// }


// Serie del fibonacci hasta el 40

// let prevNumber = 0;
// let nextNumber = 1
  
// while(prevNumber + nextNumber <= 1957) {
//       console.log(prevNumber + nextNumber)
//       let current = prevNumber + nextNumber
//       prevNumber = nextNumber
//       nextNumber = current
//     }


// Crea un programa que solicite el numero al usuario
// Determine si ers primo y genere todos los numeros primos hasta ese numeroç
// si no es primo, que diga que es compuesto 


function numerosPrimos(numero) {
    let dividir = Math.floor(numero ** 0.5)
    console.log(numero ** 0.5)
    for(let i = dividir; dividir >= 1; i--){
      console.log(i)
    }
    //  if(numero % 2 === 0 && numero % 3 === 0 && numero % 5 === 0) {
    //     console.log(`"${numero}" no es un numero primo`)
    //  }
}

numerosPrimos(49)