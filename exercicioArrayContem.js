//Dado um array com 8 elementos, solicite ao usuário um número. Use um loop FOR para verificar se o número está 
//presente no array e exiba uma mensagem apropriada. 

let array = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8];
let numeroUsuario = 8;
let existe = false;

for (let i = 0; i < array.length; i++) {
    if (numeroUsuario === array[i]) {
        console.log("estou no meu primeiro bloco");        
        existe = true;
    }
} if ( existe ) {
    console.log("O número está no array") ; 
} else { 
    console.log("O número não está no array");
}
