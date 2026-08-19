function verificarSoma(numero){
    let soma = 0;
    for(let contador = 1; contador<=numero; contador++){
        soma = contador + soma;
        console.log(soma)
    }
    
}

verificarSoma(8)