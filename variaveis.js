function alunoNota(numero1,numero2){
    if(numero1>=0 && numero1<=10 && numero2>=0 && numero2<=10 ){
        return true;
    }else{
        return false;
    }
}

function mediaNota(numero1,numero2){
    return (numero1 + numero2) / 2;
}

function notaTotal(numero1, numero2){
    if(alunoNota(numero1,numero2)){
        console.log(mediaNota(numero1,numero2));
    }else{
        console.log("erro");
    }
}

notaTotal(8,11);