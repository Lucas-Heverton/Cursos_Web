console.log(soma(5, 5))

//function declaration
//É possível chamar a função antes que ela seja declarada, diferente das expression
function soma (x, y){
    return x + y
}

//function expression 
const sub = function(a,b){
    return a - b
}
console.log(sub(13, 2))

// named function expression
const multi = function multi (c,d){
    return c * d
};
console.log(multi(2,6))

