const nomeHeroi = "Marcus Paulo Franco dos Santos"
let xp = 800

switch (xp > 0) {
    case xp < 1000:
        console.log(`O Herói de nome ${nomeHeroi} está no nível de Ferro`)
        break
    case xp > 1000 && xp < 2000:
        console.log(`O Herói de nome ${nomeHeroi} está no nível de Bronze`)    
        break
    case xp > 200 && xp < 5000:
        console.log(`O Herói de nome ${nomeHeroi} está no nível de Prata Ouro`)
        break
    case xp > 5000 && xp < 8000:
        console.log(`O Herói de nome ${nomeHeroi} está no nível de Platina Diamante`) 
        break
    case xp > 8000 && xp < 9000:
        console.log(`O Herói de nome ${nomeHeroi} está no nível de Ascendente`)    
        break
    default:
        console.log("[ERROR]: Por favor verificar os dados informados!")
        break
}