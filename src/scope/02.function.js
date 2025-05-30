function saludo() {
    let userName = "diego rodriguez"
    console.log(userName)

    if (userName === "ana") {
        console.log(`hola ${userName}`)
    }else{
        console.log(`quien ere?`)
    }
}

saludo()

//aqui si podemos hacer uso de la variable userName ya que etsa declara dentro de la funcion

console.log(userName) // si yo hago la llamada aqui no funciona porque la variable esta declarada y asignada dentro de la funcion

