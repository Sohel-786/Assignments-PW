let find_the_discount_in_perc = (product,original_price,discounted_price) =>{
    let discount = 100 * (original_price  - discounted_price) / original_price;
    let obj = {
        Product_Name : product,
        Original_Price : original_price,
        Discounted_Price : discounted_price,
        discount: "%" + discount.toFixed(2) // or else Math.round(discount)
    }
    console.log(obj);
};


find_the_discount_in_perc("T-Shirt", 200, 130.75);




