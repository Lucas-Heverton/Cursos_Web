console.log(this === global);
console.log(this === module);

console.log(this === module.exports);
console.log(this === exports);

function logThis() {
    console.log('Dentro de uma função ...');
    console.log(this === exports);
    console.log(this === module.exports);
    // o This dentro de uma função aponta pro escopo global
    // o this fora de uma função aponta para o module.exports que fica vísivel globalmente.
    console.log(this === global);
}

logThis()

