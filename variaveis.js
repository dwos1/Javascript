function nota(nota1){
    if(nota1>=7){
        return true;
    }else{
        return false;
    }
}
function validarNota(nota1){
    console.log(nota(nota1));
}

validarNota(8);