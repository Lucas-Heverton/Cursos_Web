// novo recurso do ES2015

const pessoa = {
    nome: 'Lucas',
    idade: 17,
    endereco: {
        logradouro: 'Rua k',
        numero: 342
    }
}

const {nome, idade } = pessoa // tire nome e idade dentro do objeto pessoa
console.log(nome,idade)

const { nome: n, idade: i } = pessoa
console.log(n,i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco:{logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)