# Crea un programa que tome un nombre y un apellido, nos una con concatenacion
# y muestre el nombre completo

# Creo las variables
name = "Juan"
lastName = "Perez"

fullName = name + " " + lastName


print(fullName)

# Longitud de una cadena: Escribe un programa que calcule y muestre la logitud de una cadena de texto
# ingresada por el usuario

text = "Buenosss dias"
longitud = len(text)

print("La longitud de la cadaena del texto es: ", longitud)

# Convertir en mayusculas: crear un programa que muestre ele textro en mayuscula
# y se muestre

text = "Este lunes es carnaval"
upperText = text.upper()
lowerText = text.lower()

print(upperText)
print(lowerText)


# Reemplazar textoç
text = "Es Findeeeeeeee"

newText = text.replace("Es","buen")

print(newText)
print(text)
