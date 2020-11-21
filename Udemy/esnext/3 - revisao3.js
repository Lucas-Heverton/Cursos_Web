// ES8: Obejct.values transforma objeto em array apenas com os valores
// Object.keys transforma objeto em array apenas com as chaves
// Object.entries transforma objeto em array com chave e valor

const produto = { Macarrao: 5.99, Feijao: 6.99, Arroz: 8.87}
console.log(Object.values(produto));
console.log(Object.keys(produto));
console.log(Object.entries(produto));

// Melhorias na Notação Literal

const nome = 'Leticia';
const pessoa = {
    nome,
    ola() {
        return 'Oi Galera ;)'
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class
// para transformar uma class em objeto devemos usar o new

class Animal {}
class Cachorro extends Animal {
    latir() {
        return 'Au, Au !'
    }
}

console.log(new Cachorro().latir())