// Em uma competição de salto em distância cada atleta tem direito a cinco saltos. No final da série de saltos de cada 
//  atleta, o melhor e o pior resultados são eliminados. O seu resultado fica sendo a média dos três valores restantes. 
//  Você deve fazer um programa que receba o nome e as cinco distâncias alcançadas pelo atleta em seus saltos e 
//  depois informe a média dos saltos conforme a descrição acima informada 
//  (retirar o melhor e o pior salto e depois calcular a média). Faça uso de uma lista para armazenar os saltos. 
//  Os saltos são informados na ordem da execução, portanto não são ordenados. O programa deve ser encerrado quando 
//  não for informado o nome do atleta. A saída do programa deve ser conforme o exemplo abaixo:
// 
// Atleta: Rodrigo Curvêllo
// Primeiro Salto: 6.5 m
// Segundo Salto: 6.1 m
// Terceiro Salto: 6.2 m
// Quarto Salto: 5.4 m
// Quinto Salto: 5.3 m
// Melhor salto:  6.5 m
// Pior salto: 5.3 m
// 
// Média dos demais saltos: 5.9 m
// Resultado final:
// Rodrigo Curvêllo: 5.9 m

let array = [6.5 , 6.1 , 6.2 , 5.4 , 5.3 , 6.5 , 5.3]; 
let soma = 0;
let media = 0;

console.log(`O primeiro salto foi de ${array[0]}`);
console.log(`O segundo salto foi de ${array[1]}`);
console.log(`O terceiro salto foi de ${array[2]}`);
console.log(`O quarto salto foi de ${array[3]}`);
console.log(`O quinto salto foi de ${array[4]}`);
console.log(`O melhor salto foi de ${array[5]}`);
console.log(`O pior salto foi de ${array[6]}`);

array.sort((a, b) => a - b);

array.shift();
array.pop();

for (let i = 0; i < array.length; i++) {
    soma += array[i];
    media = soma/array.length    
}

console.log(`A média dos saltos é ${media.toFixed(2)}`);
