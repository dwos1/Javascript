function investir(compra){
    if(compra>=10 || compra<=0){
            return false;
    }else{
        return true;
    }
}

function investirBolsa(compra){
    console.log(investir(compra));
}

investirBolsa(8);