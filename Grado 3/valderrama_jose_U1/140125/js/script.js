
// Agregar funcionalidad para agregar las tareas

document.addEventListener("DOMContentLoaded", () => {

    const taskList = document.getElementById("todoList");
    const newTask = document.getElementById("nuevaTareaEntrada");
    const addTask = document.getElementById("botonNuevaTarea");

    // Agregar nueva tarea
   
    addTask.addEventListener("click" ,() => {
    const value = newTask.value.trim()
    // Si nuestro input esta vacio no creamos una tarea
    if(value === "" ) return

    // Creamos nuevo elemento para la tarea 
    const newTaskLi = document.createElement("li")

    // Se agrega el valor al nuevo li
    newTaskLi.innerHTML = `${value} <button class="deleteBtn" data-action="eliminar">eliminar</button>`;
    // añadimos las clases
    newTaskLi.classList.add("todo");
    // añadimos el id
    newTaskLi.dataset.id = Date.now()
    // intruducimos la nueva tarea a la lista
    taskList.appendChild(newTaskLi)
    // limpiamos el input
    newTask.value = ""
    })
    
    // elimninar tareas 
     
    taskList.addEventListener("click", (e) => {
      if(e.target.dataset.action === "eliminar"){
        // si la accion del boton es elimninar
        // buscamos dentro del target el elemento que 
        // contanga la clase .todo y le aplicamos
        // el remove para eliminarlo 
        const tarea = e.target.closest(".todo");
        tarea.remove(tarea);
      }
    })
     
})