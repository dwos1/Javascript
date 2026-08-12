function idade(numero1){
    return idade;

}
function mostraridade(numero1){
    if(Number.isNaN(numero1) || !Number.isInteger(numero1) || numero1>120 || numero1<0){
        console.log("ERRO")
    }else if(numero1>=18){
        console.log("É de maior")}else{
            console.log("É menor")
        }
    
}

mostraridade(18);