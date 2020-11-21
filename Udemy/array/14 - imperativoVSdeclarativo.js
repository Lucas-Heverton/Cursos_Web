const alunos = [
    { nome: 'Marcos', nota: 9.4 },
    { nome: 'Maria', nota: 8.2 },
    { nome: 'Henrique', nota: 3.9 },
    { nome: 'Ana', nota: 7.2 }
]

//Imperativo
let total1 = 0;
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota;
    total2 = total1 / alunos.length;
}

console.log(total2.toFixed(2));

//Declarativo
const getNota = aluno => aluno.nota;
const soma = (total, atual) => total + atual;

const total = alunos.map(getNota).reduce(soma);
console.log(total / alunos.length);