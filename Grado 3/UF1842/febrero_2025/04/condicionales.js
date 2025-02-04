const prompt = require('prompt-sync')({sigint: true});

const ageOfUser = parseInt(prompt("Cual es tu edad"))

if (isNaN(ageOfUser)) alert("Ingresaste una edad no valida")
else {
    const message = ageOfUser >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
    alert(message)
}

