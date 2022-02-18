// Solução 1

function palindromo(palavra) {
    var strAux = "";

    for (var i = (palavra.length - 1); i >= 0; i--) {
        strAux += palavra[i];
    }

    return palavra == strAux ? `${palavra} é um palindromo` : `${palavra} não é um palíndromo`;

}

// Solução 2

function palindromo2(palavra) {
    strAux = palavra.split("").reverse().join("");

    return palavra == strAux ? `${palavra} é um palíndromo` : `${palavra} não é um palíndromo`;
}

console.log(palindromo("arroz"));
console.log(palindromo2("ovo"));