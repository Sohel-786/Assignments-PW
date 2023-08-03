function numberChecker(arr){
    return function(num){
        return arr.includes(num);
    }
}

let arr = [1,2,3,4,5];
let checkNum = numberChecker(arr);

 console.log(checkNum(2));
 console.log(checkNum(6));