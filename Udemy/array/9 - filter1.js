const produtos = [
    { nome: 'Mac', preco: 9000, fragil: true },
    { nome: 'Iphone', preco: 7890, fragil: true },
    { nome: 'Capa de Celular', preco: 100, fragil: false },
    { nome: 'Copo de Vidro', preco: 14.99, fragil: true },
    { nome: 'RedMi 9', preco: 2000, fragil: false },
    { nome: 'Notebook Avell', preco: 5999, fragil: false },
    { nome: 'Apple Watch', preco: 3299, fragil: true }
]

console.log(produtos.filter(function(p) {
    /* return false */ // retorna uma lista vazia de produtos
    /* return true */ // retorna uma lista com todos os produtos
    /* return  p.fragil === true && p.preco >= 500; */ 
}))


const caro = produto => produto.preco >= 8000;
const fragil = produto => produto.fragil;

console.log(produtos.filter(caro).filter(fragil))