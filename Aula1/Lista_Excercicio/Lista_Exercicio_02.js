let peso = 85.5
let altura = 1.85

let IMC_calculo = peso / Math.pow(altura, 2)
let IMC = Number.parseFloat(IMC_calculo)
let Texto = console.log(`O seu IMC é ${IMC.toFixed(2)}. `)


if (IMC < 18.5) {
        console.log('Abaixo do peso ideal')
} else if (IMC >= 18.5 && IMC < 25) {    
    console.log('Peso normal')
} else if (IMC >= 25 && IMC < 30) {
    console.log('Acima do peso')
} else if (IMC >= 30 && IMC < 40) {
    console.log('Obeso')
} else if(IMC >= 40) {
    console.log('Obesidade Grave')
}       
 