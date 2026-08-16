function porta(senha){
    if(senha == 1234){
        return true;
    }else{
        return false;
    }
}

function mostrarPorta(senha){
    if(porta = 1234){
        console.log("Pode abrir");
    }else{
        console.log("Não pode abrir");
    }
}

mostrarPorta(1234);