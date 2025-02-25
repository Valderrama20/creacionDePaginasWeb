# Descripción: Ejercicios de media aritmética
# Ejercicio 1. Definir la función
# media3 : (float, float, float) -> float
# tal que (media3 x y z) es la media aritmética de los números x, y y
# z. Por ejemplo,
# media3(1, 3, 8) == 4.0
# media3(-1, 0, 7) == 2.0
# media3(-3, 0, 3) == 0.0

def media3(num1, num2, num3):
    return (num1 + num2 + num3) / 3

# Try nos sirve para capturar errores
# En este caso si el input recibido no es numero
# Tirara un error y este sera controlado por el except

def validarInput(mensaje):
    while True:
        try:
            value = float(input(mensaje))
            return value
        except ValueError:
            print("ingresa un valor valido")
            
num1 = validarInput("ingresa el primer numero: ")        
num2 = validarInput("ingresa el segundo numero: ")        
num3 = validarInput("ingresa el tercer numero: 20")        
        
    
print(media3(num1,num2,num3))