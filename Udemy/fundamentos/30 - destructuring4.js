const [a, b, c, d] = [2, 10, 6, 2]

const soma = a + b + c + d
const subtracao = b - c
const multiplicacao = b * a
const divisao = c / a

if (soma % 2 == 0) {
    console.log('Número par')
} else(console.log('Número impar'))


console.log('Soma : ', soma, '|||', 'Subtração: ', subtracao, '|||', 'Multiplicação: ', multiplicacao, '|||', 'Divisão: ', divisao)