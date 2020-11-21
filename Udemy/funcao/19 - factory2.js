function criarProduto (nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('iPhone Xs', 7999.99))
console.log(criarProduto('Relógio', 399.99))
console.log(criarProduto('Fone JBL', 19.99))
