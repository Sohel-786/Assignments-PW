function filterByCategory(products){
    return (category)=>{
        let new_arr = products.filter((el)=>{
            if(el.category == category){
                return el;
            }
        })

        return new_arr;
    }
}


let Products = [
    { name : 'Shirt', category : 'Clothing'},
    { name : 'Pants', category : 'Clothing'},
    { name : 'Hat', category : 'Accessories'},
    { name : 'Shirt', category : 'Accessories'}
];

let clothingProducts = filterByCategory(Products)('Clothing');

console.log(clothingProducts);