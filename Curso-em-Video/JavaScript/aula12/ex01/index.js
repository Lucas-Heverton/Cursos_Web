//alert("Hello!")

function carregar() {
    var msg = document.getElementById('msg');
    var imagem = document.getElementById('imagem');
    var fundo = document.body;
    var dia = new Date();
    var horas = dia.getHours(); // pega somente as horas
    msg.innerHTML = `Agora são ${horas} horas.`

    if(horas > 0 && horas < 5) {
        //Madrugada
        imagem.src = './img/madrugada.jpg';
        fundo.style.background = '#000'; 

    } else if (horas < 12) {
        //Dia
        imagem.src = './img/manha.jpg';
        fundo.style.background = '#fff700'
    } else if (horas < 18) {
        //Tarde
        imagem.src = './img/tarde.jpg';
        fundo.style.background = '#d6b641'
    } else if (horas < 24) {
        //Noite
        imagem.src = './img/noite.jpg';
        fundo.style.background = '#484848';
    } else {
        alert('Horário inválido!!!')
    }

}