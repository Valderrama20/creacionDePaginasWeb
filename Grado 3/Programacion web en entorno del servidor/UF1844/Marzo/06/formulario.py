import flet as ft

def main(page: ft.Page):
    # Titulo de la pagina
    page.title = "Fomulario Basico"
    
    # Establecemos un ancho para la pagina
    page.window.width = 500
    # Cambiamos el alto de la pagina
    page.window.height = 500
    
    # cambiar tamaño de letra

    def cambiarColor():
        page.bgcolor = ft.Colors.random()
        page.update()
        
    # EN flet cuando utilizamos una funcion en un evento, este le pasa un argumento a la funcion
    # Lo cual puede causar problemas se la funcion no espera ningun argumento
    # Para evitar esto le pasamos lambda antes de la funcion para no tener que declarar un pramatro en la funcion
    botonCambiarColor = ft.ElevatedButton("Cambiar color", on_click= lambda _: cambiarColor() )
    
    # Creamos inputs para el formulario
    nombre = ft.TextField(label="Nombre")
    email = ft.TextField(label="Correo Electronico", keyboard_type=ft.KeyboardType.EMAIL)
    mensaje = ft.Text("Mensaje", color="green")
    
    # funcion para manejar el fomulario
    def enviarFormulario(e):
        if nombre.value and email.value:
            mensaje.value = f"Datos enviados:\n Nombre: {nombre.value}\n Email: {email.value}"
            mensaje.color = "green"
        else:
            mensaje.value = "Por Favor completa los campos"
            mensaje.color = "red"
            
        # Con page.update() en pocas palabras actualiza el DOM, mostrando los cambios aplicados
        page.update()
            
    botonEnviar = ft.ElevatedButton("Enviar", on_click=enviarFormulario)  
    
    # Utilizamos page.add() para agregar todos los elementos a la pagina
    # Es muy parecido a utilizar append o appendChild con js y html
    page.add(nombre, email, botonEnviar, mensaje, botonCambiarColor) 
ft.app(target=main)