const pessoa = {
    saudacao: "Bom dia!",
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const testeFala = pessoa.falar
testeFala() //conflito entre paradigmas: funcional e OO.

const falardePessoa = pessoa.falar.bind(pessoa)
falardePessoa()

const falar2 = pessoa.falar
falar2()
