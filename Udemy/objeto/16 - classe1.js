class Pessoa {

}
console.log(typeof Pessoa) // A classe na verdadde é lida como função no JS


class LancamentoFincanceiro {
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome;
        this.valor = valor;
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = []
    }
    addLancamentos (...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0;
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor;
        })
        return valorConsolidado;
    }

}

const salario = new LancamentoFincanceiro ('Salario', 50000)
const contadeagua = new LancamentoFincanceiro ('Água', -300)

const contas = new CicloFinanceiro (2, 2020)
contas.addLancamentos(salario, contadeagua)
console.log(contas.sumario())