function somar(numero){
    let soma = 0;
    for(let contador = 1; contador<=numero; contador++){
        soma = soma + contador;
        console.log(soma)
    }
}

somar(10);