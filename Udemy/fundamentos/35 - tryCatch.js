function tratarErroeLancar(erro){
    //throw new Error('...')
    //throw 'mensangem'
    //throw 10
    //throw true
    /*throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }*/
    throw 'Erro inesperado, tente novamente'
    
}

function imiprimirNomeGritando (obj) {
    try{
        console.log(obj.nome.toUpperCase() +'!!!')
    }catch(e){
        tratarErroeLancar(e)
    } finally{
        console.log('Executa dando erro ou não')
    }
}

const obj = {nome: 'Roberto'}
imiprimirNomeGritando(obj)

// no exercicio não dará erro pois 'nome' está correto
// para testar o erro: passar = "name"  