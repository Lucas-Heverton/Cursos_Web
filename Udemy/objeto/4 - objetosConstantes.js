// pessoa -> aponta o endereço de memória '123' -> [obejto criado]

const pessoa = {nome: 'Lucas'}
pessoa.nome = 'Heverton'
console.log(pessoa)


// pessoa <- endereço de memória 333 -> {}
// pessoa = {nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Lucas';
pessoa.end = 'Rua Afonso';
delete pessoa.nome
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({nome: 'Santos'})
pessoaConstante.nome = 'Santoos'; 
console.log(pessoaConstante)