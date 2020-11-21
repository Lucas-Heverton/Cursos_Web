function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = { max: 190, min: 150 }
console.log(rand(obj))
console.log(rand({ min: 990 }))
console.log(rand({}))