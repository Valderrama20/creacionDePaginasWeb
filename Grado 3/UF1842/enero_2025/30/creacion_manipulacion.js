
// Array.of(): Crea una nueva instancia de array con un número variable de elementos pasados como argumentos.
const arrOf = Array.of(1,2,3,4);
console.log("Array creado con Array.of():", arrOf );

// Array.from(): Crea un nuevo array a partir de un objeto iterable (como una cadena o un conjunto).
const arrFrom = Array.from("jose")
console.log("Array creado con Array.from():", arrFrom );

// push(): Añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
const arrPush = [1,2,3]

console.log("Array sin push:", arrPush );
arrPush.push("Elemento nuevo")
console.log("Array con push:", arrPush );

// pop(): Elimina el último elemento de un array y lo devuelve.
const arrPop = [1,2,3]

console.log("Array sin pop:", arrPop );
arrPop.pop()
console.log("Array con pop:", arrPop );

// shift(): Elimina el primer elemento de un array y lo devuelve.
const arrShift = [1,2,3]

console.log("Array sin shift:", arrShift );
arrShift.shift()
console.log("Array con shift:", arrShift );

// unshift(): Añade uno o más elementos al principio de un array y devuelve la nueva longitud del array.
const arrUnShift = [1,2,3]

console.log("Array sin unshift:", arrUnShift );
arrUnShift.unshift("elemento agregado")
console.log("Array con unshift:", arrUnShift );

// splice(): Cambia el contenido de un array eliminando, reemplazando o añadiendo elementos.
const arrSplice = [1,2,3,4,5]

console.log("Array sin splice:", arrSplice );
// El primer argumento es el index desde donde se comienza la accion
// EL segundo argumento indica cuantos elementos se van a eleminar
// y el resto de argumentos es lo que se agrega
// Si solo tenemos dos argumentos significa que se recorta y no se agrega nada
arrSplice.splice(2,1,"elemento agregado")
arrSplice.splice(3,1)
console.log("Array con splice:", arrSplice);

// concat(): Combina dos o más arrays y devuelve un nuevo array.
const arrConcat1 = [1,2,3] 
const arrConcat2 = [8,9,10] 

console.log("Arrays concatenados:", arrConcat1.concat(arrConcat2));

// slice(): Devuelve una copia superficial de una porción de un array, sin modificar el array original.
const arrSlice = [1,2,3,4,5]

console.log("Arrays con slice:", arrSlice.slice(1,2));

