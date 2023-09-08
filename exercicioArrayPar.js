//Faca um programa em javascript que leia um vetor de seis elementos numéricos inteiros, calcule e mostre:
// a) A quantidade de números pares e quais são eles :
// b) A quantidade de números ímpares e quais são eles :

let array = [1, 2, 3, 4, 5, 6];

let pares = [];
let qtdPares = 0 ;
let impares = [];
let qtdImpares = 0 ;

for (let i = 0; i < array.length; i++) {
    if ( array[i] % 2 === 0) {        
    pares.push(array[i]);
    qtdPares++;
    }  else {
    impares.push(array[i]);
    qtdImpares++;
    }
}

console.log(`A quantidade de números pares é, ${qtdPares} e esses números são , ${pares}`);
console.log(`A quantidade de números pares é, ${qtdImpares} e esses números são , ${impares}`);
