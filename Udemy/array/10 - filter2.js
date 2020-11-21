Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Mac', preco: 9000, fragil: true },
    { nome: 'Iphone', preco: 7890, fragil: true },
    { nome: 'Capa de Celular', preco: 100, fragil: false },
    { nome: 'Copo de Vidro', preco: 14.99, fragil: true },
    { nome: 'RedMi 9', preco: 2000, fragil: false },
    { nome: 'Notebook Avell', preco: 5999, fragil: false },
    { nome: 'Apple Watch', preco: 3299, fragil: true }
]

const caro = produto => produto.preco < 50;
const fragil = produto => produto.fragil;

console.log(produtos.filter2(caro).filter2(fragil))