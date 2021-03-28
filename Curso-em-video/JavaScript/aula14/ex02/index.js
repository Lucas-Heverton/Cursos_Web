function tabuada() {
    let num = document.getElementById('txtnumber');
    let tabuada = document.getElementById('txtabuada');

    if(num.value.length == 0) {
        alert('Digite algum número!');
    } else {
        tabuada.style.display = 'inline-block';
        let numero = Number(num.value); //convertendo para number    
        tabuada.innerHTML = ''; // limpa a tela antes de gerar outra tabuada

        for(let count = 1; count <= 20; count++) { // faz a tabuada do 1 ao 10
            let item = document.createElement('option');
            item.text = `${numero} x ${count} = ${numero*count}`;
            tabuada.appendChild(item); 
        }
    }
}