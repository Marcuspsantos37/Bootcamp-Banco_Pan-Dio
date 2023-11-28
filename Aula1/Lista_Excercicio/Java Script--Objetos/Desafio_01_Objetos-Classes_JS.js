
// As classes sempres começam com letras maiúsculas

class Carros {
    valor_comb;
    distancia;
    marca;
    cor;
    gasto_medio;

    constructor  (valor_comb, distancia, marca, cor, gasto_medio) {
        this.valor_comb = valor_comb.toFixed(2);
        this.distancia = distancia;
        this.marca = marca;
        this.cor = cor;
        this.gasto_medio = ((distancia / gasto_medio) * valor_comb).toFixed(2);
    }
    descrever (){
        return (`A marca escolhida foi a ${this.marca}. Agora, a cor selecionada foi ${this.cor}. De modo geral o carro consome ${this.gasto_medio.toFixed(2)} por litro, sendo que o preço do litro da gasolina está em R$ ${this.valor_comb.toFixed(2)}.`);
        }
    
}

const sienna = new Carros(5,70,'Fiat','Preto',12)
console.log(sienna);

const voyage = new Carros(4.5, 180,'Volkswagen','Preto', 11)
console.log(voyage);

