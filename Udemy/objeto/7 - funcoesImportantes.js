const pessoa = {
    nome: 'Gabrielli',
    idade: 22,
    peso: 70
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))


//  forEach
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019' 
});

pessoa.dataNascimento = '01/01/2020'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ECMAScrpit 2015)

const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const objt = Object.assign(dest, o1, o2)

Object.freeze(objt)
objt.c = 1234
console.log(objt)