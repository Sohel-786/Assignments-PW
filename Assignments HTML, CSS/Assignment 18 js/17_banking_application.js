let User_details = {
    name: "Sohel",
    balance: 10000,
    deposit : function(Case){
        this.balance = this.balance + Case;
    },
    withdrawal : function(Case){
        this.balance = this.balance - Case;
    }
}

User_details.deposit(2000);  // 12000 // Invoking Obj Method
console.log(User_details);
User_details.withdrawal(5000);  //7000 // Invoking Obj Method
console.log(User_details);