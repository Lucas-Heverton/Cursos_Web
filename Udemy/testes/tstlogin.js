function tratarErroeMostrar(erro) {
    throw "Insira os dados novamente!"
}
function sysLogin(id, usuario, senha) {
    try {
        if (id === 1 && usuario === 'Lucas-Heverton' && senha === 123456) {
            console.log("Logado com sucesso !")
        } else if (id !== 1) {
            console.log("Id incorreto!")
        } else if (usuario !== 'Lucas-Heverton') {
            console.log("Login incorreto, nome de usuário incorreto.")
        } else if (senha !== 123456) {
            console.log("Login incorreto, senha incorreta.")
        }
    } catch (e) {
        tratarErroeMostrar(e)
    }

}

sysLogin(1, 'Lucas-Heverton', 123456)
