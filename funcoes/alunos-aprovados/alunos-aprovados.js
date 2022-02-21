let alunos = [{
        nome: 'Gabriela',
        nota: 8
    },
    {
        nome: 'Luana',
        nota: 4
    },
    {
        nome: 'Airton',
        nota: 7
    },
    {
        nome: 'Pedro',
        nota: 9
    },
    {
        nome: 'Amanda',
        nota: 10
    },
    {
        nome: 'Laura',
        nota: 1
    },
    {
        nome: 'Lucas',
        nota: 10
    },
];

let aprovados = [];

const media = 7;

alunos.forEach(function alunosAprovados(e) {
    e.nota >= media ? aprovados.push(e.nome) : false;
})

console.log(aprovados); //[ 'Gabriela', 'Airton', 'Pedro', 'Amanda', 'Lucas' ]