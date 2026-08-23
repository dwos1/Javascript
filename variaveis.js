function somarMultiplosDeTres(numero){
    let contador = 3;
    let multiploTres = 0;
    while(contador<=numero){
       multiploTres = multiploTres + contador; 
        contador = contador + 3;
        
        
    }
    console.log(multiploTres)
}

somarMultiplosDeTres(10)