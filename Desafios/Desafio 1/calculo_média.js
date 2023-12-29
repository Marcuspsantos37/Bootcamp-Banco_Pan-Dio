let nota_1 = 20
let nota_2 = 50
let nota_3 = 20


let media = nota_1 + nota_2 + nota_3 / 3

if (media < 50) {
    console.log('Reprovado')
}
else if (media >=50 && media < 70) {
    console.log('Recuperação')
}
else if(media >= 70){
    console.log('Aprovado')
}

console.log(media)