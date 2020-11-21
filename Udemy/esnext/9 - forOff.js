for( let letra of "Lucas") {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for ( let i in assuntosEcma) {
    console.log(i) // pega o indice, a posição de cada item.
}

for ( let assuntos of assuntosEcma) {
    console.log(assuntos) // pega o valor, o que realmente está na variavél.
}

 const assuntosMap = new Map ([
     ['Map', {abordado: true}],
     ['Set', {abordado: true}],
     ['Promise', {abordado: false}]
 ])

 for (assunto of assuntosMap) {
     console.log(assunto)
 }
 
 for (chave of assuntosMap.keys()){
     console.log(chave) 
 }

 for(valor of assuntosMap.values()) {
     console.log(valor)
 }

 for (let [ch, vl] of assuntosMap.entries()){
     console.log(ch, vl)
 }

 const s = new Set(['a', 'b', 'c'])
 for (let letraz of s){
     console.log(letraz)
 }
 