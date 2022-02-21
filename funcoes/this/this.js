const pessoas = [{
        nome: 'Marina',
        idade: 12
    },
    {
        nome: 'Luan',
        idade: 10
    },
    {
        nome: 'Lívia',
        idade: 20
    },
]

function calculaIdade(anos) {
    console.log(`Daqui a ${anos} anos, ${this.nome} terá ${(this.idade + anos)} anos de idade.`);
}

pessoas.forEach((e) => {
    calculaIdade.call(e, 10);
    //calculaIdade.apply(e, [10]);
})