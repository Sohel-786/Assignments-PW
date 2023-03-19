function random(arr){
    let first = arr[0];
    let second = arr[1];
    let third = arr[arr.length -1];
    return new Array(first,second,third);
}

console.log(random([1,2,3,4,5]));