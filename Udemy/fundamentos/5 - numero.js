const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

console.log(typeof peso1)
console.log(typeof peso2)

const av1 = 8.97
const av2 = 9.23

const total = av1 * peso1 + av2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(5)) // 'toFixed' número de casa decimais depois da vírgula.
console.log(media.toString(10)) // 'toString' converte o valor de media para o tipo string. (valor entre os parenteses (2 - binario, 8 - octagonal, 10 - decimal, 16 - hexadecimal))

console.log(typeof media)
console.log(typeof Number)