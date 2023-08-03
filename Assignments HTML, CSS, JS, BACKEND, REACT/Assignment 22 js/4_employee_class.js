class Employee {
    name = 'Sohel'
    position = 'Full Stack Developer'
    salary = 40000

    getSalary(){
        return this.salary;
    }
}

let employee1 = new Employee();
console.log(employee1.getSalary());