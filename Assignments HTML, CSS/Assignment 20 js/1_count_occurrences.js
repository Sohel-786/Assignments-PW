function count(input){
    let obj = {};
    (Array.from(input)).forEach(el => {
        (obj[el] == undefined) ? obj[el] = 1 : obj[el]++;
    });
    
    //return obj;       here too the result going to be right

    let arr = [];
    for(let key in obj){
        let temp = [];
        temp.push(key,obj[key]);
        arr.push(temp);
    }
    obj = new Map(arr);  
    return obj;  
}

console.log(count('Sohel shaikh'))