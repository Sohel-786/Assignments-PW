function swap(...values){
    return values.reverse();
}

let x = 5;
let y = 10;

[x,y] = swap(x,y);

console.log(x,y);