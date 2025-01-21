// DOM (DOCUMENT OBJECT MODEL)
// Selecioar elemetos de diferentes formas 
// (querySelector, getElementById, querySelectorAll)

// document.getElementById("lista").addEventListener("click", (event) => {
//    if(event.target.tagName === "LI"){
//     console.log("Hiciste click en: ", event.target.innerText);
// }});

// Alcance SCOPE de las variables

function crearContador() {
  let contador = 0;
  return () => ++contador
}

const contador1 = crearContador()
console.log(contador1()) // 1
console.log(contador1()) // 2

// Acciones Asincronas

// Promises
// Async Await

async function obtenerDatos() {
    try {
        const respuesta = await (await fetch("http://jsonplaceholder.typicode.com/posts")).json()
        console.log(respuesta.slice(0,3))
    } catch (error) {
       console.error("Error al obtener datos: ", error) 
    }
    
}

obtenerDatos()

// Orientacion a objectos

// let persona = {
//     nombre: "Jose",
//     edad: 30,
//     habilidades: ["JavaScript", "Python"],
//     saludar: () => {
//         console.log("Hola, me llamo:", this.nombre);
//     }
// };

// console.log(persona.nombre);
// persona.saludar();

// Pares clave-valor: Organiza datos relacionados
// Metodos: Las funciones dentro de un objecto se llaman metodos
// this: dentro del objecto se refiere a una parte del objecto

// Formas de crear objectos

// conceptual clave-valor

const obj = { clave: "valor" }


// Clases en js

// Las clases son una plantilla para crear objectos. Define propiedades y
// metodos que tendran los objectos a partir de esa clase

class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.apellido = apellido;
    }

    saludar() {
        console.log("Hola, me llamo:", this.nombre);
    }
}


let jose = new Persona("Jose", "Garcia", 21);
jose.saludar();

// Constructor: Es un metodo especial que se ejecuta al crear un instacia de la clase.
// Se usa para inicializar propiedades

// Instancia: Cada objecto creac una new Clase() la cual es uina instancia de las clase 

// Herencia: Las clases pueden heredar propiedades y metodos de otra clase mediante
// mediante la palabra  clave "extends" (ampliar)

class Animal {
    constructor(nombre) {
        this.nombre = nombre
    }
    hacerSonido() {
        console.log("el animal hace un sonido");
    }
}

class Perro extends Animal {
    hacerSonido(){
        console.log("El perro ladra");
    } 
}

const miPerro = new Perro("Max");
miPerro.hacerSonido();

/*
objecto: cuando necesito un contenedor con informacion simple

clase: cuando quiero estructurar el codigo de una forma reutilizable y organizada para proyectos grandes
*/

// MODULOS

//(ARCHIVO suma.js)

export function suma (a, b) {
    return a * b;
}

// (ARCHIVO recibir.js)

import { suma } from "./suma.js"
console.log(suma(2, 6))