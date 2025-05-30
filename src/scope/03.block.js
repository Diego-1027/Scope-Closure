function fruits() {
   if (true) {
    var variable1 = "manzana" // function scope
    let variable2 = "pera" // block scope
    const Constante3 ="naranja" //block scopes
    console.log("este es el bloque verdadero")
   } 

   console.log(variable1)
  // console.log(variable2)
   console.log(Constante3)
}


fruits()
