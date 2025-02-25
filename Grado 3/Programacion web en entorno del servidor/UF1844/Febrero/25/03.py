# Ejercicio 3. Definir la función
# volumenEsfera : (float) -> float
# tal que volumenEsfera(r) es el volumen de la esfera de radio r. Por
# ejemplo,
# volumenEsfera(10) == 4188.790204786391

def volumenEsfera(r): 
    return (4/3) * 3.1416 * (r**3)

def validarInput(mensaje):
    while True:
        try:
            value = float(input(mensaje))
            return value
        except ValueError:
            print("Ingresa un valor valido")
    
radio = validarInput("Ingresa el radio, ejemplo(2.0): ")

print(volumenEsfera(radio))