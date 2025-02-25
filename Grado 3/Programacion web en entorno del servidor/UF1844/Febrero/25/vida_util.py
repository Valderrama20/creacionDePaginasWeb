# Definir la funcion pricipal del programa
def vida_util_software():
    # Mensaje al usuario de bienvenida
    print("Benvenido al sistema de vida util del software")
    
    # Explicamos al usuario el proposito del programa
    print("Este programa te ayudara a estimar la visa util de un software")
    
    # Preguntamos al usuario para ealuar los factores que influyen en la vida util del software
    # Y convierte la respuesta a minusculas
    
    def validarInput(pregunta):
        while True:
            respuesta = input(pregunta).lower()
            if respuesta in ["si","no"]:
                return respuesta
            else:
                print("Ingrese un valor valido (si/no)")
    
    # Soporte tecnico
    soporte_tecnico = validarInput("¿EL sotware sigue recibiendo soporte tecnico? (si/no): ")
    
    # Actualizaciones  
    actualizaciones = validarInput("¿El software sigue recibiendo actualizaciones? (si/no): ")
    
    #Compativilidad
    conpativilidad = validarInput("¿El software es compatible con los sitemas operativos actuales? (si/no): ")
    
    # demanda
    demanda = validarInput("¿EL software sigue siendo demandado por los usuarios? (si/no): ")
    
    # Evaluar las respuestas del usuario
    # inicamos la variables que almacena el puntaje de vida util
    vida_util = 0
    
    # Si el sofware recibe soporte tecnico, se suma 2 al puntaje; de lo contrario se resta 1
    if soporte_tecnico == "si":
        vida_util += 2
    else:
        vida_util -= 1     
       
    # Si el sofware recibe actualizaciones, se suma 2 al puntaje; de lo contrario se resta 1
    if actualizaciones == "si":
        vida_util += 2
    else:
        vida_util -= 1       
     
    # Si el sofware es conpativilidad, se suma 2 al puntaje; de lo contrario se resta 1
    if conpativilidad == "si":
        vida_util += 2
    else:
        vida_util -= 1    
        
    # Si el sofware sigue siendo demandado por los usuarios, se suma 2 al puntaje; de lo contrario se resta 1
    if demanda == "si":
        vida_util += 2
    else:
        vida_util -= 1     
          
    # Resultado de la vida util
    # Si el puntaje es 5 o mayor, EL sofware tiene una vida util larga
    
    if vida_util >= 5:
        print("EL siftware tiene una vida util larga")
    #si el puntaje es 3 0 4. el software tiene una vida util moderada
    elif vida_util >= 3:
        print("El software tiene una vida util moderada")
    # Si el puntaje es mejor a 3, 
    else:
        print("El software tiene una vida util corta")
        
if __name__ == "__main__":
    vida_util_software()
          
        
