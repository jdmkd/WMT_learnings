class Car {
    constructor(car_name, car_year) {
        this.car_name = car_name;
        this.car_year = car_year;
    }

    carName(){
        return this.car_name;
    }

    carYear(){
        return this.car_year;
    }
}

const obj1 = new Car("BMW",2020);

console.log(obj1.carName());
console.log(obj1.carYear());