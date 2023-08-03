function new_arr(call_back_fn, arr){
    return call_back_fn(arr);
}

function call_back_func(arr){
    arr = arr.map(el => {
            return el * 2;
     });
     return arr;
}


result = new_arr(call_back_func, [1,2,3,4,5])

console.log(result);