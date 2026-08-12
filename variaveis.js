function verificarNota(nota){
    if(Number.isNaN(nota) || nota>10 || nota<0){
        return "erro";
    }else if(nota>=7){
        return "aprovado";
    }else if(nota>=5){
        return "recuperação";
    }else{
        return "repetiu";
    }
}

function mostrarNota(nota){
    console.log(verificarNota(nota))
}

mostrarNota(8);