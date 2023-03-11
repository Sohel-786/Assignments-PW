function bill_splitter(number_of_people,...cost_of_dishes){
    let total = 0;
    cost_of_dishes.forEach(el =>{
        total += el;
    })
    let Each_Person_Should_pay = total / number_of_people;

    let obj = {
        Total_Bill : total,
        Bill_tobe_paid_by_eachPerson : Each_Person_Should_pay 
    }

    return obj;
}

let result = bill_splitter(4,250,350,425,210,680);
console.log(result);