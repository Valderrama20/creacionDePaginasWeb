// Escribir una función llamada passValido que reciba un string y retorne true si el string es igual a 
// "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar false.

function passValido(string){
    if(string === "2Fj(jjbFsuj" || string === "eoZiugBf&g9" ) return true
    else return false
}

console.log(passValido("2Fj(jjbFsuj")) // true
console.log(passValido("eoZiugBf&g9")) // true
console.log(passValido("hola")) // false
console.log(passValido("")) // false

