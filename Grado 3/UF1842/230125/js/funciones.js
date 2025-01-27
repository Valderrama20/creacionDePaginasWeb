

// Los parametos son los valos que se le pasan a la funcion 


function contador() {
   let contador = 0
   return () => ++contador
}

let incrementar = contador()

console.log(incrementar())
console.log(incrementar())
console.log(incrementar())
console.log(incrementar())

