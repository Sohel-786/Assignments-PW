function sum(a,b){
    console.log(sum);   // undefined -- and this is the concept of hoisting, which will work with only var keyword
    var sum = a + b;
}

sum(2,2);