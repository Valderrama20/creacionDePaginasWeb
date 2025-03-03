# Variables

nombreVariable = "lapto"
precio = 10
catidadStock = 20

if catidadStock > 0:
    print(f"El producto {nombreVariable} esta disponible")
else:
    print(f"EL producto {nombreVariable} no esta disponible")    
   
    
'''
    Condicionales
    if, elif, else
'''
# usuario = input("ingrese su nombre de usuario: ")
# contrasena = input("INgrese la contraseña: ")

# if(usuario == "admin" and contrasena == "1234"):
#     print("Acceso permitido")
# else:
#     print("No tienes acceso")    
    
# Bucle utilizando for y while

listCompras = []

# while(True):
#     producto = input("Ingrese un producto (O escriba terminar para finalziar el programa)").lower()
#     if producto == "terminar":
#         break
#     listCompras.append(producto)
    
# print("Tu lista de la compra es:")
# for item in listCompras:
#     print(f" - {item}")



# Crear un programa que alamacene informacion de contactos (nombre y valor)
# en un diccionario. permite al usuario buscar un contacto por nombre

agenda = {
  "juan": "1234",
  "pepe": "12344",
  "luis": "123445"
}

# nombre = input("Ingresa el nombre de contacto: ")

# if nombre in agenda:
#     print(f"EL telefono de {nombre} es: {agenda[nombre]}")
# else:
#     print("No se encontro el contacto")
    
# Funciones
 
# def filtrarNombresLargos(nombres):
#     return [nombre for nombre in nombres if len(nombre) > 5]

# nombres = ["Ana", "Pedronilo", "Juansito"]

# resultado = filtrarNombresLargos(nombres)

# print("Nombres largos", resultado)

# 

# Crea un programa que le permita al usuario guardar notas en un archivo de texto
# Cada vez que al usuario ingrese una nota, este se agregara al archivo

# with open("notas.txt", "a") as archivo:
#     while True:
#         nota = input("Escribe una nota (O salir para terminar): ").lower()
#         if nota == "salir":
#             break
#         archivo.write(nota + "\n")
#     print("Notas guardadas correctamente. ")
    
# Crear una clase coche con atributos como marca, modelo, kilometraje.
# Luego crea un metodo para mostrar la informacion del coche
# POO



class Coches:
    def __init__(self, marca, modelo, kilometraje):
# Con self accedemos a la informacion interna del objecto
# En este caso creamos las varibles y le asignamos el valor que nos pasen por parametro
        self.marca = marca
        self.modelo = modelo
        self.kilometraje = kilometraje    
    
    def mostrar_info(self):
        print(f"Coche: {self.marca} {self.modelo}, Kilometraje: {self.kilometraje} km") 


# Objetos
miCoche = Coches("bmw", "s3", 0 )
miCoche.mostrar_info()
