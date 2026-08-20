function contarPares(numero){
    let par = 0;
    for(let contador = 1; contador<=numero; contador = contador + 2 ){
        par = par + 1;

    }
    console.log(par)
}

contarPares(12);