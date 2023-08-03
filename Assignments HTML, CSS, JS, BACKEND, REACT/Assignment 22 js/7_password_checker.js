class User{
    constructor(name, pass){
        this.username = name,
        this.password = pass
    }

    getPassword(){
        return this.password.replaceAll(/./g, '*');
    }

    setPassword(new_pass){
        try{
                let rg1 = /([A-Z])/g;
                let rg2 = /\d/g;

                if((rg1.test(new_pass)) && (rg2.test(new_pass)) && new_pass.length >=8){
                    this.password = new_pass;
                }
                else{
                    throw Error('Password must be at least 8 characters long and contain at least one number and one uppercase letter.')
        }
    }catch(err){
        console.log(err);
     }
    }
}

let user =  new User('sohel', 'Password123');
console.log(user.getPassword());


user.setPassword('myPassword');

user.setPassword('MyPassword');

user.setPassword('MyPassword123');

