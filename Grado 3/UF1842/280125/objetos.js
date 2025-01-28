const persona = {
    edad: 25,
    name: "jose"
};  



const producto = {
    name: "carro",
    price: 200,
    cantidad: 20,
    total: function() {
        return this.price * this.cantidad
    }
}

console.log(producto.total())

// Manipular objectos agregar, modificar, eliminar

const person = {
    name: "Juan"
};

person.lastName = "Perez";
person.name = "Luis";

console.log(person)


console.log(Object.values(person))
console.log(Object.keys(person))


// Objecto de estudiante con nombre, edad y asignaruta. luego agrega un metodo para mostras 
// los detalles 

const student = {
    name: "josesito",
    age: 21,
    asignatura: ["matematicas", "lengua"] ,
    studentDetails: function () {
        console.log(`Estudiante: ${this.name}`)
        console.log(`edad: ${this.age}`)
        console.log(`asignarutas: ${this.asignatura.join(", ")}`)
    }
}

student.studentDetails()


// Cambiar las  claves (keys)

class MiClase {
    constructor() {
        this.miObject = {
            clave1: "clave1",
            clave2: "valor2"
        };
    };
    cambiarValor(clave, nuevoValor) {
       if(this.miObject.hasOwnProperty(clave)){
        this.miObject[clave] = nuevoValor
        console.log(`El valor de ${clave} ha sido modificado a ${nuevoValor}`)
       }
       else{
         console.log(`las clave ${clave}, no existe en mi objecto`)
       }
    }
};

const clase1 = new MiClase()

clase1.cambiarValor("clave1","pepe")
console.log(clase1.miObject)