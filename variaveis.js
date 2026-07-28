const saldo = 300;
const precoProduto = 300;
const contaAtiva = true;
const produtoDisponivel = true;
if(saldo<0 || saldo <=0){
    console.log("Dados Inválidos")
}
else if(saldo<precoProduto){
    console.log("Não tem dinheiro necessário");
}else if(contaAtiva === false){
    console.log("A conta está desativa");
}else if(produtoDisponivel  === false){
    console.log("O produto não está disponível");
}else{console.log("O produto foi comprado");}