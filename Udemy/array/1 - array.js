let numeros = [1, 2, 4, 5, 3 ];
console.log(numeros.sort()); // ordena o array

console.log(typeof Array, typeof new Array, typeof []);


let aprovados = new Array('Lucas', 'Bruno', 'Rafael');
console.log(aprovados);

aprovados = ['Lucas', 'Bruno', 'Rafael'];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = 'Paulo';
console.log(aprovados[3]);

aprovados.push('Laura');
console.log(aprovados.length);
console.log(aprovados);
aprovados[9] = 'Carlos';
console.log(aprovados.length);

console.log(aprovados[9]);

console.log(aprovados[7] === undefined);

console.log(aprovados); // quatro elementos vazio.

aprovados.sort()// ordena o array
console.log(aprovados)

delete aprovados[1] // colocou como undefined o indice 1.
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados)

aprovados = ['Raimundo', 'Jhenny', 'Sarah']
aprovados.splice(1, 0) // adicionar, remover elementos de um array
console.log(aprovados)
