// 1. String 

let str = "I am a student of PW Skills";  //Declaring a variable and assigning value
console.log(typeof(str));    // printing the variable

// 2. Number
        // 1. Integer
            let number_int = 23;
            console.log(typeof(number_int)); 
        
        // 2. Floating value
            let number_float  = 23.1;
            console.log(typeof(number_float));

        // 3. Infinity
            let number_infinity = Number.POSITIVE_INFINITY;
            console.log(typeof(number_infinity));

        // 4. Not a Number
            let number_NaN = NaN;
            console.log(typeof number_NaN);

// 3. BigInt 

let number_bigInt = 4026n;
console.log(typeof(number_bigInt));
           
// 4. Boolean

let boolean_value = true;
console.log(typeof boolean_value);

// 5. Undefined

let undefined_value = undefined;
console.log(typeof undefined_value);

// 6. Null 

let null_value = null;
console.log(typeof null_value);

// 7. Symbol 

let symbol_value = Symbol("Full Stack Dev");
console.log(typeof symbol_value);

// 8. Objects
        // 1. Array
            let arr = [1, "2", true, 28.56, undefined];
            console.log(typeof arr);

        // 2. Object
            let obj = {
                            name : "FSWD",
                            mentors : ["Anurag Tiwari", "Hitesh Choudhary", "Sanket Singh"]
                      }
            console.log(typeof obj);
