const escola = [{

    nome:'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        notas: 9.1
    },{
        nome: 'Ana',
        notas: 8.2
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        notas: 9.9
    }, {
        nome: 'Roberto',
        notas: 7.3
    }]
}]

const getNotaDoAluno = alunos => alunos.notas;
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno);

const notas1 = escola.map(getNotasDaTurma);

console.log(notas1);
console.log([].concat([ 9.1, 8.2 ], [ 9.9, 7.3 ]));

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma);
console.log(notas2);