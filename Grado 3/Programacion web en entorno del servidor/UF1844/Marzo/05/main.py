# Funciones avanzadas
# Codigo reutilizable. (Argumentos por defecto, argumentos varibles u funciones lambda)

# Funcion con argumento por defecto
def saludar(nombre, saludo = "Hola"):
    # Si la persona no proporciona saludo, usa "Hola por defecto"
    print(f"{saludo}, {nombre}!")

saludar("Luisa")
saludar("juan", "adios")

#argumentos variables
def sumaTodo(*numeros):
    # El *numeros nos permite recibir cualquier catidad de numeros como tupla
    # la funcion sum en pocas palabras hace la misma funcion que el reduce y suma todo
    # contenido en el numeros
    return sum(numeros)

print(sumaTodo(1,2,3,4,6,7))

def infoPersona(**datos):
    # datos recibe, argumentos clave-valor como diccionario
    for clave, valor in datos.items():
        print(f"{clave}: {valor}")

infoPersona(nombre="jose")

#nota: variable multiple
color = "rojo"
forma = "cuadrado"
cifra = 10 

print(color)
print(forma)
print(cifra)

# NO reconmedable para datos distintos
items = "rojo", "cuadrado", 20

# Esta variable multiple tiene indices como un arr
# colores = "rojo", "verde", "gris"

print(items)

# Funcion lambda (anonimas)
multiplicar = lambda x,y: x*y
print(multiplicar(2,5))