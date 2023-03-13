function rental_cost(days, car_type){
    let total_cost = 0;
    (car_type == "Economy") ? total_cost = 4000 * days : (car_type == "Midsize") ? total_cost = 10000 * days : (car_type == "Luxury") ? total_cost = 20000 * days : total_cost =  null;

    if(total_cost == null){
        return "Invalid Input";
    }
    else {
        return total_cost;
    }
}

let result = rental_cost(2,"Luxury");

console.log(result)