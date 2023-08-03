function pattern_maker(input){

    for(let i = input; i>=1 ; i--){
        let str = "";
        for(let j = i; j >= 1 ; j--){
            str += "*";
        }
        console.log(str);
    }

}

pattern_maker(6);

