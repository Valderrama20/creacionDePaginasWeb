

# En python para comentar una sola linea utilizamos la #

'''
si queremos un comentario de varias lineas
utilizamos ''''''
'''
# Muy importante mantener congruencia en el uso de comillas
# Si utilizamos comillas simples, se deben utilizar en toda la pagina

# Para mostrar algo en consola utilizamos "print"
print("Hola mundo")

'''
Reglas de python:
- No se utilizan llaves
- No se utilizan ";"
- la identacion es obligatoria
- los comentarios se hacen con # o ''''''
'''


# Definir una varible con un String
x = "El valor de la x es un string"

# Multiples asignaciones
a,b,c = 4,3,2

#realizar operaciones
d = (a+b)*c

# definir varibales boleanas
imprimir = True

# Si, imprimir, print()
if imprimir:
    print("Se puede imprimir")

# Creando variables
p=d=t=10

# Nombres de variables en python
_variable = 10
vari_able = 20
variable10 = 30
variable = 20
variaBle = 20

# Tenemos que tener cuidado en el codigo ya que si existe un
# error el programa no funciona

# NO son validas
# 2variable = 10
# var-iable = 20
# var iable = 20

# Palabras reservadas

import keyword
print(keyword.kwlist)

'''
['False', 'None', 'True', 'and', 'as', 'assert', 'async', 
'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 
'else', 'except', 'finally', 'for', 'from', 'global', 'if',
'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass',
'raise', 'return', 'try', 'while', 'with', 'yield']
'''

# Definimos una funcion utilizando la palabra "def"
x=20
def funcion():
    x = 5

funcion()
print(x)