let inputSelect = "unidades";

function cambiarInput(value) {
  inputSelect = value;
}

function limpiarDisplay() {
  document.getElementById(inputSelect).value = "";
}

function agregarNumero(number) {
  let input = document.getElementById(inputSelect);
  input.value += number;
}

function crearProducto(unidades, precio, producto) {
  const tr = document.createElement("tr");
  const componente = `<td>${producto}</td>
                    <td>${unidades}</td>
                    <td>${precio}</td>
                    <td>${precio * unidades}</td>`;
  tr.innerHTML = componente;
  return tr;
}

function agregarProducto() {
  let tabla = document.getElementById("tablaCuerpo");

  // Todo: Agregar validaciones de campos

  let unidadesInput = parseFloat(document.getElementById("unidades").value);
  let precioInput = parseFloat(document.getElementById("precio").value);
  let numeroProductoInput = document.getElementById("numeroProducto").value;

  tabla.appendChild(
    crearProducto(unidadesInput, precioInput, numeroProductoInput)
  );
}
