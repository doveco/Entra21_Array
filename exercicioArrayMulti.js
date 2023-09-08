// Usando um laço FOR, percorra um array de 4 elementos e calcule a multiplicação de todos os valores,
// exibindo o resultado final para o usuário.

let array = [2, 23, 53, 41];
let multi = 1;

for (let i = 0; i < array.length; i++) {
    multi *= array[i];
}
console.log('A multiplicação dos elementos do array é: ', multi);
