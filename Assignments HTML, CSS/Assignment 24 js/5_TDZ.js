try{
    console.log(variable_one);  // can't access before initialization - TDZ
    // this is temporal dead zone for the let and const variables
    // this is temporal dead zone for the let and const variables
    // this is temporal dead zone for the let and const variables
    let variable_one = 10;
}catch(err){
    console.log(err);
}