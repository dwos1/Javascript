function verificarTemperatura(temperatura){
    if(temperatura<15){
        return "frio";
    }else if(temperatura<=29){
        return "agradavel"
    }else{ return "Quente";}
}

function mostrarTemperatura(temperatura){
    console.log(verificarTemperatura(temperatura));
}

mostrarTemperatura(30);