const prompt = require('prompt-sync')();

const nome = prompt("Digite o nome: ");
const idade = Number(prompt("Digite a idade: "));
const salario = Number(prompt("Digite o salário: "));


if(nome.trim() === ""){
    console.log("nome inválido")
}else if(Number.isNaN(idade)){
    console.log("Idade inválido")
}else if(idade<0 || idade>120){
    console.log("Idade inválido")
}else if(Number.isNaN(salario) || salario < 0){
    console.log("Salário inválido")
}else{console.log("O nome é: ", nome)
        console.log("A idade é: ", idade)
        console.log("O salário é: ", salario)
}