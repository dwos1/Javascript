const prompt = require("prompt-sync")();
let nota1 = Number(prompt("Digite a nota 1: "))
let nota2 = Number(prompt("Digite a nota 2: "))
const media = 0;

function verificarNota(nota1, nota2){

    const media = (nota1 + nota2) / 2;
  if(Number.isNaN(nota1) || Number.isNaN(nota2) || nota1>10 || nota2>10 ||  nota1 < 0 || nota2 < 0){
    return("erro")
  }else if(media>=7){
    return("Aluno passou")
  }else if(media>=5){
    return("Aluno de recuperação")
  }else{
    return("Aluno reprovou")
  }
}


console.log(verificarNota(nota1,nota2));