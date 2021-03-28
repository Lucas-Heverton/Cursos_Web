var num = [5, 2, 4, 6, 9, 7];

num[1] = 3;

num.push(1) // cria um elemento no final do array
num.sort() // ordena em ordem crescente

console.log(`O vetor tem ${num.length} posições`);
console.log(`${num}`)
console.log(`O primeiro valor do array é: ${num[0]}`)

let posicao = num.indexOf(11)

if(posicao === -1) {
    console.log('O valor não foi encontrado!')
} else { 
    console.log(`O valor 4 está na posição ${posicao}`);
}