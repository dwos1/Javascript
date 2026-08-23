multiplicarAte(4)


function contarMultiplicacao(numero){
    let contador = 1;
    let multiplicacao = 0;
    while(contador<=numero){
        multiplicacao = multiplicacao + 1;
        contador = contador + 1;
    }
        console.log(multiplicacao);
    }

    contarMultiplicacao(4);