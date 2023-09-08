let vetor = [1, 2, 3, 4]; 
let vetor1 = [7, 8, 9, 10];

// Crie um novo array contendo todos os elementos de dois arrays existentes: 

let vetorConcat = vetor.concat(vetor1);

console.log("Exercicio 1", vetorConcat);

// Determine o número de elementos presentes em um array: 

let size = vetorConcat.length;

console.log("Exercicio 2", size);

// Adicione um elemento no final de um array:

vetor.push(5);

console.log("Exercicio 3", vetor);

// Adicione um elemento no inicio de um array: 

let  elementoNovo = 0;
let indiceInsercao = 0;
vetor.splice(indiceInsercao, 0, elementoNovo);

console.log("Exercicio 4", vetor);

// Remova o primeiro elemento de um array:
 
let indiceRemocao = 0;

vetor.splice(indiceRemocao, 1);

console.log("Exercicio 5", vetor);

// Remova o último elemento de um array:

vetor.pop();

console.log("Exercicio 6", vetor);

// Usando o laço FOR, percorra um array de 3 elementos e faça a subtração dos valores, e exiba o resultado final
// para o usuário :

let arrayEx7 = [10, 1, 1];
let sub = arrayEx7[0];

for (let i = 1; i < arrayEx7.length; i++) {
    sub -= arrayEx7[i];
}
console.log('Exercicio 7 : A subtração dos elementos do array é: ', sub);
