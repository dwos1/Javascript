function verificarNota(nota1,nota2){
    let media = 0;
    media = (nota1+nota2) / 2;
    if(media<0 || media>10){
        return "erro";
    }else if(media<5){
        return "reprovado";
    }else if(media>=5 && media<7){
        return "recuperação";
    }else if (media>=7 && media<9){
        return "aprovado";
    }else{
        return "excelente";
    }
}

function mostrarNota(nota1,nota2){
    console.log(verificarNota(nota1,nota2));
}

mostrarNota(9.9,8.9);