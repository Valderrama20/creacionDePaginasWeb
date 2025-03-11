import flet as ft

def main(page: ft.Page):
    page.title = "Mi primera pagina"
    page.add(ft.Text("Buenos dias"))
    
ft.app(target=main)