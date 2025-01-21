// Funcion para cargar el contenido del html dentro del contenedor

function loadHTML(elementId, filePath) {
  // fetch: se utiliza para obtener el contenido de archivos distintos, header y footer
  fetch(filePath)
    // then: Procesa la respuesta y convierte en texto html que luego se inserta en los contenedores correspondientes
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Error al cargar el archivo ${filePath}: ${response.statusText}`
        );
      }
      return response.text();
    })
    .then((html) => {
      document.getElementById(elementId).innerHTML = html;
    })
    .catch((error) => {
      console.error(error);
    });
}

loadHTML("header", "header.html");
loadHTML("footer", "footer.html");
