# Manejo de excepciones
# Esto nos permite controlar los errores sin romper la app (Que se dentenga)

# Vamos a utilizar:
# try, except, else, finally

def dividir(a,b):
    try:
        # Intentar realizar una operacion
        resultado = a / b
    except ZeroDivisionError:
        # Se ejecuta si hay division por cero
        print("Error: No se puede dividir por cero.")
        return None
    except TypeError:
        # Se ejecuta si los tipos de datos son incompatibles
        print("Error: Tipos de datos invalidos")
        return None
    else:
        # Se ejecuta si no hay errores
        print("Division exitosa")
        return resultado
    finally:
        # Se ejecuta siempre al final de una funcion
        print("Porceso finalizado")

print(dividir(10,4))        
print(dividir(0,0))        
print(dividir("g",0))        

# Lista basica por comprension
cuadrados = [x**2 for x in range(5)]
# Equivalente a for x in range(5): cuadrado.append(x**2)
print(cuadrados)

# Lista con condicion
pares = [x for x in range(10) if x % 2 == 0]
print(pares)

# Transformacion condicional
etiquetas = ["Par" if x % 2 == 0 else "Impar" for x in range(5)]
print("etiquetas",etiquetas)

# diccionarios con metodos utiles
persona = {"nombre": "maria", "edad": 30, "ciudad":"vigo"}

# Obtener valor con get(Evita errores si la clave no es exitosa)
print(persona.get("nombre"))
# El segundo valor del get es el devuelto en caso de que la clave no exista
print(persona.get("pais", "N/A"))


# Actualizar el diccionario
# Si la cable existe, la actualiza y si no la agrega
persona.update({ "edad": 45, "pais": "España" })

# conjunto (valores unicos)
# El set eliminta todo elemento que se repita
objetos = { "mesa", "silla", "sofa", "cama", "silla", "lampara", "mesa" }
print(objetos)

# Conjuntos
otrosObjectos = {"mesa", "alfombra", "lampara", "sabana", "silla", "colcha"}

# union nos une los set
print(objetos.union(otrosObjectos))

# intersection nos indican cuales elementos estan tanto en un set como en el otro
print(objetos.intersection(otrosObjectos))

# Programacion orientada a objectos

class Perro:
    # constructor: inicializa objectos
    def __init__(self, nombre, edad, raza):
        self.nombre = nombre
        self.edad = edad
        self.raza = raza 
    
    #Metodos de la clase
    def ladrar(self):
        return f"{self.nombre} dice: ¡Guau!"
    
    #Metodo con parametros 
    def cumplirAños(self):
        self.edad += 1
    def tipoRaza(self):
        self.raza = "caniche"
        return f"{self.nombre} de raza {self.raza} ahora tiene {self.edad} años"
        
# Instanciar perros

perro1 = Perro("Roco", 1, "Pastor Aleman")

print(perro1.tipoRaza())
perro1.cumplirAños()
print(perro1.ladrar())
print(perro1.tipoRaza())
    