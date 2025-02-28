# Contar ocurrencias de un caracter
parrafo = "El día en que lo iban a matar, Santiago Nasar se levantó a las 5.30 de la mañana para esperar el buque en que llegaba el obispo. Había soñado que atravesaba un bosque de higuerones donde caía una llovizna tierna, y por un instante fue feliz en el sueño, pero al despertar se sintió por completo salpicado de cagada de pájaros"

contar = parrafo.count("a")
print("EL caracter 'a' aparece", contar, "Veces")

# Dividir una cadena en una lista

cadena = "Esta es una cadena"
lista = cadena.split(" ")

print(lista)

# Unir una cadena en una lista

unido = " ".join(lista)

print(unido)

# Verificar que una cadena comienze con un prefijo 

palabra = "Buenos dias"

tienePrefijo = palabra.startswith("Buenos")

print("EL text ocomienza con la palabra 'Buenos'", tienePrefijo)

# 