// Seleccionamos los elementos del DOM
const entradaTarea = document.getElementById("entradaTarea");
const entradaFecha = document.getElementById("entradaFecha");
const entradaTiempo = document.getElementById("entradaTiempo");
const botonAgregar = document.getElementById("botonAgregar");
const listaTareas = document.getElementById("listaTareas");

// Función para mostrar un mensaje de error
function mostrarError(mensaje) {
  const error = document.createElement("div");
  error.className = "mensajeError";
  error.textContent = mensaje;
  document.body.appendChild(error);
  setTimeout(() => error.remove(), 3000);
  // Elimina el mensaje después de 3 segundos
}

// Función para agregar una tarea
function agregarTarea() {
  const textoTarea = entradaTarea.value.trim();
  const fechaLimite = entradaFecha.value;
  const tiempoEstimado = entradaTiempo.value.trim();

  // Validar que todos los campos estén completos
  if (!textoTarea || !fechaLimite || !tiempoEstimado) {
    mostrarError("Todos los campos son obligatorios.");
    return;
  }

  //Crear elementos de la tarea
  const elementoTarea = document.createElement("li");
  elementoTarea.classList.add("elementoTarea", "tareaPendiente");

  //Crea span para la tarea
  const spanTarea = document.createElement("span");
  spanTarea.textContent = textoTarea;

  //Crea span para la fecha límite
  const spanFecha = document.createElement("span");
  spanFecha.className = "fechaLimite";
  spanFecha.textContent = `Fecha límite: ${fechaLimite}`;

  //Crea span para el tiempo estimado
  const spanTiempo = document.createElement("span");
  spanTiempo.className = "tiempoEstimado";
  spanTiempo.textContent = `Tiempo estimado: ${tiempoEstimado}`;

  //Crea botón para editar tarea
  const botonEditar = document.createElement("button");
  botonEditar.textContent = "Editar";
  botonEditar.className = "botonEditar";
  botonEditar.onclick = function () {
    editarTarea(spanTarea, spanFecha, spanTiempo);
  };
  //Crea botón para eliminar tarea
  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.className = "botonEliminar";
  botonEliminar.onclick = function () {
    listaTareas.removeChild(elementoTarea);
    guardarTareas();
  };

  // Boton para completar una tarea
  const botonTareaLista = document.createElement("button");
  botonTareaLista.textContent = "Tarea Lista";
  botonTareaLista.className = "botonTareaLista";
  botonTareaLista.onclick = function () {
    // Al completar la tarea eliminamos el boton,
    // eliminamos la clase de tarea pendiente,
    // agregamos su clase para indicar que esta lista
    // y guardamos
    botonTareaLista.remove();
    elementoTarea.classList.remove("tareaPendiente");
    elementoTarea.classList.toggle("tareaConpletada");
    guardarTareas();
  };

  // Marcar tarea como completada
  // spanTarea.onclick = function () {
  //   spanTarea.classList.toggle("completada");
  //   guardarTareas();
  // };

  // Agregar elementos a la lista de tareas
  elementoTarea.appendChild(spanTarea);
  elementoTarea.appendChild(spanFecha);
  elementoTarea.appendChild(spanTiempo);
  elementoTarea.appendChild(botonTareaLista);
  elementoTarea.appendChild(botonEditar);
  elementoTarea.appendChild(botonEliminar);
  listaTareas.appendChild(elementoTarea);

  // Limpiar los campos de entrada
  entradaTarea.value = "";
  entradaFecha.value = "";
  entradaTiempo.value = "";
  guardarTareas();
}

// Función para editar una tarea
function editarTarea(spanTarea, spanFecha, spanTiempo) {
  const nuevoTexto = prompt("Editar tarea:", spanTarea.textContent);
  if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
    spanTarea.textContent = nuevoTexto.trim();
    const nuevaFecha = prompt(
      "Editar fecha límite (YYYY-MM-DD):",
      spanFecha.textContent.replace("Fecha límite: ", "")
    );
    const nuevoTiempo = prompt(
      "Editar tiempo estimado:",
      spanTiempo.textContent.replace("Tiempo estimado: ", "")
    );
    spanFecha.textContent = nuevaFecha ? `Fecha límite: ${nuevaFecha}` : "";
    spanTiempo.textContent = nuevoTiempo
      ? `Tiempo estimado: ${nuevoTiempo}`
      : "";
    guardarTareas();
  }
}

// Función para filtrar tareas
function filtrarTareas(filtro) {
  const tareas = document.querySelectorAll("#listaTareas .elementoTarea");
  tareas.forEach((tarea) => {
    const estaCompletada = tarea
      .querySelector("span")
      .classList.contains("completada");
    if (
      filtro === "all" ||
      (filtro === "completed" && estaCompletada) ||
      (filtro === "pending" && !estaCompletada)
    ) {
      tarea.style.display = "flex";
    } else {
      tarea.style.display = "none";
    }
  });
}

// Función para guardar las tareas en localStorage
function guardarTareas() {
  const tareas = [];
  document.querySelectorAll("#listaTareas .elementoTarea").forEach((tarea) => {
    const textoTarea = tarea.querySelector("span").textContent;
    console.log(tarea);
    const estaCompletada = tarea.classList.contains("tareaConpletada");
    const fechaLimite = tarea
      .querySelector(".fechaLimite")
      .textContent.replace("Fecha límite: ", "");
    const tiempoEstimado = tarea
      .querySelector(".tiempoEstimado")
      .textContent.replace("Tiempo estimado: ", "");
    tareas.push({
      texto: textoTarea,
      completada: estaCompletada,
      fechaLimite: fechaLimite,
      tiempoEstimado: tiempoEstimado,
    });
  });
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

// Función para cargar las tareas desde localStorage
function cargarTareas() {
  const tareas = JSON.parse(localStorage.getItem("tareas")) || [];

  tareas.forEach((tarea) => {
    const elementoTarea = document.createElement("li");
    elementoTarea.className = "elementoTarea";

    const spanTarea = document.createElement("span");
    spanTarea.textContent = tarea.texto;
    if (tarea.completada) {
      elementoTarea.classList.add("tareaConpletada");
    } else {
      // en caso de que la tarea no este completada, se le agrega un boton para
      // completarla y una clase determinada
      elementoTarea.classList.add("tareaPendiente");
      elementoTarea.appendChild(botonTareaLista);
    }

    const spanFecha = document.createElement("span");
    spanFecha.className = "fechaLimite";
    spanFecha.textContent = tarea.fechaLimite
      ? `Fecha límite: ${tarea.fechaLimite}`
      : "";

    const spanTiempo = document.createElement("span");
    spanTiempo.className = "tiempoEstimado";
    spanTiempo.textContent = tarea.tiempoEstimado
      ? `Tiempo estimado: ${tarea.tiempoEstimado}`
      : "";

    const botonEditar = document.createElement("button");
    botonEditar.textContent = "Editar";
    botonEditar.className = "botonEditar";
    botonEditar.onclick = function () {
      editarTarea(spanTarea, spanFecha, spanTiempo);
    };

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.className = "botonEliminar";
    botonEliminar.onclick = function () {
      listaTareas.removeChild(elementoTarea);
      guardarTareas();
    };

    // Boton para completar tareas
    const botonTareaLista = document.createElement("button");
    botonTareaLista.textContent = "Tarea Lista";
    botonTareaLista.className = "botonTareaLista";
    botonTareaLista.onclick = function () {
      elementoTarea.classList.add("tareaConpletada");
      guardarTareas();
    };

    elementoTarea.appendChild(spanTarea);
    elementoTarea.appendChild(spanFecha);
    elementoTarea.appendChild(spanTiempo);
    elementoTarea.appendChild(botonEditar);
    elementoTarea.appendChild(botonEliminar);
    listaTareas.appendChild(elementoTarea);
  });
}

// Evento para agregar tarea al hacer clic en el botón
botonAgregar.addEventListener("click", agregarTarea);

// Evento para agregar tarea al presionar Enter
entradaTarea.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    agregarTarea();
  }
});

// Cargar tareas al iniciar la página
cargarTareas();
