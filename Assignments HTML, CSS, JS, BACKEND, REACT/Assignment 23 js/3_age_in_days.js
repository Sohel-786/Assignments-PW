let Person = {
    firstname : 'Sohel',
    lastname : 'Shaikh',
    age : 23
};

function ageInDays(obj, fn){
    let fullName = `${obj.firstname} ${obj.lastname}`;
    let ageInDays = obj.age * 365;
    fn(fullName,ageInDays);
}

function logResult(f,a){
    console.log(`The person's full name is ${f} and their age in days is ${a}.`)
};

ageInDays(Person, logResult);