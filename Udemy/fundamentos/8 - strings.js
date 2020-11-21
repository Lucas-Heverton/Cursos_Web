const school = "Udemy"

/* 
  | Indice
U - 0 
d - 1
e - 2
m - 3
y - 4

*/



console.log(school.charAt(1)) // lê  o indice 1 que no exemplo é a letra d.
console.log(school.charCodeAt(2)) // pega o código na tabela ascii
console.log(school.indexOf('1'))

console.log(school.substring(1)) // pega o valor do indice um em diante.
console.log(school.substring(0, 4)) // pega o valor do indice 0 até o indice 3


console.log('Academia '.concat(school).concat(' !!!')) // 1° forma de concatenar
console.log('Universidade ' + school + ' ;D') // 2° forma de concatenar

/* 3° Forma de Concatenar  */
var Stry = "Is a first sentence"
Stry += " Is a second sentence"
Stry += " Is a third sentence"

console.log(Stry)
    /*  */

console.log(school.replace('y', 'i')) // substitui o y pela letra i.


console.log(('Lucas, Pedro, João ').split(',')) // a função split converte a string em array, dentro do parenteses passa-se o separador.