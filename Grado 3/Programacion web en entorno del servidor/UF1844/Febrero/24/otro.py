x=10

print(x)

y=20

print("los valores de las variables seran: ",x,y)

# Para declarar una varible, simplemente indicamos su nombre
casa = 20
hogar = "esto es una casa"
decimal = 10.5 #float

# Clases
class Empleado:
    def sueldo(self):
        print("Caculando sueldo")

# def imprimir_nuvamente():
#     e.sueldo()

class Generente():
    def sueldo(self):
        print("sueldo mayor")    

class Coordinador():
    def sueldo(self):
        print("Este gana menos")   

def mostrarSueldo(persona):
    persona.sueldo()

gerente=Generente()
coordinador=Coordinador()
empleado=Empleado()

mostrarSueldo(gerente)
mostrarSueldo(coordinador)
mostrarSueldo(empleado)




