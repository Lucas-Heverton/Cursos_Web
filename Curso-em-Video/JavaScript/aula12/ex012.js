//var hora = 4;

//pega a hora do sistema onde está sendo executado.
var agora = new Date();
var hora = agora.getHours();
console.log(`São exatamente ${hora} horas.`)

if(hora < 5) {
    console.log("Boa madrugada !")
} else if (hora < 12) {
    console.log("Bom dia !")
} else if (hora <= 18){
    console.log("Boa tarde !")
} else if (hora < 24) {
    console.log("Boa noite !")
} else {
    console.log("Horário incorreto!")
}
