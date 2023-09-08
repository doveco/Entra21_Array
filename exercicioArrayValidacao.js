//Faça um programa que leia e valide as seguintes informações:
//Nome: maior que 3 caracteres;
//Idade: entre 0 e 150;
//Salário: maior que zero;
//Sexo: 'f' ou 'm';
//Estado Civil: 's', 'c', 'v', 'd';
//Se os valores estiverem todos corretos, exiba uma mensagem para o usuário, retornando os valores. 
//Caso não esteja correto, exiba apenas o que está incorreto.
//Dica: se sua variável é texto, o tamanho dela está armazenado em: texto.length

var nome = "Thiago" ;
var age = 40 ;
var salary = 2000 ;
var gender = "Male" ;
var civilStatus = "Casado" ;

if (nome.length >= 3) {
    console.log(nome);
} else {
    console.log(`${nome} não é válido, favor inserir um nome com pelo menos 3 caracteres`);
}

if (age >= 0 && age <= 150 ) {
    console.log(age);
} else {
    console.log(`${age} não é válido, favor inserir um valor entre 0 e 150`);
}

if (salary > 0 ) {
    console.log(salary);
} else {
    console.log(`${salary} não é válido, favor inserir um valor entre maior que 0`);
}

if (gender === "Male" || gender === "Female" ) {
    console.log(gender);
} else {
    console.log(`${gender} não é válido, favor inserir um dos valores: Male ou Female`);
}

if (civilStatus === "Casado" || civilStatus === "Solteiro" || civilStatus === "Viúvo" || civilStatus === "Divorciado" ) {
    console.log(civilStatus);
} else {
    console.log(`${civilStatus} não é válido, favor inserir um dos valores: Casado, Solteiro, Viúvo ou Divorciado`);
}
