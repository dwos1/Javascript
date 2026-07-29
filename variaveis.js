
let media = 0;
const prompt = require('prompt-sync')();

const nome = (prompt("Digite o nome do aluno: "));
const nota1 = Number(prompt("Digite a nota 1: "));
const nota2 = Number(prompt("Digite nota 2: "));

media = (nota1+nota2)/2;

console.log("O aluno: ", nome);
console.log("A média é: ", media);

if(media>=7){
    console.log("O aluno foi aprovado");
}else if(media>=5){
    console.log("O aluno ficou de recuperação");
}else{console.log("O aluno foi reprovado");}