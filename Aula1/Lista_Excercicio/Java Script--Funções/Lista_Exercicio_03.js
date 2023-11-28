const produto = 'guitarra'
const preço = 450
const forma_de_pagamento = 'crédito'

if (forma_de_pagamento == `pix`) {
    console.log(`O total a pagar pela(o) ${produto} na ${forma_de_pagamento}:` + ` R$ ${(preço - (0.15 * preço)).toFixed(2)}`)
} else if (forma_de_pagamento == `débito`) {
    console.log(`O total a pagar pela(o) ${produto} no ${forma_de_pagamento}: R$ ${(preço - (0.10 * preço)).toFixed(2)}`)
} else if (forma_de_pagamento == `parcelado`){
    console.log(`O total a pagar pelo(a) ${produto} com pagamento ${forma_de_pagamento} em 2x será de: R$ ${preço.toFixed(2)}`)
} else if (forma_de_pagamento == `crédito`) {
    console.log(`O total a pagar pela(o) ${produto} será de R$ ${(preço + (preço * 0.10)).toFixed(2)}`)
}
