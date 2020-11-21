const imprimirResultado = function(nota){
    if(nota >=7 && nota <= 10){
        console.log("Aprovado!")
    }else {
        console.log("Reprovado!")
    }
}

imprimirResultado(9)
imprimirResultado(5)
imprimirResultado('Epa!')// false retorna reprovado


