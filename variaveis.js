function notas(numero1, numero2){
    return (numero1 + numero2) / 2; 
}
function mostrarNota(numero1,numero2){
    if(numero1>10 || numero1<0 || numero2>10 || numero2<0){
        console.log("inválido")
    }else{
    console.log(notas(numero1,numero2));
    }
}

mostrarNota(8,10);