const prompt = require("prompt-sync")();
let media = 0;
let total = 0;

for(let contador = 1; contador<=5; contador++){
       let nota = Number(prompt(`Digite uma nota ${contador}: `));
       while(Number.isNaN(nota) || nota<0 || nota>10 ){
        console.log("Número inválido")
        nota = Number(prompt(`Digite novamente ${contador}: `));
       }
       
       total = nota + total;
}
        media = total/5;
        console.log("A média é: ", media)

        if(media>=7){
            console.log("Aluno aprovado");
        }else if(media>=5){
            console.log("Aluno de recuperação")
        }else{console.log("Aluno reprovou")}