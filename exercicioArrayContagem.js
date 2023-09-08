//Dado um array com 10 elementos contendo valores 0 e 1, conte quantas vezes o valor 1 aparece no array usando um loop
//FOR.

let array = [1, 0, 1, 1, 0, 0, 0, 1, 0, 1];

let valorUm = [];

for (let i = 0; i < array.length; i++) {
    if ( array[i] === 1) {        
    valorUm.push(array[i]);       
    var tamanho = valorUm.length;
    } 
    
}

console.log(tamanho);
