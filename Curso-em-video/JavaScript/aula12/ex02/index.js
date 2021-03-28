//alert("Hello!")

function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.querySelector("#txtano");
    var res = document.getElementById('res');

    if(fAno.value.length == 0 || Number(fAno.value) >= ano) {
        window.alert("[ERRO] - Verifique se o campo Ano está preenchido corretamente!")
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fAno.value);
        var genero = ''
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', './img/crianca-homem.jpg');
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', './img/jovem-homem.jpg');
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', './img/adulto-homem.jpg');
            } else if (idade < 130) {
                //idoso
                img.setAttribute('src', './img/idoso-homem.png');
            } else {
                alert("[ERRO] - Idade incorreta")
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', './img/crianca-mulher.jpg');
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', './img/jovem-mulher.jpg');
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', './img/adulto-mulher.png');
            } else if (idade < 130) {
                //idoso
                img.setAttribute('src', './img/idosa-mulher.png');
            } else {
                alert("[ERRO] - Idade incorreta")
            }
        } 
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img); // exibe na tela
    }
}