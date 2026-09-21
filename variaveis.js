<<<<<<< HEAD
function validarNota(nota1,nota2){
    if(nota1<=10 && nota1>=0 && nota2<=10 && nota2>=0){
        return true;
    }else{
        return false
    }
}

function contaNota(nota1,nota2){
    return (nota1 + nota2) / 2
}

function totalNota(nota1,nota2){
    if(validarNota(nota1,nota2)){
        console.log(contaNota(nota1,nota2))
    }else{
        console.log("erro")
    }
}

totalNota(9,9)
