const prompt = require('prompt-sync')();
const dinheiroDisponivel = 200;
let troco = 0; 
const nomeProduto = prompt("Qual é nome do produto: ");
const precoProduto = Number (prompt("Qual é preço do produto: R$ "));
const quantidade = Number(prompt("Quantidade: "));
const total = precoProduto*quantidade;
if(nomeProduto.trim ()=== ""){
    console.log("\nNome Inválido");
}else if(Number.isNaN(precoProduto)){
    console.log("Número Produto Inválido");
}else if(Number.isNaN(quantidade)){
    console.log("Quantidade Indisponível");
}
else if(precoProduto>dinheiroDisponivel){
    console.log("Dinheiro Indisponóvel");
}else if(total>dinheiroDisponivel){
    console.log("Dinheiro Indisponivel");
}else{console.log("\nO nome do Produto: ", nomeProduto);
    console.log("\nO nome do Preço do Produto: ", precoProduto);
    troco =  dinheiroDisponivel - (total) 
    console.log("\nO troco vai ser: ", troco);
    
}