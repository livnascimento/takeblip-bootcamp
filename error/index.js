function arrayLenght(arr, numero) {
    try {
        if (!arr && !numero) throw new ReferenceError('Parâmetros não enviados');

        if (typeof arr !== 'object') throw new TypeError('O primeiro parâmetro deve receber um objeto');

        if (typeof numero !== 'number') throw new TypeError('O segundo parâmetro deve receber um número');

        if (arr.length != numero) throw new RangeError('O tamanho do array é diferente do número de entrada');

        return arr;
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log('Esse erro é de referência');
            console.log(e);
        } else if (e instanceof TypeError) {
            console.log('Esse erro é de tipo');
            console.log(e);
        } else if (e instanceof RangeError) {
            console.log('Esse erro é de execução');
            console.log(e);
        } else {
            console.log('Erro inesperado: ', e);
        }
    }
}

console.log(arrayLenght([12, 2, 3, 7, 8], 8));