function user_name(name){
    let arr =  name.split("");
    let str = "";
    arr.forEach((el,i) => {
        if(i == 0){
            (el == el.toLowerCase()) ? str += el.toUpperCase() : str += el;
        }
        else{
            (el == el.toUpperCase()) ? str += el.toLowerCase() : str += el;
        }
        
    });
    return str;
}

let result = user_name("sOHEl");

console.log(result);
