salario = 800,35

beneficio = 800,88

remuneracao_bruta = (salario + beneficio).toFixed(2)

salario_liquido = []
if (remuneracao_bruta > 0 && remuneracao_bruta <=1100) {
    valor = (remuneracao_bruta - (remuneracao_bruta * 0.05)).toFixed(2);
    salario_liquido.push(valor)
} else if (remuneracao_bruta > 1100.01 && remuneracao_bruta <=2500){
    valor = (remuneracao_bruta - (remuneracao_bruta * 0.10)).toFixed(2)
    salario_liquido.push(valor)
} else if (remuneracao_bruta > 2500.01){
    valor = (remuneracao_bruta - (remuneracao_bruta * 0.15)).toFixed(2)
    salario_liquido.push(valor)
} else{
    console.log(`[ERROR]: Você deve ter digitado um valor errado, por favor insira um valor válido.`)
}

console.log(`O salário liquido é: R$ ${salario_liquido}`)
