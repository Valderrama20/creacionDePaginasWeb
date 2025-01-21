const display = document.getElementById("display");

const operadores = {
  "+": true,
  "-": true,
  "*": true,
  "/": true,
};

const agregarOperador = (operador) => {
  // Crea una constante para que siempre lea la ultima operacion
  display.value = operadores[display.value.slice(-1)]
    ? display.value.slice(0, -1) + operador
    : display.value + operador;
};

const agregarNumero = (numero) => {
  display.value += numero;
};

const limpiarDisplay = () => {
  display.value = "";
};
const borrarUltimo = () => {
  display.value = display.value.slice(0, -1);
};

const calculate = () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
};
