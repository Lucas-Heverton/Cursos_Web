// Um objetio em js é um conjunto de atributos e valores.

const prod1 = {}
prod1.nome = 'Arroz'
prod1.preco = 9.98
prod1.qntEstoque = '6'

console.log(prod1)

const prod2 = {
    nome: 'Macarrão',
    price: 2.89,
    qntdestoque: 92,
    prod3: {
        nome: 'Espaguete',
        price: 5.99,
        qntdestoque: 342,
        prod3_1: {
            nome: 'macarrone',
            price: 9.67,
            qntdestoque: 432
        }
    }
}

console.log(prod2)