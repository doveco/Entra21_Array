//Usando o FOR, filtre qual o maior número de um array de 5 elementos:

let array = [1, 12, 0, 10, 34];

//let max = array.reduce((a, b) => Math.max(a, b), -Infinity)
//console.log(max);
//console.log(Math.min(...array));

let maior = array[0];

for (let i = 0; i < array.length; i++) {
        if ( maior < array[i]) {
        maior = array[i];
    }  
}

console.log("Este é o maior número:" , maior);

let menor = array[0];

for (let i = 0; i < array.length; i++) {
        if ( menor > array[i]) {
        menor = array[i];
    }  
}

console.log("Este é o maior número:" , menor);