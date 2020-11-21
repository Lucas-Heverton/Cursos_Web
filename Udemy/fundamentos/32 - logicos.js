function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // || Ou
    const comprarTV50 = trabalho1 && trabalho2 // && e
    const comprarTV32 = trabalho1 != trabalho2 // != diferente de
    const manterSaudavel = !comprarSorvete // ! negação lógica

    return { comprarSorvete, comprarTV50, comprarTV32, manterSaudavel } // operador unário
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))