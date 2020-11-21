//par nome/valor

const saudacao = 'Opaa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}


//Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 78,
    endereco:{
        logradouro: 'Rua Norte',
        numero: 243
    }
} 

console.log(saudacao)
console.log(exec())
console.log(cliente)