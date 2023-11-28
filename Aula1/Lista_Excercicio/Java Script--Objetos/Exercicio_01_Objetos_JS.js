//----> OBEJTO LITERAL... uma função dentro de um objeto chama-se método
const adm_1 = {
    nome : 'Marcus Paulo Franco dos santos',
    idade: '39',
    'descrever': function ()  {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }

};

console.log(adm_1.nome);
console.log(adm_1.idade + ' anos');

adm_1.altura = 1.83;

console.log(adm_1.altura);

delete adm_1.altura;

console.log(adm_1.altura);

adm_1.descrever();