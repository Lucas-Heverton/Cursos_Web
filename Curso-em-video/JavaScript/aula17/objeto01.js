let amigo = {
    nome: 'Lucas',
    sexo: 'M',
    peso: 62.5,
    engordar(p = 0) {
        console.log('Engordou');
        this.peso += p;
    }
}

amigo.engordar(10) // passa o peso que ele adquiriu
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)