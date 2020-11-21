//Funcão sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 3, 4, 325, 453, 4, 4, 5, )
imprimirSoma()

//Função que retorna valor

function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 5))
console.log(soma(2))