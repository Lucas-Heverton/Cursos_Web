const alunos = [
    { nome: 'maria', nota: 7.3, bolsista: false },
    { nome: 'João', nota: 9.2, bolsista: true },
    { nome: 'Ana', nota: 8.3, bolsista: false },
    { nome: 'Pedro', nota: 7.2, bolsista: true }
]
console.log(alunos.map(a =>a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 10 /* começar com o valor */)

console.log(resultado)