#24022025_Garcia
# Declarar varibles

'''
Crear un programa que almacene informacion sobre un producto
nombre, precio, catidad en stock
y muestre un mensaje si el producto esta disponible
si la cantidad en stock es mayor que 0
'''

nombreProducto = " lapto"
precio = 1200.60
cantidadStock = 5

if(cantidadStock > 0):
    print(f"El producto", nombreProducto, "Esta disponible")
else:
    print(f"El producto", nombreProducto, "no esta disponible")

# Fin del programa

# Condicionales (if, else, elif)

'''
Tomar decisiones segun las condiciones

crear un programa que simule un sistema de acceso.
Pide al usuario que ingrese su nombre y contraseña
- Si el nombres es admi ny la contraseña es 1234
    Permite el acceso
- Caso contrario
    Muestra un mensaje de error
'''

usuario = input("Ingrese su nombre de usuario: ")
contraseña = input("Ingrese su Contraseña: ")

if(usuario == "admin" and contraseña == "1234"):
    print("Acceso concedido")
else:
    print("Acceso Denegado")

