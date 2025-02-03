// Imagina que tienes un sistema para administrar una lista de estudiantes en un curso. Debes realizar las siguientes operaciones utilizando los métodos de arrays indicados:

// Pasos del ejercicio
// 1- Crear un array de nombres de estudiantes usando Array.of().
const studentNames = Array.of("Pepe", "Luis", "Pepito");

// 2- Convertir una lista de nombres en un array usando Array.from().
const studentNames2 = Array.from(["Armando", "Felipe", "Alberto"]);

console.log("Array 1:", studentNames);
console.log("Array 2:", studentNames2);

// 3 - Agregar un nuevo estudiante al final usando push().
studentNames.push("Juan");
console.log("Agregando estudiante con push:", studentNames )

// 4 - Eliminar el último estudiante usando pop().
studentNames2.pop();
console.log("Eliminando estudiante con pop:", studentNames2 )

// 5 - Eliminar el primer estudiante usando shift().
studentNames.shift();
console.log("Eliminando estudiante con shift:", studentNames )

// 6 - Agregar un nuevo estudiante al inicio usando unshift().
studentNames2.unshift("Ana");
console.log("agregando estudiante con unshift:", studentNames2 )

// 7 - Eliminar o reemplazar estudiantes en una posición específica usando splice().
studentNames.splice(1,1,"Gringo");
console.log("Remplazando estudiante con splice:", studentNames )

// 8 - Combinar dos listas de estudiantes usando concat().
const newArrConcat = studentNames.concat(studentNames2);
console.log("Uniendo arr1 y arr2 con concat:", newArrConcat )

// 9 - Obtener una parte de la lista usando slice().
const arrRecortado = newArrConcat.slice(2,4);
console.log("Recortando el arr unido con slice:", arrRecortado )

