function multiplicarAte(numero){
    let multiplicacao = 1;
    for(let contador = 1; contador<= numero; contador = contador + 1){
    multiplicacao = multiplicacao * contador;
       
}
     console.log(multiplicacao);
}

multiplicarAte(4);