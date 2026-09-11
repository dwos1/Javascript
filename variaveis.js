function validarNota(nota1,nota2){
    if(nota1>=1 && nota1<=10 && nota2>=1 && nota2<=10){
        return true;
    }else{
        return false;
    }
}

function calculoNota(nota1,nota2){
    return (nota1 + nota2) / 2;
}

function mediaNota(nota1,nota2){
    if(validarNota(nota1,nota2)){
        console.log(calculoNota(nota1,nota2));
    }else{
        console.log("erro")
    }
}

mediaNota(9,9);