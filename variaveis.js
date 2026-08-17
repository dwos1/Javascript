function contarPares(numero){
    let par = 0;
    for(let contador = 2; contador<=numero; contador = contador + 2){
        par = contador + par;
        
    }
    console.log(par)
}

contarPares(10);