//estrategia 1 para gerar valor padrão

function soma1 (z, x, c){
    z = z || 1
    x = x || 1
    c = c || 1
    return z + x + c
}

console.log(soma1())
console.log(soma1(3), soma1(3,7), soma1(0,3,1), soma1(9))
console.log(soma1(-2))
console.log(soma1('Lucas','Heverton','Santos'))


//estrategia 2 para gerar valor padrão

function soma2 (k, l, m){
    k = k != undefined ? k: 1
    l = 1 in arguments ? l : 1
    m = isNaN(m) ? 1 : m
    return k + l + m
}

console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,9,0))

function soma3 (a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3(), soma3(3,3,3), soma3(0,0,0))