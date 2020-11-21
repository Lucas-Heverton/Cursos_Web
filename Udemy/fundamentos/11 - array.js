const valores = [3.33, 4.44, 5.55, 6.66] //constuindo o array
console.log(valores[0], valores[3]) //imprindo o valor do array por posição
console.log(valores[4]) // quando tentamos acessar um array que não foi denifido valor ele aparece como 'Undefined'

valores[4] = 15.1515
console.log(valores)

valores[5] = 19.99
console.log(valores)

console.log(valores.length) // vai me dizer quantos elementos tem no array


valores.push({ id: 3 }, true, 'Caio') // adicionamos mais valores para o array com a função push
console.log(valores) // não é uma boa prática ficar colocando diversos elementos em um array, cada array deve ter seu tipo de dado.


//array para nomes


const nomesCadastro = ['Lucas', 'João', 'Marcos', 'Gabriel']
console.log(nomesCadastro)
console.log(nomesCadastro[1], nomesCadastro[3])

nomesCadastro[2] = 'Fernando'
console.log(nomesCadastro[2])

console.log(nomesCadastro.length) // informa a quantidade de posições que tem no array
console.log(nomesCadastro)

nomesCadastro.push('Denner', 'Paulo')
console.log(nomesCadastro)

nomesCadastro[5] = 'Heverton'
console.log(nomesCadastro[5])
console.log(nomesCadastro)


//array para idade

const idadeCadastro = [14, 19, 10, 20, 28, 23]
console.log(idadeCadastro)

idadeCadastro[5] = null
console.log(idadeCadastro)

idadeCadastro[5] = 44
console.log(idadeCadastro)

idadeCadastro.length = 5
console.log(idadeCadastro)

idadeCadastro.push(29, 30, 31)
console.log(idadeCadastro)

idadeCadastro.length = 6 // length exclui da posição informada em diante.
console.log(idadeCadastro)

idadeCadastro.shift() // shift remove o primeiro elemento do array.
console.log(idadeCadastro)

delete idadeCadastro[1] // exclui conforme a posicao do array
console.log(idadeCadastro)

idadeCadastro[1] = 19.5
console.log(idadeCadastro)


idadeCadastro.pop() // remove o ultimo valor da ultima posição do array
console.log(idadeCadastro)

idadeCadastro.pop() // remove the last of element again
console.log(idadeCadastro)
    /* -------------------------------------------------------------------------- */