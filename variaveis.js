function verificarIdade(idade){
    if( Number.isNaN(idade) || idade<0 || idade>120){
        return "erro";} 
    else if(idade>=12 && idade<=17){
        return "adolescente";
    }else if(idade>=18 && idade<=59 ){
        return "adulto";
    }else if(idade>=60){
        return "idoso";
    }else{
        return "criança";
    }
}

function mostrarIdade(idade){
    console.log(verificarIdade(idade));
}

mostrarIdade(120);