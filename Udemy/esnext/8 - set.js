// não aceita repetição/ não indexado, não busca por indice

const times = new Set()

times.add('Corinthians')
times.add('Flamengo')
times.add('Palmeiras')
times.add('Santos')
times.add('Flamengo') 

console.log(times)
console.log(times.size) // tamanho do set()
console.log(times.has('flamengo'))//não existe no set() pois é sensitive case
console.log(times.has('Flamengo')) // aqui ele encontra pois está com a primeira letra maiúscula
times.delete('Santos') //exclui um valor do set()
console.log(times)

const nomes = ['Raquel', 'Lucas', 'Marcela', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet) // não aceitou 2 lucas pois não aceita repetição