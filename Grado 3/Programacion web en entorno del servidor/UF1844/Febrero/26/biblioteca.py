# Gestinar una biblioteca
# Autor: Jose Garcia

# Lista para lamacenar los libros
biblioteca = []

# Funcion para gregar los libros en la biblioteca
def agregarLibro(titulo, autor):
    # diccionario para almacenar los datos del libro
    # En py en los diccionarios, las claves tienen que ser en string
    libro = {"titulo": titulo, "autor": autor, "disponible": True } 
    biblioteca.append(libro)
    print(f"Libro agregado '{titulo}' de '{autor}' en la biblioteca")

# Funcion para prestar los libros
def prestarLibros(titulo):
    for libro in biblioteca:
        if libro["titulo"] == titulo:
           if libro["disponible"]:
               libro["disponible"] = False
               print(f"El libro {titulo} prestado.")
           else:
               print(f"El libro {titulo}, no esta disponible.")
           return
    print(f"Libro {titulo} no esta en la biblioteca")
            
# Funcion para devolver libro
def devolverLibro(titulo):
    for libro in biblioteca:
        if libro["titulo"] == titulo:
            if not libro["disponible"]:
                libro["disponible"] = True
                print(f"El libro {titulo} fue devuelto.") 
            else:
                print(f"Libro {titulo} ya esta disponible")
            return
    print(f"El Libro {titulo} no es de la biblioteca")

# Funcion para mostrar el estado de biblioteca
# Total de libros
# Libros prestados
# Libros disponibles

def estadoBiblioteca():
    if not biblioteca:
        print("No hay libros")
    else:    
        for libro in biblioteca:
            estado = "Disponible" if libro["disponible"] else "Prestado"
            print(f"El libro {libro["titulo"]} esta: {estado}")


# Menu principal
def menu ():
    while True:
        print("\n ------- gestion de Biblioteca ------")
        print("1. Agregar Libro")  
        print("2. Prestar Libro")  
        print("3. Devovolver Libro")
        print("4. Mostrar estado de biblioteca")
        print("5. Salir")
        
        opcion = input("Seleccione una opcion")
        
        if opcion == "1":
            titulo = input("Titulo del libro")
            autor = input("Autor del libro")
            agregarLibro(titulo, autor)
        elif opcion == "2":
            titulo = input("INgrese el titulo a prestar")
            prestarLibros(titulo)
        elif opcion == "3":
            titulo = input("Ingrese el titulo a devolver")
            devolverLibro(titulo)    
        elif opcion == "4":
            estadoBiblioteca()
        elif opcion == "5":
            print("Saliendo del Sitema...")
            break
        else:
            print("La opcion no es valida")   
            
menu()