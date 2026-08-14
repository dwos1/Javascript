function porta(senha){
    if(senha === 1234){
        return true;
    }else{
       return false;
    }
}

function mostrarPorta(senha){
    if (porta(senha)){
        return "porta aberta";
    }else{
        return "porta fechada";
    }
}

console.log(mostrarPorta(1234))

