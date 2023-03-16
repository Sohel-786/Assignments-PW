
let store_USD = [
    {item1:"iphone 12", price: 911, currency:"USD"},
    {item1:"Samsung S22 Ultra", price: 1457, currency:"USD"},
    {item1:"Smart TV", price: 607, currency:"USD"},
    {item1:"Nick Shoes", price: 242, currency:"USD"},
    {item1:"Dell Laptop", price: 728, currency:"USD"}
]


let store_INR = store_USD.map(el =>{
    el.price = el.price * 80;           
    el.currency = "INR";
    return el;
})

console.log(store_INR);