function Pessoa(nome) {
    this.nome = nome
    
    this.falar= function (){
        console.log(`Droga é o ${this.nome}`) 
    }
}

const p1 = new Pessoa('Braia')
p1.falar()
