//Crie um programa que calcula e exibe a soma dos elementos de um array de números.

let array = [1, 2, 3, 4, 5, 6];
var soma = 0;

for (let i = 0; i < array.length; i++) {
    soma += array[i];
}
console.log('A soma dos elementos do array é: ', soma);