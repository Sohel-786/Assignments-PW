function calculator(num1,num2, operator){
    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        
        case "-":
            result = num1 - num2;
            break;
        
        case "*":
            result = num1 * num2;
            break;

        case "/":
            result = num1 / num2;
            break;
        
        default:
            console.log("Invalid operator");
            break;
    }

    return result;
}

    let result = calculator(1,2,"*"); // storing result in the variable result