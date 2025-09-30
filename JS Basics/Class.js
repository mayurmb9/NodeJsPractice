/**
 * Class is a program code template for creating objects.
 * Those objects will have some state (variables) and some behaviour inside it.
 * 
 * Class is a blueprint for creating objects
 */

class MyClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Car {
    start() {
        console.log("Car started");
    }
    stop() {
        console.log("Car stopped");
    }

    setBrand(brand) {
        this.brand = brand; //this.brand is class variable and brand is local variable
    }

}

const car = new Car();
car.start();
car.stop();

console.log(typeof Car);
console.log(typeof car);


car.setBrand("Fortuner");
console.log(car.brand);

