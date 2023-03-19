function swap(...values){
    
    let [y,x] = values;

    // values.reverse()     // this will give the result but!
    // values = []; values.push(x,y);    // this will also give the result

    // return Array.from([x,y].join(",").split(",").map(Number));
    return [x,y];
}

console.log(swap(5,10));