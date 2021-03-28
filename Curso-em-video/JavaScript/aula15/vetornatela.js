let valores = [ 8, 3, 4, 2, 1, 6, 9];

valores.sort();

//repetição
/* for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} possui o valor ${valores[pos]}`);
} */


//Simplificando

for (let pos in valores ) {
    console.log(`A posição ${pos} possui o valor ${valores[pos]}`);
}