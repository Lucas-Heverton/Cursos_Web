const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for(x in nums){
    if (x == 4 ){
        break // quando o valor encontrado dentro do array for igual a 4 ele para a contagem e imprime só até o valor 4
    }
    console.log(`x = ${nums[x]}`)
}
console.log(nums.reverse()) // exibe o array na sequência decrescente 
console.log(nums.sort()) // exibe o array na sequência crescente


for (y in nums){
    if(y == 4){
        continue // quando o valor é encontrado dentro do array ele continua listando.
    }
    console.log(`y = ${nums[y]}`)
}

externo: for (a in nums){
    for (b in nums){
        if (a == 2 && b == 3 ) break externo
        console.log(`Par = ${a},${b}`)
    }
}
