function getPreco (imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco *(1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 6000,
    desc: 0.20,
    getPreco
}

global.preco = 100
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 50000, desc: 0.10}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.09, '$'))
console.log(getPreco.apply(global,[0.08, '$']))