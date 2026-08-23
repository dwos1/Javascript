function nota(nota1, nota2){
    if(nota1>=0 && nota1<=10 && nota2>=0 && nota2<=10){
        
        return true;
    }else{
        return false;
    }

}

function validarNota(nota1, nota2){
    let calcular = (nota1 + nota2) / 2;
    if(nota(nota1,nota2) ){ 
    
    console.log(calcular)
}else{
    console.log("erro")
}
    console.log(nota(nota1,nota2));
}

validarNota(10,10);

