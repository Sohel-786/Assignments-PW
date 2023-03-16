function url_validator(input){

    let regex = /^(http|https):\/\/(\w*|\d*)\.\w*/gi;
    let result = regex.test(input);

    if(result == true){
        console.log("Input Matched condition, valid URL");
    }
    else{
        console.log("doesn't matched the condition, Invalid URL");
    }
}

url_validator('https://lab.pwskills.com/');

url_validator('Http://lab.pwskills.com/');

url_validator('htlps://lab.pwskills.com/');
