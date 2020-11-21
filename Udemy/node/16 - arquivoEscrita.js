const fs = require('fs');

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}


// aqui gera um arquivo dentro do sistema com o objeto acima.
fs.writeFile(__dirname + '/17 - arquivoGerado.js', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo Salvo !');
})