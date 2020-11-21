// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Whatever', preco: 1.99, tag: 'Promoção'
});

console.log('Extensível:', Object.isExtensible(produto))
produto.nome = 'Borracha';
produto.preco = 1.98;
delete produto.tag;
console.log(produto);


/* Object.seal -> 
Objeto selado, não é possível adicionar elementos
nem remove-los, apenas alterar seus valores.
*/
const pessoa = {nome: 'Heverton', idade: 18}
Object.seal(pessoa);
console.log(`Objeto Selado: `, Object.isSealed(pessoa));

pessoa.sobrenome = 'Santos';
delete pessoa.nome;
pessoa.idade = 19;
console.log(pessoa);

// Object.freeze = Selado + valores constantes.