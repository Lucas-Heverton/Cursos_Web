const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

const chineses = f => f.pais === 'China'; // filter
const mulheres = f => f.genero === 'F'; // filter
const menorSalario = (func, funcAtual) => { // reduce
    return func.salario < funcAtual.salario ? func : funcAtual; // ? -> retorno, : -> caso contrário retorna 
}


axios.get(url).then(response => {
    const funcionarios = response.data;
    console.log(funcionarios);

    //Mulher chinesa com menor salario
    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)

    console.log(func)
})