let person = {
    name : "Sohel",
    age : 23,
    address : {
        street : "BB, Block B, Industrial Area.",
        city : "Sector 62, Noida",
        state : "Gujrat"
    }
};

function meta(obj){
    // let Obj = {
    //     Name : obj.name,
    //     Street : obj.address.street
    // }
    // return Obj;

    let {name,street} = {name :obj.name, street: obj.address.street}
    let Obj = {name,street};
    return Obj;
}

console.log(meta(person));