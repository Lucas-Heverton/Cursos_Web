const alunos = [
    { nome: 'maria', nota: 7.3, bolsista: false },
    { nome: 'João', nota: 9.2, bolsista: true },
    { nome: 'Ana', nota: 8.3, bolsista: false },
    { nome: 'Pedro', nota: 7.2, bolsista: true }
]

//Desafio 1: Todos os alunos são bolsista?
const todosBolsistas = (result, bolsista) => result && bolsista;
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas));

//Desafio 2; Algum aluno é bolsista?

const algumBolsista = (result, bolsista) => result || bolsista;
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista)); 