const fs = require('fs');

const caminho = __dirname + '/14 - arquivo.json'

//lendo arquivo de forma sincrono ...

const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo )

//lendo arquivo de forma assincrono ...

fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo);
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./14 - arquivo.json');
console.log(config.db);

//leitura de uma pasta

fs.readdir(__dirname,(err, arquivos) => {
    console.log('Conteúdo da pasta...');
    console.log(arquivos);
})