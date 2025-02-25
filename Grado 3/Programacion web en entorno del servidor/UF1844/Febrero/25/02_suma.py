# Description: Ejercicios de suma
# Ejercicio 2. Definir la función
# sumaMonedas : (int, int, int, int, int) -> int
# tal que sumaMonedas(a, b, c, d, e) es la suma de los euros
# correspondientes a a monedas de 1 euro, b de 2 euros, c de 5 euros, d
# 10 euros y e de 20 euros. Por ejemplo,
# sumaMonedas(0, 0, 0, 0, 1) == 20
# sumaMonedas(0, 0, 8, 0, 3) == 100
# sumaMonedas(1, 1, 1, 1, 1) == 38

def validarInput(message):
    while True:
        try:
            value = int(input(message))
            return value
        except ValueError:
            print("Ingresa un valor valido")
            
monedaA = validarInput("Ingresa la cantidad de la primera moneda (1): ")       
monedaB = validarInput("Ingresa la cantidad de la segunda moneda (2): ")       
monedaC = validarInput("Ingresa la cantidad de la tercera moneda (5): ")       
monedaD = validarInput("Ingresa la cantidad de la cuarta moneda (10): ")       
monedaE = validarInput("Ingresa la cantidad de la quinta moneda (20): ")       
 
def sumaMonedas(a, b, c, d, e):
    return a * 1 +  b * 2 * c * 5 + d * 10 + e * 20
    
    
print(sumaMonedas(monedaA, monedaB, monedaC, monedaD, monedaE))