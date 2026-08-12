function verificarPar(numero){
    if(numero % 2 ===0){
        return "Número é par";
    }else{
        return "Número não é par";
    }
}

function mostrarPar(numero){
    console.log(verificarPar(numero));
}

mostrarPar(5);