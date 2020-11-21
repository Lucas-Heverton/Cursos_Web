const pilotos = ['Vettel', 'Alonso', 'Hamilton', 'Massa']
pilotos.pop() // remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstapem') //adiciona um elemento na ultima posição do array.
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Bottas') // adiciona um elemento na primeira posição do array
console.log(pilotos)

//splice pode adicionar e remover elementos de um array

// adicionar
pilotos.splice(2, 0, 'Kubica', 'Russell') // no lugar do elemento dois ele começa a adicionar.
console.log(pilotos)

//remover
pilotos.splice(3, 1) // removeu um elemento, no caso o indice 3
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // faz uma cópia do array 'pilotos' a partir do indice 2
console.log(algunsPilotos)

const algunsPilotos1 = pilotos.slice(1, 4) // pega a partir do indice um até um indice antes do informado, no caso só até o indice 3
console.log(algunsPilotos1)