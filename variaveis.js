const prompt = require('prompt-sync')();

let opcao = Number(prompt("Digite a opção: "));

while(opcao !=3){
    switch(opcao){
        case 1:{
            console.log("oi");
        }
        break;
        case 2:{
            console.log("Tudo bem?");
        }
        break;
      default: {
        console.log("Numero errado")
      }
}
    
        opcao = Number(prompt("Digite a opção: "));
} 
console.log("fim")