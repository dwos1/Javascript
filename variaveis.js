const prompt = require("prompt-sync")();

let contador = 1;
let total = 0;

while(contador<=5){
   let idade = Number(prompt(`Digite o número ${contador} : `));

   while(Number.isNaN(idade) || !Number.isInteger(idade) ||  idade < 0 || idade > 120){
      console.log("Idade inválida")
      idade = Number(prompt(`Digite o número ${contador} : `));
   }
   contador = 1 + contador;
   total = idade + total;
}
console.log("O total de idades é: ", total)