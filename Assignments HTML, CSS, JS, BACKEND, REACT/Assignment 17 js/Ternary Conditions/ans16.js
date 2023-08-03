function large_n_finder(n1, n2){
    (n1>n2) ? console.log(`Num1: ${n1} is Greater than Num2: ${n2}`)
    : (n2>n1) ? console.log(`Num2: ${n2} is Greater than Num1: ${n1}`)
    : console.log("Invalid Input");
}

large_n_finder(10, 9);
large_n_finder(11, 18);
large_n_finder(5, "6");
large_n_finder(6);


/*  Output - 
    Num1: 10 is Greater than Num2: 9
    Num2: 18 is Greater than Num1: 11
    Num2: 6 is Greater than Num1: 5
    Invalid Input */