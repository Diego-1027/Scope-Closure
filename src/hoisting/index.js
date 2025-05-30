console.log(nameDog)
var nameDog = "perrito"

//cuando tenemos este codigo lo que pasa es que primero declara la variable y abajo es asignada es como tener esto

var lastNameDog
console.log(lastNameDog)
var lastNameDog = "perrito 2"


//para funciones

elPerrito()

function elPerrito() {
    console.log(`el mejor perrito ${perro}`)
}

var perro = "lucas"

// aqui al ejecutar el hoinsting me va a poner arriba todo la funcion y la declaracion de la variable
//pero como la asignacion de la variabale esta despues de la funcion en el console.log
//se va a ejecutar pero no va a salir lucas sino undefined en la variable
