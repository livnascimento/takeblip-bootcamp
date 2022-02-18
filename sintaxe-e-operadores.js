// Crie uma função que recebe dois números como parâmetros
// Confira se os números são iguais
// Confira se a soma dos números é menos que 10 ou menor que 20
// Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".

function compara(num1, num2) {
    iguais = num1 === num2 ? 'são iguais' : 'não são iguais';
    soma = num1 + num2;
    menorQueDez = soma < 10 ? 'menor que 10' : 'maior que 10';
    menorQueVinte = soma < 20 ? 'menor que 20' : 'maior que 20';

    console.log(`Os números ${num1} e ${num2} ${iguais}. Sua soma é ${soma}, que é ${menorQueDez} e ${menorQueVinte}.`);

}

compara(1, 13);