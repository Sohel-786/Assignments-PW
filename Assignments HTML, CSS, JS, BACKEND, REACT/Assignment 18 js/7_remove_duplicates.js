function duplicate_remover(cart){
    let obj = {};
    for(let i = 0; i<cart.length ; i++){
        if(obj[cart[i]] == undefined){
            obj[cart[i]] = 1;
        }
        else{
            obj[cart[i]]++;
        }
    }
    console.log(obj);
}

let cart = ["one pluse", "iphone 12" , "iphone 12", "ASUS Rog", "iQOO 9" , "one pluse", "Tecno POVA", "iQOO Z6", "iphone 18 Pro", "ASUS Rog"];

duplicate_remover(cart);