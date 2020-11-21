const nome = 'Maria'
const concatacao = 'Olá ' + nome + ' !'

console.log(concatacao)

const template = `
    Olá
    ${nome}!
    `
console.log(template)

const nota1 = 5.0
const nota2 = 6.8
const nota3 = 4.2
const nota4 = 7.5
const total = (nota1 + nota2 + nota3 + nota4)

if (total >= 20) {
    console.log(total, "Você foi aprovado(a)")
} else {
    console.log(total, "Você foi reprovado(a)")
}

console.log(` 5 + 5 = ${5 + 5}`)

const up = texto => texto.toUpperCase() // transforma o texto para maiusculo
console.log(`Ei... ${up(`cuidado`)}!`)


const lw = dimin => dimin.toLowerCase() // transforma o texto para minusculo
console.log(`Ei... ${lw(`CUIDADO`)}!`)