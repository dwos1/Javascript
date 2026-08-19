function verMultiplicacao(numero){
    let mutiplicacao = 1;
    for(let contador = 1; contador<=numero; contador++){
        mutiplicacao = contador * mutiplicacao;

    }
    console.log(mutiplicacao)
}

verMultiplicacao(8);