function swap(...values){
    
    let x = values[1];let y = values[0];

    // values.reverse()     // this will give the result but!
    // values = []; values.push(x,y);    // this will also give the result

    return Array.from([x,y].join(",").split(",").map(Number));
}

console.log(swap(5,10));