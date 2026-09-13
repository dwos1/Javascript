<<<<<<< HEAD
let name = ["Paulo", "Cassio", "Lucas"]

console.log(name)
=======
function contaBancaria(dinheiro){
    if(dinheiro>=0){
        return true;
    }else{
        return false
    }
}

function validarBancario(dinheiro){
    return dinheiro;
}

function quantidadeBanco(dinheiro){
    if(contaBancaria(dinheiro)){
        console.log(validarBancario(dinheiro))
    }else{
        console.log("Erro")
    }
}

quantidadeBanco(-2000);
>>>>>>> 665a3be (sabado)
