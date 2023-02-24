function even(num) {
    for(let i = 1; i<=num; i++){
        if(i%2==0){
            console.log(`${i} is a Even number`);
        }
    }
}

even(7);

/* Output :
    2 is a Even number
    4 is a Even number
    6 is a Even number
*/