x = 90
z = 3
c = x % z
if(c === 0){
console.log("Número par")
}else if (c >= 1){
    console.log("Número ímpar")
}


/* divisao = (a,b) => {return a / b}
console.log(divisao(90,2))

pessoa = age => {return age + " Years Old"}
console.log(pessoa(19))

empresaa = {
    locas: `Rua das  estreitas`,
    numero: 20,
    bairro: `Santana`,
        financeiro: {
            lucroAnual: `20 Milhões`,
            Prejuizo: `R$: 00,00`
        }
}

console.log(empresaa) */

/* computador = ['LG', 'AVELL', 'SAMSUNG', 'RAZER', 'POSITIVO']

console.log(computador)
console.log(computador[3])
computador[4] = 'HP'
console.log(computador[4])
 */

aleatoryNumbers = [ 6, 3, 2, 1, 5, 4]
console.log(aleatoryNumbers)
console.log(aleatoryNumbers.sort()) // ordernar o array
console.log(aleatoryNumbers.reverse()) // invertera ordem do array
console.log(aleatoryNumbers.length) // informa quantas posições tem o array 


carros = _ => console.log('Jaguar') // função arrow passando apenas um parametro
carros()

marcas = {
    carros: {
        Jeep: 'R$ 100.000,00',
        Mercedes: 'R$ 155.000,00',
    },
    wear: {
        Nike: 'R$ 200,00',
        Adidas: 'R$ 199,99',
        Puma: 'R$ 99,98' 
    },
    celulares:{
        Apple: 'R$ 8.999,99',
        Huawei:'R$ 6.658,00',
        Motorola: 'R$ 1.999,99'
    },
    pcs:{
        Avell: 'R$ 5.500,99',
        MacBook: 'R$ 12.560,98',
        Hp: 'R$ 3.798,99'
    }    
}

console.log(marcas.wear)
console.log(marcas.carros)
console.log(marcas.celulares)
console.log(marcas.pcs)


mathBasic = (a,b,c) => {
    tatuagem ={
        Raposa: 'R$ 4.000,00',
        Lobo: '3.500,00',
        Jaguar: '7.800,99'
    }
    console.log('Lucas')
    console.log(2)
    console.log(b)
    console.log(tatuagem.Jaguar)
    return (a + b + c)
    }
console.log(mathBasic(2,5,2))

const fones = {
    AirPods: 'Caro mas funciona | R$ 3.000,00',
    priceAir () {
        console.log(this.AirPods)
    }  
}

fones.priceAir()

function comparar () {
    return (this === global)
}
console.log(comparar())

