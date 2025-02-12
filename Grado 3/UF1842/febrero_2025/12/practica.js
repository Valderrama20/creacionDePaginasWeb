// 1. Dado el siguiente array de números enteros:
const arr = [1, 2, 3, 4, 5];
// Escribe un código en JavaScript que recorra el array utilizando un bucle for y muestre en la consola
// únicamente los números pares contenidos en él.

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) console.log(arr[i]);
}

// 2. Dado el siguiente array de números enteros:
const arr2 = [10, 20, 30];
// Escribe un código en JavaScript que utilice un bucle for para recorrer el array y calcular la suma de todos
// sus elementos. Al finalizar, muestra el resultado en la consola.

let sum = 0;
for (let i = 0; i < arr2.length; i++) {
  sum += arr2[i];
}
console.log("Suma de todos los numeros:", sum);

// 3. Dado el siguiente array de números enteros:
const arr3 = [1, 2, 3, 4, 5];
// Escribe un código en JavaScript que utilice un bucle for para recorrer el array e imprimir sus elementos en la
// consola. Sin embargo, el recorrido debe detenerse cuando el índice sea igual a 2, utilizando la instrucción
// break.

for (let i = 0; i < arr3.length; i++) {
  if (i === 2) break;

  console.log(arr3[i]);
}

// 4. Dado el siguiente array de números enteros:
const arr4 = [1, 2, 3, 4, 5];
// Escribe un código en JavaScript que utilice un bucle for para recorrer el array y almacenar en un nuevo array
// únicamente los números mayores que 2. Finalmente, muestra el nuevo array en la consola

const newArr = [];
for (let i = 0; i < arr4.length; i++) {
  if (arr[i] > 2) newArr.push(arr[i]);
}
console.log("Nuevo arr con numeros mayores a 2:", newArr);

// 5. Dado el siguiente array de números enteros:
const arr5 = [1, 2, 3, 4, 5];
// Escribe un código en JavaScript que utilice un bucle for para recorrer el array y contar cuántos números
// impares hay en él. Muestra el resultado en la consola.

let imparNumberCount = 0;
for (let i = 0; i < arr5.length; i++) {
  if (arr[i] % 2 !== 0) imparNumberCount++;
}
console.log("La catidad de numeros impares es:", imparNumberCount);

// 6. Dado el siguiente array de números enteros:
const arr6 = [1, 2, 3, 4, 5];
// Escribe un código en JavaScript que utilice un bucle for para recorrer el array e imprimir sus elementos en la
// consola. Sin embargo, cuando el valor del elemento sea 3, el bucle debe saltar a la siguiente iteración
// utilizando la instrucción continue.

for (let i = 0; i < arr6.length; i++) {
  if (arr6[i] === 3) continue;
  console.log(arr6[i]);
}

// 7. Dado el siguiente array de números enteros:
const arr7 = [1, 2, 3, 4, 5];
// Escribe un código en JavaScript que utilice un bucle for para recorrer el array con un paso de 2 (saltando de
// dos en dos) y almacenar los elementos en un nuevo array. Muestra el nuevo array en la consola.

const newSaltElementArr = [];
for (let i = 0; i < arr7.length; i += 2) {
  newSaltElementArr.push(arr7[i]);
}
console.log("Arr con los numeros que no fueron saltados:", newSaltElementArr);

// 8. Dado el siguiente arreglo de números enteros:
const arr8 = [1, 2, 3, 4, 5];
// Escribe un código en JavaScript que utilice un bucle for para recorrer el arreglo y calcular la suma de los
// números pares contenidos en él. Muestra el resultado de la suma en la consola.

let sumPartNumber = 0;
for (let i = 0; i < arr8.length; i++) {
  if (arr8[i] % 2 === 0) sumPartNumber += arr8[i];
}
console.log("La suma de los numero pares es:", sumPartNumber);
