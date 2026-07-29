const prompt = require('prompt-sync')();

const nome  = prompt("Digite seu nome: ");
const idade = Number(prompt("Digite sua idade: "))
const salario = Number(prompt("Digite seu salário: "));

if(nome === ""){
    console.log("Nome inválido");
}else if(idade<0 || idade>120){
    console.log("A idade é inválida");
}else if(salario<0){
    console.log("Salário Inválido");
}else{console.log("\nO nome é: ", nome);
    console.log("\nA idade é: ", idade);
    console.log("\nO salário é: ", salario);   
}