function vowel_counter(str){
    let arr = str.trim().split("");
    let count = 0;
    arr.forEach(el => {
        (el == "a" || el == "e" || el == "i" ||el == "o" || el == "u" ) ? count++ : null;
    });
    console.log(`There are ${count} vowels in the name`);
}

vowel_counter("Sohel Shaikh");
