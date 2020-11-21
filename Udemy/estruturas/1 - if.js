function boaNoticia (nota) {
    if (nota >= 7 && nota <= 10){
        console.log("Parabéns você foi aprovado!")
    }
}

boaNoticia(9)
boaNoticia(0) //como esta em uma funcão, ele não retorna nada
boaNoticia(-1) //como esta em uma funcão, ele não retorna nada

function seForVerdadeImprime (valor){
    if(valor){
        console.log("Se for true mostra o valor ... " + valor)
    }
}

seForVerdadeImprime()
seForVerdadeImprime(null)
seForVerdadeImprime(undefined)
seForVerdadeImprime(NaN)
seForVerdadeImprime('')
seForVerdadeImprime(0)
'------------------------------'
seForVerdadeImprime(-1)
seForVerdadeImprime(' ')
seForVerdadeImprime('?')
seForVerdadeImprime([])
seForVerdadeImprime([1, 2])
seForVerdadeImprime({})
