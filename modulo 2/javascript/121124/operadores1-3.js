
// Solicita al usuario que ingrese un número. La solicitud a través del prompt
// Convierte la entrada del usuario en un número entero
// Verifica si el usuario ingresó un número válido
// if (!isNaN(number))   
// Si el usuario ingresó un número válido, muestra el resultado en la consola
// (else)
// Si el usuario no ingresó un número válido, muestra un mensaje de error en la consola

let number = parseInt(prompt("Ingrese un numero"));

if(!isNaN(number)) console.log("Ingresaste el numero: ", number);
else console.error("Ingresaste un numero no valido");
    