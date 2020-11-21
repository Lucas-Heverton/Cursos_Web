function numeroInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while ( opcao != 5){
    opcao = numeroInteiroAleatorioEntre(-1,10)
    console.log(`Número gerado:  ${opcao}.`)
}

console.log("See you later")   