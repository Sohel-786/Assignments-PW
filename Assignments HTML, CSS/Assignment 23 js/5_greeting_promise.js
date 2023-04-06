function greeting(name){
    return new Promise(res =>{
        res(`Hello ${name}`);
    })
}

let p = greeting('Sohel');
p
.then((res =>{
    console.log(res)
}))