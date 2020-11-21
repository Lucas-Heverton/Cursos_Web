// criar de forma literal 

function fun1 () {

}

//armazenar um funcão em uma váriavel 

const fun2 = function () {}

//armazenar um função em um array

const array = [function (c,d){return c * d}, fun1, fun2]
console.log(array[0](10,12))

//armazenar em um atributo de objeto
const obj = {}
obj.talk = function () {return 'Olá'}
console.log(obj.talk())

//Passar função como parametro

function go(umTexto){
    umTexto()
}

go(function(){console.log('E, testando ...')})

// um função que retorna uma função

function somaValor (a, b){
    return function(c){
        console.log(a + b + c) 
    }
}

somaValor(4, 5)(1)
const onlySoma = somaValor(4,5)
onlySoma(1)

