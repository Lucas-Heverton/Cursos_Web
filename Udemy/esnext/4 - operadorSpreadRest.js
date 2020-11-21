//operador ... rest(juntar) / spread(espalhar)
//usar rest com parâmetro de função

// usar spread com objeto

const funcionario = {nome: 'Maria', salario: 12359.87}
const clone = { ativo: true, ...funcionario }
console.log(clone)

// usar spread com array

const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Joana', ...grupoA, 'Rafaela']
console.log(grupoFinal) 