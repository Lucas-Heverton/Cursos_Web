const contadorA = require('./6 - instaciaUnica.js');
const contadorB = require('./6 - instaciaUnica.js');

const contadorC = require('./7 - instaciaNova')();
const contadorD = require('./7 - instaciaNova')();

contadorA.inc();
contadorA.inc();
console.log(contadorA.valor, contadorB.valor);

//como aqui ele gravou dentro de uma função, não cacheia
contadorC.inc();
contadorC.inc();
console.log(contadorC.valor, contadorD.valor);