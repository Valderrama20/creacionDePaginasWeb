// Promesas:

// Una promesa es un objeto que representan la terminacion o el fracaso de
// de una operacion asincrona y su valor resultante

// Estado de la promesa: pending, fullfilled, rejected
// pending: Estado iniciial, no cumplida ni rechazada
// fullfilled: significa que la operacion se completo
// rejected: SIgnifica que la operacion fallo

const promise = new Promise((resolve, reject) => {
  // simulamos una operacion asincrona
  setTimeout(() => {
    const isResolve = false;
    if (!isResolve) reject("Hubo un error en la operacion");

    resolve("La operacion fue exitosa");
  }, 1500);
});

// then: Se ejecuta cuando la promesa se cumple
// catch: Se ejecuta cuando la promesa es rechazada

promise
  .then((message) => console.log(message))
  .catch((error) => console.error(error));
