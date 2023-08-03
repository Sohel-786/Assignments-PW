class Student{
    constructor(n){
        this.name = n;
    }
}

let student = new Student('Sohel');
student.__proto__.printDetails = function(){
    console.log(`Hello, my name is ${this.name}`);
}

student.printDetails();