const nums = [1, 2, 3, 4, 5]

//For com proposito.
let resultado = nums.map(function (e) {
    return e * 2; 
})

console.log(resultado);

const somar10 = e => e + 10; // soma 10 a cada elemento dentro do array
const triplo = e => e*3; // depois de somar, ele multiplica por 3 o número somaro
const forMoney = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` // aqui transforma em dinheiro.

resultado = nums.map(somar10).map(triplo).map(forMoney)
console.log(resultado)