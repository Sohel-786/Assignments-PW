let customer_cart = [
    {Item1:"iphone 14 pro", unit_price: 75000, quantity : 2},
    {Item2:"Chocolate Packet", unit_price:300, quantity:3},
    {Item3:"Samsung Smart TV", unit_price: 45000, quantity:1},
    {Item4:"Xiaomi NoteBook Ultra", unit_price:60000, quantity:1}
];


let total_cost = (arr) => {
    let Total_cost = 0;
    arr.forEach(el => {
        Total_cost += el.unit_price * el.quantity;
    });
    return Total_cost;
}

console.log(`Total Cost of cart is ${total_cost(customer_cart)}`);