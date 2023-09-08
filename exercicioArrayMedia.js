// Crie um array com 6 números. Usando um loop FOR, calcule a média dos números presentos no array e mostre o resultado.

let array = [2, 2, 2, 2, 2, 2];
let soma = 0;
let media = 0;

for (let i = 0; i < array.length; i++) {
    soma += array[i];
    media = soma/array.length
}
console.log('A media dos elementos do array é: ', media);