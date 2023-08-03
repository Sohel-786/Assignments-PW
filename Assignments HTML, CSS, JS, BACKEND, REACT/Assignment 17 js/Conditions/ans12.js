function divisible_check(n){
    
    if(n%3==0 && n%5==0){
        console.log("FizzBuzz");
    }
    else if(n%3==0){
        console.log("Fizz");
    }
    else if(n%5==0){
        console.log("Buzz");
    }
    else{
        console.log("Invalid Input");
    }
}

divisible_check(5);
divisible_check(6);
divisible_check(15);
divisible_check(7);

/*
        Buzz
        Fizz
        FizzBuzz
        Invalid Input
*/