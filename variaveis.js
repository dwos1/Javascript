function validarMedia(nota1, nota2){
    const media = (nota1+nota2) / 2
    if(Number.isNaN(nota1) || Number.isNaN(nota2) || nota1<0 || nota2<0 || nota2>10 || nota1>10){
        return "erro";
    }else if(media<5){
        return "reprovado";
    }else if(media<7){
        return "recuperação";
    }else if(media<9){
        return "aprovado";
    }else{
        return "excelente";
    }
}

function mostrarMedia(nota1, nota2){
    console.log(validarMedia(nota1,nota2));
}
mostrarMedia(8,5)
