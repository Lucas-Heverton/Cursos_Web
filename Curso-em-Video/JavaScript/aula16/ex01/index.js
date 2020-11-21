var numerosinput = [];

function adicionar() {
    let esconder = document.getElementById('res-dois'); // seleciona a div
    esconder.style.display = 'none'; // esconde quando click é acioonado
    var numerodigitado = document.getElementById('txtnumero');
    num = Number(numerodigitado.value);
    let contador = document.getElementById('contador');

    if (numerodigitado.value.length == 0) {
        alert("[ERRO] - Digite algum número");
    } else if (num > 100 || num < 1) {
        alert("[ERRO] - Digite um número entre 1 e 100 ;(");
    } else { 
        for (let count = 0; count < 1; count++) { // executa uma vez só por clique
            let inserir = document.createElement('option'); // criando um elemento 'option' dentro do select
            inserir.text = `Valor ${num} adicionado.`; // a cada loop o número que foi digitado é inserido  
            contador.appendChild(inserir); // pega o elemento criado e insere dentro do select
            this.numerosinput.push(num); // adiciona um novo número no final do array
        }
        limparCampo(); // executa a função para limpar o input
        //console.log(numerosinput);
        let limpar = document.getElementById('res-dois'); // armazena o elemento p na variavel
        limpar.innerHTML = ''; // limpa o resultado depois que é clickado em adicionar.
    }
}

//calcular a soma dos valores do array, média e etc ...
function finalizar() {
    if (this.num == undefined || this.num == null) {
        alert("[ERRO] - Digite um número no primeiro campo");
    } else {
        let res = document.getElementById('res-dois');
        res.style.display = 'block'; // mostra o block que estava escondido por padrão
        let tamanho = numerosinput.length; // armazena o tamanho do array.
        numerosinput.sort((a, b) => a - b); // colocar o array em ordem crescente mesmo no formato unicode.
        let resultadoSoma = this.numerosinput.reduce(soma, 0); // armazena o resultado da soma. 
        let media = resultadoSoma / tamanho; // calcula a média pegando o tamanho do array / total da soma.

        res.innerHTML = `<p> Ao todo, temos <b>${tamanho}</b> números cadastrados. <br /></p>`; // Quantidade de números cadastrados no array.
        res.innerHTML += `<p> O maior valor informado foi <b>${numerosinput[numerosinput.length - 1]}</b>.<br /></p>`; //pega o ultimo numero dentro do array pela posição
        res.innerHTML += `<p> O menor valor informado foi: <b>${numerosinput[0]}.</b> <br /></p>`;  //pega a primeira posição do array
        res.innerHTML += `<p> Somando todos os valores, temos: <b>${resultadoSoma}.</b> <br /></p>`; // soma dos valores
        res.innerHTML += `<p> A média dos valores digitados é: <b>${media.toFixed(2)}</b></p>`; //pega a média e coloca duas casas decimais
    }
}

//função para somar todos os valores dentro do array
function soma(acc, a) {
    return acc + a;
}

// Função para limpar assim que o click no botão for executado
function limparCampo() {
    document.querySelector("input.txtnumero").value = "";
}