//Faça um programa que, dado um conjunto de N números, determine o menor valor, o maior valor e a soma dos valores.

let array = [1, 2, 3, 4, 5, 6,];
let maior = array[0];
let soma = 0;

for (let i = 0; i < array.length; i++) {
    if ( maior < array[i]) {
    maior = array[i];
    }  
    soma += array[i];
}

let menor = array[0];

for (let i = 0; i < array.length; i++) {
    if ( menor > array[i]) {
    menor = array[i];
    }  
}


console.log(`A soma dos números ${maior} e ${menor} e a soma total é ${soma}`);