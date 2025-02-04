const prompt = require('prompt-sync')({ sigint: true });

//Vamos a convertir notas en niveles usando un if anidados.
// Notas menor de 5 suspenso, 5-6 aprobados, 7-8 notables, 9-10 sobresalientes.
let nota = parseInt(prompt("ingresa El nivel del estudiante: "))
let nivel;

if (nota < 5) {
    nivel = "suspenso";
}
else {
    if (nota < 7) {
        nivel = "aprobado";
    }
    else {
        if (nota < 9) nivel = "notable";
        else nivel = "sobresaliente";
    }
}

console.log(nivel)