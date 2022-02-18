function percorreArray(array) {

    if (array.length == 0) {
        return -1;
    } else {

        for (var i = 0; i < array.length; i++) {
            (array[i] % 2 == 0) && (array[i] != 0) ? array.splice(i, 1, 0): array[i] = array[i];
        }

        return array;
    }
}

var arr1 = [1, 3, 4, 6, 80, 33, 23, 90];
var arr2 = [];

console.log(percorreArray([...arr1]));
console.log(percorreArray([...arr2]));