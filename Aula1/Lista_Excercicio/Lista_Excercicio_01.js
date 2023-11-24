const nome_aluno = 'Marcus Paulo'
const nota_1 = 95.5
const nota_2 = 90
const nota_3 = 93.4
const nota_4 = 100

let média_final = (nota_1 + nota_2 + nota_3 + nota_4) / 4

console.log(`A média do aluno ${nome_aluno} é ` + média_final.toFixed(2))

if (média_final < 50) {
    console.log('Reprovado(a)')
} else if (média_final >= 5 && média_final < 7) {
    console.log('Recuperação')
} else if (média_final) {
    console.log('Aprovado para o próximo semestre. Parabéns!')
}