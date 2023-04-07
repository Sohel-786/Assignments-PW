try{
    console.log(three);         // undefined - concept of hoisting
    console.log(two);       // initialization error -- TDZ
    console.log(one);
    let one = 1;
    const two = 2;
    var three = 3;
    console.log(one, two, three);//this line will not be executed because of initialization error   on line no 3
}catch(err){
    console.log(err);
}finally{

    let one = 1;
    const two = 2;
    var three = 3;
    console.log(one, two, three);

}