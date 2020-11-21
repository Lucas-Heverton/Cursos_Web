function meuObjeto () {}
console.log(meuObjeto.prototype);

const obj1 = new meuObjeto; // Objeto criado a partir da function meuObjeto
const obj2 = new meuObjeto; // Objeto criado a partir da function meuObjeto
console.log(obj1.__proto__ === obj2.__proto__) // Os dois objetos são estritamente iguais
console.log(meuObjeto.prototype === obj1.__proto__)
 
meuObjeto.prototype.nome = "Lucas";
meuObjeto.prototype.falar = function(){
    console.log(`Meu nome é ${this.nome}`)
}
obj1.falar()

obj2.nome = "Halland";
obj2.falar();

const obj3 = {}
obj3.__proto__ = meuObjeto.prototype;
obj3.nome = "Objeto_3";
obj3.falar()

// resumindo 

console.log((new meuObjeto).__proto__ === meuObjeto.prototype);
console.log(meuObjeto.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);
