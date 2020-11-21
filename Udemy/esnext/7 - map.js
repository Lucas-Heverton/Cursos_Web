const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function() { }, 'função'],
    [{}, 'objeto'],
    [123, 'número']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) // verifica se exite o valor '123' dentro do map
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size) // verificar a quantidade de elementos dentro do MAP

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'a')
console.log(chavesVariadas)
