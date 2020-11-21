function tratarErro(erro){
    throw "Por favor insira uma nota válida !"
}

Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const printResult = function (nota) {
    try {
        if (nota.entre(9.0, 10)) {
            console.log("Quadro de Honra!")
        } else if (nota.entre(7.0, 8.9)) {
            console.log("Aprovado")
        } else if (nota.entre(4.0, 6.9)){
            console.log("Recuperação")
        } else if (nota.entre(0, 3.9)){
            console.log("Reprovado")
        } else{
            console.log("Insira um nota válida !")
        }
    } catch (e) {
        tratarErro(e)
    }
}

console.log(typeof printResult)

printResult(9)
printResult(7)
printResult(5)
printResult(2.5)
printResult(-2)
printResult('')

