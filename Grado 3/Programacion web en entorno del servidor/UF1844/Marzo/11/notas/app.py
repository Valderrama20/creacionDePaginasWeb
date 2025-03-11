# Backend que se comunica con javascript
from flask import Flask, render_template, jsonify, request

# 2.Backend (Python con Flask):
# 	Una ruta /tareas que soporte las siguientes operaciones:
# 	Las tareas deben almacenarse en una lista en memoria (no es necesario usar una base de datos).
# 	Cada tarea debe tener un id único, un texto y un estado completada (booleano).

taskListStorage = [{ "id": 1,"name": "prueba1", "isComplete": False }]

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

# GET: Devuelve todas las tareas.
@app.route("/api/task", methods=["GET"])
def getAllTask():
    return jsonify(taskListStorage)

# POST: Crea una nueva tarea.
@app.route("/api/task", methods=["POST"])
def createTask():
    # Aqui obtenemos el body de la peticion
    data = request.json

    # Creamos la nueva tarea
    newTaskCreated =  {"id": len(taskListStorage) + 1, "name": data["name"], "isComplete": False }
    
    # Guardamos la nueva tarea
    taskListStorage.append(newTaskCreated)
    
    # Le retornamos la nueva tarea
    return jsonify(newTaskCreated), 201

# PUT: Actualiza el estado de una tarea (completada/no completada).
@app.route("/api/task/<int:id>", methods=["PUT"])
def updateTask(id):
    # Buscar tarea y actualizarla
    for task in taskListStorage:
        if task["id"] == id:
            task["isComplete"] = True
            break
    return jsonify()

# DELETE: Elimina una tarea.
@app.route("/api/task/<int:id>", methods=["DELETE"])
def deleteTask(id):
    global taskListStorage
    # Aqui utilizamos la compresion de lista pra filtrar
    taskListStorage = [task for task in taskListStorage if task["id"] != id ] 
    return jsonify()

if __name__ == "__main__":
    app.run(debug=True)
    