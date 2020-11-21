function numeroInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 3

do{
    opcao = numeroInteiroAleatorioEntre(-1,10)
    console.log(`Número gerado:  ${opcao}.`)
}while ( opcao != 3)

console.log("See you later")   