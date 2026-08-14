function getBancodeDados(bancodeDados){
    if(bancodeDados<=9){
        return true;
    }else{
        return false;
    }
}

function mostrarBancodeDados(bancodeDados){
    console.log(getBancodeDados(bancodeDados));
}

mostrarBancodeDados(9);