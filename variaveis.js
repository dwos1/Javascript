function regressivaPares(numero){
    let par = 0;
    for(let contador = numero; contador>=1; contador = contador - 2){
        par = contador + par;
        
    }
    console.log(par)
}

regressivaPares(10)