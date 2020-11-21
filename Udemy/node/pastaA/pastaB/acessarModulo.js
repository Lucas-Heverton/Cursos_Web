const moduloA = require('../../1 - moduloA.js');
console.log(moduloA);

const http = require('http');
http.createServer((req, res) => {
    res.write('Morning!');
    res.end()
}).listen(8080)