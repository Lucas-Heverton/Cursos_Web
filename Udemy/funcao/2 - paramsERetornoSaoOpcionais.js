function area (largura, altura) {
    const area = largura * altura
    if(area > 20){
        console.log(`Valor acima do permitido: ${area}.m²`)
    }else{
        return area
    }
}

console.log(area(5,4))
console.log(area(3,7))