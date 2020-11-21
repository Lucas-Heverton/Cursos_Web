// let e const

{
    var a = 2
    let b = 5
        console.log(b)
}

console.log(a)
//console.log(b) //o let só funciona em um escopo de bloco


//Template Sring, quebra de linha vai junto apenas com o backtick = ``
const carro = 'Ferrari';
console.log(`A ${carro} é muito linda ! ;)`)


//Destructuring 
const [l, e, ...tras] = 'COD3R';
console.log(l, e, tras);

const [x, , y] = [1, 2, 3];
console.log(x, y);

const {idade: i, nome} = {nome: 'Ana', idade: 9}
console.log(i, nome)
