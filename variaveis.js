const prompt = require("prompt-sync")();

let nota = Number(prompt("Digite nota: "))

while(Number.isNaN(nota) ||
 nota<0 || nota>10){
    console.log("Nota Inválida")
    nota = Number(prompt("Digite novamente nota: "))
 }
 console.log("A nota é: ", nota)