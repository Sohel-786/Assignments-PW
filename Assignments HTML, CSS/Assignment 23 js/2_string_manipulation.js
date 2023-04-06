function manipulateString(str, fn){
    let new_str = str.toUpperCase();
    fn(new_str);
}

function logString(str){
    console.log(`The manipulated string is: ${str}`);
}

manipulateString('hello, world!', logString);