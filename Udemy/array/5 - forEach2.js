Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const carros = ['Ferrari', 'Porche', 'Lamborgini', 'Subaru']

carros.forEach2(function(nome, indice) {
    console.log(`${indice +1}) - ${nome}`)
});
