function verificarIdade(idade){
    if(Number.isNaN(idade) || !Number.isInteger(idade) || idade<0 || idade>120){
        return "erro";
    }else if(idade>=18){
        return "maior de idade";
    }else{
        return "menor de idade";
    }
}

function mostrarIdade(idade){
    console.log(verificarIdade(idade));
}

mostrarIdade(129);