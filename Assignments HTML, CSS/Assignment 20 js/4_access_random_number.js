function random(arr){
    let [first,second,...rest,third] = arr;

    return new Array(first,second,third);
}

console.log(random([1,2,3,4,5]));