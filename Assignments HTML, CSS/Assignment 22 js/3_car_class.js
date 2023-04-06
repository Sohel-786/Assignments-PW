class Car {
    company = 'Skoda'
    model = 'Rapid'
    year = 2022

    getDescription(){
        return `This is a ${this.year} ${this.company} ${this.model}`;
    }
}

let myCar = new Car();
console.log(myCar.getDescription());