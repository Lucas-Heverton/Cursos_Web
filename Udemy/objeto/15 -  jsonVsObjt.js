//transformar um objeto em JSON

const obj = { a:1,  b: 2, c:3,
    soma () {
        return a + b + c;
    }
}

console.log(obj) // imprimindo um objeto.
console.log(JSON.stringify(obj)) //imprimindo e transformando um objeto em JSON.


// Transformando JSON em um objeto

console.log(JSON.parse('{ "Nome": "Lucas", "Idade": 19, "Sexo": "M" }'))
