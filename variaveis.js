const prompt = require('prompt-sync')();
let numero = Number(prompt("Digite a primeira numero: "));
     
function tabuada(numero){
  for(let contador = 1; contador<=10; contador++){
     const resultado = numero * contador;
      console.log(numero, "X", contador, "=", resultado);
  }
  
}

tabuada(numero);