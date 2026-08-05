const prompt = require('prompt-sync')();
let contador = 1;
const numero = Number(prompt("Escreva o numero: "));
let resultado = 0;
while(contador<=5){
    resultado = contador * numero
    console.log(numero, "X", contador, "=", resultado) ;
    contador = contador + 1;
}

