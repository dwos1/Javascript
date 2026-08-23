function nota(nota1, nota2){
    if(nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2 <= 10){
        return true;
    }else{
        return false;
    }
}

function calcularMedia(nota1, nota2){
    return (nota1 + nota2) / 2;
    
}

function validarNota(nota1, nota2){
   

    if(nota(nota1, nota2)){
        console.log(calcularMedia(nota1, nota2));
    }else{
        console.log("erro");
    }
}

validarNota(10,10);



