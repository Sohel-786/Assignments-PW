function min_max(arr){
    let obj = {max:Math.max(...arr), min:Math.min(...arr)};
    return obj;
}

console.log(min_max([5,2,7,1,9]));