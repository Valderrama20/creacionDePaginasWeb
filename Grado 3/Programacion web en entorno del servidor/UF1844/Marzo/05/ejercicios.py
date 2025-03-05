# Ejercicio 1: Filtrar números primos
# Escribe una función que tome una lista de números y devuelva una nueva lista con solo los números primos.

def esPrimo(numero):
    # Si numero es menor que 2, no es primo
    if numero < 2:
        return False
    # Recorre (itera) desde 2 hasta la raiz cuadrada de n (optimizar)
    for i in range(2, int((numero**0.5)+1)):
        # Si n es divisible por i, no es primo
        if numero % i == 0 :
            return False
    # Si no encuntra a un divisor, es primo
    return True
        
def filtarNumerosPrimos(numeros):
    # Usamos una comprension de lista para filtrar solo los numero primos
    return [numero for numero in numeros if esPrimo(numero) ]


print(filtarNumerosPrimos([2,3,4,5,6,7,8,9,10,11]))

# Ejercicio 2: Contar palabras en un texto
# Escribe una función que tome un texto y devuelva un diccionario con la frecuencia de cada palabra.

def contarPalabras(texto):
    # convertir el texto a minusculas y dividimos las palabras
    textoSeparado = texto.lower().split(" ")
    
    # Creamos un diccionario para almacenar la frecuencia de las palabras
    frecuenciaPalabras = {}
    
    # Recorro sobre cada palabras en la lista
    for palabra in textoSeparado:
        
        # Si la palabra ya existe en el diccionario, incrementamos su valor en 1
        # Si no existe, tendra un valor default que es 0 y lo incrementamos
        valor = frecuenciaPalabras.get(palabra, 0) + 1
        
        # Utilizamos update ya que si no existe lo crea
        frecuenciaPalabras.update({ palabra: valor })
    return frecuenciaPalabras
        
print(contarPalabras("hola mundo mundo hola pepe pepe pepe"))

# Ejercicio 3: Clase para manejar fracciones
# Crea una clase Fraccion que permita sumar, restar, multiplicar y dividir fracciones. Además, debe simplificar automáticamente el resultado.

# Ejercicio 4: Encontrar la sublista con la suma máxima
# Dada una lista de números, encuentra la sublista contigua cuya suma sea la máxima.

# def encontrarSublistaMayor(lista):
     
# Ejercicio 5: Generar un diccionario anidado
# Escribe una función que tome una lista de tuplas y genere un diccionario anidado. Cada tupla contiene una clave y un valor, y las claves pueden estar anidadas usando puntos (.).