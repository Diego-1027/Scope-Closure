//variables

var a; // esto es solo declarar
var b = 7 // Esto es declarar y asignar el valor de la variable
b = 2 // esto es reasignar
var a = 'aa' //Esto es redeclaracion y asignacion

//global scope

 var fruit = "apple"
console.log(fruit)

 function betsFruit() {
    console.log(fruit)
 }

 betsFruit()

 // como vemos aqui podemos llamar a la variable dentro de la funcion o fuera de ella

 function Countris() {
    country = "colombia" //Nota como aqui solo asigne el valor de la variable pero no la declare
    //el mismo JS hace la declaracion global gracias al hoinsting 
    console.log(country)
    
 }

 console.log(country)