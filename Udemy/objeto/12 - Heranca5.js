console.log(typeof String);
console.log(typeof Function);
console.log(typeof Object);

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}
console.log('Lucas Heverton'.reverse())

Array.prototype.first = function () {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function () {
    return 'Everybody';
}

console.log('Lucas Heverton'.reverse());

console.log(typeof Array === typeof Function) // Os dois são do tipo Function por isso são estritamente iguais.