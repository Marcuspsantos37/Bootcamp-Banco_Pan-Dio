let maior_numero = 0

const lista = []

for (let i = 0; i < 50; i++) {

    if (i > maior_numero) {
        lista.pop();
        lista.push(i);
    }
}
console.log(lista)