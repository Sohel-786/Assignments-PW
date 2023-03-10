// the bug is that the quantity is being recorded half of the correct quntity

let array_of_numbers = [6,8,12,9,5];

function bug_corrector(arr){
    let correct_arr = [];
    arr.forEach(el => {
        correct_arr.push(el * 2); // doubles each item of the array & pushing it to the correct array
    })
    return correct_arr;
}

let correct_cart = bug_corrector(array_of_numbers);

console.log(correct_cart);