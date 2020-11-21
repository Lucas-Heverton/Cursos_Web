// um objeto é um coleção dinamica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira';
produto['Marca do produto'] = 'Nike';
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['Marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 35,
        endereco: {
            logradouro: 'Rua green',
            numero: 998
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 20
    }, {
        nome: 'Ana',
        idade: 22
    }],
    calcularValordoSeguro: function(){
        //...
    }

}

carro.proprietario.endereco.numero = 2000
carro['proprietario']['endereco']['logradouro'] = 'Av. red'
console.log(carro)

//delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValordoSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length) // 2 condutores