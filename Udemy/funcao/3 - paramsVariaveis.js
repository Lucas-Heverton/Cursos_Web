function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1,2))
console.log(soma(1.2, 2.6, 3.2))
console.log(soma("Texto1", 4, "Texto2"))
console.log(soma('a','b','c'))
