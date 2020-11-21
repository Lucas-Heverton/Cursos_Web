// Armazendando uma função em uma var/let/cont

const imprimirSubstracao = function(a, b) {
    console.log(a - b)
}
imprimirSubstracao(10, 7)


//Armazenando uma funcao arrow em uma var/let/cont
//Diminui a sintaxe

const subtr = (a, b) => {
    return a - b
}
console.log(subtr(20, 10))


//retorno implícito
//Diminui ainda mais a sintaxe

const divisao = (a, b) => a / b
console.log(divisao(300, 2))

//Diminui mais ..

const multiplicacao = z => console.log(z)
multiplicacao('Mercy')