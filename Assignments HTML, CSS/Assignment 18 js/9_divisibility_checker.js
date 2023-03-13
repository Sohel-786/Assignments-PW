function divisibility_checker(array){
    for(let i = 0; i<array.length; i++){

        if(array[i]%3==0 && array[i]%2==1){
            console.log(array[i]);
        }
        else{
            continue;
        }
    }
}

let arr = [9,15,12,21,24,27];

divisibility_checker(arr);