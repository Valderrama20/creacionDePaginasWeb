// Funcion para simular el lanzamiento de dos dados de 6

// Si la suma es menor o igual 7, la promesa devuelve un mensaje de fallo

// Funcion lanzarDado()
function lanzarDado() {
  return Math.floor(Math.random() * 6) + 1;
}
// funcion que devuelve una promesa para lanzar dos dados y sumar sus valores

function lanzarDados() {
  //  creamos la promesa que recibe dos parametros (resolve, reject)
  return new Promise((resolve, reject) => {
    // se lanzan los dados
    const dado1 = lanzarDado();
    const dado2 = lanzarDado();

    const suma = dado1 + dado2;
    console.log("dado1", dado1, "dado2", dado2);
    console.log("Resultado:", suma);

    if (suma > 7) resolve("Ganaste!!");
    reject("Perdiste");
  });
}

lanzarDados()
  .then((resultado) => console.log(resultado))
  .catch((error) => console.log(error));
