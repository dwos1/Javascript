<<<<<<< HEAD
<<<<<<< HEAD
let name = ["Paulo", "Cassio", "Lucas"]

console.log(name)
=======
function contaBancaria(dinheiro){
    if(dinheiro>=0){
        return true;
=======
function validarAcao(acao){
        if(acao>=5){
            return true;
        }else{
            return false;
        }
}


function contagemAcao(acao){
    return acao;
}

function mostrarAcao(acao){
    if(validarAcao(acao)){
        console.log(contagemAcao(acao));
>>>>>>> cafdf79 (sabado)
    }else{
        console.log("erro")
    }
}

<<<<<<< HEAD
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
=======
mostrarAcao(30);
>>>>>>> cafdf79 (sabado)
