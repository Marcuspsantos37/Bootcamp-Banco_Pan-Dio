// 1 = Débito
// 2 = PIX
// 3 = Crédito até duas parcelas
// 4 = Crédito acima de duas pardelas 


function total (valor, Forma_pgto) {
    const a = valor
    const b = Forma_pgto

    switch (b) {
        case 1:
            const total = a - (a * 0.10)          
            console.log(`O valor total da compra, com 10% de desconto será de R$ ${(total).toFixed(2)}`)
            break
        case 2:
            const total_pix = a - (a * 0.15)
            console.log(`O valor total da compra, com desconto de 15% será de R$ ${(total_pix).toFixed(2)}`)
            break
        case 3:
            console.log(`O valor a ser pago será de R$ ${a}. A ser pago em no máximo duas vezes.`)
            break
        case 4:
            const total_credito_3 = a + (a * 0.10)
            console.log(`O valor a ser pago será de R$ ${total_credito_3}.`)
            break
        default:
            console.log(`[ERRO]: Provavelmente você digitou algum valor inválido. Por favor, tente novamente.`)
    }

}

total (1670,2)
