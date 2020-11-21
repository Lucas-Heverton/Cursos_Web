function contar() {
    let inicio = document.getElementById('txtini');
    let fim = document.getElementById('txtfim');
    let passando = document.getElementById('txtpasso');
    let res = document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passando.value.length == 0) {
        res.innerHTML = 'Impossível contar!';
        //alert('[ERRO] - Campo em branco!');
    } else {
  
        //convertendo para número
        let ini = Number(inicio.value);
        let final = Number(fim.value);
        let passo = Number(passando.value);

        if(passo <= 0) {
            res.innerHTML = '<strong>Inválido, considerando 1 | </strong>';
            passo = 1;
        }
        res.innerHTML = ''; // limpa a tela 
        if (ini < final) {
            //contagem crescente
            for (let count = ini; count <= final; count += passo) {
                res.innerHTML += `${count} \u{1F449}`; // U+1F449(unicode) -> \u{1F449} JS
            }
        } else {
            //contagem regresiva
            for (let count = ini; count >= final; count -= passo) {
                res.innerHTML += `${count} \u{1F449}`; // U+1F449(unicode) -> \u{1F449} JS
            }
        }
        res.innerHTML += `\u{1F3C1}`;
    }
}