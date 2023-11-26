function IMC (a, b){

    const peso = a ;
    const altura = b ;
    const IMC_2 = peso / Math.pow(altura, 2);
    console.log(`O seu IMC é ${IMC_2.toFixed(2)}`);
}

IMC(90,1.82)