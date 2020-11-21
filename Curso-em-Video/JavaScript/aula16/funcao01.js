//verificador de número impar ou par.

function parimpar(num) {
    if(num % 2 === 0) {
        return 'Par';
        //console.log(`O número ${num} é par`);
    } else {
        return 'Ímpar';
        //console.log(`O número ${num} é ímpar.`);
    }
}
//parimpar(11);

let res = parimpar(11);
console.log(res);