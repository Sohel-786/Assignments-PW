function compare(n1, n2){
    console.log(`\n Equal:\n num1 ${n1} == ${n2} is`, (n1 == n2));  
    console.log(`\n Not Equal:\n num1 ${n1} != ${n2} is`, (n1 != n2));  
    console.log(`\n Strictly Equal:\n num1 ${n1} === ${n2} is`, (n1 === n2)); 
    console.log(`\n Strictly Not Equal:\n num1 ${n1} !== ${n2} is`, (n1 !== n2));     
    console.log(`\n Greater Than:\n num1 ${n1} > ${n2} is`, (n1 > n2));   
    console.log(`\n Greater Than or Equal To:\n num1 ${n1} >= ${n2} is`, (n1 >= n2));  
    console.log(`\n Less Than:\n num1 ${n1} < ${n2} is`, (n1 < n2));   
    console.log(`\n Less Than or Equal To:\n num1 ${n1} <= ${n2} is`, (n1 <= n2));  
    console.log("\n All Results Got Printed\n\n");
}


function only_for_lessThen_and_greterThanorEqualsTo(n1,n2){
    console.log(`\n Less Than:\n num1 ${n1} < ${n2} is`, (n1 < n2));   
    console.log(`\n Greater Than or Equal To:\n num1 ${n1} >= ${n2} is`, (n1 >= n2));  
}

compare(10, 10);
compare(11, 10);
only_for_lessThen_and_greterThanorEqualsTo(10,11);


/*
    Output : 

 Equal:
 num1 10 == 10 is true

 Not Equal:
 num1 10 != 10 is false

 Strictly Equal:
 num1 10 === 10 is true

 Strictly Not Equal:
 num1 10 !== 10 is false

 Greater Than:
 num1 10 > 10 is false

 Greater Than or Equal To:
 num1 10 >= 10 is true

 Less Than:
 num1 10 < 10 is false

 Less Than or Equal To:
 num1 10 <= 10 is true

 All Results Got Printed



 Equal:
 num1 11 == 10 is false

 Not Equal:
 num1 11 != 10 is true

 Strictly Equal:
 num1 11 === 10 is false

 Strictly Not Equal:
 num1 11 !== 10 is true

 Greater Than:
 num1 11 > 10 is true

 Greater Than or Equal To:
 num1 11 >= 10 is true

 Less Than:
 num1 11 < 10 is false

 Less Than or Equal To:
 num1 11 <= 10 is false

 All Results Got Printed



 Less Than:
 num1 10 < 11 is true

 Greater Than or Equal To:
 num1 10 >= 11 is false
*/