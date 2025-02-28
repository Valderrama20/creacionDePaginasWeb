#26022025_garcia
# Autor: Jose Garcia

# Crear una lista
frutas = ["manzana", "pera", "uva", "sandia", "melon"]
print(frutas)

# Acceder a un elemento de la lista
print(frutas[1])

# Acceder al ultimo
print(frutas[-1])

# Metodos de los elementos
print(frutas[1].title())

# usar valores individuales
mensaje = "mi fruta favarita es " + frutas[1].title() + "."
print(mensaje)


# Modificar elementos de la lista
frutas[0] = "fresa"
print(frutas)

# Agregar elementos el final de la lista
frutas.append("Naranja")
print(frutas)

coches = []
coches.append("audi")
coches.append("bmw")
coches.append("subaru")
coches.append("toyota")
coches.append("nissan")
print(coches)

# Insertar elemento en un index expecifico moviendo en que este ahi
frutas.insert(0, "platano")
print(frutas)

coches.insert(2, "ford")
print(coches)

# eliminar el ultimo elementos de la lista
eliminarFruta = frutas.pop()
print(frutas)

# ELimninar un elemento de una posicion especifica
primeraFruta = frutas.pop(0)
print(frutas)

# ELiminar un elemento especifico
frutas.remove("uva")
print(frutas)

# Ordenar una lista
frutas.sort()
print(frutas)

# Ordenar en orden inverso
frutas.sort(reverse=True)
print(frutas)

# Ordenar una lista termporalmente
# Este metodo no muta el arr original a diferencia de sort
print("lista ordenada")
print(sorted(frutas))

# Catidad de elementos en una lista
# No se pueden concatenar numeros con string 
# Por eso si queremos concatener un numero tenemos que pasarlo a string
print("La lista frutas tiene: " + str(len(frutas)) + " Elementos")
