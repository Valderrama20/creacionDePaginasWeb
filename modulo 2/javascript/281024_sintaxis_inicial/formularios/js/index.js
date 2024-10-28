document.getElementById("registroForm").addEventListener("submit", (event) => {
  let nombre = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  console.log(nombre, email, password);
  // validar que el nombre tengas como minimo tres caracteres
  if (nombre.length < 3) {
    alert("El nombre debe tener tres caracteres");
    event.preventDefault();

    // evitar que se envie el formulario
    return;
  }

  //   validar el email
  if (!email.includes("@") || !email.includes(".")) {
    alert("El Email tienes que tener un @ y .");
    event.preventDefault();

    // evitar que se envie el formulario
    return;
  }

  //   validar la password
  if (password.length < 6) {
    alert("La contraseña debe tener como minimo 6 caracteres");
    event.preventDefault();

    // evitar que se envie el formulario
    return;
  }
});
