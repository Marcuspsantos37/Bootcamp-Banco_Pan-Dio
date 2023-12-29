const numeros = [1,2,3,4,5,6,7,8,350,9,10,200,11,12,13,14,456,15,16,47,17,17,18]

let listaPar = [];

let listaImpar = [];

for (let i = 0; i < numeros.length; ++i) { 
    if (numeros[i] % 2 === 0) {
        listaPar.push(numeros[i])
    } else {
        listaImpar.push(numeros[i])
    }
}
/* Maior número Par */
console.log(`O maior número par é: ${Math.max.apply(null,listaPar)}`)

/* Menor Impar */
console.log(`O menor número impar é: ${Math.min.apply(null,listaImpar)}`)
