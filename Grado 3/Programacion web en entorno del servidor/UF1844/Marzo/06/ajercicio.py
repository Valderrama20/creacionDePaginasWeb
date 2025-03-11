import flet as ft

def main(page: ft.Page):
    page.title = "Ejercicio 4 Reproductor de Música"
    
    musicList = [
    {
        "name": "Song 1",
        "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        "img": "https://imgs.search.brave.com/TZRGM0rH3J-PybT5CYVM3u04v5oqUK32cP3TBfaZm6c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90YWJs/YW9jb3Jkb2Jlcy5l/cy93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OC8wMi9mbGFtZW5j/by1iYXJjZWxvbmEt/Z3VpdGFycmEtZmxh/bWVuY2EuanBn"
    },
    {
        "name": "Song 2",
        "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        "img": "https://imgs.search.brave.com/wHLX-W5nyBIB1is1i4bxvqltp_Ecl_gQwWq4etaNPsY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU3/Mzk1Mzc3L2VzL2Zv/dG8vYW50aWd1by1y/ZXRyby01MHMtbSVD/MyVCQXNpY2EtZGUt/cm9jb2xhLW5vc3Rh/bGdpYS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9WktjaTZZ/V3AzLVBrSFpad1FQ/QXJTQ1BhaDRoVjBL/ajI4UGd4RVFCd3M3/dz0"
    },
    {
        "name": "Song 3",
        "url": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        "img": "https://imgs.search.brave.com/nCwqS7_8vs7P2YDjMli_z37HdE0tfmElBviZd679QVQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODU1/MTM4NTgwL2VzL2Zv/dG8vY2hpY28tam92/ZW4tZml0bmVzcy1y/ZXRyby1lc2N1Y2hh/bmRvLW0lQzMlQkFz/aWNhLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1xSlJ4cVZN/enFRbHZaVktjNlpy/bUM5bDJPQzhKdG1x/Yy04aWFuWE1LemMw/PQ"
    }
    ];

    current_index = 0
    
    audio = ft.Audio(src=musicList[current_index]["url"], autoplay=False,)
    page.overlay.append(audio)
    
    image = ft.Image(src=musicList[current_index]["img"], width=200, height=200)
    
    name = ft.Text(musicList[current_index]["name"])
    
    columna = ft.Column([image, name])
   
    def play_music():
        audio.play()
        page.update()
    
    def pause_music():
        audio.pause()
        page.update()
        
    def next_img():
        nonlocal current_index 
        image.src = musicList[current_index]["img"]
        
    def next_name():
        nonlocal current_index 
        name.value = musicList[current_index]["name"]
        
    def next_music():
        nonlocal current_index
        pause_music()
        current_index = (current_index + 1) % len(musicList) 
        audio.src = musicList[current_index]["url"]
        audio.autoplay = True
        next_img()
        next_name()
        play_music()
        
        
    
    btn_play = ft.ElevatedButton("Reproducir", on_click= lambda _:play_music())
    btn_pause = ft.ElevatedButton("Pausar", on_click= lambda _:pause_music())
    btn_next = ft.ElevatedButton("Siguiente", on_click= lambda _:next_music())
   
    page.add(btn_play, btn_pause, btn_next, columna)
    
ft.app(target=main)